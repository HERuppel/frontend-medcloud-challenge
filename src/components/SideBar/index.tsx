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
          className={classes.title}
        >
          Menu
        </Typography>
      </div>
      <List>
        <ListItem key="home" component={NavLink} activeClassName={classes.activeNavLink} className={classes.navLink} to="/main/home">
            <Home />
            <ListItemText className={classes.itemText} primary="Home" />
        </ListItem>
        <ListItem key="create" component={NavLink} activeClassName={classes.activeNavLink} className={classes.navLink} to="/main/create">
            <NoteAdd />
            <ListItemText className={classes.itemText} primary="Criar" />
        </ListItem>
        <ListItem key="list" component={NavLink} activeClassName={classes.activeNavLink} className={classes.navLink} to="/main/list">
          <ListIcon />
          <ListItemText className={classes.itemText} primary="Lista" />
        </ListItem>
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
