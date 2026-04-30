#!/usr/bin/env node
// CommonJS version for environments with "type":"module" in package.json
const jimpModule = require('jimp')
const Jimp = jimpModule.Jimp || jimpModule.default || jimpModule

const [,, input, output, thresholdArg] = process.argv
if (!input || !output) {
  console.log('Usage: node scripts/remove-bg.cjs input.jpg output.png [threshold]')
  process.exit(1)
}

const threshold = thresholdArg ? Number(thresholdArg) : 80 // color distance threshold

async function main() {
  console.log('Reading:', input)
  const image = await Jimp.read(input)
  console.log('Image read OK:', image.bitmap.width, 'x', image.bitmap.height)
  const { width, height } = image.bitmap
  const sampleSize = Math.max(4, Math.floor(Math.min(width, height) * 0.02))

  const samples = []
  const addSamples = (sx, sy) => {
      for (let x = sx; x < Math.min(sx + sampleSize, width); x++) {
        for (let y = sy; y < Math.min(sy + sampleSize, height); y++) {
          const cInt = image.getPixelColor(x, y)
          const c = jimpModule.intToRGBA ? jimpModule.intToRGBA(cInt) : Jimp.intToRGBA(cInt)
          samples.push(c)
        }
      }
  }

  addSamples(0, 0)
  addSamples(width - sampleSize, 0)
  addSamples(0, height - sampleSize)
  addSamples(width - sampleSize, height - sampleSize)

  console.log('Collected samples:', samples.length, 'avg color processing')

  // average color
  const avg = samples.reduce((acc, c) => ({ r: acc.r + c.r, g: acc.g + c.g, b: acc.b + c.b }), { r: 0, g: 0, b: 0 })
  avg.r = Math.round(avg.r / samples.length)
  avg.g = Math.round(avg.g / samples.length)
  avg.b = Math.round(avg.b / samples.length)

  function colorDist(r, g, b) {
    const dr = r - avg.r
    const dg = g - avg.g
    const db = b - avg.b
    return Math.sqrt(dr * dr + dg * dg + db * db)
  }

  image.scan(0, 0, width, height, function (x, y, idx) {
    const r = this.bitmap.data[idx + 0]
    const g = this.bitmap.data[idx + 1]
    const b = this.bitmap.data[idx + 2]

    const d = colorDist(r, g, b)
    if (d <= threshold) {
      this.bitmap.data[idx + 3] = 0
    }
  })

  const fs = require('fs')
  const mime = (jimpModule && jimpModule.JimpMime && jimpModule.JimpMime.png) || 'image/png'
  const buffer = await new Promise((resolve, reject) => {
    image.getBuffer(mime, (err, buf) => {
      if (err) return reject(err)
      resolve(buf)
    })
  })
  console.log('Got buffer, writing file to', output)
  fs.writeFileSync(output, buffer)
  console.log('Saved:', output)
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
