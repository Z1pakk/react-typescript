import React, { FC, useEffect, useState } from 'react';
import { ITodo, IUser } from "../types/types";
import axios from "axios";
import UserItem from "./UserItem";
import List from "./List";
import { useNavigate } from "react-router-dom";

const UsersPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers();
    }, [])

    const fetchUsers = async () => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data);
        } catch (e) {
            alert(e)
        }
    }

    return (
        <List
            items={users}
            renderItem={(user: IUser) =>
                <UserItem key={user.id}
                          user={user}
                          onClick={(u) => navigate('/users/' + u.id)}
                />}
        />
    );
};

export default UsersPage;
