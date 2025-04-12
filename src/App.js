import './App.css';
import Nav from './Home/nav';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div >
      <Nav></Nav>
    <Outlet></Outlet></div>
  );
}
export default App;
