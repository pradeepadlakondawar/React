import React, { useState } from 'react';

const UserProfile = () => {
    // Illustrate a scenario where using multiple state variables is beneficial, and provide a code snippet demonstrating their implementation.

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const [tasks, setTask] = useState([])


    // handling the mulitiple state change at singlr function

    const handleUserUpdate =() => {

        // we can fetch data from api also as of now we are taking manual input
        setName("Pradeep")
        setEmail("pradeep@gmail.com")
    }

    const handleAddTask =() => {
        // console.log("hello world")
       const taskValue= prompt("enter you task");
       setTask([...tasks, taskValue])

       console.log(tasks)
    }

  return (
    <div>
      <h2>User Information</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <button onClick={handleUserUpdate}>Update User</button>

      <h2>Task List {tasks.length - 1}</h2>
      <ul>
        {tasks.map((task, index)=> (<li key={index}>{task}</li>))}
      </ul>
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default UserProfile;
