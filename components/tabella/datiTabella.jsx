// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './tabelle.css'; 

// const DatiTabella = ({ type }) => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchData = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await axios.get(`http://127.0.0.1:8080/${type}`);
//       setData(response.data);
//     } catch (err) {
//       console.error(err)
//       setError('Errore nel caricamento dei dati');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [type]);

//   let headers;
//   if (type === 'voli') {
//     headers = (
//       <>
//         {/* <div>ID</div> */}
//         <div>Compagnia</div>
//         <div>Partenza</div>
//         <div>Arrivo</div>
//         <div>Dutata del volo</div>
//       </>
//     );
//   } else if (type === 'hotels') {
//     headers = (
//       <>
//         {/* <div>ID</div> */}
//         <div>Nome</div>
//         <div>Città</div>
//         <div>Telefono</div>
//       </>
//     );
//   } else if (type === 'attività') {
//     headers = (
//       <>
//         {/* <div>ID</div> */}
//         <div>Nome</div>
//         <div>Città</div>
//         <div>Durata</div>
//       </>
//     );
//   }

//   return (
//     <div>
//       {loading && <p>Caricamento...</p>}
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {data.length > 0 && (
//         <div className="flex-table">
//           <div className="flex-row header">
//             {headers} 
//           </div>
//           {data.map(item => {
//             if (type === 'voli') {
//               return (
//                 <div className="flex-row" key={item.id}>  {/* potevo farlo con un if ma mi piace più così*/}
//                   {/* <div>{item.id}</div> */}
//                   <div style={{ border: item.compagnia ? 'none' : '2px solid red' }}> {/*se compagnia non è null, non ci sarà il bordo rosso.
//                                                                                         sonnò si ed è di 2 px*/}
//                     {item.compagnia || 'N/A'} {/*se compagnia non è null, verrà visualizzato il valore, sennò (|| = or) N/A*/}
//                   </div>
//                   <div style={{ border: item.partenza ? 'none' : '2px solid red' }}>
//                     {item.partenza || 'N/A'}
//                   </div>
//                   <div style={{ border: item.arrivo ? 'none' : '2px solid red' }}>
//                     {item.arrivo || 'N/A'}
//                   </div>
//                   <div style={{ border: item.durata ? 'none' : '2px solid red'}}>
//                     {item.durata || 'N/A'}
//                 </div>
//               </div>
//               );
//             } else if (type === 'hotels') {
//               return (
//                 <div className="flex-row" key={item.id}>
//                   {/* <div>{item.id}</div> */}
//                   <div style={{ border: item.nome ? 'none' : '2px solid red'}}>
//                     {item.nome || 'N/A'}
//                   </div>
//                   <div style={{ border: item.luogo ? 'none' : '2px solid red'}}>
//                     {item.luogo || 'N/A'}
//                   </div>
//                   <div style={{ border: item.telefono ? 'none' : '2px solid red'}}>
//                     {item.telefono || 'N/A'}
//                   </div>
//                 </div>
//               );
//             } else if (type === 'attività') {
//               return (
//                 <div className="flex-row" key={item.id}>
//                   {/* <div>{item.id}</div> */}
//                   <div style={{ border: item.nome ? 'none' : '2px solid red'}}>
//                     {item.nome || 'N/A'}
//                   </div>
//                   <div style={{ border: item.dove ? 'none' : '2px solid red'}}>
//                     {item.dove || 'N/A'}
//                   </div>
//                   <div style={{ border: item.durata ? 'none' : '2px solid red' }}>
//                     {item.durata || 'N/A'}
//                   </div>
//                 </div>
//               );
//             }
//             return null; // in caso di tipo sconosciuto
//           })}
//         </div>
//       )}
//     </div>
//   );
// };

// export default DatiTabella;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Table, Spinner, Alert, Container } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Assicurati di importare Bootstrap
// import './tabelle.css'; 

// const DatiTabella = ({ type }) => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchData = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await axios.get(`http://127.0.0.1:8080/${type}`);
//       setData(response.data);
//     } catch (err) {
//       console.error(err);
//       setError('Errore nel caricamento dei dati');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [type]);

//   return (
//     <Container className="mt-4">
//       {loading && <Spinner animation="border" />}
//       {error && <Alert variant="danger">{error}</Alert>}
//       {data.length > 0 && (
//         <Table responsive striped bordered hover>
//           <thead>
//             <tr>
//               {type === 'voli' && (
//                 <>
//                   <th>Compagnia</th>
//                   <th>Partenza</th>
//                   <th>Arrivo</th>
//                   <th>Durata del volo</th>
//                 </>
//               )}
//               {type === 'hotels' && (
//                 <>
//                   <th>Nome</th>
//                   <th>Città</th>
//                   <th>Telefono</th>
//                 </>
//               )}
//               {type === 'attività' && (
//                 <>
//                   <th>Nome</th>
//                   <th>Città</th>
//                   <th>Durata</th>
//                 </>
//               )}
//             </tr>
//           </thead>
//           <tbody>
//             {data.map(item => (
//               <tr key={item.id}>
//                 {type === 'voli' && (
//                   <>
//                     <td style={{ border: item.compagnia ? 'none' : '2px solid red' }}>
//                       {item.compagnia || 'N/A'}
//                     </td>
//                     <td style={{ border: item.partenza ? 'none' : '2px solid red' }}>
//                       {item.partenza || 'N/A'}
//                     </td>
//                     <td style={{ border: item.arrivo ? 'none' : '2px solid red' }}>
//                       {item.arrivo || 'N/A'}
//                     </td>
//                     <td style={{ border: item.durata ? 'none' : '2px solid red' }}>
//                       {item.durata || 'N/A'}
//                     </td>
//                   </>
//                 )}
//                 {type === 'hotels' && (
//                   <>
//                     <td style={{ border: item.nome ? 'none' : '2px solid red' }}>
//                       {item.nome || 'N/A'}
//                     </td>
//                     <td style={{ border: item.luogo ? 'none' : '2px solid red' }}>
//                       {item.luogo || 'N/A'}
//                     </td>
//                     <td style={{ border: item.telefono ? 'none' : '2px solid red' }}>
//                       {item.telefono || 'N/A'}
//                     </td>
//                   </>
//                 )}
//                 {type === 'attività' && (
//                   <>
//                     <td style={{ border: item.nome ? 'none' : '2px solid red' }}>
//                       {item.nome || 'N/A'}
//                     </td>
//                     <td style={{ border: item.dove ? 'none' : '2px solid red' }}>
//                       {item.dove || 'N/A'}
//                     </td>
//                     <td style={{ border: item.durata ? 'none' : '2px solid red' }}>
//                       {item.durata || 'N/A'}
//                     </td>
//                   </>
//                 )}
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       )}
//     </Container>
//   );
// };

