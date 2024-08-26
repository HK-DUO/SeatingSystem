import {BrowserRouter, Route, Routes} from "react-router-dom";
import SeatMain from "../components/SeatMain";
import SuggestMain from "../components/SuggestMain";

function MainRouter(){
  return <div className="w-[1040px] h-full p-[40px]">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SeatMain/>}/>
        <Route path="/suggest" element={<SuggestMain/>}/>
      </Routes>
    </BrowserRouter>
  </div>;
}

export default MainRouter;
