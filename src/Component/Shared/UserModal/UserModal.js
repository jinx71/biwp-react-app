import React, { useEffect, useState } from 'react';

const UserModal = ({ crudTypeName, createUsers, handleUpdateUser, handleDeleteUser, user }) => {
    const [pageInfo, setPageInfo] = useState({ pageTitle: "", btnText: "" })
    console.log(crudTypeName)
    console.log(user.id)
    useEffect(() => {
        if (crudTypeName == "create") {
            setPageInfo(
                {
                    // id: "",
                    pageTitle: "Create a new user",
                    btnText: "Create User",
                    // CRUDOperationType: createUsers
                }
            )

        }
        else if (crudTypeName == "update") {
            setPageInfo(
                {
                    // id: user.id,
                    pageTitle: "Update an user",
                    btnText: "Update User",
                    // CRUDOperationType: updateUsers
                }
            )
        }
        else if (crudTypeName == "delete") {
            setPageInfo(
                {
                    // id: user.id,
                    pageTitle: "Delete existing user",
                    btnText: "Delete User",
                    // CRUDOperationType: deleteUsers
                }
            )
        }
    }, [crudTypeName])
    console.log(pageInfo)
    return (
        <>
            <input type="checkbox" id="UserModal" className="modal-toggle" />
            <div className="modal" id="UserModal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{
                        pageInfo.pageTitle
                    }</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        {
                            crudTypeName == "update" ? <label htmlFor="UserModal" className="btn" onClick={() => handleUpdateUser(user.id)}>{pageInfo.btnText}</label> : crudTypeName == "delete" ? <label htmlFor="UserModal" className="btn" onClick={() => handleDeleteUser(user.id)}>{pageInfo.btnText}</label> : null
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserModal;