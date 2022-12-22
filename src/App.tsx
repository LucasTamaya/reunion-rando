import { Routes, Route } from 'react-router-dom';

import { Home } from './screens/Home';
import { Login } from './screens/Login';
import { Register } from './screens/Register';
import { ProtectedRoutes } from './components/other/ProtectedRoutes';
import { Unauthorized } from './screens/Unauthorized';
import { CurrentActivities } from './screens/CurrentActivities';
import { AddNewActivity } from './screens/AddNewActivity';
import { ActivityDetails } from './screens/ActivityDetails';
import { ExpertsField } from './screens/ExpertsField';
import { UserProfile } from './screens/UserProfile';
import { ManageActivities } from './screens/ManageActivities';
import { UpdateActivity } from './screens/UpdateActivity';
import { Favorite } from './screens/Favorite';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/connexion" element={<Login />} />
      <Route path="/inscription" element={<Register />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route element={<ProtectedRoutes allowedRole="particulier" />}>
        <Route path="/activites-du-moment" element={<CurrentActivities />} />
        <Route path="/activites/:id" element={<ActivityDetails />} />
        <Route path="/nos-experts-du-terrain" element={<ExpertsField />} />
        <Route path="/mes-favoris" element={<Favorite />} />
        <Route path="/profile" element={<UserProfile />} />
      </Route>
      <Route element={<ProtectedRoutes allowedRole="prestataire" />}>
        <Route path="/nouvelle-activite" element={<AddNewActivity />} />
        <Route path="/gerer-mes-activites" element={<ManageActivities />} />
        <Route path="/modification-activite/:id" element={<UpdateActivity />} />
        <Route path="/profile" element={<UserProfile />} />
      </Route>
    </Routes>
  );
};
