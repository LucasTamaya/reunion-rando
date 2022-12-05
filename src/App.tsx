import { Routes, Route } from "react-router-dom";

import { Home } from "./screens/Home";
import { Login } from "./screens/Login";
import { Register } from "./screens/Register";
import { DashboardParticulier } from "./screens/DashboardParticulier";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { DashboardPrestataire } from "./screens/DashboardPrestataire";
import { Unauthorized } from "./screens/Unauthorized";
import { CurrentActivities } from "./screens/CurrentActivities";
import { AddNewActivity } from "./screens/AddNewActivity";
import { ActivityDetails } from "./components/activity/ActivityDetails";
import { ExpertsField } from "./screens/ExpertsField";

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/connexion" element={<Login />} />
      <Route path="/inscription" element={<Register />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="/activites-du-moment" element={<CurrentActivities />} />
      <Route path="/activites/:id" element={<ActivityDetails />} />
      <Route path="/nos-experts-du-terrain" element={<ExpertsField />} />
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
        <Route path="/nouvelle-activite" element={<AddNewActivity />} />
      </Route>
    </Routes>
  );
};
