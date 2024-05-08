import React from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export default function Challenge() {
  return (
    <Card className="w-full p-3 border-slate-200 flex justify-between items-center">
      <div className="flex flex-col gap-2">
        <p className="small font-bold">Roman&apos;s Challenge</p>
        <div className="flex gap-1">
          <Badge variant="outline">1000 Push-ups</Badge>
          <Badge variant="outline">3 Days</Badge>
          <Badge variant="outline">5 Contestants</Badge>
        </div>
      </div>
      <Button variant="neutral" size="sm">
        View
      </Button>
    </Card>
  );
}
