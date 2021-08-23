import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '90%'
    },
    content: {
      display: 'flex',
      justifyContent: 'center'
    },
    title: {
      fontWeight: 'bold',
      fontSize: '4rem'
    }
  })
);

export default useStyles;
