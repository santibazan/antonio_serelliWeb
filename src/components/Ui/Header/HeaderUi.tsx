import { useState } from "react";
import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";

import styles from "./HeaderUi.module.css";

export const HeaderUi = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          Taller de Arte Sarelli
        </Link>

        <ul className={styles.navLinks}>
          {/* Dropdown Servicios */}
          <li
            className={styles.dropdown}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link to="/AntonioSarelli" className={styles.dropdownTrigger}>
              Antonio Sarelli
            </Link>
            <ul
              className={`${styles.dropdownMenu} ${servicesOpen ? styles.dropdownMenuOpen : ""}`}
            >
              <li>
                <Link
                  to="/AntonioSarelli/LaSiembra"
                  className={styles.dropdownItem}
                >
                  La siembra
                </Link>
                <Link
                  to="/AntonioSarelli/LosFrutos"
                  className={styles.dropdownItem}
                >
                  Los frutos
                </Link>
                <Link
                  to="/AntonioSarelli/LaCosecha"
                  className={styles.dropdownItem}
                >
                  La cosecha
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/RebecaSarelli" className={styles.navLink}>
              Rebeca Sarelli
            </Link>
          </li>

          <li>
            <Link to="/ArteMendocino" className={styles.navLink}>
              Arte Mendocino
            </Link>
          </li>
          <li>
            <Link to="/contacto" className={styles.navLink}>
              Contacto
            </Link>
          </li>
        </ul>

        {/* Botón hamburguesa — mobile */}
        <button
          className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ""}`}
          onClick={toggleMenu}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>
      </div>

      {/* Menú móvil */}
      <div
        className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ""}`}
      >
        <ul className={styles.mobileNavLinks}>
          {/* Antonio móvil — dropdown */}
          <li>
            <button
              className={styles.mobileDropdownTrigger}
              onClick={() => setServicesOpen((prev) => !prev)}
            >
              Antonio Sarelli
              <svg
                className={`${styles.chevron} ${servicesOpen ? styles.chevronOpen : ""}`}
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M2 4l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <ul
              className={`${styles.mobileSubMenu} ${servicesOpen ? styles.mobileSubMenuOpen : ""}`}
            >
              <Link
                to="/AntonioSarelli"
                className={styles.mobileNavLink}
                onClick={closeMenu}
              >
                Ver todo
              </Link>
              <Link
                to="/AntonioSarelli/LaSiembra"
                className={styles.mobileNavLink}
                onClick={closeMenu}
              >
                La Siembra
              </Link>
              <Link
                to="/AntonioSarelli/LosFrutos"
                className={styles.mobileNavLink}
                onClick={closeMenu}
              >
                Los Frutos
              </Link>
              <Link
                to="/AntonioSarelli/LaCosecha"
                className={styles.mobileNavLink}
                onClick={closeMenu}
              >
                La Cosecha
              </Link>
            </ul>
          </li>
          <li>
            <Link
              to="/RebecaSarelli"
              className={styles.mobileNavLink}
              onClick={closeMenu}
            >
              Rebeca Sarelli
            </Link>
          </li>

          <li>
            <Link
              to="/ArteMendocino"
              className={styles.mobileNavLink}
              onClick={closeMenu}
            >
              Arte Mendocino
            </Link>
          </li>
          <li>
            <Link
              to="/contacto"
              className={styles.mobileNavLink}
              onClick={closeMenu}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HeaderUi;

// return (
//   <Navbar expand="lg" className={styles.contenedorPrincipalHeader}>
//     <Container fluid>
//       {/* BRAND */}
//       <Navbar.Brand as={Link} to="/" className={styles.botonn}>
//         Taller de Arte Sarelli
//       </Navbar.Brand>

//       {/* BOTÓN HAMBURGUESA */}
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />

//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className={`ms-auto ${styles.nav}`}>
//           {/* DROPDOWN PERSONALIZADO */}
//           <div
//             className={styles.dropdown}
//             onMouseEnter={() => setIsSubmenuOpen(true)}
//             onMouseLeave={() => setIsSubmenuOpen(false)}
//           >
//             <Nav.Link
//               as={Link}
//               to="/AntonioSarelli"
//               className={styles.botonn}
//             >
//               Antonio Sarelli
//             </Nav.Link>

//             <div
//               className={`${styles.submenu} ${
//                 isSubmenuOpen ? styles.show : ""
//               }`}
//             >
//               <ul>
//                 <li>
//                   <Link
//                     to="/AntonioSarelli/LaSiembra"
//                     className={styles.submenuLink}
//                   >
//                     La siembra
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/AntonioSarelli/LosFrutos"
//                     className={styles.submenuLink}
//                   >
//                     Los frutos
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/AntonioSarelli/LaCosecha"
//                     className={styles.submenuLink}
//                   >
//                     La cosecha
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* LINKS NORMALES */}
//           <div>
//             <Nav.Link as={Link} to="/RebecaSarelli" className={styles.botonn}>
//               Rebeca Sarelli
//             </Nav.Link>
//           </div>
//           <div>
//             <Nav.Link as={Link} to="/ArteMendocino" className={styles.botonn}>
//               Arte Mendocino
//             </Nav.Link>
//           </div>

//           <div>
//             <Nav.Link as={Link} to="/Contacto" className={styles.botonn}>
//               Contacto
//             </Nav.Link>
//           </div>
//         </Nav>
//       </Navbar.Collapse>
//     </Container>
//   </Navbar>
// );
