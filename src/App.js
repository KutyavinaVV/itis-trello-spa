import {BrowserRouter, Switch, Route} from "react-router-dom";

import ToDoPage from './components/pages/ToDoPage';
import HomePage from "./components/pages/HomePage/HomePage";
import TaskPage from "./components/pages/TaskPage";

const App = () => (
  <BrowserRouter>
      <Switch>
          <Route exact path='/'>
              <HomePage />
          </Route>

          <Route exact path='/tasks'>
              <ToDoPage />
          </Route>

          <Route exact path='/tasks/:id'>
              <TaskPage />
          </Route>
      </Switch>
  </BrowserRouter>
);

export default App;
