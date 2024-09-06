import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}; //Utilização de [pathname] garante que ocorra o evento apenas uma e não e que ele não entre em loop

export default ScrollToTop;
