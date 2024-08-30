import CurrentTime from "./CurrentTime";
import CurrentSeat from "./CurrentSeat";
import "../styles/SideBar.css"

type PropsType = {

    currentSeat: {
      roomNum: number
      totalSeat: number;
      restSeat: number
      selectSeat?: number;
    };


}

function SideBar({currentSeat}: PropsType) {
  return <div className="side-bar">
    <CurrentTime/>
    <CurrentSeat props={currentSeat}/>
  </div>;
}

export default SideBar;
