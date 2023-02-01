import React from 'react';
import './App.css'
const App = (props) => {
  return (
<center>
    <table className="ui very basic collapsing celled table">
  <thead>
    <tr><th>Employee</th>
    <th>Correct Guesses</th>
  </tr></thead>
  <tbody>
    {props.details.map((value,index)=>(
      <tr>
      <td key={index}>
        <h4 className="ui image header">
          <img src={value.image} className="ui mini rounded image"/>
          <div className="content">
            {value.content}
            <div className="sub header">{value.subheader}
          </div>
        </div>
      </h4></td>
      <td>
        {value.number}
      </td>
    </tr>
       ))}
       </tbody></table></center>
  );
};
export default App;