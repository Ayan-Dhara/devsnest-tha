import './App.css';
import CalorieList from './CalorieList';
import CalorieCard from './CalorieCard';

function App() {
  return (
    <div className="calorie-list">
      {
        CalorieList.map(item => {
          return <CalorieCard name={item.foodName} calorie={item.calories}/>
        })
      }
    </div>
  );
}

export default App;
