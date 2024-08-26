import SideBar from "../layouts/SideBar";
import {useState} from "react";
import "../styles/SeatMain.css"

function SeatMain(){
  const [roomNum, setRoomNum] = useState(1);
  const [seatNum, setSeatNum] = useState<number>();

  return <div className="seat-main">
    <div>
      <div>
        <button onClick={() => setRoomNum(1)} className={roomNum == 1 ? "bg-blue text-white" : "bg-lightBlue"}>제1열람실
        </button>
        <button onClick={() => setRoomNum(2)} className={roomNum == 2 ? "bg-blue text-white" : "bg-lightBlue"}>제2열람실
        </button>
      </div>
      <div>
        {roomNum}좌석배치도
      </div>
    </div>
    <SideBar/>
  </div>;
}

export default SeatMain;
