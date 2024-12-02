'use client';

import { useState } from 'react';
import CircularSlider from '@fseehawer/react-circular-slider';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { useUser } from '@/lib/firebase-auth';
import { bankPushUp } from '@/utils/bankPushUp';

const AddSlider = ({ className }: { className?: string }) => {
  let pushUps = 0;
  const [draggable, setDraggable] = useState(true);
  const [knobPosition, setKnobPosition] = useState(-0.49);
  const [resetKey, setResetKey] = useState(0);
  const [loading, setLoading] = useState(false);
  const user = useUser();

  async function handleBank() {
    if (!user) {
      alert('Please log in first!');
      return;
    }
    if (pushUps === 0) {
      alert('Do some push ups first you lazy f***!');
      return;
    }

    setLoading(true);
    try {
      await bankPushUp(user.uid, pushUps);
    } catch (error) {
      console.error('Error banking pushups: ', error);
    } finally {
      pushUps = 0;
      setKnobPosition(-0.49);
      setResetKey(resetKey + 1);
      setLoading(false);
    }
  }

  const capSlider = (value: number) => {
    setDraggable(false);
    setKnobPosition((value % 10) - 0.49);
  };

  return (
    <div
      className={cn(
        'flex flex-col items-center gap-8 w-fit h-full justify-center',
        className
      )}
    >
      <CircularSlider
        key={resetKey}
        label="of 200"
        labelColor="coral"
        knobColor="#EB670F"
        progressColorFrom="#f69e39"
        progressColorTo="#f6ba39"
        min={-100}
        max={200}
        continuous={{
          enabled: true,
          clicks: 10,
          interval: 1,
        }}
        labelBottom={true}
        width={200}
        progressSize={25}
        knobSize={60}
        trackColor="#eeeeee"
        trackSize={20}
        initialValue={0}
        trackDraggable={false}
        dataIndex={knobPosition}
        knobDraggable={draggable}
        onChange={(value: number) => {
          pushUps = value;
          value >= 200 && capSlider(value);
        }}
        isDragging={(dragging: boolean) => {
          !dragging && setDraggable(true);
        }}
      >
        {' '}
      </CircularSlider>

      <Button onClick={handleBank} disabled={loading}>
        {loading ? 'Banking...' : 'Bank'}
      </Button>
    </div>
  ); // Value change works on a non-continuous slider: https://github.com/fseehawer/react-circular-slider/issues/57
};

export default AddSlider;
