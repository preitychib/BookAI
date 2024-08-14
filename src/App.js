import logo from './logo.svg';
import './App.css';
import Dot from './Components/Dot';
import TranslucentBox from './Components/TranslucentBox';

const dots = [
  { top: "10%", left: "20%" },
  { top: "30%", left: "80%" },
  { top: "70%", left: "50%" },
  { top: "40%", left: "10%" },
  { top: "60%", left: "90%" },
];

function App() {
  return (
    <div className="relative h-screen w-screen bg-primary-bg">
      {dots.map((dot, index) => (
        <Dot key={index} style={dot} />
      ))}

<TranslucentBox width="400px" height="250px" backgroundColor="rgba(255, 255, 255, 0.05)">
                <h2>Title</h2>
                <p>This is a translucent box component. You can add any content here.</p>
            </TranslucentBox>
        
    </div>
  );
}

export default App;
