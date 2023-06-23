import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { Slider } from "./components/slider";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Student } from "./pages/student";
import { UserData } from "./pages/user";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Slider />}></Route>
        <Route path="/student" element={<Student />}></Route>
        <Route path="/user" element={<UserData />}></Route>
        <Route path="/home" element={<Slider />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
