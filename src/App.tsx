import React from 'react';
import Card, {CardVariation} from "./components/Card";
import UserList from "./components/UserList";
import {IUser} from "./types/types";

const App = () => {
    const users: IUser[] = [
        {id: 1, name: 'Vlad', email: "awdawd@gmail.com", address: {city: 'Rivne', street: 'Soborna', zipcode: '33028'}},
        {id: 2, name: 'Test', email: "test@gmail.com", address: {city: 'Rivne', street: 'Soborna2', zipcode: '33067'}}
    ]

    return (
        <div>
          <Card onClick={(num) => console.log(num)} width='200px' height='200px' variant={CardVariation.outlined}>
              <button>Button</button>
              <div>test</div>
          </Card>
          <UserList users={users}/>
        </div>
    );
};

export default App;
