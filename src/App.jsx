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
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
