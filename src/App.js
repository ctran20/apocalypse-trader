import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home';
import Navigation from './routes/navigation/navigation';
import Authentication from './routes/authentication/authentication';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="shop" element={<h1>Leave now!</h1>} />
      </Route>
    </Routes>
  );
};

export default App;
