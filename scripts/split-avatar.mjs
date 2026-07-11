import sharp from "sharp";

// Split the avatar into two aligned layers so the head can move independently
// of the shoulders. The cut runs through the uniform upper-chest band, and the
// two layers overlap there so the moving edge only ever sits over matching color.
const SRC = "public/illustrations/avatar.png";
const W = 1024, H = 1024;

const HEAD_BOTTOM = 830; // head layer keeps pixels from the top down to here
const BODY_TOP = 740;    // body layer keeps pixels from here down (overlap hides the seam)

async function run() {
  // HEAD: top strip on a full transparent canvas
  const headStrip = await sharp(SRC)
    .resize(W, H, { fit: "fill" })
    .extract({ left: 0, top: 0, width: W, height: HEAD_BOTTOM })
    .toBuffer();
  await sharp({
    create: { width: W, height: H, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
  })
    .composite([{ input: headStrip, top: 0, left: 0 }])
    .png()
    .toFile("public/illustrations/avatar-head.png");

  // BODY: bottom strip on a full transparent canvas
  const bodyStrip = await sharp(SRC)
    .resize(W, H, { fit: "fill" })
    .extract({ left: 0, top: BODY_TOP, width: W, height: H - BODY_TOP })
    .toBuffer();
  await sharp({
    create: { width: W, height: H, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
  })
    .composite([{ input: bodyStrip, top: BODY_TOP, left: 0 }])
    .png()
    .toFile("public/illustrations/avatar-body.png");

  console.log("Wrote avatar-head.png and avatar-body.png");
}

run();
