import * as React from "react";

export const JioSaavnIcon = ({ className = "w-4 h-4 fill-current" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    {/* JioSaavn signature rounded soundwave / concentric ring badge */}
    <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3" />
    <path
      fill="currentColor"
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-12.5v9l6-4.5-6-4.5z"
    />
  </svg>
);
