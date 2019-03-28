const AcademyJss = theme => ({
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  paper: {
    '&:hover': {
      borderRadius: '.4rem',
      height: 290,
      marginLeft: 2.5,
      marginTop: 5,
      width: 265,
    },
    borderRadius: '.8rem',
    height: 295,
  },
  progress: {
    margin: theme.spacing.unit * 2,
  },
  progressWrapper: {
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    width: '100vw',
  },
  root: {
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 50,
    overflow: 'hidden',
  },
  titleBottom: {
    display: 'flex',
    flexDirection: 'column',
    height: 90,
  },
  titleContentBottom: {
    alignItems: 'center',
    display: 'flex',
    height: 45,
    justifyContent: 'left',
  },
  titleContentTop: {
    alignItems: 'center',
    borderBottom: '1px dotted grey',
    display: 'flex',
    height: 45,
    justifyContent: 'left',
  },
});

export default AcademyJss;
