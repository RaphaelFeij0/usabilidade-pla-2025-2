import logo from './logo.svg';
import './App.css';
import home from './components/home';

function App() {

  const title = "Welcome to my react project";

  const link = [
    {label: 'Cards', href:'cards.html'},
    {label: 'Buttons', href:'buttons.html'},
    {label: 'NavBar', href:'navbar.html'},
    {label: 'Forms', href:'forms.html'},
    {label: 'Layout', href:'layout.html'},
  ]

  return (
    <div >
     <home title={title} links={link}/>
    </div>
  );
}

export default App;
