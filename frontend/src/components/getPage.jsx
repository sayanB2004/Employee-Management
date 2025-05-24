import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function getPage() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/get')
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })
  }, [])

  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete?");
    if (confirmed) {
      axios.delete(`http://localhost:8080/api/v1/delete/${id}`)
        .then(() => {
          alert('Employee deleted successfully');
          setData(prevData => prevData.filter(item => item.id !== id));
        })
        .catch((error) => {
          console.error('Error deleting employee:', error);
          alert('Error deleting employee');
        });
    }
  }

  return (
    <>
      <div className='h-20 max-w-full flex items-center py-5 font-extralight text-1xl tracking-wider '>
        <div className='shadow-2xl h-full w-100 flex items-center justify-center'>
          <h1>ID</h1>
        </div>
        <div className='shadow-2xl h-full w-100 flex items-center justify-center'>
          <h1>FIRST NAME</h1>
        </div>
        <div className='shadow-2xl h-full w-100 flex items-center justify-center'>
          <h1>LAST NAME</h1>
        </div>
        <div className='shadow-2xl h-full w-100 flex items-center justify-center'>
          <h1>EMAIL</h1>
        </div>
        <div className='shadow-2xl h-full w-100 flex items-center justify-center'>
          <h1>ACTIONS</h1>
        </div>
      </div>
      {
        data.map((item) => (
          <div className='h-20 max-w-full flex items-center py-5 font-medium text-1xl tracking-wider' key={item.id}>
            <div className='shadow-2xl h-full w-100 flex items-center justify-center'>{item.id}</div>
            <div className='shadow-2xl h-full w-100 flex items-center justify-center'>{item.firstname}</div>
            <div className='shadow-2xl h-full w-100 flex items-center justify-center'>{item.lastname}</div>
            <div className='shadow-2xl h-full w-100 flex items-center justify-center'>{item.email}</div>
            <div className='shadow-2xl h-full w-100 flex items-center justify-center text-violet-700 font-normal'>
              <Link to={`/edit/${item.id}`} className='hover:text-red-950'>edit</Link> /
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  handleDelete(item.id)
                }}
                className='hover:text-red-950'
              >
                delete
              </a>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default getPage
