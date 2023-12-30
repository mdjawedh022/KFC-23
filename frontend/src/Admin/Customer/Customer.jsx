import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar/Navbar';
import { userDelete, usergetData } from '../../Redux/auth/action';
import "./customer.css";

const Customer = () => {
     const dispatch = useDispatch();
     const { users } = useSelector((state) => state.userReducer);
     console.log(users);
     useEffect(() => {
       dispatch(usergetData());
     }, [dispatch]);

     const handleDelete = (id) => {
       if (window.confirm("Are you sure you want to delete this admin user?")) {
         dispatch(userDelete(id));
       }
     };

  return (
    <div className="grid-container">
      <Navbar />
      <main className="main-container">
        <h2 className="admin-heading">Admin Users</h2>
        {users.length === 0 ? (
          <p>No admin users found</p>
        ) : (
          <div className="table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {users.map((User) => (
                  <tr key={User._id}>
                    <td>{User._id}</td>
                    <td>{User.name}</td>
                    <td>{User.email}</td>
                    <td>
                      <button onClick={() => handleDelete(User._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}

export default Customer
