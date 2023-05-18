import React, { useEffect, useState } from "react";

//CSS
import "./App.css";

//PACKAGES
import axios from "axios";

const App = () => {
    //USER LIST STATE
    const [users, setUsers] = useState([]);

    //FETC USERS API
    const fetchUsers = async () => {
        const response = await axios.get("http://localhost:8080/users");
        setUsers(response.data);
    };

    useEffect(() => {
        fetchUsers();
    }, []);
    return (
        <section>
            <h1 className="title">Users List</h1>
            <div>
                {users?.map((user, index) => (
                    <h1
                        className="user"
                        key={index}
                    >
                        {user?.name}
                    </h1>
                ))}
            </div>
        </section>
    );
};

export default App;
