import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import Manage from './components/Manage/Manage';
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header/Header';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/" element={<Inventory></Inventory>}></Route>
        <Route path="/" element={<Manage></Manage>}></Route>
        <Route path="/" element={<Blogs></Blogs>}></Route>
      </Routes>
    </div>
  );
}

export default App;
