function SeatInfo(){
  return <div className="w-full h-[60px] mt-[20px] rounded-md bg-white p-[6px]">
    <p className="flex items-center">
      <div className="w-[40px] h-[16px] mr-[10px] bg-lightBlue"/>
      <span>- 사용가능</span>
    </p>
    <p className="flex items-center">
      <div className="w-[40px] h-[16px] mr-[10px] bg-deepBlue"/>
      <span>- 사용불가</span>
    </p>
  </div>;
}

export default SeatInfo;
