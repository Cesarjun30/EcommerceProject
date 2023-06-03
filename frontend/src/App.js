import './App.css';
import './CSS/signup.css'
import './normalize.css'
import Header from './component/Header';
import { Outlet } from 'react-router-dom';
import Footer from './component/Footer';

function App() {
  return (
    <div className="app">
   <Header />
   <main>
    <Outlet/> 
   </main>
   <Footer />
    </div>
  );
}

export default App;
