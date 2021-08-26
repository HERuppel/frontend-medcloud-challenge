import { Theme, createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modalContainer: {
      height: '80%',
      width: '60%',
      background: theme.palette.action.selected,
    },
    header: {
      display: 'flex',
      justifyContent: 'space-around'
    }
  })
);

export default useStyles;
