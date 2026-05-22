"use client";

import LiveChat from "@/components/live-chat";
import { LINE_URL } from "@/lib/line";
import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  "เตรียมเอกสารบริษัท / ใบประกอบการ / บัตรประชาชน / Statement",
  "กดปุ่มสมัครผ่าน LINE เพื่อให้เจ้าหน้าที่รับเรื่อง",
  "ส่งเอกสารและข้อมูลธุรกิจเพื่อประเมินเบื้องต้น",
  "รอเจ้าหน้าที่ติดต่อกลับเพื่อสรุปขั้นตอนต่อไป",
];

const documents = [
  "หนังสือรับรองบริษัทหรือใบประกอบการ",
  "สำเนาบัตรประชาชนและทะเบียนบ้านผู้มีอำนาจ",
  "Statement ย้อนหลัง 3–6 เดือน",
  "รูปกิจการหรือหน้าร้านเพื่อประกอบการพิจารณา",
];

export default function ApplyPage() {
  return (
    <main className="flex min-h-dvh flex-col bg-[#050505] text-white">
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-6 lg:grid-cols-[1fr_0.85fr]"
        >
          <div className="rounded-[2rem] border border-white/10 bg-[#0d0d0d] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] sm:p-8">
            <div className="inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[11px] font-semibold tracking-[0.22em] text-emerald-300">
              HOW TO APPLY
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              วิธีการสมัครสินเชื่อเสริมสภาพคล่อง
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
              สำหรับเจ้าของธุรกิจ บริษัท ห้างหุ้นส่วน และผู้มีใบประกอบการที่ต้องการเริ่มต้นอย่างรวดเร็ว
              ผ่านขั้นตอนที่เข้าใจง่ายและติดต่อได้ทันที
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-5 py-3 text-sm font-bold text-black shadow-[0_12px_30px_rgba(16,185,129,0.28)] transition hover:bg-emerald-300"
              >
                สมัครผ่าน LINE
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                กลับหน้าแรก
              </Link>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400">
                  ระยะเวลาประเมิน
                </p>
                <p className="mt-2 text-2xl font-bold text-white">ตอบกลับเบื้องต้นไว</p>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  หลังได้รับข้อมูลครบถ้วน เจ้าหน้าที่จะติดต่อกลับโดยเร็วที่สุด
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400">
                  ช่องทางเริ่มต้น
                </p>
                <p className="mt-2 text-2xl font-bold text-white">LINE</p>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  สะดวกที่สุดสำหรับส่งข้อมูลเบื้องต้นและรับคำแนะนำ
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[2rem] border border-white/10 bg-[#0d0d0d] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] sm:p-8">
              <h2 className="text-xl font-semibold text-white">ขั้นตอนการสมัคร</h2>
              <ol className="mt-4 space-y-3">
                {steps.map((step, index) => (
                  <li key={step} className="flex gap-3 text-sm leading-6 text-white/75">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-emerald-400/25 bg-emerald-400/10 text-xs font-bold text-emerald-300">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[#0d0d0d] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] sm:p-8">
              <h2 className="text-xl font-semibold text-white">เอกสารที่ต้องเตรียม</h2>
              <ul className="mt-4 space-y-3">
                {documents.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-white/75">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      <LiveChat />
    </main>
  );
}
