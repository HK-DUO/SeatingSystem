import "../styles/SideBar.css"
import CurrentTime from "../components/CurrentTime";

type PropsType = {

}

function SideBar(){
  return <div className="side-bar">
    <CurrentTime/>
    <div className="w-full h-[200px] bg-white">
      <span>실시간 좌석현황</span>
    </div>
    <div className="w-full h-[200px] mt-[20px] bg-white">
      <span>선택 좌석</span>
    </div>
  </div>;
}

export default SideBar;
