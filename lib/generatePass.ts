export async function generatePass({
  name,
  x,
  wallet,
  passNumber,
}: {
  name: string;
  x: string;
  wallet: string;
  passNumber: string;
}) {
  const canvas = document.createElement("canvas");

  canvas.width = 1080;
  canvas.height = 1350;

  const ctx = canvas.getContext("2d");

  if (!ctx) return "";

  const image = new Image();

  image.src = "/pass-template.png";

  await new Promise<void>((resolve, reject) => {
    image.onload = () => resolve();
    image.onerror = () => reject();
  });

  ctx.drawImage(image, 0, 0, 1080, 1350);

  ctx.fillStyle = "#FFFFFF";
  ctx.textAlign = "left";

  // NAME
ctx.fillStyle = "#FFFFFF";
ctx.font = "bold 34px Arial";
ctx.fillText(name, 515, 710);

// X
ctx.font = "28px Arial";
ctx.fillText(x, 515, 805);

const shortWallet =
  wallet.length > 18
    ? `${wallet.slice(0, 10)}...${wallet.slice(-6)}`
    : wallet;

// WALLET
ctx.font = "26px Arial";
ctx.fillText(shortWallet, 515, 903);

// PASS NUMBER
ctx.font = "bold 30px Arial";
ctx.fillText(passNumber, 515, 1005);

// STATUS
ctx.fillStyle = "#B7FF2A";
ctx.font = "bold 28px Arial";
ctx.fillText("VERIFIED", 515, 1110);

  return canvas.toDataURL("image/png");
}