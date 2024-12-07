
import './App.css';
import Main from './components/main/Main';
import store from './store/Store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Provider store={store}>
      <Router>
  <div className="App">
      <Main/>
    </div>
    </Router>
    </Provider>
  
  );
}

export default App;
