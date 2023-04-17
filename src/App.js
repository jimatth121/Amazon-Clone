import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
            <Header />
              <Home/>
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
            <Header/>
              <Checkout/>
            </>
          }
        />
        <Route
          path="/Login"
          element={
            <>
              <h1>Login Page</h1>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
