'use client';
import React, { useState } from 'react';
import Switch from '@mui/material/Switch';

const LightSwitchPage: React.FC = () => {
  // State to track the status of each light switch
  const [switches, setSwitches] = useState<{ room: string; isOn: boolean }[]>([
    { room: "Living Room", isOn: false },
    { room: "Bedroom", isOn: false },
    { room: "Kitchen", isOn: false },
  ]);

  // Function to toggle the state of a light switch at a given index
  const toggleSwitch = (index: number) => {
    setSwitches(prevSwitches => {
      const updatedSwitches = [...prevSwitches];
      updatedSwitches[index].isOn = !updatedSwitches[index].isOn;
      return updatedSwitches;
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Light Switches</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {switches.map((switchData, index) => (
          <div key={index} className="flex items-center justify-between bg-gray-200 p-4 rounded-lg shadow-md">
            <span className="text-lg font-semibold">{switchData.room}</span>
            <Switch
              checked={switchData.isOn}
              onChange={() => toggleSwitch(index)}
              inputProps={{ 'aria-label': 'controlled' }}
              color="primary"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LightSwitchPage;
