import InnerContainer from "./component/InnerComponent";
import NavBar from "./component/Navbar";
import "./app.css";
const App = () => {
  return (
    <div className="wrapper">
      <NavBar />
      <InnerContainer />
    </div>
  );
};

export default App;
