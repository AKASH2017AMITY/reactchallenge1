import './App.css';
import Header from './component/Header';
import Container from './component/Container';


function App() {
  return (
    <div className="main-Container" style={{height:'100%', width:'100%'}}>
      <Header />
      <Container />
    </div>
  );
}

export default App;
