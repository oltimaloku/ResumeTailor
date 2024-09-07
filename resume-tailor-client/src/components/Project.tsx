// src/components/Project.tsx
import React, { useState } from "react";
import BulletPointInput from "./BulletPointInput";

interface ProjectProps {
  index: number;
  removeProject: (index: number) => void;
}

const Project: React.FC<ProjectProps> = ({ index, removeProject }) => {
  const [projectName, setProjectName] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [bulletPoints, setBulletPoints] = useState<string[]>([]);

  return (
    <div>
      <h3>Project #{index + 1}</h3>
      <input
        type="text"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        placeholder="Project Name"
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
      <BulletPointInput
        bulletPoints={bulletPoints}
        setBulletPoints={setBulletPoints}
      />
      <button onClick={() => removeProject(index)}>Remove Project</button>
    </div>
  );
};

export default Project;
