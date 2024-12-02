import CrownIcon from '@/icons/CrownIcon';
import ProfilePicture from '@/icons/ProfilePicture';
import Image from 'next/image';

export default function PlayerCard({
  name = 'No name',
  pushups = 0,
  imageUrl,
  index,
}: {
  name: string;
  pushups: number;
  imageUrl?: string;
  index?: number;
}) {
  return (
    <div className="min-h-14 flex justify-between w-full rounded-md border border-slate-200 items-center px-3">
      <div className="flex gap-2 items-center">
        {index !== undefined && (
          <span
            className={`w-[18px] ${
              index === 0 ? 'text-primary' : 'text-slate-400'
            }`}
          >{`#${index + 1}`}</span>
        )}
        <div className="w-8 h-8 flex justify-center items-center rounded-full relative">
          {index === 0 && (
            <CrownIcon className="absolute -top-3.5 left-2 rotate-[15deg]" />
          )}
          {imageUrl ? (
            <Image src={imageUrl} alt="profile picture" />
          ) : (
            <ProfilePicture />
          )}
        </div>
        {name}
      </div>
      {pushups}
    </div>
  );
}