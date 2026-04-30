#!/usr/bin/env node
// Simple background remover using Jimp
// Usage: node scripts/remove-bg.js input.jpg output.png [threshold]

const Jimp = require('jimp')

const [,, input, output, thresholdArg] = process.argv
if (!input || !output) {
  console.log('Usage: node scripts/remove-bg.js input.jpg output.png [threshold]')
  process.exit(1)
}

const threshold = thresholdArg ? Number(thresholdArg) : 80 // color distance threshold

async function main() {
  const image = await Jimp.read(input)
  const { width, height } = image.bitmap
  const sampleSize = Math.max(4, Math.floor(Math.min(width, height) * 0.02))

  const samples = []
  const addSamples = (sx, sy) => {
    for (let x = sx; x < Math.min(sx + sampleSize, width); x++) {
      for (let y = sy; y < Math.min(sy + sampleSize, height); y++) {
        const c = Jimp.intToRGBA(image.getPixelColor(x, y))
        samples.push(c)
      }
    }
  }

  addSamples(0, 0)
  addSamples(width - sampleSize, 0)
  addSamples(0, height - sampleSize)
  addSamples(width - sampleSize, height - sampleSize)

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

  // ensure output is PNG with alpha
  image.scan(0, 0, width, height, function (x, y, idx) {
    const r = this.bitmap.data[idx + 0]
    const g = this.bitmap.data[idx + 1]
    const b = this.bitmap.data[idx + 2]
    const a = this.bitmap.data[idx + 3]

    const d = colorDist(r, g, b)
    if (d <= threshold) {
      this.bitmap.data[idx + 3] = 0
    }
  })

  await image.rgba(true).writeAsync(output)
  console.log('Saved:', output)
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
