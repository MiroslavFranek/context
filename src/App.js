import React,{ useState} from 'react';
import ColorSchemaChanger from "./components/ColorSchemaChanger/ColorSchemaChanger.jsx"
import NavBar from './components/NavBar/NavBar.jsx';
import Block from './components/Block/Block.jsx';
import './App.css';

export const ThemeContext = React.createContext();
function App() {
  const[colorSchema,setColorSchema] = useState("midnightblue")
  return (
    <ThemeContext.Provider value={colorSchema}>
      <NavBar/>
      <Block/>
      <Block/>
      <Block/>
      <ColorSchemaChanger setColorSchema={setColorSchema}/>
    </ThemeContext.Provider>
  );
}

export default App;
