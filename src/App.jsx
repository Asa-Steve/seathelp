import { Route, Routes } from "react-router-dom";
import Homepage from "@/pages/homepage";
import AppLayout from "@/layouts/AppLayout";
import Livechat from "@/pages/Livechat";
import Leaderboard from "@/pages/Leaderboard";
import Profile from "@/pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/livechat" element={<Livechat />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
