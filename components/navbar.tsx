"use client";

import { Button } from "@/components/ui/button";
import ThemeSwitcher from "@/components/theme-switcher";
import {
  ArrowRightIcon,
  Cross1Icon,
  HamburgerMenuIcon,
  LineHeightIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LINE_URL } from "@/lib/line";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    { name: "แพ็กเกจสินเชื่อ", href: "#pricing" },
    { name: "รีวิวจากธุรกิจ", href: "#testimonials" },
    { name: "คำถามที่พบบ่อย", href: "#faq" },
    { name: "วิธีสมัคร", href: "/apply" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b border-transparent transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "border-white/10 bg-black/70 backdrop-blur-xl"
          : "bg-black/35 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="h-11 w-11 rounded-full border border-white/10 bg-white/5 text-white sm:hidden"
            onClick={() => setIsMenuOpen((value) => !value)}
            aria-label="เปิดเมนู"
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              {isMenuOpen ? <Cross1Icon /> : <HamburgerMenuIcon />}
            </motion.div>
          </Button>

          <Link href="/" className="group flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-400/25 bg-emerald-400/10 text-emerald-300 shadow-[0_10px_30px_rgba(16,185,129,0.18)]">
              <LineHeightIcon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[11px] font-semibold tracking-[0.24em] text-neutral-400">
                BIZ CASH
              </p>
              <p className="text-sm font-semibold text-white sm:text-base">
                สินเชื่อเสริมสภาพคล่อง
              </p>
            </div>
          </Link>
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          {menuItems.map((item) => (
            <Button
              key={item.name}
              asChild
              variant="ghost"
              className="rounded-full px-4 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white"
            >
              <Link href={item.href}>{item.name}</Link>
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeSwitcher />
          <Button
            asChild
            className="hidden rounded-full bg-emerald-400 px-5 text-sm font-bold text-black shadow-[0_12px_30px_rgba(16,185,129,0.28)] hover:bg-emerald-300 sm:inline-flex"
          >
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer">
              สมัครผ่าน LINE
            </a>
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-white/10 bg-black/90 lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
              {menuItems.map((item) => (
                <Button
                  key={item.name}
                  asChild
                  variant="ghost"
                  className="justify-start rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-sm font-medium text-white hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link href={item.href}>
                    <span className="flex items-center gap-2">
                      <PersonIcon className="h-4 w-4 text-emerald-300" />
                      {item.name}
                    </span>
                  </Link>
                </Button>
              ))}

              <Button
                asChild
                className="mt-2 justify-center rounded-2xl bg-emerald-400 px-4 py-6 text-sm font-bold text-black hover:bg-emerald-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <a href={LINE_URL} target="_blank" rel="noopener noreferrer">
                  สมัครผ่าน LINE
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
