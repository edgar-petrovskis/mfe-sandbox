import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const RemoteApp2 = React.lazy(() => import('remoteApp2/Module'));

const RemoteApp1 = React.lazy(() => import('remoteApp1/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/remote-app2">RemoteApp2</Link>
        </li>
        <li>
          <Link to="/remote-app1">RemoteApp1</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="shell-app" />} />
        <Route path="/remote-app2" element={<RemoteApp2 />} />
        <Route path="/remote-app1" element={<RemoteApp1 />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
