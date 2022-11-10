import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../Home";
import { Project } from "../project";
import { Project2 } from "../project2";

type RoutePropos = {
  children: React.ReactNode; // 👈️ type children
};

const RouteProvider = (props: RoutePropos) => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />}></Route>
          <Route path="/project2" element={<Project2 />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default RouteProvider;
