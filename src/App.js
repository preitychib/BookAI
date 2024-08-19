import './App.css';
import Dots from './Components/Dots';
import NavBar from './Components/NavBar';
import ShimmerText from './Components/ShimmerText';

function App() {
  return (
    <div className="relative h-screen w-screen bg-primary-bg ">
      <Dots />
      <NavBar/>    
      <div className="container mx-auto px-4 max-w-screen-lg">
        <br/>
        <div className="flex items-center justify-center h-screen">
            <ShimmerText text="Hey Preeti This Side." />
        </div>
      </div>
      </div>

  );
}

export default App;
