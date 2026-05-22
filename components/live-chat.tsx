"use client";

import { useState } from "react";
import { LINE_URL } from "@/lib/line";

export default function LiveChat() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="w-80 max-w-xs bg-white dark:bg-neutral-900 rounded-xl shadow-lg overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 bg-neutral-800 text-white">
            <div className="text-sm font-semibold">Live Chat</div>
            <button onClick={() => setOpen(false)} aria-label="close" className="ml-2 text-white/80">✕</button>
          </div>
          <div className="p-4 text-sm text-muted-foreground">
            ติดต่อทีมงานแบบสดผ่าน LINE — คลิกปุ่มด้านล่างเพื่อเปิดแชท
          </div>
          <div className="p-4">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noreferrer"
              className="block w-full text-center rounded-full bg-[#00C300] px-4 py-2 text-sm font-semibold text-white"
            >
              เปิด LINE Live Chat
            </a>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-full bg-[#00C300] px-4 py-3 text-sm font-semibold text-white shadow-lg"
      >
        LIVE CHAT
      </button>
    </div>
  );
}
