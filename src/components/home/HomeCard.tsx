import { useMediaQuery } from 'react-responsive';

interface Props {
  title: string;
  content: string;
  imgSrc: string;
  reverse?: boolean;
}

export const HomeCard: React.FC<Props> = ({
  title,
  content,
  imgSrc,
  reverse,
}) => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });
  const isMediumScreen = useMediaQuery({ query: '(max-width: 1024px)' });

  const imgSize = isSmallScreen ? 200 : isMediumScreen ? 300 : 400;

  return (
    <div
      className={`flex flex-col items-center justify-between mb-20 md:mt-40 md:gap-x-20 ${
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      }`}
    >
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-main-green mb-5">
          {title}
        </h2>
        <p className="max-w-2xl sm:text-lg md:text-xl">{content}</p>
      </div>
      <img src={imgSrc} alt="explore" width={imgSize} className="mt-10" />
    </div>
  );
};
