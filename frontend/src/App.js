import "./App.css";
import "./CSS/signup.css";
import "./normalize.css";
import Header from "./component/Header";
import { Outlet } from "react-router-dom";
import Footer from "./component/Footer";
import toast, { Toaster } from "react-hot-toast";

function App() {
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
