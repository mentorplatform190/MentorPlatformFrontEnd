import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#ffffff'
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
  <ThemeProvider theme={theme}>
  <App />
  </ThemeProvider>
   </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
