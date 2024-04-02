import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CronJob from './pages/cronJob-monitoring/CronJob';
import WebMonitoring from './pages/website-monitoring/WebMonitoring';
import Port from './pages/port-monitoring/Port';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/website-monitoring' element={<WebMonitoring/>}/>
        <Route path='/cron-job-monitoring' element={<CronJob/>}/>
        <Route path='/port-monitoring' element={<Port/>}/>
      </Routes>
    </div>
  );
}

export default App;
