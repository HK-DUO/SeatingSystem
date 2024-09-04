function TestButton() {
  const { ipcRenderer } = window.require("electron");

  const test = () => {
    ipcRenderer.send("test", "test");
  };

  return (
    <div>
      <button onClick={test}>테스트</button>
    </div>
  );
}

export default TestButton;
