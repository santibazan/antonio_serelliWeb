import ScrollToTop from "../../../Scroll/ScrollToTop";
import styles from "./Criticas.module.css";

type Critica = {
  href: string;
  autor: string;
  anio: string;
};

const CRITICAS: Critica[] = [
  { href: "https://drive.google.com/file/d/1IyUMnotnyqih75xl15LhlPnEwDzshYWt/view?usp=sharing", autor: "Hernan Abal", anio: "1964" },
  { href: "https://drive.google.com/file/d/1AK29U9t_MPsvk4mCsWQ1qTIqyJlgdXKC/view?usp=sharing", autor: "Diario Tiempo de Cuyo", anio: "1965" },
  { href: "https://drive.google.com/file/d/1LeAOVeKClyBrssCW4BJoYeILidtYNfQG/view?usp=sharing", autor: "Alberto Cirigliano", anio: "1965" },
  { href: "https://drive.google.com/file/d/1yNcSG2arhmQd6dSzm8eFE2xIHxYz1N7f/view?usp=sharing", autor: "Ubaldo S. Badiali", anio: "1967" },
  { href: "https://drive.google.com/file/d/1GcJW0exHG7MpSTskflekxhfD3d37J6i_/view?usp=sharing", autor: "Guillermo Petra Sierralta", anio: "1972" },
  { href: "https://drive.google.com/file/d/1wFh7mVpkeq-DMTMv7lYtA7M_DKXuIumh/view?usp=sharing", autor: "Eduardo Baliari", anio: "1975" },
  { href: "https://drive.google.com/file/d/1ETNBsKoVHBlKVFClAp9L2jaCxT0AXCFB/view?usp=sharing", autor: "Melgrarejo Muñoz", anio: "1977" },
  { href: "https://drive.google.com/file/d/17DWWARQxE8MrXYe8gkJYzdaYuYhXB862/view?usp=sharing", autor: "Entrevista a Sarelli por Capitani", anio: "1977" },
  { href: "https://drive.google.com/file/d/10K4Gz5zegJfN3cf1GfKgWOjbUMrVdEtv/view?usp=sharing", autor: "Adela Díaz López", anio: "1979" },
  { href: "https://drive.google.com/file/d/1fJdU4Xb6heRDkUp4jepIkQhL5SyfeYyx/view?usp=sharing", autor: "Alberto Cirigliano", anio: "1979" },
  { href: "https://drive.google.com/file/d/1viWbfV2kdO2mp9KjIXK-1mii-gZH9sBy/view?usp=sharing", autor: "Adolfo Ruiz Diaz", anio: "1981" },
  { href: "https://drive.google.com/file/d/1pK0F-NT6yz8k3njSXMuFy3QSTdXGKPyg/view?usp=sharing", autor: "Ramis Vaquer", anio: "1982" },
  { href: "https://drive.google.com/file/d/1q5L-r-rKWhSafzwuWegjroFSfBjba_Vo/view?usp=sharing", autor: "Teresita Pociello", anio: "1987" },
  { href: "https://drive.google.com/file/d/1W5Pg_FyLea7K3BZT3XR7QtMm5X7JL5Vj/view?usp=sharing", autor: "Jorge Gomez de la Torre", anio: "1988" },
  { href: "https://drive.google.com/file/d/1bi_9Eb33iKG_1yROHH_Ks8dwHSGBSNt4/view?usp=sharing", autor: "Jorge Gomez de la Torre", anio: "1988" },
  { href: "https://drive.google.com/file/d/1KHP8XEo9rFsEwfv856WFpfQPPOqsBl3S/view?usp=sharing", autor: "Ramón Amposta", anio: "1988" },
  { href: "https://drive.google.com/file/d/1cDWg4USI9KK7K_hx76wXHUcwD8vnqGRg/view?usp=sharing", autor: "Alberto Collazo", anio: "1993" },
  { href: "https://drive.google.com/file/d/19fEm5PFWBcAkhitPwA1Yc0rzQhNFOUyD/view?usp=sharing", autor: "Josep Maresma i Pedragosa", anio: "1993" },
  { href: "https://drive.google.com/file/d/1mCBNsQ7iYvQX04nTbx0Uy12o9GEUueGg/view?usp=sharing", autor: "Llops", anio: "1993" },
  { href: "https://drive.google.com/file/d/1PZBVWBUhO9UTgEd4vaQriLQetrdbTzYS/view?usp=sharing", autor: "Andrés Cáceres", anio: "1993" },
  { href: "https://drive.google.com/file/d/1E6YD6qHsfZXfR5TtFVAvUApCVvBoACdZ/view?usp=sharing", autor: "Carlos Levy", anio: "1995" },
  { href: "https://drive.google.com/file/d/1jGxwWAKTVMbdnmvcqXQufj6cR3z8bYpx/view?usp=sharing", autor: "Llops", anio: "1995" },
  { href: "https://drive.google.com/file/d/1CXOxptbOVpYfO_6Z5BMOzK0xbpAKaEfu/view?usp=sharing", autor: "Palais de Glace", anio: "1998" },
  { href: "https://drive.google.com/file/d/1VwPriKJKa_oQFHb60RUTX-AF_oR-v0PF/view?usp=sharing", autor: "Ana Maria Álvarez", anio: "2000" },
  { href: "https://drive.google.com/file/d/1yhLobUSeM5e2zzTH6hZe7LsxsDLea21S/view?usp=sharing", autor: "Andrés Cáceres", anio: "2005" },
  { href: "https://drive.google.com/file/d/1qlWzprBf1lVarcKOzxcTovp66bouxVoi/view?usp=sharing", autor: "Andrés Cáceres", anio: "2005" },
  { href: "https://drive.google.com/file/d/1eUFYzRWWp-th7APPLIVLHd6Delwzaj2J/view?usp=sharing", autor: "Carlos Levy", anio: "2009" },
  { href: "https://drive.google.com/file/d/1FZ3X55G7ULOVb8v2iQvp0eWCntJ744pi/view?usp=sharing", autor: "Ramis Váquer", anio: "2011" },
  { href: "https://drive.google.com/file/d/1Q7158lIB_l9AhxQchEzX0cGw0HLecuSS/view?usp=sharing", autor: "Antonio Sarelli por Fernando Rosas", anio: "2013" },
  { href: "https://drive.google.com/file/d/1y62C0yZ90nkl4wVGNloUbAJMcBwLw4iC/view?usp=sharing", autor: "Encuentro con Antonio Sarelli - Texto para catálogo", anio: "2013" },
  { href: "https://drive.google.com/file/d/1thtaD35tyYIspCTGIgQ6v0Ac2pC4p0i5/view?usp=sharing", autor: "Texto catálogo Antonio Sarelli - Pablo Chiavazza", anio: "2015" },
  { href: "https://drive.google.com/file/d/1uPBIxlO-xC_VFkEkCFD0qG15U8xHxL-c/view?usp=sharing", autor: "Saliendonos de los ismos tan característicos del siglo XX y XXI", anio: "2016" },
  { href: "https://drive.google.com/file/d/1FWJqeZruL0QrtQLUm457x3KhQvsYB7FH/view?usp=sharing", autor: "Gabriel Fernandez Antonio Sarelli", anio: "2020" },
];

export const CriticasUi = () => {
  return (
    <div className={styles.criticas}>
      <h1 className={styles.tituloCriticas}>Críticas</h1>

      <div className={styles.gridCriticas}>
        {CRITICAS.map((critica, i) => (
          <a
            key={`${critica.href}-${i}`}
            href={critica.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.cardCritica}>
              <span aria-hidden="true">📄</span>
              <h3>{critica.autor}</h3>
              <h6>{critica.anio}</h6>
            </div>
          </a>
        ))}
      </div>
      <ScrollToTop />
    </div>
  );
};

export default CriticasUi;
