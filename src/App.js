import './App.css';
import TranslucentBox from './Components/TranslucentBox';
import Dots from './Components/Dots';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="relative h-screen w-screen bg-primary-bg ">
      <Dots />
      <NavBar/>    
      <div className="container mx-auto px-4 max-w-screen-lg">
        <br/>
      {/* <TranslucentBox>
                      <h2>Title</h2>
                      <p>This is a translucent box component. You can add any content here.</p>
                      <p>This is a translucent box component. You can add any content here.This is a translucent box component. You can add any content here.This is a translucent box component. You can add any content here.This is a translucent box component. You can add any content here.This is a translucent box component. You can add any content here.</p>
                      <p>This is a translucent box component. You can add any content here.</p>
                      <p>This is a translucent box component. You can add any content here.</p>
                  </TranslucentBox> */}
              
      </div>
      </div>

  );
}

export default App;
