import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { colors } from '../../global/colors';

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
      fontSize: '4rem',
      color: colors.blueSaphire
    }
  })
);

export default useStyles;
