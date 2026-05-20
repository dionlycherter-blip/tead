"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

const sliderMarks = [10000, 50000, 100000, 1000000, 5000000];

export default function Pricing() {
  const [income, setIncome] = useState(25000);
  const [loanAmount, setLoanAmount] = useState(400000);
  const term = 1; // จำนวนวัน (คงที่)

  const interestRateDaily = useMemo(() => {
    const amt = loanAmount;
    if (amt >= 100000) {
      const minRate = 0.015; // 1.5%
      const maxRate = 0.018; // 1.8%
      const start = 100000;
      const end = 5000000;
      const t = Math.min(1, Math.max(0, (amt - start) / (end - start)));
      // ไล่จาก 1.8% ลงไปเป็น 1.5% เมื่อยอดใกล้ end
      return Number((maxRate - t * (maxRate - minRate)).toFixed(6));
    }
    if (amt >= 10000) return 0.02; // 2.0%/วัน
    return 0.02;
  }, [loanAmount]);

  // คำนวณยอดผ่อนชำระต่อวัน (principal + ดอกเบี้ย) / จำนวนวัน
  const dailyPayment = useMemo(() => {
    const principal = loanAmount;
    const totalInterest = principal * interestRateDaily * term;
    const totalPayable = principal + totalInterest;
    return term > 0 ? totalPayable / term : 0;
  }, [loanAmount, term, interestRateDaily]);

  const formattedIncome = new Intl.NumberFormat("th-TH").format(income);
  const formattedLoanAmount = new Intl.NumberFormat("th-TH").format(loanAmount);
  const formattedDaily = new Intl.NumberFormat("th-TH").format(
    Math.round(dailyPayment)
  );
  const formattedTotalPayable = new Intl.NumberFormat("th-TH").format(
    Math.round(loanAmount + loanAmount * interestRateDaily * term)
  );

  const ratePercentDisplay = (interestRateDaily * 100).toFixed(2).replace(/\.00$/, "");

  return (
    <section
      id="pricing"
      className="mx-auto w-full max-w-7xl px-3 py-16 sm:px-4 sm:py-24 md:px-6"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-10 flex flex-col gap-3 text-center sm:mb-14"
      >
        <h2 className="text-3xl font-semibold sm:text-4xl">
          คำนวณยอดผ่อนรายวัน สำหรับเจ้าของกิจการ
        </h2>
        <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
          สำหรับเจ้าของธุรกิจหรือกิจการ — วงเงินสูงสุดถึง 5,000,000 บาท
          ปรับยอดเพื่อดูยอดที่ต้องชำระภายใน 1 วัน
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid gap-6 lg:grid-cols-[1.1fr_1.7fr]"
      >
        <div className="rounded-[2rem] border border-border bg-white p-6 shadow-xl sm:p-8">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              รายรับเฉลี่ยต่อเดือน (เจ้าของกิจการ)
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              ใช้เพื่อประเมินความเหมาะสมของการขอสินเชื่อ (ตั้งแต่ 25,000 บาทขึ้นไป)
            </p>
          </div>

          <label className="relative block">
            <input
              type="number"
              min={25000}
              value={income}
              onChange={(event) => {
                const value = Number(event.target.value);
                setIncome(Number.isFinite(value) && value >= 25000 ? value : 25000);
              }}
              className="w-full rounded-full border border-orange-300 bg-white px-6 py-4 text-center text-2xl font-semibold text-foreground outline-none transition focus:border-orange-500"
            />
          </label>

          <div className="mt-10 grid place-items-center rounded-[2rem] bg-gradient-to-br from-orange-200 to-orange-100 p-6 shadow-inner">
            <div className="flex h-64 w-64 items-center justify-center rounded-[2rem] bg-white shadow-[0_35px_90px_-40px_rgba(251,146,60,0.8)]">
              <div className="flex h-40 w-40 flex-col items-center justify-center rounded-[2.5rem] bg-gradient-to-br from-orange-400 via-orange-300 to-orange-200 text-5xl shadow-2xl">
                🐰
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-border bg-white p-6 shadow-xl sm:p-8">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                วงเงินขอกู้ (บาท)
              </p>
              <p className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
                {formattedLoanAmount}
              </p>
            </div>
            <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              สูงสุด 5,000,000 บาท
            </div>
          </div>

          <div className="rounded-3xl bg-slate-100 p-6">
            <input
              type="range"
              min={10000}
              max={5000000}
              step={1000}
              value={loanAmount}
              onChange={(event) => setLoanAmount(Number(event.target.value))}
              className="w-full accent-orange-500"
            />
            <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
              {sliderMarks.map((mark) => (
                <span key={mark} className="text-center w-1/5">
                  {new Intl.NumberFormat("th-TH").format(mark)}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm font-semibold text-muted-foreground">ระยะเวลาที่คำนวณ</p>
            <p className="mt-2 text-sm text-muted-foreground">คำนวณยอดชำระสำหรับ <strong>1 วัน</strong> เท่านั้น</p>
          </div>

          <div className="mt-8 rounded-[2rem] bg-orange-100 px-6 py-6 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-900">ยอดที่ต้องชำระ (1 วัน)</p>
              <p className="mt-1 text-xs text-slate-600">
                วงเงิน 10,000–99,999 บาท: 2.00%/วัน; วงเงิน 100,000 บาทขึ้นไป: ลดลงจาก 1.8% ถึง 1.5% ตามยอดที่สูงขึ้น. อัตราปัจจุบัน {ratePercentDisplay}% ต่อวัน — ดอกเบี้ยคิดตามจำนวนวันจริง
              </p>
              <p className="mt-1 text-xs text-slate-600">ยอดรวมที่ต้องชำระ: {formattedTotalPayable} บาท</p>
            </div>
            <p className="mt-4 text-3xl font-bold text-slate-900 sm:mt-0">
              {formattedDaily} บาท
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
