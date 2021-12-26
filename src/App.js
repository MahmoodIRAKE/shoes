
import './App.css';
import Error from './pages/404';
import Navbar from './commponents/menu/menu';
import ProductForm from './commponents/froms/productForm';
import MainPage from './pages/mainPage';
import Sucess from './pages/sucess';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar/>
        <Routes>
        <Route path="/" exact element={<MainPage/>}/>
        <Route path="/product" element={<ProductForm/>} />
        <Route path="/product/:id" element={<ProductForm/>}/> 
        <Route path="/sucess" element={<Sucess/>}/> 
        <Route path="/*" element={<Error/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
