import styled from 'styled-components';
import NxWelcome from './nx-welcome';
import { Button, Card, Input } from '@mfe-sandbox/ui-components';

const StyledApp = styled.div`
  /* Your style here */
`;

export function App() {
  return (
    <StyledApp>
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
        <Button onClick={() => console.log('remoteApp1 button click')}>
          UI Button
        </Button>
        <Input
          aria-label="remoteApp1 input"
          placeholder="RemoteApp1 input"
          style={{ display: 'block' }}
        />
      </Card>

      <NxWelcome title="remoteApp1" />
    </StyledApp>
  );
}

export default App;
