import "../styles/SideMenu.css";
import {YuseonIc} from "../assets/img/index";

function SideMenu() {
  return <nav className="side-menu">
    <h1>
      <img src={YuseonIc} alt="yuseong-icon"/><span>노은도서관</span>
    </h1>
    <div>
      <a href="/">좌석예약</a>
      <a href="/suggest">문의사항</a>
    </div>
  </nav>;
}

export default SideMenu;
