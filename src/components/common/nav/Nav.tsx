import { useMediaQuery } from "react-responsive";

import { SmallScreenNav } from "./SmallScreenNav";
import { BigScreenNav } from "./BigScreenNav";

export const Nav: React.FC = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1224px)" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1224px)" });

  return (
    <>
      {isSmallScreen ? <SmallScreenNav /> : null}
      {isBigScreen ? <BigScreenNav /> : null}
    </>
  );
};
