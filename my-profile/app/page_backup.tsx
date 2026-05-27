import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 p-8 font-sans dark:bg-black">
      <main className="flex flex-col items-center gap-8 text-center">
        {/* 프로필 이미지 (임시 로고 사용) */}
        <div className="relative w-24 h-24 rounded-full overflow-hidden bg-zinc-200 dark:bg-zinc-800">
          <Image
            className="dark:invert p-4"
            src="/next.svg"
            alt="Profile Logo"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            조보라
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            바이브코딩을 배우고 있는 의류학과 학생입니다.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <a
            className="flex h-12 items-center justify-center gap-2 rounded-full bg-zinc-900 px-8 text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            href="https://www.instagram.com/4ora_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram: @4ora_
          </a>
        </div>
      </main>

      <footer className="mt-16 text-sm text-zinc-400">
        © 2024 Cho Bora. All rights reserved.
      </footer>
    </div>
  );
}
