import {BrowserRouter, Switch, Route} from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import ToDoPage from './components/pages/ToDoPage';
import HomePage from "./components/pages/HomePage/HomePage";
import TaskPage from "./components/pages/TaskPage";
import TasksFromApi from "./components/pages/TasksFromApi/TasksFromApi";
import ListsPage from "./components/pages/ListsPage"
import ApolloClient from '../src/lib/ApoloClient'

const App = () => (
    <ApolloProvider client={ApolloClient}>
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

                <Route exact path='/tasksg'>
                    <TasksFromApi />
                </Route>

                <Route exact path='/lists'>
                    <ListsPage />
                </Route>
            </Switch>
        </BrowserRouter>
    </ApolloProvider>
);

export default App;
