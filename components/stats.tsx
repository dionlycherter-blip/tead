"use client";

import NumberFlow from "@number-flow/react";
import { motion } from "framer-motion";
import { useState } from "react";

const stats = [
  { value: 5, suffix: "M", label: "วงเงินสูงสุด" },
  { value: 24, suffix: "ชม.", label: "ตอบกลับเบื้องต้น" },
  { value: 3, suffix: "+", label: "ประเภทเอกสารหลัก" },
  { value: 2026, suffix: "", label: "ดีไซน์พร้อมใช้งาน" },
];

export default function Stats() {
  const [animate, setAnimate] = useState(false);

  return (
    <section className="px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[#0d0d0d] px-5 py-8 shadow-[0_18px_60px_rgba(0,0,0,0.28)] sm:px-8 sm:py-10">
        <motion.div
          className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
          onViewportEnter={() => setAnimate(true)}
          viewport={{ once: true, amount: 0.4 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              className="rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-5 text-center"
            >
              <div className="mb-2 text-3xl font-bold tracking-tight text-white md:text-4xl">
                <NumberFlow
                  value={animate ? stat.value : 0}
                  format={{
                    maximumFractionDigits: stat.value % 1 === 0 ? 0 : 1,
                  }}
                />
                {stat.suffix}
              </div>
              <div className="text-sm font-medium leading-6 text-white/65">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
