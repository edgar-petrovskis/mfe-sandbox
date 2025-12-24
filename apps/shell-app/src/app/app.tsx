import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';
import { Button, Card, Input } from '@mfe-sandbox/ui-components';

const RemoteApp2 = React.lazy(() => import('remoteApp2/Module'));

const RemoteApp1 = React.lazy(() => import('remoteApp1/Module'));

export function App() {
  React.useEffect(() => {
    // eslint-disable-next-line no-underscore-dangle
    console.log((__webpack_share_scopes__ as any)?.default);
  }, []);

  return (
    <React.Suspense fallback={null}>
      <Card
        style={{
          padding: '12px',
          border: '1px solid #ddd',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          maxWidth: '320px',
        }}
      >
        <Button onClick={() => console.log('shell-app button click')}>
          UI Button
        </Button>
        <Input
          aria-label="shell-app input"
          placeholder="Shell input"
          style={{ display: 'block', marginTop: '8px' }}
        />
      </Card>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/remote-app1">RemoteApp1</Link>
        </li>
        <li>
          <Link to="/remote-app2">RemoteApp2</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="shell-app" />} />
        <Route path="/remote-app1" element={<RemoteApp1 />} />
        <Route path="/remote-app2" element={<RemoteApp2 />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
