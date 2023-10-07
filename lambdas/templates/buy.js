const buy = (data) => {
  const base = `<div style={{ padding: "1rem", fontSize: "1rem" }}>
 <table>
   <th>
     <td>
       <h3>Parabens pela sua compra</h3>
     </td>
   </th>
 </table>
 <table style={{ marginTop: "0.5rem" }}>
   <th>
     <td>
       <strong>Resumo:</strong>
     </td>
   </th>
 </table>
 <table style={{ marginTop: "0.2rem" }}>
   <tr>
     <th style={{ padding: "1rem", border: "2px solid black" }}>
       Matrículas
     </th>

     <th style={{ padding: "1rem", border: "2px solid black" }}>Curso</th>
   </tr>
   ${data.map(
     (item) =>
       `<tr>
       <td
         style={{
           padding: "1rem",
           border: "2px solid black",
           textAlign: "right",
         }}
       >
         ${item.quantity}
       </td>
       <td style={{ padding: "1rem", border: "2px solid black" }}>
         ${item.description}
       </td>
     </tr>`
   )}
 </table>

 <table style={{ marginTop: "0.5rem" }}>
   <tr>
     <td>
       Nossa equipe vai se comunicar com voçê para lhe dizer os seguintes
       pasos.
     </td>
   </tr>
   <tr>
     <td style={{ paddingTop: "1rem" }}>
       <strong>Claudir Ramos</strong>
     </td>
   </tr>
   <tr>
     <td>
       <i>CEO Grupo Visual</i>
     </td>
   </tr>
 </table>
</div>`;

  return base;
};

module.exports = buy;
