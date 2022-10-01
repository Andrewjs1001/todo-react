import logo from './logo.svg';
import './App.css';
import {store} from "./actions/store"
import {provider} from "react-redux"
function App() {
  return (
    <provider store={store}>

      
    </provider>
  );
}

export default App;
