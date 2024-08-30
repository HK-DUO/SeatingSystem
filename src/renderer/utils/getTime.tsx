const getTime = () => {
  const today = new Date();
  if(today.getMinutes() < 10) {
    return today.getHours() + " : 0" + today.getMinutes()
  } else return today.getHours() + " : " + today.getMinutes();
};

export default getTime;

