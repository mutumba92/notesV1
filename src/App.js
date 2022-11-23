
import './App.css';
import Header from './components/header'
import NotesListPage from './pages/NotesListPage'
import NotePage from './pages/NotePage'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom"


function App() {
  return (
    <div className="container dark">
      <div className='app'>
      <Router>
        <Header/>
        <Route path='/'  exact component={NotesListPage}/>
        <Route path='/note/:id' component={NotePage}/> 

      </Router>

      
      
      </div>
    </div>
  );
}

export default App;
