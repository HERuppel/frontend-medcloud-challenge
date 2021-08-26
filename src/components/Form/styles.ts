import { makeStyles, createStyles, Theme } from '@material-ui/core';
import { colors } from '../../global/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '95%',
    },
    form: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      gap: 50
    },
    input: {
      width: '80%',
      height: 30,
      maxWidth: '600px',
    },
    textarea: {
      width: '90%',
      resize: 'vertical',
    },
    sectionTitle: {
      fontWeight: 'bold',
      fontSize: '2rem',
      position: 'absolute',
      top: 0,
      left: '5%',
      color: colors.verdiGris,
      paddingTop: 10
    },
    sectionContainer: {
      backgroundColor: colors.isabelline,
      borderRadius: 5,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '50px 0',
      position: 'relative'
    },
    basicFields: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      placeItems: 'center',
      width: '100%',
      paddingTop: 20
    },
    pickers: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      placeItems: 'center',
      padding: '40px 0 0 0',
      alignItems: 'start'
    },
    contactFields: {
      display: 'grid',
      gridTemplateRows: '1fr 1fr 1fr',
      gridTemplateColumns: '1fr 1fr',
      placeItems: 'center',
      gap: 50,
      paddingTop: 20
    },
    medicalFiels: {
      display: 'grid',
      gridTemplateRows: '1fr 1fr',
      gridTemplateColumns: '1fr',
      placeItems: 'center'
    },
    subInput: {
      width: '90%',
      height: 30,
    },
    subjectField: {
      width: '90%',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      placeItems: 'center'
    },
    chipContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      margin: theme.spacing(1),
    },
    button: {
      width: '50%',
      margin: '20px',
      alignSelf: 'center',
      color: colors.white
    },
    '@media (max-width: 1000px)': {
      input: { width: '90%' },
      button: { width: '90%' },
      handleErrorSuccess: { width: '90%' }
    },
    '@media (max-width: 600px)': {
      button: { margin: '10px' },
      form: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
      }
    }
  })
);

export default useStyles;
