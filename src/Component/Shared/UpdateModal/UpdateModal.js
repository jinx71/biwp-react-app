import { doc, updateDoc } from 'firebase/firestore';
import React from 'react';
import { db } from '../../../Firebase/Firebase.init';

const UpdateModal = ({ id }) => {
    console.log(id)
    const updateUser = async (id, e, user) => {
        e.preventDefault()
        console.log(id)
        const taskDocRef = doc(db, 'users')
        try {
            await updateDoc(taskDocRef, {
                userEmail: user.userEmail,
                userName: user.userName
            })
        } catch (err) {
            alert(err)
        }
    }
    return (
        <>
            <input type="checkbox" id="UpdateModal" className="modal-toggle" />
            <div className="modal" id="UserModal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">
                        Create a user
                    </h3>
                    <form onSubmit={() => updateUser(id)}>
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
                            <button><label htmlFor="UpdateModal" className="btn btn-primary">Create</label></button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default UpdateModal;