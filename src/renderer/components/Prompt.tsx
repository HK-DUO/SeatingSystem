import {useState} from "react";
import "../styles/Prompt.css"

type PropsType = {
  type: "prompt",
  message: string;
  subMessage: string,
  onClickOk: (input: object) => void,
  onClickCancel: () => void
}

function Prompt({type, message, subMessage, onClickOk, onClickCancel}: PropsType) {
  const [value, setValue] = useState({
    name:"",
    number: "",
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({...value, [e.target.name]: e.target.value})
  }

  return <div className="prompt">
    <h1>{message}</h1>
    <div>
      <label>이름</label>
      <input value={value.name} name="name" onChange={onChange}/>
    </div>
    <div>
      <label>전화번호</label>
      <input value={value.number} name="number" onChange={onChange}/>
    </div>
    <p>{subMessage}</p>
    <div>
      <button onClick={onClickCancel}>취소</button>
      <button onClick={()=>onClickOk(value)}>확인</button>
    </div>
  </div>;
}

export default Prompt;
