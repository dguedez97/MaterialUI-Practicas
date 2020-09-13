import React from 'react'
import {withWidth, Typography, Hidden, Button} from '@material-ui/core'
const HiddenView = (props) => {
    return (
        <div>
            <Typography variant="h6" color="initial">
                Ancho: {props.width}
            </Typography>
            <Hidden xsDown>
                <Button variant="contained" color="primary">
                  XS
                </Button>
            </Hidden>
            <Hidden mdUp>
                <Button variant="contained" color="primary">
                  MD
                </Button>
            </Hidden>

            <Hidden only='sm'>
                <Button variant="contained" color="primary">
                  SM
                </Button>
            </Hidden>

            <Hidden only={['xs', 'lg']}>
                <Button variant="contained" color="primary">
                  LG
                </Button>
            </Hidden>

        </div>
    )
}

export default withWidth()(HiddenView)