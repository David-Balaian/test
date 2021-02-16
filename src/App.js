import logo from './logo.svg';
import style from './App.module.css';
import Panel from "./tabs/leftPanel/panel"
import Courses from "./tabs/courses/courses"
import { useSelector } from 'react-redux';

function App() {
  const selectedPanel = useSelector(s=>s.selectedPanel)
  return (
   <div className={style.container}>
     <Panel />
     {selectedPanel === "dashboard" ? 
     <Courses /> :
      null
    }
   </div>
  );
}

export default App;
