import Home from "./pages/Home";
import Register from "./pages/Register";
import Signin from "./pages/Signin";

import "./style.scss";

import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);

  // console.log(currentUser);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/Signin" />;
    }

    return children;
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="Signin" element={<Signin />} />
          <Route path="Register" element={<Register />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
