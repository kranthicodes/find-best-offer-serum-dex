import ReactDOM from "react-dom";
import App from "~/App.jsx";
import AppProviders from "./AppProviders";

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById("root")
);
