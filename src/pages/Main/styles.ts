import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      height: '100vh',
      width: '100%'
    },
    toolbar: theme.mixins.toolbar,
    main: {
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'center',
      paddingVertical: theme.spacing(1),
      textAlign: 'center'
    }
  })
);

export default useStyles;
