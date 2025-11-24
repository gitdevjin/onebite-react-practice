import { Outlet, Route, Routes } from 'react-router';
import './App.css';
import IndexPage from './pages/index-page';
import SignUpPage from './pages/sign-up-page';
import SignInPage from './pages/sign-in-page';

function AuthLayout() {
   return (
      <div>
         <header>auth header</header>
         <Outlet />
      </div>
   );
}

function App() {
   return (
      <Routes>
         <Route path="/" element={<IndexPage />} />
         <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
         </Route>
      </Routes>
   );
}
export default App;
