import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { AppHeader } from "./cmps/AppHeader";
import { RevengeApp } from "./pages/RevengeApp";
import { RevengeEdit } from "./pages/RevengeEdit";
import { loadRevenges } from "./store/actions/revengeActions";


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(loadRevenges())
  }, [])

  return (
    <Router>
      <div className="App">
        <AppHeader />
        <Switch>
          <Route path="/edit/:id?" component={RevengeEdit} />
          <Route path="/" component={RevengeApp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
