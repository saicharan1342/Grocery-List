// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() {

  const [item, setitem] = useState([]);

  const handle = (id) => {
    const updatedItems = item.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setitem(updatedItems);
  };

  const remove = (id) => {
    const updatedItems = item.filter((item) => item.id !== id);

    const updatedItemsWithNewIds = updatedItems.map((item, index) => ({
      ...item,
      id: index + 1,
    }));

    localStorage.setItem('Slist', JSON.stringify(updatedItemsWithNewIds));
    setitem(updatedItemsWithNewIds);
  };

  const cret = () => {
    const newItem = {
      id: item.length + 1,
      checked: false,
      name: document.getElementById('nmae').value,
    };

    setitem([...item, newItem]);
    localStorage.setItem('Slist', JSON.stringify([...item, newItem]));
  };

  return (
    <div className="App">
      <Header title='Grocery list'/>
      <Content 
      item={item}
      handle={handle}
      remove={remove}
      cret={cret}
      />
      <Footer />
    </div>
  );
}

export default App;
