import React from "react";
import Home from './pages/Home';
import { Provider } from "react-redux";
import store from './redux/store'
//Tema
import theme from "./theme";
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { MuiThemeProvider,createTheme  } from '@material-ui/core/styles';


class App extends React.Component{
    // constructor(props){
    //   super(props);
    // }
  render(){
    const colorScheme = matchMedia('(prefers-color-scheme: dark)');
    const innerTheme = createTheme({
      palette: {
          type: colorScheme.matches ? 'dark': 'light',
          primary: {
            main: theme({dark: true}).colors.primary,
          },
      }
    });
    colorScheme.onchange = (e) => this.setState({});
    return (
      <Provider store={store}>
      <ThemeProvider theme={theme(colorScheme.matches ? {dark: true} : {dark: false})}>
        <Reset/>
        <MuiThemeProvider theme={innerTheme}>
          <Home />
        </MuiThemeProvider>
      </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
