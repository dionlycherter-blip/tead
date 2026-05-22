"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  InstagramLogoIcon,
  Link2Icon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { LINE_URL } from "@/lib/line";

const footerLinks = [
  { name: "แพ็กเกจสินเชื่อ", href: "#pricing" },
  { name: "รีวิวจากธุรกิจ", href: "#testimonials" },
  { name: "คำถามที่พบบ่อย", href: "#faq" },
  { name: "วิธีสมัคร", href: "/apply" },
];

const socialLinks = [
  {
    name: "LINE",
    href: LINE_URL,
    icon: Link2Icon,
  },
  {
    name: "X",
    href: "https://x.com",
    icon: TwitterLogoIcon,
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: InstagramLogoIcon,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/10 bg-[#080808]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div className="space-y-4">
              <Link href="/" className="inline-flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-400/25 bg-emerald-400/10 text-emerald-300">
                  <span className="text-sm font-bold">BC</span>
                </div>
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.24em] text-neutral-400">
                    BIZ CASH
                  </p>
                  <p className="text-sm font-semibold text-white">
                    สินเชื่อเสริมสภาพคล่อง
                  </p>
                </div>
              </Link>

              <p className="max-w-md text-sm leading-7 text-white/65">
                เว็บไซต์สำหรับเจ้าของธุรกิจและผู้ประกอบการที่ต้องการสินเชื่อเพื่อเสริมสภาพคล่อง
                วางแผนกระแสเงินสด และต่อยอดกิจการให้เดินหน้าอย่างมั่นใจ
              </p>

              <Button
                asChild
                className="rounded-full bg-emerald-400 px-5 text-sm font-bold text-black shadow-[0_12px_30px_rgba(16,185,129,0.22)] hover:bg-emerald-300"
              >
                <a href={LINE_URL} target="_blank" rel="noopener noreferrer">
                  เริ่มสมัครผ่าน LINE
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold tracking-[0.18em] text-white">
                เมนู
              </h3>
              <div className="flex flex-col gap-2">
                {footerLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold tracking-[0.18em] text-white">
                ติดต่อเรา
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    asChild
                    variant="ghost"
                    size="icon"
                    className="h-11 w-11 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10"
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                    >
                      <social.icon className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
              </div>
              <p className="text-sm leading-7 text-white/65">
                ทีมงานพร้อมให้คำปรึกษาและประเมินเบื้องต้นผ่านช่องทางออนไลน์
              </p>
            </div>
          </div>

          <Separator className="bg-white/10" />

          <div className="flex flex-col gap-2 text-center text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <span>© {year} BIZ CASH. All rights reserved.</span>
            <span className="font-medium text-white/70">Business liquidity loan landing page</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
