import React from 'react';
import {BrowserRouter, Route, Routes, NavLink} from "react-router-dom";

import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

const App = () => {

    return (
        <BrowserRouter>
            <div>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/todos'>Todos</NavLink>
            </div>
            <Routes>
                <Route path='/users' element={<UsersPage/>} />
                <Route path='/users/:id' element={<UserItemPage/>} />
                <Route path='/todos' element={<TodosPage/>} />
                <Route path='/todos/:id' element={<TodoItemPage/>} />
            </Routes>
        </BrowserRouter>
        // <div>
        //     <EventsExample />
        //     <Card onClick={(num) => console.log(num)} width='200px' height='200px' variant={CardVariation.outlined}>
        //         <button>Button</button>
        //         <div>test</div>
        //     </Card>
        // </div>
    );
};

export default App;
