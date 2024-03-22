import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/admin/LoginPage";
import DashboardPage from "./pages/admin/DashboardPage";
import HomePage from "./pages/client/HomePage";
function App() {
  const admintoken = localStorage.getItem("admintoken");
  return (
    <Router>
      <Routes>
        {/* ADMIN ROUTES */}
        <Route
          path="/admin-login"
          element={admintoken ? <Navigate to="/admin" /> : <LoginPage />}
        />
        <Route
          path="/admin"
          element={
            admintoken ? <DashboardPage /> : <Navigate to="/admin-login" />
          }
        />
        <Route
          path="/"
          element={
            <HomePage />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
