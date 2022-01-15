import React, {useEffect, useState} from 'react';
import Card, {CardVariation} from "./components/Card";
import UserList from "./components/UserList";
import {ITodo, IUser} from "./types/types";
import axios from "axios";
import List from "./components/List";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";

const App = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        fetchUsers();
        fetchTodos();
    }, [])

    const fetchUsers = async () => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data);
        } catch (e) {
            alert(e)
        }
    }

    const fetchTodos = async () => {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
            setTodos(response.data);
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>
            <Card onClick={(num) => console.log(num)} width='200px' height='200px' variant={CardVariation.outlined}>
                <button>Button</button>
                <div>test</div>
            </Card>
            <List
                items={users}
                renderItem={(user: IUser) => <UserItem key={user.id} user={user}/>}
            />
            <List
                items={todos}
                renderItem={(todo: ITodo) => <TodoItem key={todo.id} todo={todo}/>}
            />
        </div>
    );
};

export default App;
