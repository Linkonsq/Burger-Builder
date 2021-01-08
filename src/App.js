import React, { Component } from 'react';
import Layout from './components/Layout/Layout';

// function App() {
//   return (
//     <div>
//       <h1>Hello</h1>
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <h1>Hello World!</h1>
        </Layout>
      </div>
    );
  }
}

export default App;
