import 'ketcher-react/dist/index.css';
import './App.css';

import { StandaloneStructServiceProvider } from 'ketcher-standalone';
import { Editor } from 'ketcher-react';

const structServiceProvider = new StandaloneStructServiceProvider();

function App() {
  return (
    <Editor
      staticResourcesUrl={process.env.PUBLIC_URL}
      structServiceProvider={structServiceProvider}
    />
  );
}

export default App;
