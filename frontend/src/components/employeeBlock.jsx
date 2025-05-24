import React, { useState } from 'react'

const EmployeeBlock = () => {

    const [Employee, setEmployee] = useState(
        {
            "id": "",
            "firstname" : "",
            "lastname" : "",
            "email" : "",
        }
    )

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({
            ...Employee,
            [name]: value
        });
    }

    const saveEmployee = () => {
        console.log(Employee);
        fetch("http://localhost:8080/api/v1/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Employee)
        })
        .then(response =>
            response.json()
        )
        .then(data => {
            console.log("Success:", data);
            alert("Employee added successfully");
        })
        .catch((error) => {
            console.error("Error:", error);
            alert("Error adding employee");
        });
    }

  return (
    <div className='flex max-w-2xl mx-auto shadow-2xl border-b-0.5 my-20'>
        <div className='px-8 py-8'>
            <div className='font-thin text-2xl tracking-wider'>
                <h1>Add New Employee</h1>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal '>
                    First Name   
                </label>
                <input type="text" name='firstname' value={Employee.firstname} className='shadow my-2 w-80' onChange={handleChange}>
                </input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal '>
                    Last Name     
                </label>
                <input type="text" name='lastname' value={Employee.lastname}  className='shadow my-2 w-80' onChange={handleChange}>
                </input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal '>
                    Email   
                </label>
                <input type="text" name='email' value={Employee.email} className='shadow my-2 w-80' onChange={handleChange}>
                </input>
            </div>
            <div className='items-center justify-center h-14 w-full my-6'>
                <button onClick={saveEmployee}
                className="rounded text-white font-semibold bg-green-400 py-2 px-6 hover:bg-green-800 ">Save</button>
                <button className="rounded text-white font-semibold bg-red-400 py-2 px-6 mx-4 hover:bg-red-800">Clear</button>
            </div>
            

        </div>
    </div>
  )
}

export default EmployeeBlock;