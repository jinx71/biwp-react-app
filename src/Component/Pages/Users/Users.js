import React, { useEffect } from 'react';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from '../../../Firebase/Firebase.init';
const Users = () => {
    const addUser = async (e) => {
        e.preventDefault();
        const users = {
            userEmail: "b@c.com",
            userName: "Alan Turing"
        }
        try {
            const docRef = await addDoc(collection(db, "users"), {
                users: users,
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const fetchPost = async () => {

        await getDocs(collection(db, "users"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                console.log(newData);
                // console.log(todos, newData);
            })

    }
    const handleDeletingTicket = async (id) => {
        try {
            await deleteDoc(doc(db, "users", id));
            console.log("Deleted")
        } catch (e) {
            console.log(e)
        }

    }
    const handleEditingTicketInList = async (ticketToEdit) => {
        const ticketRef = doc(db, "tickets", ticketToEdit.id);
        await updateDoc(ticketRef, ticketToEdit);
    }
    const handleUpdate = async (e) => {
        e.preventDefault()
        const taskDocRef = doc(db, 'users', id)
        try {
            await updateDoc(taskDocRef, {
                userEmail: "c@d.com",
            })
        } catch (err) {
            alert(err)
        }
    }
    useEffect(() => {
        fetchPost();
    }, [])

    return (
        <div className='min-h-screen'>
            <div className='flex justify-between items-center my-10'>
                <h1 className='text-3xl'>Users Database CRUD Operation With Firestore</h1>
                <button className='btn btn-primary' onClick={addUser}>Add a new user</button>
            </div>
            <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full">
                                <thead class="bg-white border-b">
                                    <tr>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            #
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            First
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Last
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Handle
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Mark
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Otto
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <div className="btn-group">
                                                <button className="btn btn-active" onClick={() => { handleDeletingTicket("8QmAsrTIZceUfNzBWlON") }}>Delete</button>
                                                <button className="btn" onClick={() => { handleUpdate("8QmAsrTIZceUfNzBWlON") }}>Edit</button>
                                                {/* <button className="btn">Button</button> */}
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Jacob
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Thornton
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            @fat
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Larry
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Wild
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            @twitter
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;