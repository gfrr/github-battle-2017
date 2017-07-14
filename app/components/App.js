var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require('./Nav');
var Popular = require('./Popular');
var Home = require('./Home');
var Battle = require('./Battle');
var Results = require('./Results');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/battle' component={Battle}/>
            <Route path='/battle/results' componet={Results}/>
            <Route path='/popular' component={Popular} />
            <Route render={()=>{
              return <p>Not Found</p>
            }} />
          </Switch>

        </div>
      </Router>
    )
  }
}



module.exports = App;
