import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../../../Firebase/Firebase.init';

const CreateModal = () => {
    // const [user, setUser] = useState({ userName: "", userEmail: "" })
    const addUser = async (e) => {
        e.preventDefault();
        const user = {}
        const form = e.target
        user.userName = form.userName.value;
        user.userEmail = form.userEmail.value;
        // console.log(form.userName.value)

        try {
            console.log(user)
            const docRef = await addDoc(collection(db, "users"), {
                users: user,
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (
        <>
            <input type="checkbox" id="CreateModal" className="modal-toggle" />
            <div className="modal" id="UserModal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">
                        Create a user
                    </h3>
                    <form onSubmit={addUser}>
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
                        <div className="form-control modal-action mt-2">
                            <button><label htmlFor="CreateModal" className="btn btn-primary">Create</label></button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CreateModal;