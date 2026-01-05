"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-3xl font-bold">페이지를 찾을 수 없습니다.</h1>
      <p className="text-center text-medium text-gray-500">
        요청하신 페이지는 아직 개발중이에요.
      </p>
    </div>
  );
}
