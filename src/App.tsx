import React from 'react';
import Card, {CardVariation} from "./components/Card";

const App = () => {
    return (
        <div>
          <Card onClick={(num) => console.log(num)} width='200px' height='200px' variant={CardVariation.outlined}>
              <button>Button</button>
              awdawd
          </Card>
        </div>
    );
};

export default App;
