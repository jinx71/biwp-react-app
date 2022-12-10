import React, { useEffect, useState } from 'react';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from '../../../Firebase/Firebase.init';

import CreateModal from '../../Shared/CreateModal/CreateModal';

const Users = () => {
    const [showUpdate, setShowUpdate] = useState("")
    const [users, setUsers] = useState([])

    // Read Operation
    const fetchPost = async () => {
        await getDocs(collection(db, "users"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setUsers(newData);
            })

    }
    // Delete Operation
    const handleDeleteUser = async (id) => {
        console.log(id)
        try {
            await deleteDoc(doc(db, "users", id));
            console.log("Deleted")
        } catch (e) {
            console.log(e)
        }

    }


    const handleUpdateUser = async (e) => {
        e.preventDefault()
        // console.log(id)
        setShowUpdate("")
        console.log(showUpdate)
        const form = e.target
        const userEmail = form.userEmail.value;
        const userName = form.userName.value;
        console.log(userEmail, userName)
        const users = {
            userEmail: userEmail,
            userName: userName
        }
        const taskDocRef = doc(db, 'users', showUpdate)
        try {
            await updateDoc(taskDocRef, {
                users
            })
        } catch (err) {
            alert(err)
        }
    }


    useEffect(() => {
        fetchPost();
    }, [users])
    // updateUser("asdasd")
    return (
        <>
            <div className='min-h-screen'>
                <div className='flex justify-between items-center my-10'>
                    <h1 className='text-3xl'>Users Database CRUD Operation With Firestore</h1>
                    <label htmlFor="CreateModal" className='btn btn-primary'
                    >Create a new user</label>
                </div>
                <div className='grid grid-cols-3 lg:grid-col-3 gap-5'>
                    {
                        users.map(user => {
                            return (
                                <>
                                    <div className="card w-96 bg-base-100 shadow-xl">
                                        <div className="card-body">
                                            <h2 className="card-title">{user.users.userName}</h2>
                                            <p>{user.users.userEmail}</p>
                                            <div className="card-actions justify-end">
                                                <button className="btn btn-primary" onClick={() => setShowUpdate(user.id)}>Update</button>
                                                <button className="btn btn-primary" onClick={() => handleDeleteUser(user.id)}>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        showUpdate == user.id ? <div className="card bg-base-100 shadow-xl col-span-3">
                                            <div className="card-body">
                                                <h2 className="card-title">Update User</h2>
                                                <form onSubmit={handleUpdateUser}>
                                                    <div className="form-control">
                                                        <label className="label">
                                                            <span className="label-text dark:text-white">Enter User Name</span>
                                                        </label>
                                                        <input type="text" name="userName" placeholder="User Name" className="input input-bordered" />
                                                    </div>
                                                    <div className="form-control">
                                                        <label className="label">
                                                            <span className="label-text dark:text-white">Enter User Email</span>
                                                        </label>
                                                        <input type="email" name="userEmail" placeholder="User email" className="input input-bordered" />
                                                    </div>
                                                    {/* <div className="form-control modal-action mt-2">
                                                        <button><label htmlFor="CreateModal" className="btn btn-primary">Create</label></button>
                                                    </div> */}



                                                    <div className="card-actions justify-end form-control mt-2">
                                                        <button className="btn btn-primary" >Update</button>

                                                    </div>
                                                </form>
                                            </div>
                                        </div> : null
                                    }
                                </>
                            )
                        })
                    }
                </div>
            </div>
            <CreateModal></CreateModal>


        </>
    );
};

export default Users;