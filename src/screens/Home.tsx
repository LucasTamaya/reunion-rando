import { Nav } from "@/components/common/nav/Nav";
import { HomeCard } from "@/components/home/HomeCard";

export const Home: React.FC = () => {
  return (
    <>
      <Nav />
      <div className="max-w-7xl mx-auto px-10">
        <div className="mt-20 md:mt-44">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-main-green text-center font-semibold mb-10 md:mb-28">
            Êtes-vous prêt pour une aventure en pleine nature ? Vous êtes au bon
            endroit !
          </h1>
          <img
            src="/images/outdoor_adventure.svg"
            alt="explore"
            width={600}
            className="mx-auto"
          />
        </div>
        <div className="mt-20 md:mt-36">
          <HomeCard
            title="Nos itinéraires"
            content="Notre équipe vous propose des parcours adaptés à tous les niveaux,
            pour que chacun puisse profiter de la nature à sa manière. Que vous
            soyez un randonneur aguerri ou un débutant, nous avons des itinéraires
            pour tous les goûts. Vous pourrez découvrir les paysages les plus
            spectaculaires de notre île, en toute sécurité et en toute
            tranquillité."
            imgSrc="/images/park.svg"
          />
          <HomeCard
            title="Pour les clients"
            content="Pour réserver votre place pour une randonnée, il vous suffit de vous inscrire en ligne en quelques clics seulement. Vous pourrez choisir parmi notre sélection de parcours, pour trouver celui qui vous convient. Nous mettons à votre disposition des cartes et des itinéraires pour vous aider à planifier votre randonnée. Et nos guides expérimentés vous accompagneront tout au long de votre parcours, pour vous faire découvrir les richesses de la nature et veiller à votre sécurité."
            imgSrc="/images/moment_to_remember.svg"
            reverse
          />
          <HomeCard
            title="Pour les prestataires"
            content="Si vous êtes un prestataire et que vous souhaitez proposer vos services sur notre site, vous pouvez vous inscrire en ligne pour proposer vos parcours préférés et mettre vos compétences à disposition. Vous pourrez partager votre passion de la randonnée et de la nature avec nos clients, et contribuer à la réussite de leurs expériences en plein air."
            imgSrc="/images/road_sign.svg"
          />
        </div>
      </div>
    </>
  );
};
