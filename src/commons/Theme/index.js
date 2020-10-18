import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#D32F2F',
    },
    secondary: {
      main: '#00BCD4',
    },
    default: {
      main: '#F44336',
    },
  },
  typography: {
    fontFamily: 'Roboto',
  },
  shape: {
    borderRadius: 4,
    backgroundColor: '#7B1FA2',
    textColor: '#FFFFFF',
  },
});

export default theme;
