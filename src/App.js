import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserDashboard from "./components/UserDashboard"

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={UserDashboard} />
      </Router>
    </div>
  );
}

export default App;
