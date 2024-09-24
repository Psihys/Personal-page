import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import AppRoutes from './Components/Routes/Routes';
import SideBar from './Components/SideBar/SideBar';
import './Styles/App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      
      <div className='container'>
      <SideBar/>
      <AppRoutes />
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;
