import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
