import { Switch, Route } from "react-router-dom"
import Home from "../pages/Home"
import Graduation from "../pages/Graduation"
import Party from "../pages/Party"
import Wedding from "../pages/Wedding"


const Routes = () => {

  return(
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/graduation">
        <Graduation/>
      </Route>
      <Route path="/party">
        <Party/>
      </Route>
       <Route path="/wedding">
        <Wedding/>
      </Route>
    </Switch>
  )
}

export default Routes