import sharp from "sharp"

const SRC = "public/avatar-raw.png"
const OUT = "public/avatar.png"

const img = sharp(SRC).ensureAlpha()
const { width, height } = await img.metadata()
const { data, info } = await img.raw().toBuffer({ resolveWithObject: true })

const ch = info.channels // 4
// Remove greenish pixels: green clearly dominant over red and blue
for (let i = 0; i < data.length; i += ch) {
  const r = data[i]
  const g = data[i + 1]
  const b = data[i + 2]
  const isGreen = g > 90 && g > r * 1.35 && g > b * 1.35
  if (isGreen) {
    data[i + 3] = 0 // fully transparent
  }
}

await sharp(data, { raw: { width: info.width, height: info.height, channels: ch } })
  .png()
  .toFile(OUT)

console.log(`[v0] Keyed avatar written to ${OUT} (${width}x${height})`)
