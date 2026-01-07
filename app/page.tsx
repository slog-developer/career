import Header from "@/components/header";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <section id="about" className="mx-auto w-full max-w-4xl px-4 py-12">
        <h2 className="text-xl font-semibold">About</h2>
        <p className="mt-4 text-sm text-neutral-700">
          간단한 소개와 역할, 관심 분야를 한두 문장으로 정리합니다. 어떤식으로
          수정할지 잘 생각해보고 가능하면 역머지하는걸 테스트 해봐 여긴 데브
        </p>
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
    </main>
  );
}
