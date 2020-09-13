import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core'
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
const Lists = () => {
    return (
        <List component='nav'>
            <ListItem button>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Elemento 1" />
            </ListItem>

            <ListItem button>
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Elemento 2" />
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Elemento 3" />
            </ListItem>
        </List>
    )
}

export default Lists
