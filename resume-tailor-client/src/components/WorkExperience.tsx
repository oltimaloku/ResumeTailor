// src/components/WorkExperience.tsx
import React, { useState } from "react";
import BulletPointInput from "./BulletPointInput";

interface WorkExperienceProps {
  index: number;
  removeWorkExperience: (index: number) => void;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({
  index,
  removeWorkExperience,
}) => {
  const [jobTitle, setJobTitle] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [location, setLocation] = useState("");
  const [bulletPoints, setBulletPoints] = useState<string[]>([]);

  return (
    <div>
      <h3>Work Experience #{index + 1}</h3>
      <input
        type="text"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
        placeholder="Job Title"
      />
      <input
        type="text"
        value={dateFrom}
        onChange={(e) => setDateFrom(e.target.value)}
        placeholder="Date From"
      />
      <input
        type="text"
        value={dateTo}
        onChange={(e) => setDateTo(e.target.value)}
        placeholder="Date To"
      />
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location"
      />
      <BulletPointInput
        bulletPoints={bulletPoints}
        setBulletPoints={setBulletPoints}
      />
      <button onClick={() => removeWorkExperience(index)}>
        Remove Work Experience
      </button>
    </div>
  );
};

export default WorkExperience;
