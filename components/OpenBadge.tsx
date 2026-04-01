// components/OpenBadge.tsx
"use client";

import { useEffect, useState } from "react";
import { getOpenStatus, OpenStatus } from "@/lib/openStatus";

export default function OpenBadge() {
  const [status, setStatus] = useState<OpenStatus | null>(null);

  useEffect(() => {
    // Check immediately
    setStatus(getOpenStatus());

    // Re-check every minute
    const interval = setInterval(() => {
      setStatus(getOpenStatus());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  if (!status) return null;

  return (
    <div className="flex flex-col gap-1">
      <div className="inline-flex items-center gap-1.5">
        <span className={`w-2 h-2 rounded-full ${status.isOpen ? "bg-green-400 animate-pulse" : "bg-red-400"}`} />
        <span className={`text-xs font-medium ${status.isOpen ? "text-green-400" : "text-red-400"}`}>
          {status.label}
        </span>
      </div>
      {status.nextInfo && (
        <p className="text-amber-200/40 text-xs">{status.nextInfo}</p>
      )}
    </div>
  );
}