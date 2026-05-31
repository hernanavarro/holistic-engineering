export default function LogoIcon({ size = 38 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M30 48 C30 48 14 36 14 24 C14 16 21 10 30 14 C39 10 46 16 46 24 C46 36 30 48 30 48Z"
        fill="#7D5C7C"
        opacity="0.2"
      />
      <path
        d="M30 48 C30 48 14 38 17 26 C19 19 26 18 30 22 C34 18 41 19 43 26 C46 38 30 48 30 48Z"
        fill="#7D5C7C"
        opacity="0.55"
      />
      <path
        d="M30 14 L31.2 18 L35 18 L32 20.5 L33.2 24.5 L30 22 L26.8 24.5 L28 20.5 L25 18 L28.8 18 Z"
        fill="#7D5C7C"
      />
    </svg>
  );
}
