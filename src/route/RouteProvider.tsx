import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {Home} from "../Home";
import {Project} from "../project";

type RoutePropos = {
    children: React.ReactNode; // 👈️ type children
};

const RouteProvider = (props:RoutePropos) => {
    return(
        <>

    <Router>
            <Routes>
                <Route  path="/" element={<Home/>}/>
                <Route path="/project" element={<Project/>}></Route>
            </Routes>
    </Router>
        </>
    )

}

export default RouteProvider