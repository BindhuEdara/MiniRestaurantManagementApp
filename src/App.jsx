import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/login" />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin/dashboard' element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }/>
      </Routes>
      </BrowserRouter>
  )
}

export default App
