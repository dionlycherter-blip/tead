"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const testimonials = [
  {
    name: "สมชาย วงศ์ชัย",
    role: "เจ้าของบริษัทค้าปลีก",
    content:
      "ช่วยเพิ่มสภาพคล่องได้ตรงจังหวะ ทำให้เติมสต็อกก่อนเทศกาลได้ทัน และทีมงานอธิบายเงื่อนไขชัดเจนมาก",
    rating: 5,
  },
  {
    name: "สายฝน สุขมาก",
    role: "ผู้ประกอบการออนไลน์มีใบทะเบียนพาณิชย์",
    content:
      "ขั้นตอนสมัครไม่ซับซ้อน เหมาะกับธุรกิจที่ต้องการเงินหมุนเร็ว ๆ เพื่อรับออเดอร์และจ่ายซัพพลายเออร์",
    rating: 5,
  },
  {
    name: "กิติพงศ์ เสริมสุข",
    role: "เจ้าของกิจการบริการและขนส่ง",
    content:
      "ยอดผ่อนรายวันช่วยวางแผนกระแสเงินสดได้ง่ายกว่าแบบก้อน ทีมงานตอบกลับไวและดูแลดีตั้งแต่ต้นจนจบ",
    rating: 5,
  },
  {
    name: "นฤมล ศรีทอง",
    role: "ผู้ดูแลธุรกิจครอบครัว",
    content:
      "เราใช้เอกสารบริษัทและ statement ย้อนหลังไม่กี่อย่างก็เริ่มคุยต่อได้ ภาพรวมดูมืออาชีพและน่าเชื่อถือ",
    rating: 5,
  },
  {
    name: "ปกรณ์ วัฒนา",
    role: "ผู้ประกอบการ SME",
    content:
      "หน้าเว็บไซต์ดูทันสมัยและชวนคลิกมาก พออ่านรายละเอียดแล้วตัดสินใจทัก LINE ต่อได้ง่าย",
    rating: 5,
  },
  {
    name: "ณัฐชา พูนผล",
    role: "เจ้าของสตูดิโอออกแบบ",
    content:
      "ใช้เป็นเงินเสริมช่วงขยายทีมได้ดีมาก ตัวคำนวณช่วยประเมินเบื้องต้นก่อนคุยจริงได้สะดวก",
    rating: 5,
  },
];

const StarIcon = () => (
  <svg className="h-3.5 w-3.5 text-amber-400 sm:h-4 sm:w-4" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const visibleCount = isMobile ? 2 : 3;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);

    updateIsMobile();
    mediaQuery.addEventListener("change", updateIsMobile);

    return () => {
      mediaQuery.removeEventListener("change", updateIsMobile);
    };
  }, []);

  return (
    <section id="testimonials" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 flex flex-col gap-3 text-center sm:mb-16"
        >
          <div className="mx-auto inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[11px] font-semibold tracking-[0.22em] text-emerald-300">
            CLIENT FEEDBACK
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            รีวิวจากเจ้าของธุรกิจจริง
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
            เสียงจากผู้ประกอบการที่ต้องการสินเชื่อเพื่อเสริมสภาพคล่องและเดินธุรกิจต่ออย่างมั่นใจ
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {(showAll ? testimonials : testimonials.slice(0, visibleCount)).map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.06, ease: "easeOut" }}
              >
                <div className="flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-[#0d0d0d] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
                  <div className="mb-3 flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>

                  <p className="flex-1 text-sm leading-7 text-white/75">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  <div className="mt-5 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-white">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div className="min-w-0">
                      <h4 className="truncate text-sm font-semibold text-white">
                        {testimonial.name}
                      </h4>
                      <p className="truncate text-xs text-neutral-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {!showAll && testimonials.length > visibleCount && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/85 to-transparent" />
          )}
        </div>

        {!showAll && testimonials.length > visibleCount && (
          <div className="mt-6 flex justify-center">
            <Button
              variant="outline"
              className="rounded-full border-white/10 bg-white/5 px-5 text-white hover:bg-white/10"
              onClick={() => setShowAll(true)}
            >
              ดูรีวิวเพิ่มเติม
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
