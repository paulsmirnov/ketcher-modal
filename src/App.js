import 'ketcher-react/dist/index.css';
import './App.css';

import { StandaloneStructServiceProvider } from 'ketcher-standalone';
import { Editor } from 'ketcher-react';

const structServiceProvider = new StandaloneStructServiceProvider();

function App() {
  return (
    <div className="Modal">
      <div className="Dialog DialogCentered">
        <div className="Content">
          <div className="Body">
            <Editor
              staticResourcesUrl={process.env.PUBLIC_URL}
              structServiceProvider={structServiceProvider}
            />
          </div>
          <div className="Footer"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
