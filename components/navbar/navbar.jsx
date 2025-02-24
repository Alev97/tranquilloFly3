// import React from 'react';
// import { Link, useLocation} from 'react-router-dom';
// import { FaPlane, FaHotel, FaCameraRetro } from 'react-icons/fa';
// import './navbar.css'

// const Navbar = () => {
//   const location = useLocation();
//     return (
//       <nav>
//         <ul>
//         {location.pathname === '/' ? (
//           <>
//           <li>
//             <Link to="/voli"><FaPlane /> Voli</Link>
//           </li>
//           <li>
//             <Link to="/hotels"><FaHotel /> Hotels</Link>
//           </li>
//           <li>
//             <Link to="/attività"><FaCameraRetro /> Attività</Link>
//           </li>
//           </>
//         ):(
//           <li><Link to="/">Torna alla Home</Link></li>
//         )}
//         </ul>
//       </nav>
//     );
// };

// export default Navbar;

// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { FaPlane, FaHotel, FaCameraRetro } from 'react-icons/fa';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './navbarResp.css';

// const NavbarResp = () => {
//   const location = useLocation();

//   return (
//     <Navbar bg="dark" variant="dark" expand="md">
//       <Container>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ml-auto d-flex justify-content-center w-100">
//             {location.pathname === '/' ? (
//               <>
//                 <Nav.Link as={Link} to="/voli"><FaPlane /> Voli</Nav.Link>
//                 <Nav.Link as={Link} to="/hotels"><FaHotel /> Hotels</Nav.Link>
//                 <Nav.Link as={Link} to="/attività"><FaCameraRetro /> Attività</Nav.Link>
//               </>
//             ) : (
//               <Nav.Link as={Link} to="/">Torna alla Home</Nav.Link>
//             )}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavbarResp;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPlane, FaHotel, FaCameraRetro } from 'react-icons/fa';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbarResp.css';

const NavbarResp = () => {
  const location = useLocation();

  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 d-flex justify-content-between">
            {location.pathname === '/' ? (
              <>
                <Nav.Link as={Link} to="/voli" className="flex-fill text-center">
                  <FaPlane /> Voli
                </Nav.Link>
                <Nav.Link as={Link} to="/hotels" className="flex-fill text-center">
                  <FaHotel /> Hotels
                </Nav.Link>
                <Nav.Link as={Link} to="/attività" className="flex-fill text-center">
                  <FaCameraRetro /> Attività
                </Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to="/" className="w-100 text-center">
                Torna alla Home
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarResp;