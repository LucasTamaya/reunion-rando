import { Routes, Route } from "react-router-dom";

import { Home } from "./screens/Home";
import { Login } from "./screens/Login";
import { Register } from "./screens/Register";
import { DashboardParticulier } from "./screens/DashboardParticulier";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { DashboardPrestataire } from "./screens/DashboardPrestataire";
import { Unauthorized } from "./screens/Unauthorized";

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/connexion" element={<Login />} />
      <Route path="/inscription" element={<Register />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route element={<ProtectedRoutes allowedRole="particulier" />}>
        <Route
          path="/dashboard/particulier"
          element={<DashboardParticulier />}
        />
      </Route>
      <Route element={<ProtectedRoutes allowedRole="prestataire" />}>
        <Route
          path="/dashboard/prestataire"
          element={<DashboardPrestataire />}
        />
      </Route>
    </Routes>
  );
};
