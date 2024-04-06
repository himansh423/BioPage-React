import ProfilePhoto from "./components/ProfilePhoto";
import "./App.css";
import Detail from "./components/Detail";
import ContextAPIProvider from "./store/ContextAPI";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer";

function App() {
  return (
    <ContextAPIProvider>
    <div className="backGround">
      <ProfilePhoto/>
      <Detail/>
      <Buttons/>
      <Footer/>
    </div>
    </ContextAPIProvider>
  )
}


export default App;