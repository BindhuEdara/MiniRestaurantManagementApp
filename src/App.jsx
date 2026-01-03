
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Admin from './admin/dashboard/Admin';
import ProtectedRoute from './pages/ProtectedRoute';
import Customer from './customer/dashboard/Customer';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/login" />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin/dashboard' element={
          // <ProtectedRoute>
            <Admin />
            // </ProtectedRoute>
           }
        />
        <Route path='/customer/dashboard' element={<Customer />} />
      </Routes>
      </BrowserRouter>
  )
}

export default App
