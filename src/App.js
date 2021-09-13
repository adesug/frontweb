import './Assets/Css/App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SignIn from './Pages/Login/signIn';
import Registration from './Pages/Login/registration';
import EventRegister from './Pages/Event/registration';
import EventDetail from './Pages/Event/detail';
import SignInFilled from './Pages/Login/signInFilled';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={SignIn}/>
          <Route path="/Registration" component={Registration}/>
          <Route path="/EventRegistration" component={EventRegister}/>
          <Route path="/EventDetail" component={EventDetail}/>
          <Route path="/SignInFilled" component={SignInFilled}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
