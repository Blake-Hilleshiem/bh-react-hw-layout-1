import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import Pinapple from "../images/Pineapple.jpg";
import Sidebar from "./Sidebar";
import Paragraph from "./Paragraph";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-body">
        <div className="hero-image">
          <img
            src={
              "https://images.unsplash.com/photo-1476673160081-cf065607f449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
            }
            alt={"Pineapple over water"}
          />
        </div>
        <h1>The Nautical News Network</h1>
        <h2>For all underwater news</h2>
        <Paragraph />
        <div className="row">
          <Paragraph />
          <div>
            <img
              src={
                "https://images.unsplash.com/photo-1488188840666-e2308741a62f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2948&q=80"
              }
              alt={"Pineapple over water"}
            />
          </div>
        </div>
        <div className="row">
          <div>
            <img src={Pinapple} alt={"Pineapple over water"} />
          </div>
          <Paragraph />
        </div>
        <Paragraph />
        <button>Sign Up -{">"} </button>
        <div className="icons">
          <FaFacebook className="icon" />
          <FaInstagram className="icon" />
          <FaTwitter className="icon" />
        </div>
        <footer>© 2022 Nautical News Network</footer>
      </div>
    </div>
  );
}

export default App;
