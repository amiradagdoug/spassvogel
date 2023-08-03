
import './App.css';
import Search from './components/search/search';
import CurrentWetter from './components/current-wetter/current-wetter';
import { WETTER_API_URL } from './api';
import { WETTER_API_KEY } from './api';
function App() {

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split("");
    const currentWetterFetch = fetch('${WETTER_API_URL}/wetter?lat={lat}&lon={lon}&appid=${WETTER_API_KEY}')

  }
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWetter />
    </div>
  );
}

export default App;
