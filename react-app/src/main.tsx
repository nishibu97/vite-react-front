import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import Login from './pages/Login.tsx';
import AuthLayout from './components/layouts/AuthLayout.tsx';
import DashboardLayout from './components/layouts/DashboardLayout.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* ログイン前のルート（AuthLayout適用） */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>

        {/* ログイン後のルート（DashboardLayout適用） */}
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
