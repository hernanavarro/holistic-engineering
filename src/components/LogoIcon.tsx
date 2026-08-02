import Image from "next/image";

const LOGO_URL =
  "https://odxbwxmixquriirb.public.blob.vercel-storage.com/logo.png";
const ASPECT_RATIO = 1157 / 861;

export default function LogoIcon({ size = 38 }: { size?: number }) {
  return (
    <Image
      src={LOGO_URL}
      alt="Ingeniería Holística"
      width={Math.round(size * ASPECT_RATIO)}
      height={size}
    />
  );
}
