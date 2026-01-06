import styled from 'styled-components';
import { VisualizerPage } from '../../02-pages/visualizer';

const StyledApp = styled.div`
  /* Your style here */
`;

export function App() {
  return (
    <StyledApp>
      <h1>VisualizerApp</h1>
      <VisualizerPage />
    </StyledApp>
  );
}

export default App;
