import Container from "./components/Container";
import UserApp from "./components/UserApp";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <Container>
      <UserApp />
      <ToastContainer />
    </Container>
  );
}

export default App;
