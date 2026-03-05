// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// export const HeaderUi = () => {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="/">Taller de Arte Sarelli</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="/Antonio Sarelli">Antonio Sarelli</Nav.Link>
//             <Nav.Link href="/Rebeca Sarelli">Rebeca Sarelli</Nav.Link>
//             <Nav.Link href="/Rebeca Sarelli">Arte Mendocino</Nav.Link>
//             <Nav.Link href="/Rebeca Sarelli">Contacto</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default HeaderUi;

import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import styles from "./HeaderUi.module.css";

export const HeaderUi = () => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  return (
    <Navbar expand="lg" className={styles.contenedorPrincipalHeader}>
      <Container fluid>
        {/* BRAND */}
        <Navbar.Brand as={Link} to="/" className={styles.botonn}>
          Taller de Arte Sarelli
        </Navbar.Brand>

        {/* BOTÓN HAMBURGUESA */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`ms-auto ${styles.nav}`}>
            {/* DROPDOWN PERSONALIZADO */}
            <div
              className={styles.dropdown}
              onMouseEnter={() => setIsSubmenuOpen(true)}
              onMouseLeave={() => setIsSubmenuOpen(false)}
            >
              <Nav.Link
                as={Link}
                to="/AntonioSarelli"
                className={styles.botonn}
              >
                Antonio Sarelli
              </Nav.Link>

              <div
                className={`${styles.submenu} ${
                  isSubmenuOpen ? styles.show : ""
                }`}
              >
                <ul>
                  <li>
                    <Link
                      to="/AntonioSarelli/LaSiembra"
                      className={styles.submenuLink}
                    >
                      La siembra
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/AntonioSarelli/LosFrutos"
                      className={styles.submenuLink}
                    >
                      Los frutos
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/AntonioSarelli/LaCosecha"
                      className={styles.submenuLink}
                    >
                      La cosecha
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* LINKS NORMALES */}
            <div>
              <Nav.Link as={Link} to="/RebecaSarelli" className={styles.botonn}>
                Rebeca Sarelli
              </Nav.Link>
            </div>
            <div>
              <Nav.Link as={Link} to="/ArteMendocino" className={styles.botonn}>
                Arte Mendocino
              </Nav.Link>
            </div>

            <div>
              <Nav.Link as={Link} to="/Contacto" className={styles.botonn}>
                Contacto
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderUi;
