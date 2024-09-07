// src/App.tsx
import React, { useState } from "react";
import "./App.css";
import WorkExperience from "./components/WorkExperience";
import Project from "./components/Project";

function App() {
  const [workExperiences, setWorkExperiences] = useState<number[]>([]);
  const [projects, setProjects] = useState<number[]>([]);

  const addWorkExperience = () => {
    setWorkExperiences([...workExperiences, workExperiences.length]);
  };

  const removeWorkExperience = (index: number) => {
    setWorkExperiences(workExperiences.filter((_, i) => i !== index));
  };

  const addProject = () => {
    setProjects([...projects, projects.length]);
  };

  const removeProject = (index: number) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Resume Input System</h1>

      <section>
        <h2>Work Experience</h2>
        {workExperiences.map((_, index) => (
          <WorkExperience
            key={index}
            index={index}
            removeWorkExperience={removeWorkExperience}
          />
        ))}
        <button onClick={addWorkExperience}>Add Work Experience</button>
      </section>

      <section>
        <h2>Projects</h2>
        {projects.map((_, index) => (
          <Project key={index} index={index} removeProject={removeProject} />
        ))}
        <button onClick={addProject}>Add Project</button>
      </section>
    </div>
  );
}

export default App;
