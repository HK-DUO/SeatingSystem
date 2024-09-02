import CurrentTime from "./CurrentTime";
import CurrentSeat from "./CurrentSeat";
import "../styles/SideBar.css"
import SeatInfo from "./SeatInfo";
import {useDialog} from "../hooks/useDialog";

type PropsType = {
    currentSeat: {
      roomNum: number
      totalSeat: number;
      restSeat: number
      selectSeat?: number;
    };
}

function SideBar({currentSeat}: PropsType) {
  const {alert, prompt} = useDialog();


  return <div className="side-bar">
    <CurrentTime/>
    <CurrentSeat props={currentSeat}/>
    <div>
      <button onClick={()=>prompt("예약", "예약을 원하시는 좌석을 선택 후 진행해주세요." +
        "\n" +
        "해당자리는 예약된 좌석입니다.").then((res)=>console.log(res))}>예약</button>
      <button>퇴실</button>
      <div>
        <button>연장</button>
        <button>퇴실요청</button>
      </div>
    </div>
    <SeatInfo/>
  </div>;
}

export default SideBar;
