import React from 'react';

const Users = () => {
    return (
        <div>
            <div className='flex justify-between items-center my-10'>
                <h1 className='text-3xl'>Users Database CRUD Operation With Firestore</h1>
                <button className='btn btn-primary'>Add a new user</button>
            </div>
            <div className="overflow-x-auto my-10">
                <table className="table w-full" >

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>
                                <div className="btn-group">
                                    <button className="btn btn-active">Delete</button>
                                    <button className="btn">Edit</button>
                                </div>
                            </td>
                        </tr>

                        <tr className="hover">
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>

                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;