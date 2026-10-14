import styles from "./App.module.css"
import { Interview } from "./components/interview/Interview"
import { Notebook } from "./components/notebook/Notebook"

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { Home } from "./components/home/Home";

function App() {



  return (
    <div className={styles.App}>
      <Router>
        <Navbar/>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/interview" element={<Interview />} />
              <Route path="/notebook" element={<Notebook />} />
          </Routes>
      </Router>

        <p>
            <i>All judging materials are strictly confidential. Do not share beyond Judges and Judge Advisor. Destroy at the conclusion of the event</i>
        </p>
    </div>
  )
}

export default App
