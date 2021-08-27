import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface ILoadingProps {
  isLoading: boolean;
}

const useStyles = makeStyles<Theme, ILoadingProps>((theme: Theme) =>
  createStyles({
    container: {
      width: '90%',
      display: ({ isLoading }) => isLoading ? 'flex' : 'block',
      alignItems: ({ isLoading }) => isLoading ? 'center' : 'none',
      alignSelf: 'center',
      marginBottom: 40
    },
    content: {
      display: 'flex',
      justifyContent: 'center'
    },
    title: {
      padding: theme.spacing(1),
      fontWeight: 'bold',
      fontSize: '3.5rem'
    },
    header: {
      display: 'flex',
      color: theme.palette.primary.main,
      justifyContent: 'center',
      marginBottom: 20
    }
  })
);

export default useStyles;