// export default DatiTabella;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Spinner, Alert, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Assicurati di importare Bootstrap
import './tabelle.css'; 

const DatiTabella = ({ type }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`http://127.0.0.1:8080/${type}`);
      setData(response.data);
    } catch (err) {
      console.error(err);
      setError('Errore nel caricamento dei dati');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [type]);

  return (
    <Container className="mt-4">
      {loading && <Spinner animation="border" />}
      {error && <Alert variant="danger">{error}</Alert>}
      {data.length > 0 && (
        <div className="table-responsive">
          <Table responsive striped bordered hover>
            <thead>
              <tr>
              {type === 'voli' && (
                <>
                  <th>Compagnia</th>
                  <th>Partenza</th>
                  <th>Arrivo</th>
                  <th>Durata del volo</th>
                </>
              )}
              {type === 'hotels' && (
                <>
                  <th>Nome</th>
                  <th>Città</th>
                  <th>Telefono</th>
                </>
              )}
              {type === 'attività' && (
                <>
                  <th>Nome</th>
                  <th>Città</th>
                  <th>Durata</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                {type === 'voli' && (
                  <>
                    <td style={{ border: item.compagnia ? 'none' : '2px solid red' }}>
                      {item.compagnia || 'N/A'}
                    </td>
                    <td style={{ border: item.partenza ? 'none' : '2px solid red' }}>
                      {item.partenza || 'N/A'}
                    </td>
                    <td style={{ border: item.arrivo ? 'none' : '2px solid red' }}>
                      {item.arrivo || 'N/A'}
                    </td>
                    <td style={{ border: item.durata ? 'none' : '2px solid red' }}>
                      {item.durata || 'N/A'}
                    </td>
                  </>
                )}
                {type === 'hotels' && (
                  <>
                    <td style={{ border: item.nome ? 'none' : '2px solid red' }}>
                      {item.nome || 'N/A'}
                    </td>
                    <td style={{ border: item.luogo ? 'none' : '2px solid red' }}>
                      {item.luogo || 'N/A'}
                    </td>
                    <td style={{ border: item.telefono ? 'none' : '2px solid red' }}>
                      {item.telefono || 'N/A'}
                    </td>
                  </>
                )}
                {type === 'attività' && (
                  <>
                    <td style={{ border: item.nome ? 'none' : '2px solid red' }}>
                      {item.nome || 'N/A'}
                    </td>
                    <td style={{ border: item.dove ? 'none' : '2px solid red' }}>
                      {item.dove || 'N/A'}
                    </td>
                    <td style={{ border: item.durata ? 'none' : '2px solid red' }}>
                      {item.durata || 'N/A'}
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      )}
    </Container>
  );
};

export default DatiTabella;