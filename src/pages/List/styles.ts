import { makeStyles, createStyles } from '@material-ui/core/styles';
import { colors } from '../../global/colors';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      width: '90%',
    },
    content: {
      display: 'flex',
      justifyContent: 'center'
    },
    title: {
      fontWeight: 'bold',
      fontSize: '4rem',
    }
  })
);

export default useStyles;
