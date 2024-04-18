import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

const TodoList = () => {
  const [todo, setTodo] = useState('');
  const [age, setAge] = useState('');
  const [roll, setRoll] = useState('');
  const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   getData();
  // }, []);

  function create() {
    axios.post('http://localhost:5000/posting', { todo, age, roll })
      .then(() => {
        alert('Data has been posted');
        setTodo('');
        setAge('');
        setRoll('');
        getData(); 
      })
      .catch(() => {
        alert('Data has not been posted');
      });
  }

  function getData() {
    axios.get('http://localhost:5000/posting')
      .then((response) => {
        // const modifiedData = response.data.map(item => ({
          // id: item.id,
          // todo: item.todo,
          // age: item.age,
          // roll: item.roll,
          // ...item,
          // // formattedData: `${item.todo} ${item.age} ${item.roll}`
          // formattedData: `Name: ${item.todo} | Age: ${item.age} | Roll: ${item.roll}`
        // }));
        // setTodos(modifiedData);
        setTodos(response.data);
      })
      .catch(() => {
        alert('Content retrieval Failed');
      });
  }

  function updateTodo(id, object) {
    axios.put(`http://localhost:5000/posting/${id}`, object)
      .then(() => {
        alert('Data has been updated');
        getData(); 
      })
      .catch(() => {
        alert('Data cannot be changed');
      });
  }

  function deleteTodo(id) {
    axios.delete(`http://localhost:5000/posting/${id}`)
      .then(() => {
        alert('Data has been deleted');
        getData();
      })
      .catch(() => {
        alert('Data cannot be changed');
      });
  }

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <TextField id="outlined-basic" label="Todo" variant="outlined" value={todo} onChange={(e) => setTodo(e.target.value)} />
        <TextField id="outlined-basic" label="Age" variant="outlined" value={age} onChange={(e) => setAge(e.target.value)} />
        <TextField id="outlined-basic" label="RollNumber" variant="outlined" value={roll} onChange={(e) => setRoll(e.target.value)} />
        <br />
      </div>
      <Button variant="outlined" onClick={create}>Post</Button>
      <ol>
        {todos.map((item) => (
          <li key={item.id}>
            {/* {item.formattedData} */}
            Name: {item.todo} | Age: {item.age} | Roll: {item.roll}
            <Button onClick={() => {
              const newData = prompt('Enter the new data');
              const newAge = prompt('Enter the new age');
              const newRoll = prompt('Enter the new roll number');

              if (newData === null) {
                alert('Please enter new data');
              } else {
                const updatedObject = { todo: newData, age: newAge, roll: newRoll };
                updateTodo(item.id, updatedObject);
              }
            }}>Edit</Button>
            <Button onClick={() => deleteTodo(item.id)}>Delete</Button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
