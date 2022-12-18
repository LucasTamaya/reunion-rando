import { Helmet as HelmetStructure } from 'react-helmet-async';

interface Props {
  title: string;
  description: string;
  path: string;
}
/**
 * Component to add SEO
 */
const HelmetSeo: React.FC<Props> = ({ title, description, path }) => {
  return (
    <HelmetStructure>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={path} />
    </HelmetStructure>
  );
};

export default HelmetSeo;
