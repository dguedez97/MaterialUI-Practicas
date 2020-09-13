import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles, IconButton, Button } from "@material-ui/core";
import { useHistory } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import DrawerMenu from '../components/DrawerMenuList'
const useStyle = makeStyles(theme => ({
  offset: theme.mixins.toolbar,
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    }
  }
}))

const drawerWidth = 240;
const Navbar = () => {
  const history = useHistory()
  const redirect = (route) => {
    history.push(`/${route}`)
  }

  const classes = useStyle()
  return (
    <div>
      <AppBar className={classes.app} position="fixed" color="primary">
        <Toolbar>
          <IconButton className={classes.menuButton} aria-label="menu" >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6">
            Example Bar
          </Typography>
          <Button color="inherit" variant="text" onClick={() => redirect('styles')} >
            Estilos
          </Button>
          <Button color="inherit" variant="text" onClick={() => redirect('theme')} >
            Tema
          </Button>
          <Button color="inherit" variant="text" onClick={() => redirect('lists')}>
            Listas
          </Button>
          <Button color="inherit" variant="text" onClick={() => redirect('hidden')}>
            Hidden
          </Button>
          <DrawerMenu />
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </div >

  )
}

export default Navbar
