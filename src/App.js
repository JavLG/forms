// module Imports

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


//Local Imports
import Navbar from './components/Navbar/Navbar';
import Home from './views/Home';
import FormikExample from './views/FormikExample';

function App() {
  return (
<>
<Router>
<div className="h-full w-full">
<Navbar/>
<div className='pt-14 w-full h-full'>

        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/intermediate" exact component={FormikExample} />
          <Route path="/" exact component={Home} />
        </Switch>


</div>
</div>
</Router>
</>
  );
}



function About(){
  console.log("EN ABOUT");
  return <div><h6>About CONTAINER</h6></div>
}
















export default App;

