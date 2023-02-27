// import './App.css';
// // import UploadPage from './pages/upload';

// function App() {
  //   return (
    //     <div className="app">
    //       <LoginPage />
    //     </div>
    //   );
    // }
    
    // export default App;
    
    
import ServicesPage from './pages/download_upload';
import LoginPage from './pages/login';
import { Route, Routes } from "react-router-dom";
import "./App.css";
 
function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/service' element={<ServicesPage />} />
    </Routes>
  );
}

export default App;
