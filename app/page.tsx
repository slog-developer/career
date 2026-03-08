"use client";

import { useState } from "react";
import Header from "@/components/header";
import { Radio } from "./components/form/Radio";
import { RadioGroup } from "./components/form/RadioGroup";
import { FloatingButton } from "./components/FloatingButton";

export default function Home() {
  const [selectedPrice, setSelectedPrice] = useState<
    "under-10" | "10-50" | "50-100" | "100-200" | "200-300" | "300-400"
  >("under-10");

  const priceOptions = [
    { value: "under-10", label: "10만원 이하", min: 0, max: 10 },
    { value: "10-50", label: "10만원 ~ 50만원", min: 10, max: 50 },
    { value: "50-100", label: "50만원 ~ 100만원", min: 50, max: 100 },
    { value: "100-200", label: "100만원 ~ 200만원", min: 100, max: 200 },
    { value: "200-300", label: "200만원 ~ 300만원", min: 200, max: 300 },
    { value: "300-400", label: "300만원 ~ 400만원", min: 300, max: 400 },
  ] as const;

  const selectedOption =
    priceOptions.find((option) => option.value === selectedPrice) ??
    priceOptions[0];

  return (
    <main className="min-h-screen">
      <Header />
      <section id="about" className="mx-auto w-full max-w-4xl px-4 py-12">
        <h2 className="text-xl font-semibold">About</h2>
        <p className="mt-4 text-sm text-neutral-700">
          간단한 소개와 역할, 관심 분야를 한두 문장으로 정리합니다. 어떤식으로
          수정할지 잘 생각해보고 가능하면 역머지하는걸 테스트 해봐 여긴 데브
        </p>
        <RadioGroup
          label="가격 (만원)"
          name="price"
          value={selectedPrice}
          onChange={setSelectedPrice}
        >
          {priceOptions.map((option) => (
            <Radio
              key={option.value}
              value={option.value}
              label={option.label}
            />
          ))}
        </RadioGroup>
        <div className="mt-4 max-w-sm grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              최소값
            </label>
            <input
              type="text"
              readOnly
              value={`${selectedOption.min}만원`}
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              최대값
            </label>
            <input
              type="text"
              readOnly
              value={`${selectedOption.max}만원`}
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-900"
            />
          </div>
        </div>
      </section>
      <section id="skills" className="mx-auto w-full max-w-4xl px-4 py-12">
        <h2 className="text-xl font-semibold">Skills</h2>
        <ul className="mt-4 list-disc pl-5 text-sm text-neutral-700">
          <li>Frontend: React, Next.js, TypeScript</li>
          <li>Styling: Tailwind CSS, CSS Modules</li>
          <li>Tools: Git, Vercel, Figma</li>
        </ul>
      </section>
      <section id="career" className="mx-auto w-full max-w-4xl px-4 py-12">
        <h2 className="text-xl font-semibold">Career</h2>
        <div className="mt-4 space-y-2 text-sm text-neutral-700">
          <p>회사명 · 역할 · 기간</p>
          <p>핵심 성과를 한두 줄로 요약합니다.</p>
        </div>
        <span>여기는 데브 변경사항 </span>
      </section>
      <section id="learning" className="mx-auto w-full max-w-4xl px-4 py-12">
        <h2 className="text-xl font-semibold">Learning</h2>
        <p className="mt-4 text-sm text-neutral-700">
          현재 학습 중인 주제와 학습 방법을 정리합니다.
        </p>
      </section>
      <section id="contact" className="mx-auto w-full max-w-4xl px-4 py-12">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p className="mt-4 text-sm text-neutral-700">
          이메일 또는 링크를 넣을 수 있는 영역입니다.
        </p>
      </section>
      <FloatingButton onClick={() => {}} />
    </main>
  );
}
