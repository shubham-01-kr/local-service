import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // <-- global navbar
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import Profile from "./pages/UserDashboard/Profile";
import BookService from "./pages/UserDashboard/BookService";
import MyBookings from "./pages/UserDashboard/MyBookings";
import ProviderDashboard from "./pages/ProviderDashboard/ProviderDashboard";
import AddService from "./pages/ProviderDashboard/AddService";
import ProviderBookings from "./pages/ProviderDashboard/Bookings";
import './style.css';
function App() {
  return (
    <Router>
      <Navbar /> {/* <-- Global navbar, sab pages me dikhega */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/user" element={<UserDashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="book-service" element={<BookService />} />
          <Route path="my-bookings" element={<MyBookings />} />
        </Route>

        <Route path="/provider" element={<ProviderDashboard />}>
          <Route path="add-service" element={<AddService />} />
          <Route path="bookings" element={<ProviderBookings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
