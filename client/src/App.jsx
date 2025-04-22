import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";
import Chat from "./pages/chat";
import Call from "./pages/call";
import Profile from "./pages/profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/call" element={<Call />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
