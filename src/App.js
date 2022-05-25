// import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import NotFound from "./Pages/NotFound/NotFound";
import Inventory from "./Pages/Inventory/Inventory";
import AddingItems from "./Pages/Inventory/AddingItems/AddingItems";
import ItemDetail from "./Pages/Inventory/ItemDetail/ItemDetail";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/inventory/:inventoryId' element={<ItemDetail></ItemDetail>}></Route>
        <Route path='/adding_items' element={<AddingItems></AddingItems>}></Route>

        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
