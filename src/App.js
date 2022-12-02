import "./App.css";
import "./style.css";
import Table from "react-bootstrap/Table";
import Seat from "./compnents/Seat";

function App() {
  const seats = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 66, 27, 28],
    [29, 30, 31, 32, 33, 34, 35],
    [36, 37, 38, 39, 40, 41, 42],
    [43, 44, 45, 46, 47, 48, 49],
    [50, 51, 52, 53, 54, 55, 56],
    [57, 58, 59, 60, 61, 62, 63],
    [64, 65, 66, 67, 68, 69, 70],
    [71, 72, 73, 74, 75, 76, 77],
    [78, 79, 80],
  ];

  const selectSeat = (value) => {
    alert("selected seat " + value);
    console.log(value);
  };
  return (
    <div className="App">
      <Table className="tab">
        <tbody>
          {seats.map((row) => {
            return (
              <tr>
                {row.map((val) => {
                  return (
                    <td className="row">
                      <Seat select={selectSeat} no={val} />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
