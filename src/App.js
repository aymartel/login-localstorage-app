import './App.css';
import { HomePage } from './pages/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ADMIN, HOME, LOGIN, LOGOUT, PRIVATE } from './routes/path';
import { PrivatePage } from './pages/private';
import { LoginPage } from './pages/login';
import { LogoutPage } from './pages/logout';
import AuthContextProvider from './contexts/authContext';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import { AdminPage } from './pages/admin';

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path={HOME} element={<PublicRoute/>}>
            <Route index element={<HomePage />} />
            <Route path={LOGIN} element={<LoginPage />} />
          </Route>
          <Route path={PRIVATE} element={<PrivateRoute/>}>
            <Route index element={<PrivatePage />} />
            <Route path={ADMIN} element={<AdminPage />} />
            <Route path={LOGOUT} element={<LogoutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
