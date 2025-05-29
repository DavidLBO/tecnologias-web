import Home from './pages/Home'
import Perfil from './pages/Perfil'
import Login from './pages/Login'

function App() {
  const index = 1;
  return (
    <>
    {index == 1 && <Login/>}
    {index == 2 && <Home/>}
    {index == 3 && <Perfil/>}
    </>
  );
}

export default App;