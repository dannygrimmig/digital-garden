import Image, { StaticImageData } from 'next/image';
import profile from '../../../public/profile-image.png';
import { Tag } from '../../ui/Tags/Tag';

const ProfileData = {
  name: 'Danny Grimmig',
  image: profile,
  tag: 'Software Engineer',
  bio: 'Hey👋 I am a software engineer looking to grow my knowledge in the space, and using this cite as a place to keep my notes in public.',
};

export default function Index() {
  return (
    <main className="p-2 sm:p-4 max-w-6xl m-auto">
      <ProfileHeader
        name={ProfileData.name}
        image={ProfileData.image}
        tag={ProfileData.tag}
      />

      <div>
        <p>{ProfileData.bio}</p>
      </div>
    </main>
  );
}

function ProfileHeader({
  name,
  image,
  tag,
}: {
  name: string;
  image: StaticImageData;
  tag: string;
}) {
  return (
    <header className="flex items-center gap-4 mb-4">
      <figure className="w-[50px] h-[50px] sm:h-[100px] sm:w-[100px] relative">
        <Image
          alt="Dannys Profile Photo"
          src={image}
          fill
          className="rounded-full"
          style={{ objectFit: 'cover' }}
        />
      </figure>

      <div className="flex flex-col">
        <Tag tag={tag} />
        <h1 className="text-3xl sm:text-5xl">{name}</h1>
      </div>
    </header>
  );
}
