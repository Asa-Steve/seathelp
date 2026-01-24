import { Route, Routes } from "react-router-dom";
import Homepage from "@/pages/homepage";
import AppLayout from "@/layouts/AppLayout";
import Livechat from "@/pages/Livechat";
import Leaderboard from "@/pages/Leaderboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/livechat" element={<Livechat />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Route>
    </Routes>
  );
}

export default App;
