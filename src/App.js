import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/route';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme } from './theme/theme';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
     <ThemeProvider theme={lightTheme}>
       <Provider store={store}>
       <RouterProvider router={router}/>
      <CssBaseline/>
       </Provider>
     </ThemeProvider>
  );
}

export default App;
