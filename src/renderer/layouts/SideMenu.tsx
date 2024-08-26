import "../styles/SideMenu.css";

function SideMenu() {
  return <nav className="side-menu">
    <h1>노은도서관</h1>
    <div>
      <a href="/seat">좌석예약</a>
      <a href="/suggest">문의사항</a>
    </div>
  </nav>;
}

export default SideMenu;
