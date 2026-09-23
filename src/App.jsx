import './App.css';
import LeftPortion from './components/leftPortion';
import MiddlePortion from './components/middlePortion';
import RightPortion from './components/rightPortion';

function App() {
  return (
    <div className="App">
      <div className="leftPortion">
        <LeftPortion />
      </div>
      <div className="middlePortion">
        <MiddlePortion />
      </div>
      <div className="rightPortion">
        <RightPortion />
      </div>
    </div>
  );
}

export default App;
