import React from "react";
import "../styles/Biljetter.css";
import "../styles/Main.css";
import TableHeader from "../components/TableHeader";
import TableBody from "../components/TableBody";

const Biljetter = () => {
        return(
        <div className="main-content">
        <main><table className="visningar">
            <TableHeader/>
            <TableBody/>
            </table>
        </main>
    </div>);
  }

export default Biljetter;