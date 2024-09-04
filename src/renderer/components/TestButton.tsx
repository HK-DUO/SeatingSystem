import ipcRenderer = Electron.Renderer.ipcRenderer;

function TestButton() {

  const test = () => {
    ipcRenderer.send("test", 'test');
  };

  return <div>
    <button onClick={test}>테스트</button>
  </div>;
}

export default TestButton
