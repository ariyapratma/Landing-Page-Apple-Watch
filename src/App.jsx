import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Iwatch from "./components/IWatch/IWatch";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/iwatch" />} />
        <Route path="/iwatch" element={<Iwatch />} />
      </Routes>
    </Router>
  );
}

export default App;
