import getTime from "../utils/getTime";


function CurrentTime() {
  return <div className="w-full h-[100px] flex justify-center items-center text-white text-[36px] font-[700]">
    <span>{getTime()}</span>
  </div>
}


export default CurrentTime;
