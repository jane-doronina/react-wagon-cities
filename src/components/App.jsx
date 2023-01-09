import CityList from '../containers/city-list';
import ActiveCity from '../containers/active-city';

import '../assets/stylesheets/App.scss';

const App = () => {
  return (
    <div className="app">
      <CityList />
      <ActiveCity />
    </div>
  );
}

export default App;
