import React, { useState } from "react";

function TicTacToe() {
    const []=useState(" ")
    return(
        <div>
            <table>
                <tr>
                    <td><button>x</button></td>
                    <td><button>o</button></td>
                    <td><button>x</button></td>
                </tr>
                <tr>
                    <td><button>x</button></td>
                    <td><button>o</button></td>
                    <td><button>x</button></td>
                </tr>
                <tr>
                    <td><button>o</button></td>
                    <td><button>x</button></td>
                    <td><button>o</button></td>
                </tr>
            </table>
        </div>
    )
 }


 export default TicTacToe;

