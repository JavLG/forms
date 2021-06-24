// module Imports

import {
  BrowserRouter as Router,
} from "react-router-dom";


//Local Imports
import Navbar from './components/Navbar/Navbar';
import Home from './views/Home';
import FormikExample from './views/FormikExample';
import FormikAndYupExample from './views/FormikAndYupExample'
import { AnimatedRoutes, RouteTransition } from './ui/animations/RouteTransition';





function App() {
  return (
<>
<Router>
<div className="h-full w-full">
<Navbar/>
<div className='pt-14 w-full h-full'>

<AnimatedRoutes exitBeforeEnter initial={false}>
          <RouteTransition path="/advanced" exact slideUp={40}>
            <FormikAndYupExample />
          </RouteTransition>
          <RouteTransition path="/intermediate" exact slideUp={40}>
            <FormikExample />
          </RouteTransition>
          <RouteTransition path="/" exact slideUp={40} >
            <Home />
          </RouteTransition>
</AnimatedRoutes>


</div>
</div>
</Router>
</>
  );
}







export default App;

