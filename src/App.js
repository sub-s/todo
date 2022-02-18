import { useState } from "react";
import Layout from './Layout/Layout';
import Btn from './Components/Btn';

import './App.css';

function App() {


  const [currentText, setCurrentText] = useState('');


  const onChangeText = (e) => setCurrentText(e.target.value);

  console.log(onChangeText, ":::::::::::::::: 브랜치 dev생성");

  const handleBtn = (e) => {
    
    e.preventDefault();
    
    console.log(currentText);
    setCurrentText('');
    
  }

  return (
    <Layout>
        <h1>Todo List</h1>
        <div className="top">
          <form action="">
            <input
              onChange={onChangeText} 
              value={currentText}
              type='text'
            />
            <Btn onClick={handleBtn}>버튼 클릭</Btn>
          </form>
        </div>
        
    </Layout>
  );
}

export default App;
