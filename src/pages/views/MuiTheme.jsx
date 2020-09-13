import React from 'react'
import {Button} from '@material-ui/core'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import green from '@material-ui/core/colors/green';
const theme = createMuiTheme({
    palette: {
        primary: green,
        secondary: {
          main: '#ff5722',
        },
      }
})

const MuiTheme = () => {
    return (
        <ThemeProvider theme={theme}>
            <Button variant="contained" color="primary">
                boton primario
            </Button>
            <Button variant="contained" color="secondary">
                boton secundario
            </Button>
        </ThemeProvider>
    )
}

export default MuiTheme
