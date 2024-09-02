import {getCurrentTime} from "../utils/getTime";
import "../styles/OutPrompt.css";

type PropsType = {
  message:string
  subMessage:string
  onClickOk:()=>void
  onClickCancel:()=>void
  roomNum:string
  seatNum:string
}

function OutPrompt({message, subMessage, seatNum, roomNum, onClickCancel, onClickOk}: PropsType) {
  return <div className="outPrompt">
    <h1>{message}</h1>
    <div>
      <label>열람실</label><input value={`제 ${roomNum} 열람실`} disabled={true}/>
    </div>
    <div>
      <label>좌석</label><input value={`${seatNum}번`} disabled={true}/>
    </div>
    <div>
      <label>공석시간</label><input value={getCurrentTime()} disabled={true}/>
    </div>
    <p>{subMessage}</p>
    <div>
      <button onClick={onClickCancel}>취소</button>
      <button onClick={onClickOk}>확인</button>
    </div>
  </div>;
}

export default OutPrompt;
