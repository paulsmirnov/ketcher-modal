import 'ketcher-react/dist/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { StandaloneStructServiceProvider } from 'ketcher-standalone';
import { Editor } from 'ketcher-react';

const structServiceProvider = new StandaloneStructServiceProvider();

function App() {
  return (
    <Modal centered show size="xl" onHide={() => {}} dialogClassName="ModalDialog" contentClassName="ModalContent">
      <Modal.Body className="ModalBody">
        <Editor
          staticResourcesUrl={process.env.PUBLIC_URL}
          structServiceProvider={structServiceProvider}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary">Cancel</Button>
        <Button variant="success">Accept</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default App;
