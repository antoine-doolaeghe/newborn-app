import { fade } from '@material-ui/core/styles/colorManipulator';

const headerStyle = theme => ({
  root: {
    height: 64,
  },
  appBar: {
    backgroundColor: 'white',
    borderBottom: '6px solid black',
    zIndex: theme.zIndex.drawer - 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  menuIcon: {
    position: 'absolute',
    right: 12,
  },
});

export default headerStyle;
