import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../global/colors';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: 300,
        flexShrink: 0,
      }
    },
    drawerPaper: { width: 300 }
  })
);


export const Container = styled.div`

`;

export const Header = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.blackOlive};

  h1 {
    color: ${colors.isabelline};
  }
`;

export const Content = styled.div`
`;


export const NavItem = styled(NavLink)`
  text-decoration: none;
  color: ${colors.blackOlive};
`;
