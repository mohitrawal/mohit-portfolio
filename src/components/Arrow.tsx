export function Arrow({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12.5c4-.6 9.5-.4 15 0" />
      <path d="M13.5 6.5 19.5 12.5 13.5 18" />
    </svg>
  );
}
