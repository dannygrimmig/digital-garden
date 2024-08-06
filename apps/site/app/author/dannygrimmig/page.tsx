import Image from 'next/image';
import profile from '../../../public/profile-image.png';

export default function Index() {
  return (
    <main className="p-2 sm:p-4 max-w-6xl m-auto">
      <header className="flex items-center gap-4 mb-4">
        <figure className="w-[50px] h-[50px] sm:h-[100px] sm:w-[100px] relative">
          <Image
            alt="Dannys Profile Photo"
            src={profile}
            fill
            className="rounded-full"
            style={{ objectFit: 'cover' }}
          />
        </figure>

        <div className="flex flex-col">
          <p className="bg-sky-900 text-white px-2 py-1 w-max rounded-sm text-xs">
            Software Engineer
          </p>
          <h1 className="text-2xl sm:text-5xl">Danny Grimmig</h1>
        </div>
      </header>

      <div>
        <p>
          Hey👋 I am a software engineer looking to grow my knowledge in the
          space, and using this cite as a place to keep my notes in public.
        </p>
      </div>
    </main>
  );
}
