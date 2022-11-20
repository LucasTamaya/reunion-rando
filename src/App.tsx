import { Routes, Route } from "react-router-dom";

import { HomeScreen } from "./screens/HomeScreen";

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
    </Routes>
  );
};
