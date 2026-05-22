"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const accordionItems = [
  {
    title: "บริการนี้เหมาะกับใครบ้าง?",
    content: (
      <div className="text-white/70">
        เหมาะสำหรับเจ้าของธุรกิจ ผู้ประกอบการ บริษัท ห้างหุ้นส่วน และกิจการที่มีใบประกอบการ
        ที่ต้องการเงินทุนหมุนเวียนเพื่อเสริมสภาพคล่อง ขยายกิจการ หรือจัดการค่าใช้จ่ายประจำ
      </div>
    ),
  },
  {
    title: "ต้องเตรียมเอกสารอะไรบ้าง?",
    content: (
      <div className="text-white/70">
        <ul className="list-disc space-y-2 pl-5">
          <li>หนังสือรับรองบริษัทหรือใบประกอบการ</li>
          <li>สำเนาบัตรประชาชนและทะเบียนบ้านผู้มีอำนาจ</li>
          <li>Statement ย้อนหลัง 3–6 เดือน</li>
          <li>รูปกิจการหรือหน้าร้านเพื่อประกอบการพิจารณา</li>
        </ul>
      </div>
    ),
  },
  {
    title: "ใช้เวลานานแค่ไหนในการประเมินเบื้องต้น?",
    content: (
      <div className="text-white/70">
        หลังส่งข้อมูลครบถ้วน เจ้าหน้าที่จะติดต่อกลับเพื่อประเมินเบื้องต้นโดยเร็วที่สุด
        ระยะเวลาจริงขึ้นอยู่กับความครบถ้วนของเอกสารและประเภทกิจการ
      </div>
    ),
  },
  {
    title: "สมัครผ่านช่องทางไหนได้บ้าง?",
    content: (
      <div className="text-white/70">
        สามารถเริ่มต้นผ่าน LINE ได้โดยตรงจากเว็บไซต์ เพื่อให้เจ้าหน้าที่แนะนำขั้นตอนและเอกสาร
        ที่ต้องใช้ต่อไปอย่างรวดเร็ว
      </div>
    ),
  },
  {
    title: "เว็บไซต์นี้รองรับการดูบนมือถือหรือไม่?",
    content: (
      <div className="text-white/70">
        รองรับทั้งมือถือ แท็บเล็ต และเดสก์ท็อป โดยออกแบบให้ CTA เด่น อ่านง่าย และแตะใช้งานสะดวก
      </div>
    ),
  },
];

export default function Faq() {
  return (
    <motion.section
      id="faq"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: "spring", bounce: 0 }}
      className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-5 px-4 py-16 md:px-8 sm:py-24"
    >
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[11px] font-semibold tracking-[0.22em] text-emerald-300">
          FAQ
        </div>
        <h4 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          คำถามที่พบบ่อย
        </h4>
        <p className="max-w-xl text-center text-base leading-7 text-white/65 sm:text-lg">
          ข้อมูลสำคัญสำหรับการเริ่มต้นขอสินเชื่อเสริมสภาพคล่องสำหรับธุรกิจ
        </p>
      </div>

      <div className="flex w-full max-w-3xl">
        <Accordion type="multiple" className="w-full">
          {accordionItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-white/10 text-white/70"
            >
              <AccordionTrigger className="text-left text-base text-white hover:no-underline">
                {item.title}
              </AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.section>
  );
}
