import React from "react";
import "../styles/Biljetter.css";
import "../styles/Main.css";

class Biljetter extends React.Component{
    render(){
        return(
        <div className="main-content">
        <main><table className="visningar">
            <thead>
            <tr>
              <th>Föreställningar: Insidan ut 2</th>
              <th>Salong</th>
              <th>Boka här</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Idag 22/1 14:00</td>
              <td>Salong 1</td>
              <td><button onClick = "myFunction()" className="js-test">Show message</button></td>
            </tr>
            <tr>
                <td>Imorgon 23/1 12:00</td>
                <td>Salong 2</td>
                <td><button className="boka-button">Boka</button></td>
            </tr>
            <tr>
                <td>Imorgon 23/1 18:00</td>
                <td>Salong 1</td>
                <td><button className="boka-button">Boka</button></td>
            </tr>
            <tr>
                <td>Imorgon 23/1 20:00</td>
                <td>Salong 2</td>
                <td><button className="boka-button">Boka</button></td>
            </tr>
            </tbody>
          </table>
        </main>
    </div>);
    }

}

export default Biljetter;