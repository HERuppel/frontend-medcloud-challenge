import React from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { Home, NoteAdd, List as ListIcon } from '@material-ui/icons';

import { useStyles, Container, Header, NavItem } from './styles';

interface ISideBar {
  open: boolean
  onClose: () => void
}

const SideBar: React.FC<ISideBar> = ({ open, onClose }: ISideBar) => {
  const classes = useStyles();

  const menu = (
    <Container>
      <Header>
        <h1>MENU</h1>
      </Header>
      <List>
        <NavItem to="/main/home">
          <ListItem button key="home">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </NavItem>
        <NavItem to="/main/create">
          <ListItem button key="create">
            <ListItemIcon>
              <NoteAdd />
            </ListItemIcon>
            <ListItemText primary="Criar" />
          </ListItem>
        </NavItem>
        <NavItem to="/main/list">
          <ListItem button key="list">
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText primary="Lista" />
          </ListItem>
        </NavItem>
      </List>
    </Container>
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
