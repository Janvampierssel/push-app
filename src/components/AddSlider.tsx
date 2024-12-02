'use client';

import { useState } from 'react';
import CircularSlider from '@fseehawer/react-circular-slider';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { useUser } from '@/lib/firebase-auth';
import { bankPushUp } from '@/utils/bankPushUp';
import Confetti from 'react-dom-confetti';

const AddSlider = ({ className }: { className?: string }) => {
  let pushUps = 0;
  const [draggable, setDraggable] = useState(true);
  const [knobPosition, setKnobPosition] = useState(-0.49);
  const [resetKey, setResetKey] = useState(0);
  const [loading, setLoading] = useState(false);
  const user = useUser();

  // Confetti
  const [isExploding, setIsExploding] = useState(false);
  function handleExplosion() {
    setIsExploding(true);
    setTimeout(() => {
      setIsExploding(false);
    }, 10);
  }
  const confettiConfig = {
    colors: ['#f36c36', '#d25827', '#f29d41', '#ff9524'],
    startVelocity: 30,
    dragFriction: 0.09,
  };

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
      pushUps > 0 && handleExplosion();
      setLoading(false);
      setResetKey(resetKey + 1);
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
        label="Push ups"
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

      <div className="absolute right-1/2 left-1/2 bottom-1/2">
        <Confetti active={isExploding} config={confettiConfig} />
      </div>

      <Button onClick={handleBank} disabled={loading}>
        {loading ? 'Banking...' : 'Bank'}
      </Button>
    </div>
  ); // Value change works on a non-continuous slider: https://github.com/fseehawer/react-circular-slider/issues/57
};

export default AddSlider;
