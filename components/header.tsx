import { Link } from "@components/ui";

export default function Header() {
  return (
    <header className="w-full border-b border-neutral-200">
      <div className="mx-auto flex w-full max-w-4xl items-center justify-between px-4 py-6">
        <h1 className="text-lg font-bold">Frontend Developer</h1>
        <nav aria-label="섹션 이동" className="flex items-center gap-6 text-sm">
          <Link href="#about">About</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#career">Career</Link>
          <Link href="#learning">Learning</Link>
          <Link href="#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
