import { Route, Routes } from "react-router-dom";
import Homepage from "@/pages/homepage";
import AppLayout from "@/layouts/AppLayout";
import Livechat from "@/pages/Livechat";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/livechat" element={<Livechat />} />
      </Route>
    </Routes>
  );
}

export default App;
