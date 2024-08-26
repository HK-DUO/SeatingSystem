const getTime = () => {
  const today = new Date()
  return today.getHours() + " : " + today.getMinutes()
};

export default getTime;
