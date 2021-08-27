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
    },
    content: {
      display: 'flex',
      justifyContent: 'center'
    },
    title: {
      color: theme.palette.common.white,
      padding: theme.spacing(1),
    },
    header: {
      background: theme.palette.primary.main,
      display: 'flex',
      alignItems: 'center',
      color: theme.palette.common.white,
      justifyContent: 'center',
      borderTopRightRadius: 5,
      borderTopLeftRadius: 5
    }
  })
);

export default useStyles;
