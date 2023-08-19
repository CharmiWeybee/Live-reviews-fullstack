import { Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux";
import './App.css';
import store from './redux/store';
import Reviews from './components/Reviews';
import ReviewForm from './components/ReviewForm';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Routes>
        <Route path="/" element={ <Reviews/> } />
        <Route path="new" element={ <ReviewForm/> } />
        <Route path="/:id" element={ <ReviewForm/> } />
      </Routes>
    </div>
    </Provider>
  );
}

export default App;
