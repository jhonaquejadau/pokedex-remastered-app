import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer, Navbar } from "./components";
import { Loader } from "./components/Loader";
import { PublicRoutes } from "./models";

const Home = lazy(() => import("./pages/Home/Home"));
const Login = lazy(() => import("./pages/Login/Login"));
const SignUp = lazy(() => import("./pages/Login/components/SignUp/SignUp"))
const Pokedex = lazy(() => import("./pages/Pokedex/Pokedex"));

function App() {
  return (
    <main>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={PublicRoutes.LOGIN} element={<Login />} />
          <Route path={PublicRoutes.REGISTER} element={<SignUp />} />
          <Route path={PublicRoutes.POKEDEX} element={<Pokedex />} />
        </Routes>
        <Footer />
      </Suspense>
    </main>
  );
}

export default App;
