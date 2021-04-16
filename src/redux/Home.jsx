import Chartjs from "./Chartjs"
import Echart from "./Echart"
import Input from "./Input"
import { Route, Switch, Link } from "react-router-dom"
const Home = () => {
    return (
        <div>
            <nav>
                <h1>Masukkan Data</h1>
            <Input />
                <ul>
                    
                    <li>
                        <Link to="/chartjs">Chart JS</Link>
                    </li>
                    <li>
                        <Link to="/echart">Echart</Link>
                    </li>
                </ul>
            </nav>
            <hr />
            <Switch>
                <Route path="/chartjs">
                    <Chartjs/>
                </Route>
                <Route path="/echart">
                    <Echart />
                </Route>
            </Switch>
        </div>
    )
}

export default Home
