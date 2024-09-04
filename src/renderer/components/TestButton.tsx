function TestButton() {

  const test = () => {
    window.textInterface.sendMessage("testMessage")
  };

  return (
    <div>
      <button onClick={test}>테스트</button>
    </div>
  );
}

export default TestButton;
