import React, {useState} from "react";
import {getCurrentTime, getPlusTime} from "../utils/getTime";
import "../styles/InPrompt.css"


type PropsType = {
  message: string;
  roomNum:string;
  seatNum:string;
  subMessage: string,
  onClickOk: (input:object) => void,
  onClickCancel: () => void
}

function InPrompt({message, roomNum, seatNum, subMessage, onClickOk, onClickCancel}: PropsType) {
  const [value, setValue] = useState({name: "", number: ""})

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({...value, [e.target.name]: e.target.value})
  }

  return <div className="inPrompt">
    <h1>{message}</h1>
    <div><label>이름</label><input onChange={onChange} name="name"/></div>
    <div><label>전화번호</label><input onChange={onChange} name="number"/></div>
    <div><label>열람실</label><input value={`제 ${roomNum} 열람실`} disabled={true}/></div>
    <div><label>좌석</label><input value={`${seatNum}번`} disabled={true}/></div>
    <div><label>이용시간</label><input value={`${getCurrentTime()} ~ ${getPlusTime()}`} disabled={true}/></div>
    <p>{subMessage}</p>
    <div>
      <button onClick={onClickCancel}>취소</button>
      <button onClick={() => onClickOk(value)}>확인</button>
    </div>
  </div>;
}

export default InPrompt;
