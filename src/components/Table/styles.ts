import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { colors } from '../../global/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        borderBottom: 'unset',
      },
    },
    container: {
      width: '100%',
    },
    title: {
      fontWeight: 'bold',
    },
    infos: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',

      '& span': {
        color: theme.palette.primary.dark,
        fontWeight: 'bold'
      }
    },
    box: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      placeItems: 'start start'
    },
    personal: {

    },
    contact: {

    },
    medical: {
      alignSelf: 'flex-start'
    }
  })
);

export default useStyles;
