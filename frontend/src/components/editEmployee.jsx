import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditEmployee = () => {
    const { id } = useParams(); 

    const [employee, setEmployee] = useState({
        id: '',
        firstname: '',
        lastname: '',
        email: ''
    });

    
    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/employee/${id}`)
            .then(res => res.json())
            .then(data => {
                setEmployee(data); // assuming the API returns { id, firstname, lastname, email }
            })
            .catch(err => console.error("Failed to load employee:", err));
    }, [id]);

    const handleChange = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // ✅ Add id before PUT, if not already in state
        const employeeWithId = { ...employee, id };

        fetch(`http://localhost:8080/api/v1/put/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(employeeWithId)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Employee updated successfully');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Error updating employee');
        });
    };

    return (
        <div className='w-full h-150 my-20 flex items-center justify-center'>
            <div className='h-full w-200 bg-amber-95 shadow-2xl border-b-0.5 flex items-center justify-center'>
                <div className='px-8 py-8'>
                    <div className='font-thin text-2xl tracking-wider text-black'>
                        <h1>EDIT EMPLOYEE</h1>
                    </div>
                    <div className='items-center justify-center h-14 w-full my-4'>
                        <label className='block text-black-200 text-sm font-normal'>First Name</label>
                        <input type="text" name='firstname' className='shadow my-2 w-80' value={employee.firstname} onChange={handleChange} />
                    </div>
                    <div className='items-center justify-center h-14 w-full my-4'>
                        <label className='block text-black-200 text-sm font-normal'>Last Name</label>
                        <input type="text" name='lastname' className='shadow my-2 w-80' value={employee.lastname} onChange={handleChange}/>
                    </div>
                    <div className='items-center justify-center h-14 w-full my-4'>
                        <label className='block text-black-200 text-sm font-normal'>Email</label>
                        <input type="email" name='email' className='shadow my-2 w-80' value={employee.email} onChange={handleChange} />
                    </div>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleSubmit}>
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditEmployee;
