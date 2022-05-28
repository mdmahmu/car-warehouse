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
import RequireAuth from "./Pages/Shared/RequireAuth/RequireAuth";
import MyItems from "./Pages/MyItems/MyItems";
import Blogs from "./Pages/Blogs/Blogs";
import About from "./Pages/About/About";


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>

        <Route path='/inventory/:inventoryId' element={
          <RequireAuth>
            <ItemDetail></ItemDetail>
          </RequireAuth>}>
        </Route>

        <Route path='/adding_items' element={
          <RequireAuth>
            <AddingItems></AddingItems>
          </RequireAuth>}>
        </Route>

        <Route path='/my_items' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>}>
        </Route>

        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
