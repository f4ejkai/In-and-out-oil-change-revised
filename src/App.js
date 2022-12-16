import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { BestPrices } from "./pages/best-prices/BestPrices";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { Bookings } from "./pages/bookings/Booking";
import { Header } from "./components/Header";
import { ProtectedRoute } from "./auth/protected.route";

function App() {
  return (
    <>
      <div id={"bg"}></div>
      <div id={"blur"}></div>
      <div
        className={"container-fluid p-0"}
        style={{ position: "relative", zIndex: 10 }}
      >
        <Header />
        <div>
          <Routes>
            <Route path={""} element={<Home />} />
            <Route path={"best-price"} element={<BestPrices />} />
            <Route path={"login"} element={<Login />} />
            <Route path={"register"} element={<Register />} />
            <Route
              path={"bookings"}
              element={
                <ProtectedRoute>
                  <Bookings />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
