

import React, { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task === "") return;
    setList([...list, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Simple To-Do App</h2>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {list.map((item, i) => (
          <li key={i}>
            {item}
            <button onClick={() => deleteTask(i)} style={{ marginLeft: 10 }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

// import React  from "react";
// import Child from "./Child";

// function Parent(){
//   const msg="abcdefghijklmnopqrstuvwx";
//   return(
//     <div>
//       <h1>Parent Comp</h1>
//       <Child sms={msg}/>
//     </div>
//   )
// }
// export default Parent;

// import React from 'react';
// import Child from './components/Child';

// function App() {
//   const handleData = (dataFromChild) => {
//     console.log('Received from child:', dataFromChild);
//   };

//   return (
//     <div>
//       <h1>Parent Component</h1>
//       <Child sendData={handleData} />
//     </div>
//   );
// }

// export default App;
