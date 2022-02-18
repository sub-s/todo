import { useState } from "react";
import Layout from './Layout/Layout';
import Btn from './Components/Btn';
import Input from "./Components/Input";
import Item from "./Components/Item";

import './App.css';

function App() {

  const [currentText, setCurrentText] = useState('');
  const [itemList, setItemList] = useState([]);

  const onChangeText = (e) => {
    setCurrentText(e.target.value) ; 
    console.log(setCurrentText);
  }

  const handleBtn = (e) => {
    e.preventDefault();
    if(currentText === ''){
      return;
    }
    
    setCurrentText('');
    setItemList( (arr) => [currentText, ...arr])    
  }

  // const itemList = [
  //   {id: 0, title : '할일 목록 1'},
  //   {id: 1, title : '할일 목록 2'},
  //   {id: 2, title : '할일 목록 3'},
  // ]

  return (
    <Layout>
        <h1>Todo List</h1>
        <div className="top">
          <form onSubmit={handleBtn}>
            <Input
              onChange={onChangeText} 
              value={currentText}
            />
            <Btn type="submit">버튼 클릭</Btn>
          </form>
        </div>
        <Item>
          <ul>
            {itemList.map( ( item, index ) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Item>

        
        
    </Layout>
  );
}

export default App;
