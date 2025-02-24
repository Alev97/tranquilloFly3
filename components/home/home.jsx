// import React from "react";
// import "./home.css";
// import tranquillofly from "../../src/assets/tranquillofly.jpg" // Immagine centrale
// import aereodecollo from "../../src/assets/aereodecollo.jpg" // img a sinistra
// import aereocade from "../../src/assets/aereocade.jpg" // img a destra
// //import Navbar from "../navbar/navbar";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col } from "react-bootstrap";


// const Home = () => {
//     console.log('Rendering home');
//     return (
//         <div className="home">
//             {/* Sezione sotto la Navbar */}
//             <section className="intro">
//                 <Container fluid>
//                     <Row className="justify-content-center">
//                         {/* Colonna sinistra con immagine di sfondo */}
//                         <Col xs={12} md={4} className="left-column">
//                             <img src={aereodecollo} alt='decollo' className="promo-image"/>
//                         </Col>
//                         {/* Colonna centrale con contenuto */}
//                         <Col xs={12} md={4} className="center-column">
//                             <img src={tranquillofly} alt="TranquilloFly" className="promo-image" />
//                             <h1>TranquilloFly</h1>
//                             <p className="read-the-docs">
//                                 Tutti sanno che fine ha fatto tranquillo...
//                             </p>
//                         </Col>
//                         {/* Colonna destra con immagine di sfondo */}
//                         <Col xs={12} md={4} className="right-column">
//                             <img src={aereocade} alt="cade" className="promo-image"/>
//                         </Col>
//                     </Row>
//                 </Container>
//             </section>
//         </div>
//     );
// }

// export default Home;

import React from "react";
import "./home.css";
import tranquillofly from "../../src/assets/tranquillofly.jpg" // Immagine centrale
import aereodecollo from "../../src/assets/aereodecollo.jpg" // img a sinistra
import aereocade from "../../src/assets/aereocade.jpg" // img a destra
// //import Navbar from "../navbar/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
    console.log('Rendering home');
        return (
            <div className="home">
                {/* Sezione sotto la Navbar */}
                <section className="intro">
                    <Container fluid>
                        <Row className="justify-content-center">
                            {/* Colonna sinistra con immagine di sfondo */}
                            <Col xs={12} md={4} className="left-column">
                                <img src={aereodecollo} alt='decollo' className="promo-image"/>
                            </Col>
                            {/* Colonna centrale con contenuto */}
                            <Col xs={12} md={4} className="center-column">
                                <img src={tranquillofly} alt="TranquilloFly" className="promo-image" />
                                <h1>TranquilloFly</h1>
                                <p className="read-the-docs">
                                    Tutti sanno che fine ha fatto tranquillo...
                                </p>
                            </Col>
                            {/* Colonna destra con immagine di sfondo */}
                            <Col xs={12} md={4} className="right-column">
                                <img src={aereocade} alt="cade" className="promo-image"/>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
         );

    };

export default Home;
