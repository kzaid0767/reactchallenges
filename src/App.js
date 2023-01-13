import './App.css';
import Badge from './Badge';
import Button from './Button';
import Counter from './Counter';
import CharacterCounter from './CharacterCounter';

function App() {
  let defaultMoods = ["Great", "Okay", "Bad"]
  return (
    < >
      <CharacterCounter text={"How was your day?"} defaults={defaultMoods}/>
    </>
  );
}

export default App;
