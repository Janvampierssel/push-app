import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import timeStampToDate from '@/utils/timeStampToDate';
import { ChallengeType } from '@/utils/fetchChallenges';
import Link from 'next/link';

type Props = {
  challenge: ChallengeType;
};

function getTimeStatus(challenge: ChallengeType) {
  const now = new Date();
  const startDate = timeStampToDate(challenge.startDate);
  const endDate = timeStampToDate(challenge.endDate);

  const dayDiff = Math.ceil(getDiffDays(now, startDate));

  if (now < startDate)
    return `Challenge starts in ${dayDiff === 1 ? '1 day' : dayDiff + ' days'}`;
  else if (now > endDate) return 'Challenge over';
  else return 'Challenge started';
}

function getDiffDays(date1: Date, date2: Date) {
  const diffInSeconds = date2.getTime() - date1.getTime();
  const diffInDays = diffInSeconds / 1000 / 60 / 60 / 24;

  return diffInDays;
}

export default function Challenge({ challenge }: Props) {
  const timeStatus = getTimeStatus(challenge);
  const startDate = timeStampToDate(challenge.startDate);
  const endDate = timeStampToDate(challenge.endDate);
  const durationDays = Math.floor(getDiffDays(startDate, endDate));

  return (
    <Link href={'challenges/' + challenge.id}>
      <Card className="w-full p-3 border-slate-200 flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <p className="small font-bold">{challenge.title}</p>
          <div className="flex-wrap">
            <Badge variant="outline" className="mr-1">
              Duration: {durationDays} Days
            </Badge>
            <Badge variant="outline" className="mr-1">
              {timeStatus}
            </Badge>
            <Badge variant="outline">
              {challenge.contestants.length} Contestants
            </Badge>
          </div>
        </div>
        <Button variant="neutral" size="sm" href={'challenges/' + challenge.id}>
          View
        </Button>
      </Card>
    </Link>
  );
}
