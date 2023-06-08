import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.jsx";
import AppContext from "./context/Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppContext>
    <App />
  </AppContext>
);
