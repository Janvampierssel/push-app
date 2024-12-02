'use client';

import { useState } from 'react';
import CircularSlider from '@fseehawer/react-circular-slider';
import { Button } from './ui/button';

const AddSlider = () => {
  let pushUps = 0;
  const [draggable, setDraggable] = useState(true);
  const [knobPosition, setKnobPosition] = useState(-0.49);

  const submit = async () => {
    // try {
    //   await bankPushUp(currentUser.displayName, pushUps);
    //   alert("Push-ups Banked!");
    //   window.location.reload();
    // }
    // catch(err) {
    //   alert("Error with submit: " + err);
    // }
    alert('Logged!');
  };

  const capSlider = (value: number) => {
    setDraggable(false);
    setKnobPosition((value % 10) - 0.49);
  };

  return (
    <div className="flex flex-col items-center gap-8 w-fit h-full justify-center">
      <CircularSlider
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

      <Button onClick={submit}>Bank</Button>
    </div>
  ); // Value change works on a non-continuous slider: https://github.com/fseehawer/react-circular-slider/issues/57
};

export default AddSlider;
