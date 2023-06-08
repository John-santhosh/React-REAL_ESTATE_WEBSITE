import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  About,
  Blog,
  Contact,
  Home,
  Pricing,
  Services,
  Error,
  Header,
  Footer,
} from "./Pages/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyProfile from "./components/MyProfile";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <ToastContainer position="bottom-center"></ToastContainer>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/myprofile" element={<MyProfile />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
