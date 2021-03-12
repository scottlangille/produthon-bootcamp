import React, { useState } from 'react';
import './App.css';
import Module from "./components/Module.js"
import ModuleDescription from "./components/ModuleDescription.js"
import CompleteButton from "./components/CompleteButton.js"

import data from "./data.json"
console.log(data);

function App() {
  
  const [done, setDone] = useState({})
  const [currentActivity, setCurrentActivity] = useState(0)

  const handleComplete = (id, isDone) => {
      let dict = done
      dict[id] = isDone
      setDone(dict)
  }

  return (
    <main>
      <div className="container">
        <div className="sidebar">
          {data.activities.map(activity => <Module key={activity.id} Data={activity} Done={done[activity.id]} Click={() => {setCurrentActivity(activity.id); document.cookie = "currentActivity="+activity.id; console.log(document.cookie)}} currentActivity={currentActivity} />)}
        </div>
        <ModuleDescription OnCheck={(id, isDone) => handleComplete(id, isDone)} Done={done[currentActivity]} Activity={data.activities[currentActivity]} />
      </div>
    </main>
  );
}

export default App;
