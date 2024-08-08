import React, { useState } from "react";

function TicTacToe() {
    const []=useState(" ")
    return(
        <div>
            <table>
                <tr>
                    <td><button></button></td>
                    <td><button></button></td>
                    <td><button></button></td>
                </tr>
                <tr>
                    <td><button></button></td>
                    <td><button></button></td>
                    <td><button></button></td>
                </tr>
                <tr>
                    <td><button></button></td>
                    <td><button></button></td>
                    <td><button></button></td>
                </tr>
            </table>
        </div>
    )
 }


 export default TicTacToe;

