import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CronJob from './pages/cronJob-monitoring/CronJob';
import WebMonitoring from './pages/website-monitoring/WebMonitoring';
import Port from './pages/port-monitoring/Port';
import SSL from './pages/ssl-monitoring/SSL';
import Domain from './pages/domain-monitoring/Domain';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/website-monitoring' element={<WebMonitoring/>}/>
        <Route path='/cron-job-monitoring' element={<CronJob/>}/>
        <Route path='/port-monitoring' element={<Port/>}/>
        <Route path='/ssl-monitoring' element={<SSL/>}/>
        <Route path='/domain-monitoring' element={<Domain/>}/>
      </Routes>
    </div>
  );
}

export default App;
