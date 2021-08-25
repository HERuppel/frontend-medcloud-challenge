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
    },
    content: {
      display: 'flex',
      justifyContent: 'center'
    },
    title: {
      fontSize: '4rem',
      color: theme.palette.common.white
    },
    header: {
      background: theme.palette.primary.main
    }
  })
);

export default useStyles;
