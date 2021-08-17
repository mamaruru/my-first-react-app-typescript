import React from 'react';
import CounterWithReducer from './CounterWithReducer';
interface AppProps {
  message?: string;
}

const App: React.FunctionComponent<AppProps> = ({ message }) => {
  return (
  <div>
    <CounterWithReducer />
  </div>
  );
};

// const App = ({ message }: AppProps) => {
//   return <div>{message}</div>;
// };

App.defaultProps = {
  message: 'Hello, default!',
  // description: 'This is description.',
}

export default App;
