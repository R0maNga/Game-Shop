import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserStore from "./store/UserStore";
import GameStore from "./store/GameStore";

export const Context = createContext(null)


ReactDOM.render(
  <Context.Provider value={{
      user: new UserStore(),
      game: new GameStore(),
  }}>
      <App />
  </Context.Provider>,

  document.getElementById('root')
);

reportWebVitals();
