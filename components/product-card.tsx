"use client";

import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LINE_URL } from "@/lib/line";

const loanHighlights = [
  "วงเงินตั้งแต่ 100,000–5,000,000 บาท",
  "ผ่อนชำระแบบรายวัน วางแผนกระแสเงินสดง่าย",
  "รองรับบริษัท ห้างหุ้นส่วน และผู้มีใบประกอบการ",
];

const businessTypes = [
  "บริษัทจำกัด / หจก.",
  "ร้านค้าและค้าปลีก",
  "อพาร์ทเมนท์ / หอพัก",
  "โกดัง / โลจิสติกส์ / บริการ",
];

const checklist = [
  "หนังสือรับรองบริษัทหรือใบประกอบการ",
  "บัตรประชาชนและทะเบียนบ้านผู้มีอำนาจ",
  "Statement ย้อนหลัง 3–6 เดือน",
];

export default function ProductCard() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button type="button" className="group block w-full text-left">
          <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0d0d] shadow-[0_18px_60px_rgba(0,0,0,0.38)] transition duration-300 group-hover:-translate-y-1 group-hover:border-emerald-400/30 group-hover:shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
            <div className="grid gap-0 md:grid-cols-[1.12fr_0.88fr]">
              <div className="relative min-h-[20rem] overflow-hidden bg-neutral-950">
                <img
                  src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1400&q=80"
                  alt="เจ้าของธุรกิจกำลังวางแผนเงินทุนและกระแสเงินสด"
                  className="h-full w-full object-cover opacity-80 transition duration-300 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.78))]" />
                <div className="absolute left-5 top-5 inline-flex rounded-full border border-white/15 bg-black/60 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-white backdrop-blur">
                  BUSINESS LOAN
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                  <p className="text-xs font-semibold tracking-[0.24em] text-emerald-300">
                    BIZ CASH 2026
                  </p>
                  <h3 className="mt-3 max-w-xl text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
                    เสริมสภาพคล่องให้ธุรกิจเดินต่อได้อย่างมั่นใจ
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-white/75 sm:text-base">
                    สินเชื่อสำหรับเจ้าของกิจการที่ต้องการเงินหมุน เติมสต็อก ขยายกิจการ
                    หรือจัดการค่าใช้จ่ายประจำให้คล่องตัว
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-5 p-5 sm:p-6">
                <div className="space-y-4">
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400">
                      จุดเด่น
                    </p>
                    <ul className="mt-3 space-y-2">
                      {loanHighlights.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm leading-6 text-white/85">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {businessTypes.map((item) => (
                      <div key={item} className="rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                          กลุ่มธุรกิจ
                        </p>
                        <p className="mt-1 text-sm font-semibold text-white">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-[1.5rem] border border-white/10 bg-[#111111] p-4">
                    <CardTitle className="text-xl font-bold text-white sm:text-2xl">
                      สินเชื่อธุรกิจเพื่อผู้ประกอบการ
                    </CardTitle>
                    <CardDescription className="mt-2 text-sm leading-6 text-white/70">
                      เหมาะกับบริษัท ห้างหุ้นส่วน และผู้มีใบประกอบการที่ต้องการวงเงินเพื่อเสริมสภาพคล่อง
                    </CardDescription>
                  </div>
                </div>

                <CardFooter className="flex items-center justify-between gap-3 p-0">
                  <div className="text-sm font-semibold text-white">แตะเพื่อดูรายละเอียด →</div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-neutral-300">
                    เปิดข้อมูลเพิ่มเติม
                  </div>
                </CardFooter>
              </div>
            </div>
          </div>
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-3xl border-white/10 bg-[#0f0f0f] text-white">
        <DialogTitle className="text-2xl font-bold">สินเชื่อเสริมสภาพคล่องสำหรับธุรกิจ</DialogTitle>
        <DialogDescription className="text-white/70">
          รายละเอียดสินเชื่อสำหรับเจ้าของกิจการที่ต้องการเงินทุนหมุนเวียน ขยายธุรกิจ หรือดูแลกระแสเงินสด
        </DialogDescription>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="rounded-[1.35rem] border border-white/10 bg-white/5 p-4">
            <h4 className="text-sm font-semibold text-white">เหมาะกับธุรกิจประเภทไหน</h4>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-white/70">
              <li>• บริษัทจำกัด / ห้างหุ้นส่วน</li>
              <li>• ร้านค้า ร้านอาหาร และค้าปลีก</li>
              <li>• อพาร์ทเมนท์ หอพัก และที่พักอาศัย</li>
              <li>• โลจิสติกส์ โกดัง และธุรกิจบริการ</li>
            </ul>
          </div>

          <div className="rounded-[1.35rem] border border-white/10 bg-white/5 p-4">
            <h4 className="text-sm font-semibold text-white">เอกสารที่ควรเตรียม</h4>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-white/70">
              {checklist.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-4 rounded-[1.35rem] border border-emerald-400/20 bg-emerald-400/10 p-4">
          <p className="text-sm font-semibold text-white">วิธีเริ่มต้น</p>
          <p className="mt-2 text-sm leading-6 text-white/75">
            ติดต่อผ่าน LINE เพื่อให้เจ้าหน้าที่ประเมินเบื้องต้น แจ้งวงเงินที่ต้องการ และแนบเอกสารเพื่อดำเนินการต่อ
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-end">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-4 py-2 text-sm font-bold text-black transition hover:bg-emerald-300"
          >
            ติดต่อผ่าน LINE
          </a>
          <DialogClose className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white">
            ปิด
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
