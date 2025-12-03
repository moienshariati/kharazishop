export function BackgroundPattern() {
  return (
    <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-0">
      <svg width="100%" height="100%">
        <defs>
          <pattern
            id="grid-pattern"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="20" cy="20" r="1" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>
    </div>
  );
}
