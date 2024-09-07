// src/components/BulletPointInput.tsx
import React, { useState } from "react";

interface BulletPointInputProps {
  bulletPoints: string[];
  setBulletPoints: (bulletPoints: string[]) => void;
}

const BulletPointInput: React.FC<BulletPointInputProps> = ({
  bulletPoints,
  setBulletPoints,
}) => {
  const [input, setInput] = useState("");

  const addBulletPoint = () => {
    if (input.trim() !== "") {
      setBulletPoints([...bulletPoints, input]);
      setInput("");
    }
  };

  return (
    <div>
      <ul>
        {bulletPoints.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a bullet point"
      />
      <button onClick={addBulletPoint}>Add Bullet Point</button>
    </div>
  );
};

export default BulletPointInput;
