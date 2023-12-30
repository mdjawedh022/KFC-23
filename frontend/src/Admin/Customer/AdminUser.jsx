import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adminuserDelete, adminuserGet } from '../../Redux/AdminUser/action';
import Navbar from '../components/Navbar/Navbar';
import "./customer.css"

const AdminUser = () => {
    const dispatch=useDispatch();
    const { admin } = useSelector((state) => state.adminReducer);
console.log(admin)
    useEffect(()=>{
        dispatch(adminuserGet());
    },[dispatch])


const handleDelete = (id) => {
  if (window.confirm("Are you sure you want to delete this admin user?")) {
    dispatch(adminuserDelete(id));
  }
};

  return (
    <div className="grid-container">
      <Navbar />
      <main className="main-container">
        <h2 className="admin-heading">Admin Users</h2>
        {admin.length === 0 ? (
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
                {admin.map((adminUser) => (
                  <tr key={adminUser._id}>
                    <td>{adminUser._id}</td>
                    <td>{adminUser.name}</td>
                    <td>{adminUser.email}</td>
                    <td>
                      <button onClick={() => handleDelete(adminUser._id)}>
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
};

export default AdminUser;

