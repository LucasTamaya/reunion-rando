import { Routes, Route } from "react-router-dom";

import { HomeScreen } from "./screens/HomeScreen";
import { LoginScreen } from "./screens/LoginScreen";
import { RegisterScreen } from "./screens/RegisterScreen";

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/connexion" element={<LoginScreen />} />
      <Route path="/inscription" element={<RegisterScreen />} />
    </Routes>
  );
};
