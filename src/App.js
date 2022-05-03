import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import Manage from './components/Manage/Manage';
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header/Header';
import Notfound from './components/Notfound/Notfound';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route path="/Inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/Manage" element={<Manage></Manage>}></Route>
        <Route path="/Blogs" element={<Blogs></Blogs>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
