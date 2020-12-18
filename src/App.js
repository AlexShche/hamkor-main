import {BrowserRouter as Router} from "react-router-dom"
import {Routes} from "./routes"

// components
import Footer from "./containers/Footer/Footer"

const App = () =>
    <div className="App">
        <Router>
            <Routes/>
            <Footer/>
        </Router>
    </div>

export default App
