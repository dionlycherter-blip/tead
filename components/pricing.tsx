"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { LINE_URL } from "@/lib/line";

const sliderMarks = [100000, 500000, 1000000, 3000000, 5000000];

export default function Pricing() {
  const [loanAmount, setLoanAmount] = useState(400000);
  const [term, setTerm] = useState(30);
  const [selectedRatePercent, setSelectedRatePercent] = useState(1.8);

  const autoRatePercent = useMemo(() => {
    const minRate = 1.5;
    const maxRate = 1.8;
    const start = 100000;
    const end = 5000000;
    const t = Math.min(1, Math.max(0, (loanAmount - start) / (end - start)));
    return Number((maxRate - t * (maxRate - minRate)).toFixed(2));
  }, [loanAmount]);

  const interestRateDaily = selectedRatePercent / 100;

  const { dailyPayment, interestPerDay, interestTotal, totalPayable } = useMemo(() => {
    if (term <= 0) {
      return {
        dailyPayment: 0,
        interestPerDay: 0,
        interestTotal: 0,
        totalPayable: 0,
      };
    }

    const principalPerDay = loanAmount / term;
    const interestPerDayValue = loanAmount * interestRateDaily;
    const interestTotalValue = interestPerDayValue * term;
    const dailyPaymentValue = principalPerDay + interestPerDayValue;
    const totalPayableValue = loanAmount + interestTotalValue;

    return {
      dailyPayment: dailyPaymentValue,
      interestPerDay: interestPerDayValue,
      interestTotal: interestTotalValue,
      totalPayable: totalPayableValue,
    };
  }, [loanAmount, term, interestRateDaily]);

  const formattedLoanAmount = new Intl.NumberFormat("th-TH").format(loanAmount);
  const formattedDailyPayment = new Intl.NumberFormat("th-TH").format(Math.round(dailyPayment));
  const formattedInterestPerDay = new Intl.NumberFormat("th-TH").format(Math.round(interestPerDay));
  const formattedInterestTotal = new Intl.NumberFormat("th-TH").format(Math.round(interestTotal));
  const formattedTotalPayable = new Intl.NumberFormat("th-TH").format(Math.round(totalPayable));

  return (
    <section
      id="pricing"
      className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-10 flex flex-col gap-3 text-center sm:mb-14"
      >
        <div className="mx-auto inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[11px] font-semibold tracking-[0.22em] text-emerald-300">
          BUSINESS CASHFLOW CALCULATOR
        </div>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          คำนวณวงเงินสินเชื่อเพื่อเสริมสภาพคล่อง
        </h2>
        <p className="mx-auto max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
          เลือกวงเงินและระยะเวลาผ่อน เพื่อดูตัวเลขประมาณการแบบชัดเจน ใช้เป็นแนวทางตัดสินใจก่อนคุยกับเจ้าหน้าที่
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]"
      >
        <div className="rounded-[2rem] border border-white/10 bg-[#0d0d0d] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-400">
            สรุปประมาณการ
          </p>

          <div className="mt-5 space-y-4">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-400">
                วงเงินที่เลือก
              </p>
              <p className="mt-2 text-3xl font-bold text-white">{formattedLoanAmount} บาท</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-400">
                  ดอกเบี้ยต่อวัน
                </p>
                <p className="mt-2 text-xl font-semibold text-white">{formattedInterestPerDay} บาท</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-400">
                  ดอกเบี้ยรวม
                </p>
                <p className="mt-2 text-xl font-semibold text-white">{formattedInterestTotal} บาท</p>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-emerald-400/20 bg-emerald-400/10 p-4 text-white">
              <p className="text-sm font-semibold">ยอดผ่อนต่อวันโดยประมาณ</p>
              <p className="mt-2 text-3xl font-bold">{formattedDailyPayment} บาท</p>
              <p className="mt-2 text-sm leading-6 text-white/70">
                ใช้สำหรับประเมินภาระรายวันและวางแผนกระแสเงินสดของธุรกิจ
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-400">
                ยอดรวมที่ต้องชำระ
              </p>
              <p className="mt-2 text-2xl font-bold text-white">{formattedTotalPayable} บาท</p>
            </div>
          </div>

          <div className="mt-6">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-emerald-400 px-4 py-3 text-sm font-bold text-black shadow-[0_12px_30px_rgba(16,185,129,0.28)] transition hover:bg-emerald-300"
            >
              ขอประเมินสิทธิ์ผ่าน LINE
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[#0d0d0d] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] sm:p-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-400">
                  วงเงินที่ต้องการ
                </p>
                <p className="mt-2 text-3xl font-bold text-white">{formattedLoanAmount} บาท</p>
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white">
                สูงสุด 5,000,000 บาท
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
              <label className="block">
                <span className="mb-3 block text-sm font-semibold text-white">กรอกวงเงินที่ต้องการ</span>
                <input
                  type="number"
                  min={100000}
                  max={5000000}
                  step={10000}
                  value={loanAmount}
                  onChange={(event) => setLoanAmount(Number(event.target.value))}
                  className="w-full rounded-[1.25rem] border border-white/10 bg-[#121212] px-5 py-4 text-center text-xl font-semibold text-white outline-none"
                />
              </label>

              <div className="mt-5 flex flex-wrap justify-between gap-2 text-[11px] text-neutral-400">
                {sliderMarks.map((mark) => (
                  <span
                    key={mark}
                    className="rounded-full border border-white/10 bg-[#121212] px-3 py-1"
                  >
                    {new Intl.NumberFormat("th-TH").format(mark)}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">อัตราดอกเบี้ยต่อวัน</p>
                  <p className="mt-1 text-sm text-neutral-400">
                    ปรับตามวงเงิน หรือใช้ค่าอัตโนมัติเพื่อดูตัวเลขที่ใกล้เคียง
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedRatePercent(autoRatePercent)}
                  className="rounded-full border border-white/10 bg-[#121212] px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  ใช้ค่าอัตโนมัติ
                </button>
              </div>

              <div className="mt-4 flex items-center gap-4">
                <input
                  type="range"
                  min={1.5}
                  max={2.0}
                  step={0.01}
                  value={selectedRatePercent}
                  onChange={(e) =>
                    setSelectedRatePercent(Number(parseFloat(e.target.value).toFixed(2)))
                  }
                  className="w-full accent-emerald-400"
                />
                <div className="w-20 rounded-full border border-white/10 bg-[#121212] px-3 py-2 text-right text-sm font-semibold text-white">
                  {selectedRatePercent}%
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-white">ระยะเวลาผ่อนชำระ</p>
              <div className="mt-3 flex items-center gap-3">
                <input
                  type="number"
                  min={1}
                  max={365}
                  value={term}
                  onChange={(e) => {
                    const value = Number(e.target.value);
                    setTerm(Number.isFinite(value) && value >= 1 ? Math.floor(value) : 1);
                  }}
                  className="w-28 rounded-[1.25rem] border border-white/10 bg-[#121212] px-4 py-3 text-center text-sm font-semibold text-white outline-none"
                />
                <p className="text-sm text-neutral-400">วัน</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
