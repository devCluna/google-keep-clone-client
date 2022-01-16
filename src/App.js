import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Provider store={store}>
      <Dashboard/>
    </Provider>
  );
}

export default App;
