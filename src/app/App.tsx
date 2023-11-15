import './App.css';
import MainApp from "../pages/mainPage/mainApp";
import image from './../assets/image/25616.jpg'
function App() {
  return (
      <div className="App" style={{ backgroundImage:`url(${image})`}}>
        <MainApp/>
      </div>
  );
}

export default App;
