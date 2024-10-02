import {Navigate, Routes, Route } from 'react-router-dom';
import './style/App.css';
import Login from "./view/login/Login.tsx";
import MainBoard from "./layouts/MainBoard.tsx";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to='/login' />} />
        <Route path="/login" element={<Login />} />

        <Route path="/page" element={<MainBoard/>}>

        </Route>

      </Routes>
    </div>
  )
}

export default App
