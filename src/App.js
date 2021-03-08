import logo from './logo.svg';
import './App.css';
import BT3Header from './components/BaiTapThucHanhLayout/BT3Header';
import BT3Content from './components/BaiTapThucHanhLayout/BT3Content';
import BT3Footer from './components/BaiTapThucHanhLayout/BT3Footer';

function App() {
  return (
    <div className="App">
      <BT3Header />
      <BT3Content />
      <BT3Footer />
    </div>
  );
}

export default App;
