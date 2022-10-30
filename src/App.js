import Header from './components/Header'
import JobList from './components/JobList';
import {JobListProvider} from './context/JobListContext'

import './App.css';


function App() {
  
  return (
    <JobListProvider>
      <div className="App">
      <Header />
      <JobList />
    </div>
    </JobListProvider>
    
  );
}

export default App
