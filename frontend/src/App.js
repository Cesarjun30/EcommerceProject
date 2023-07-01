import "./App.css";
import "./CSS/signup.css";
import "./CSS/newproduct.css"
import "./CSS/cart.css"
import "./CSS/cartproducts.css"
import "./normalize.css";
import "./CSS/offers.css"
import Header from "./component/Header";
import { Outlet } from "react-router-dom";
import Footer from "./component/Footer";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { setDataProduct } from "./redux/productSlice";
import { useDispatch, useSelector } from "react-redux";


function App() {
  const dispatch = useDispatch()
  const productData = useSelector((state)=> state.product)
  
  useEffect(() =>{
 (async()=>{
const  res = await fetch(`${process.env.REACT_APP_SERVER_DOMIN }/product`)
const resData = await res.json()
console.log(resData)
dispatch(setDataProduct(resData))
 })()

  }, [])
  //console.log(productData)
  return (
    <> 
       

      <Toaster
         containerStyle={{
    top: 10,
    left: 500,
    bottom: 20,
    right: 20,
  }}

        toastOptions={{
    className: 'toast',
    style: {
      border: '1px solid white',
      padding: '12px',
      color: '#45de89',
      font:"normal normal 1.4rem Poppins",
      background: "#555",
      left: "200px"
    },
  }}
      />
      <div className="app">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
