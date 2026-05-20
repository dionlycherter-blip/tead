"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const visibleCount = isMobile ? 2 : 6;
  const testimonials = [
    {
      name: "สมชาย วงศ์ชัย",
      role: "เจ้าของธุรกิจ ที่จดใบประกอบการ",
      avatar: "https://i.pravatar.cc/150?img=10",
      content:
        "สินเชื่อรายวันช่วยให้สภาพคล่องของธุรกิจผมดีขึ้นมาก การอนุมัติรวดเร็วและเงื่อนไขชัดเจน",
      rating: 5,
    },
    {
      name: "สายฝน สุขมาก",
      role: "ผู้ขายออนไลน์",
      avatar: "https://i.pravatar.cc/150?img=12",
      content:
        "ระบบผ่อนชำระทุกวันเหมาะกับรายได้ที่ไม่แน่นอนของเรา การชำระคืนสะดวกและไม่มีค่าปรับที่ซ่อนเร้น",
      rating: 5,
    },
    {
      name: "กิติพงศ์ เสริมสุข",
      role: "เจ้าของกิจการส่งอาหาร",
      avatar: "https://i.pravatar.cc/150?img=14",
      content:
        "วงเงินตรงตามที่แจ้งไว้ ทีมงานให้คำแนะนำชัดเจน ทำให้เริ่มธุรกิจต่อได้ทันที",
      rating: 5,
    },
    {
      name: "นฤมล ศรีทอง",
      role: "แม่ค้าแผงลอย",
      avatar: "https://i.pravatar.cc/150?img=16",
      content:
        "ขั้นตอนสมัครง่าย ใช้เอกสารพื้นฐานและได้รับเงินภายในวันเดียวจริง ๆ",
      rating: 5,
    },
    {
      name: "ปกรณ์ วัฒนา",
      role: "ผู้ประกอบการสตาร์ทอัพ",
      avatar: "https://i.pravatar.cc/150?img=18",
      content:
        "ช่วยให้บริหารเงินหมุนเวียนได้ดีขึ้น สนับสนุนการเติบโตของทีมเรา",
      rating: 5,
    },
    {
      name: "ณัฐชา พูนผล",
      role: "ฟรีแลนซ์นักออกแบบ",
      avatar: "https://i.pravatar.cc/150?img=20",
      content:
        "ระบบแจ้งเตือนดี ช่วยให้ผมวางแผนการชำระได้สะดวกขึ้น",
      rating: 5,
    },
    {
      name: "อาร์ม กิจรุ่ง",
      role: "เจ้าของร้านซ่อม",
      avatar: "https://i.pravatar.cc/150?img=22",
      content:
        "บริการลูกค้าดีและตอบคำถามไว เวลาฉุกเฉินใช้งานได้จริง",
      rating: 5,
    },
    {
      name: "มาลี บุญช่วย",
      role: "ผู้จัดการร้านค้า",
      avatar: "https://i.pravatar.cc/150?img=24",
      content:
        "ค่าธรรมเนียมชัดเจน ไม่มีค่าใช้จ่ายที่ถูกซ่อน ทำให้ไว้วางใจได้",
      rating: 5,
    },
    {
      name: "วีระวิทย์ รุ่งโรจน์",
      role: "คนขับรถขนส่ง",
      avatar: "https://i.pravatar.cc/150?img=26",
      content:
        "การอนุมัติรวดเร็วและการจ่ายเงินสะดวก ทำให้เก็บงานได้ต่อเนื่อง",
      rating: 5,
    },
    {
      name: "เอมม่า สุขดี",
      role: "เจ้าของร้านกาแฟ",
      avatar: "https://i.pravatar.cc/150?img=28",
      content:
        "ช่วยให้บริหารสต็อกและค่าแรงได้ดีขึ้นในช่วงเทศกาล",
      rating: 5,
    },
  ];

  const StarIcon = () => (
    <svg
      className="h-3.5 w-3.5 text-yellow-500 sm:h-4 sm:w-4"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

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
    <section id="testimonials" className="px-3 py-16 sm:px-4 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 flex flex-col gap-3 text-center sm:mb-20"
        >
          <h2 className="text-xl font-semibold sm:text-2xl bg-linear-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
            รีวิวสินเชื่อรายวัน
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground text-center">
            อ่านรีวิวจากผู้ใช้จริงเกี่ยวกับการใช้บริการสินเชื่อรายวัน
          </p>
        </motion.div>

        <div className="relative">
          <div className="columns-2 gap-3 space-y-3 sm:gap-8 sm:space-y-8 md:columns-2 lg:columns-3">
            {(showAll ? testimonials : testimonials.slice(0, visibleCount)).map(
              (testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.05,
                    ease: "easeOut",
                  }}
                  className="mb-3 break-inside-avoid sm:mb-8"
                >
                  <div className="rounded-lg border border-border bg-card p-3 transition-colors duration-300 sm:rounded-xl sm:p-6">
                    <div className="mb-2 flex sm:mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} />
                      ))}
                    </div>

                    <p className="mb-4 text-xs leading-snug text-muted-foreground sm:mb-6 sm:text-sm sm:leading-relaxed">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>

                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/20 bg-linear-to-br from-primary/20 to-primary/10 text-xs font-medium sm:h-10 sm:w-10 sm:text-sm">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div className="min-w-0">
                        <h4 className="truncate text-xs font-semibold sm:text-sm">
                          {testimonial.name}
                        </h4>
                        <p className="truncate text-[10px] leading-tight text-muted-foreground sm:text-xs">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ),
            )}
          </div>

          {!showAll && testimonials.length > visibleCount && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-background via-background/90 to-transparent" />
          )}
        </div>

        {!showAll && testimonials.length > visibleCount && (
          <div className="mt-4 flex justify-center">
            <Button variant="ghost" onClick={() => setShowAll(true)}>
              ดูเพิ่มเติม
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
