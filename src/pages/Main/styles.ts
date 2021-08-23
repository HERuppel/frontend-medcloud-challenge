import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      width: '100%'
    },
    content: {
    },
    toolbar: theme.mixins.toolbar,
    main: {
      width: '100%',
      textAlign: 'center',
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'center'
    }
  })
);

export default useStyles;
