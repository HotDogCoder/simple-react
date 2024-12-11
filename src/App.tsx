import { Provider } from "react-redux";
import store from "./store";
import NotFound from "./errors/not_found";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Directory from "./pages/directory";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Login from "./pages/auth/login";
import Landing from "./pages/landing";
import Home from "./pages/home";

function App() {
  return (
    <GoogleOAuthProvider
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ""}
    >
      <Provider store={store}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <BrowserRouter>
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
  
              <Route path="/directory" element={<Directory />} />
            </Routes>
          </BrowserRouter>
        </LocalizationProvider>
      </Provider>
    </GoogleOAuthProvider>
  );
}

export default App;
