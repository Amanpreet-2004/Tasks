import React , {useState} from 'react';

function Task(){

    const [list, setList] = useState([]);
    const [task, setTask] = useState('');

    const addTask = () => {
        if (task === '') return;
        setList([...list, task]);
        setTask("");
    };


    const delTask = (index) => {
        const newList = [...list];
        newList.splice(index, 1);
        setList(newList)
    };
    return(
        <div>
            <h1>tasks lists</h1>
            <input value={task} onChange={(e) => setTask(e.target.value)} placeholder='enter task'/>
        <button onClick={addTask}>Add</button>

        <ul>
            {list.map((item, i)=>
            <li key ={i}>
                {item}
                <button onClick={()=> delTask(i)}>Delete</button>
            </li>)}
        </ul>
        </div>
    )

}
export default Task;
