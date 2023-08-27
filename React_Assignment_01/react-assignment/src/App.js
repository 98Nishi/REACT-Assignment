
import React from 'react';
import Person from './component/Person/Person';
import Button from './component/Button/Button';
import Header from './component/Header/Header';
import List from './component/List/List';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div className="App">
      <Header title="Components" />
      <Person name="Nisha" age={23} />
      <Button text="Click Me" onClick={handleClick} />
      <List items={items} />
    </div>
  );
}

export default App;
