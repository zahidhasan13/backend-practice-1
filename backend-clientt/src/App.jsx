import { useEffect, useState } from 'react'
import './App.css'
import User from './User';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])


  const handleAddUser = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name, email};
    console.log(user);

    fetch('http://localhost:5000/users',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      const newUser = [...users, data];
      setUsers(newUser);
      form.reset();
    })
  }

  return (
    <>
      <div id="root">
        <h1 className='text-3xl font-bold underline'>Add User</h1>
        <form onSubmit={handleAddUser}>
          <input type="text" name="name" id="" className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'/>
          <br />
          <input type="email" name="email" id="" className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'/>
          <br />
          <input type="submit" value="Add User" className='w-full bg-green-500 py-2 rounded'/>
        </form>
        <div>
          {
            users.map(user => <User
            key={user.id}
            user = {user}
            ></User>)
          }
        </div>
      </div>
    </>
  )
}

export default App
