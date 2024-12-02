import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export default function Challenge() {
  return (
    <Card className="w-full p-3 border-slate-200 flex justify-between items-center">
      <div className="flex flex-col gap-2">
        <p className="small font-bold">The Batty Boy Challenge</p>
        <div className="flex-wrap">
          <Badge variant="outline" className="mr-1">
            3000 Push-ups
          </Badge>
          <Badge variant="outline" className="mr-1">
            14 Days
          </Badge>
          <Badge variant="outline">4+ Contestants</Badge>
        </div>
      </div>
      <Button variant="neutral" size="sm" href="/challenges/1">
        View
      </Button>
    </Card>
  );
}
