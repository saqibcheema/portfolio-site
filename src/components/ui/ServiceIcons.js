// Custom SVG icons for each service card — no emojis, no third-party deps
export const AndroidIcon = ({ size = 32, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 12C6 9.79 7.79 8 10 8h12c2.21 0 4 1.79 4 4v10c0 2.21-1.79 4-4 4H10c-2.21 0-4-1.79-4-4V12z" stroke={color} strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M3 14h2M27 14h2M3 20h2M27 20h2" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="1" fill={color} />
    <circle cx="20" cy="12" r="1" fill={color} />
    <path d="M12 5.5L10 3M20 5.5L22 3" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M11 25v3M21 25v3" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const FlutterIcon = ({ size = 32, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 16L16 6l10 10-10 10L6 16z" stroke={color} strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M12 16l4-4 4 4-4 4-4-4z" fill={color} opacity="0.4"/>
    <path d="M16 22l4-4 4 4" stroke={color} strokeWidth="1.5" strokeLinejoin="round"/>
    <circle cx="16" cy="6" r="1.5" fill={color}/>
  </svg>
);

export const AIIcon = ({ size = 32, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="5" stroke={color} strokeWidth="1.5"/>
    <path d="M16 4v4M16 24v4M4 16h4M24 16h4" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M7.51 7.51l2.83 2.83M21.66 21.66l2.83 2.83M7.51 24.49l2.83-2.83M21.66 10.34l2.83-2.83" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="16" cy="16" r="2" fill={color} opacity="0.5"/>
  </svg>
);

export const DatabaseIcon = ({ size = 32, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="16" cy="9" rx="9" ry="4" stroke={color} strokeWidth="1.5"/>
    <path d="M7 9v7c0 2.21 4.03 4 9 4s9-1.79 9-4V9" stroke={color} strokeWidth="1.5"/>
    <path d="M7 16v7c0 2.21 4.03 4 9 4s9-1.79 9-4v-7" stroke={color} strokeWidth="1.5"/>
    <path d="M21 9.5c0 .55-2.24 1-5 1s-5-.45-5-1" stroke={color} strokeWidth="1" opacity="0.4"/>
  </svg>
);
