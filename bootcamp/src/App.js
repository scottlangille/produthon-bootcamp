import React, { useState } from 'react';
import './App.scss';
import Module from "./components/Module.js"
import ModuleDescription from "./components/ModuleDescription.js"
import CompleteButton from "./components/CompleteButton.js"

import data from "./data.json"

function App() {
  
  const [done, setDone] = useState({})
  const [currentActivity, setCurrentActivity] = useState(0)
  const [menuOpen, setMenuOpen] = useState(true)
  
  let menuStatus = "menu";
  if (menuOpen) menuStatus = "menu_open";

  const chooseModule = () => {
    if (window.innerWidth < 668) {
      setMenuOpen(false);
    }
  }

  const handleComplete = (id, isDone) => {
      let dict = done
      dict[id] = isDone
      setDone(dict)
  }

  let addMenuClass = "";
  if (!menuOpen) {
    addMenuClass = "menu-closed";
  }

  return (
    <main>
      <div className="container">
        <div className="left">
          <div className={"sidebar" + " " + addMenuClass}>
            <div className="topbar">
              <span className="material-icons hamburger" onClick={() => setMenuOpen(!menuOpen)}>{menuStatus}</span>
              <span className="logo">Produthon Bootcamp</span>
            </div>
            <div className="topbar-separator"></div>
            {data.activities.map(activity => <Module key={activity.id} Data={activity} Done={done[activity.id]} Click={() => {setCurrentActivity(activity.id); chooseModule(); document.cookie = "currentActivity="+activity.id; console.log(document.cookie)}} currentActivity={currentActivity} />)}
          </div>
        </div>
        <div className={"spacer "+menuStatus}></div>
        <ModuleDescription OnCheck={(id, isDone) => handleComplete(id, isDone)} Done={done[currentActivity]} Activity={data.activities[currentActivity]} />
      </div>
    </main>
  );
}

export default App;
