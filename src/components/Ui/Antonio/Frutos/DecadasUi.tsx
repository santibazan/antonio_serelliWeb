import HeaderUi from "../../Header/HeaderUi";
import ImageGrid2000 from "../ImageGrid/ImageGrid2000.tsx";
import ImageGrid2010 from "../ImageGrid/ImageGrid2010.tsx";
import ImageGrid60 from "../ImageGrid/ImageGrid60";
import ImageGrid70 from "../ImageGrid/ImageGrid70";
import ImageGrid80 from "../ImageGrid/ImageGrid80.tsx";
import ImageGrid90 from "../ImageGrid/ImageGrid90.tsx";
import styles from "./Frutos.module.css";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

type Decade =
  | "Década 60"
  | "Década 70"
  | "Década 80"
  | "Década 90"
  | "Década 2000"
  | "Década 2010";

export const DecadasUi = () => {
  const location = useLocation();
  const decade = location.state?.decade as Decade | undefined;

  const ref60 = useRef<HTMLHeadingElement>(null);
  const ref70 = useRef<HTMLHeadingElement>(null);
  const ref80 = useRef<HTMLHeadingElement>(null);
  const ref90 = useRef<HTMLHeadingElement>(null);
  const ref2000 = useRef<HTMLHeadingElement>(null);
  const ref2010 = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!decade) return;
    const map: Record<Decade, React.RefObject<HTMLHeadingElement | null>> = {

      "Década 60": ref60,
      "Década 70": ref70,
      "Década 80": ref80,
      "Década 90": ref90,
      "Década 2000": ref2000,
      "Década 2010": ref2010,
    };

    const targetRef = map[decade];

    if (targetRef?.current) {
      setTimeout(() => {
        targetRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start", // mejora visual
        });
      }, 100);
    }
  }, [decade]);

  return (
    <div className={styles.contenedorGlobalLanding}>
      <HeaderUi />

      <div className={styles.contenedorDecadas}>
        <h1 ref={ref60}>Decada de los 60</h1>
        <ImageGrid60 />

        <h1 ref={ref70}>Decada de los 70</h1>
        <ImageGrid70 />

        <h1 ref={ref80}>Decada de los 80</h1>
        <ImageGrid80 />

        <h1 ref={ref90}>Decada de los 90</h1>
        <ImageGrid90 />

        <h1 ref={ref2000}>Decada de los 2000</h1>
        <ImageGrid2000 />

        <h1 ref={ref2010}>Decada de los 2010</h1>
        <ImageGrid2010 />
      </div>
    </div>
  );
};
