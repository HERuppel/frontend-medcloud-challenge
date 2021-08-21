import React from 'react';
import { NavLink } from 'react-router-dom';

import { Drawer, List, ListItem, ListItemText, ListItemIcon, Typography } from '@material-ui/core';
import { Home, NoteAdd, List as ListIcon } from '@material-ui/icons';

import useStyles from './styles';

interface ISideBar {
  open: boolean
  onClose: () => void
}

const SideBar: React.FC<ISideBar> = ({ open, onClose }: ISideBar) => {
  const classes = useStyles();

  const menu = (
    <div>
      <div className={classes.header}>
        <Typography
          variant="h4"
        >
          Menu
        </Typography>
      </div>
      <List>
        <NavLink className={classes.navLink} to="/main/home">
          <ListItem button key="home">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </NavLink>
        <NavLink className={classes.navLink} to="/main/create">
          <ListItem button key="create">
            <ListItemIcon>
              <NoteAdd />
            </ListItemIcon>
            <ListItemText primary="Criar" />
          </ListItem>
        </NavLink>
        <NavLink className={classes.navLink} to="/main/list">
          <ListItem button key="list">
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText primary="Lista" />
          </ListItem>
        </NavLink>
      </List>
    </div>
  );

  return(
    <nav className={classes.drawer}>
      <Drawer
        open={open}
        onClose={onClose}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        {menu}
      </Drawer>
    </nav>
  );
};

export default SideBar;
