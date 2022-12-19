import { Button } from '@/components/common/Button';
import HelmetSeo from '@/components/common/HelmetSeo';
import { Link } from 'react-router-dom';

export const Unauthorized: React.FC = () => {
  return (
    <>
      <HelmetSeo
        title="RunRando - Accès interdit"
        description="Vous ne disposez pas des droits nécessaires pour accéder à la page ou à la fonctionnalité que vous avez demandée sur notre plateforme RunRando."
        path="/unauthorized"
      />
      <div className="h-[80vh] max-w-3xl flex flex-col justify-center items-center mx-auto px-5">
        <h1 className="text-2xl sm:text-6xl text-main-green text-center font-semibold my-10 sm:my-16">
          Vous ne disposez pas des droits nécessaires
        </h1>
        <Link to="/" className="w-full">
          <Button text="Revenir à l'accueil" variant="primary" />
        </Link>
      </div>
    </>
  );
};
