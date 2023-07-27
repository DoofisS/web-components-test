import "./index.scss";

function App() {
  return (
    <div className="App">
      <bx-dropdown trigger-content="Select an item">
        <bx-dropdown-item value="all">Option 1</bx-dropdown-item>
        <bx-dropdown-item value="cloudFoundry">Option 2</bx-dropdown-item>
        <bx-dropdown-item value="staging">Option 3</bx-dropdown-item>
        <bx-dropdown-item value="dea">Option 4</bx-dropdown-item>
        <bx-dropdown-item value="router">Option 5</bx-dropdown-item>
      </bx-dropdown>
      <bx-btn size="sm">Button</bx-btn>
    </div>
  );
}

export default App;
