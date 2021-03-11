import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import Body from './components/Body/Body';

function App() {
  return (
    <div className="App">
      <Header/>
      <SearchBar />
      <Body/>
    </div>
  );
}

export default App;
