import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageComponent
          linkImg="https://cdn.calciomercato.com/images/2024-02/dybala.roma.esulta.2023.24.460x340.jpg"
          textImg="dybala"
        />
        <ButtonComponent buttonText="Clicca su Dybala" buttonColor="blue" />
        <ImageComponent
          linkImg="https://pbs.twimg.com/profile_images/1649874121939984385/9sJFy5VQ_400x400.jpg"
          textImg="elsha"
        />
        <ButtonComponent buttonText="Clicca su El Shaarawy" buttonColor="red" />
        <ButtonComponent />
      </header>
    </div>
  );
}

export default App;
