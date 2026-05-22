"use client";
/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LINE_URL } from "@/lib/line";

const businessLoanHighlights = [
  "เหมาะสำหรับบริษัท ห้างหุ้นส่วน และผู้ประกอบการที่มีใบประกอบการ",
  "วงเงินสูงสุด 5,000,000 บาท เพื่อเสริมสภาพคล่องและขยายกิจการ",
  "ผ่อนชำระแบบรายวัน ช่วยวางแผนกระแสเงินสดได้ง่าย",
];

const quickFacts = [
  { label: "กลุ่มเป้าหมาย", value: "ธุรกิจจริง" },
  { label: "เอกสารหลัก", value: "บริษัท / ใบประกอบการ" },
  { label: "รูปแบบชำระ", value: "รายวัน" },
];

const credentials = [
  "หนังสือรับรองบริษัทหรือใบประกอบการ",
  "บัตรประชาชนและทะเบียนบ้านผู้มีอำนาจ",
  "Statement ย้อนหลัง 3–6 เดือน",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.12),transparent_35%)]" />
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 md:px-8 lg:py-16">
        <div className="grid gap-6 overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b0b] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.45)] lg:grid-cols-[1.15fr_0.85fr] lg:p-6">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#111111]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.45))]" />
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80"
              alt="เจ้าของธุรกิจกำลังวางแผนเงินทุนและสภาพคล่อง"
              className="h-full min-h-[28rem] w-full object-cover opacity-80 transition duration-300 hover:scale-[1.02]"
            />

            <div className="absolute left-5 top-5 inline-flex items-center rounded-full border border-white/15 bg-black/60 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-white backdrop-blur">
              BIZ CASH 2026
            </div>

            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
              <div className="max-w-2xl rounded-[1.5rem] border border-white/10 bg-black/70 p-5 backdrop-blur-md sm:p-6">
                <p className="text-xs font-semibold tracking-[0.24em] text-emerald-300">
                  BUSINESS LIQUIDITY LOAN
                </p>
                <h1 className="mt-3 max-w-xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  สินเชื่อเสริมสภาพคล่อง สำหรับเจ้าของธุรกิจและผู้ประกอบการ
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
                  เหมาะกับกิจการที่มีใบประกอบการ บริษัท หจก. หรือธุรกิจที่ต้องการเงินหมุนเวียน
                  เพื่อเติมสต็อก จ่ายค่าใช้จ่าย และขยายโอกาสทางธุรกิจได้ทันเวลา
                </p>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    className="h-12 rounded-full bg-emerald-400 px-6 text-sm font-bold text-black shadow-[0_12px_30px_rgba(16,185,129,0.35)] hover:bg-emerald-300"
                  >
                    <a href={LINE_URL} target="_blank" rel="noopener noreferrer">
                      ประเมินสิทธิ์ผ่าน LINE
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="h-12 rounded-full border-white/15 bg-white/5 px-6 text-sm font-semibold text-white hover:bg-white/10"
                  >
                    <Link href="#pricing">ดูตัวอย่างยอดผ่อน</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-[#121212] p-5 sm:p-6">
            <div className="rounded-[1.35rem] border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-semibold tracking-[0.22em] text-neutral-400">
                เหมาะกับใคร
              </p>
              <ul className="mt-3 space-y-3">
                {businessLoanHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-6 text-white/85">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {quickFacts.map((item) => (
                <div key={item.label} className="rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="rounded-[1.35rem] border border-white/10 bg-black/50 p-4">
              <p className="text-sm font-semibold text-white">เอกสารที่ควรเตรียม</p>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-white/75">
                {credentials.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-3 rounded-[1.35rem] border border-emerald-400/20 bg-emerald-400/10 p-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
                  จุดเด่น
                </p>
                <p className="mt-1 text-sm font-semibold text-white">สมัครง่าย</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
                  รูปแบบ
                </p>
                <p className="mt-1 text-sm font-semibold text-white">ผ่อนรายวัน</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
                  การติดต่อ
                </p>
                <p className="mt-1 text-sm font-semibold text-white">ตอบไวผ่าน LINE</p>
              </div>
            </div>

            <div className="mt-auto flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Button
                asChild
                className="h-12 rounded-full bg-white px-6 text-sm font-bold text-black hover:bg-neutral-200"
              >
                <a href={LINE_URL} target="_blank" rel="noopener noreferrer">
                  เริ่มสมัครทันที
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-full border-white/15 bg-white/5 px-6 text-sm font-semibold text-white hover:bg-white/10"
              >
                <Link href="/apply">วิธีการสมัคร</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
