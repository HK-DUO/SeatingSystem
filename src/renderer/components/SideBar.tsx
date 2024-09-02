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
  const {alert, prompt, inPrompt, outPrompt} = useDialog();


  return <div className="side-bar">
    <CurrentTime/>
    <CurrentSeat props={currentSeat}/>
    <div>
      <button onClick={() => {
        if (currentSeat.roomNum && currentSeat.selectSeat) {
          inPrompt("일일 이용증 발급", "퇴실 요청시 해당 전화번호로 연장요청 문자가 발송됩니다.\n연장하지 않을 경우 시간이 지나거나 퇴실요청시 공석처리됨을 유의하시기 바랍니다.\n열람실 내부 및 복도 정숙 유지\n귀중품(금품) 분실,도난 주의(지갑, 휴대폰, MP3, 전자수첩 등)\n퇴실 시 본인 좌석 정리,정돈", String(currentSeat.roomNum), String(currentSeat.selectSeat),
          )
            .then((res) => console.log(res));
        } else alert("오류", "좌석을 선택하세요")
      }}>예약
      </button>
      <button
        onClick={() => {

          prompt("퇴실", "퇴실 후 좌석을 다시 이용하기 위해선 재예약이 필요합니다.\n퇴실 시 본인 좌석 정리,정돈").then((res) => console.log(res))
        }}>퇴실
      </button>
      <div>
        <button onClick={() => {
          prompt("연장", "연장은 기본 사용시간의 2시간 증가합니다.\n연장을 통해 제한없이 이용가능합니다.");
        }}>연장
        </button>
        <button
          onClick={() => {
            if (currentSeat.roomNum && currentSeat.selectSeat) {
              outPrompt("퇴실요청","이용자가 자동 퇴실 시간전에 연장시 퇴실요청은 자동 취소됩니다\n해당시간이 지난 후 자동공석처리됩니다.\n공석 처리시간에 맞춰 예약을 진행해주셔야 됩니다.\n이용자가 있는 자리를 고의적으로 자주 퇴실 요청하실 경우 이용시 패널티가 부여됩니다.\n빈자리, 자리맡아두기 등의 자리만 퇴실요청을 부탁드립니다.", String(currentSeat.roomNum), String(currentSeat.selectSeat), ).then((res) => console.log(res));
            } else alert("오류", "좌석을 선택하세요");
          }}>퇴실요청
        </button>
      </div>
    </div>
    <SeatInfo/>
  </div>;
}

export default SideBar;
