import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Pages/Contact/Contact';
import Landing from './Pages/Landing/Landing';
import {Routes,Route} from "react-router-dom";
import Projects from './Pages/Project/Projects';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
        <Routes>
            <Route path='/Varun-Portfolio' element={<Landing />}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/projects' element={<Projects/>}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
