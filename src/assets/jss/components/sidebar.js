export default {
  itemText: {
    marginLeft: '10px',
  },
  item: {
    textDecoration: 'none',
    '&:hover,&:focus,&:visited,&': {
      color: '#5E5E5E',
    },
  },
  paperContainer: {
    width: '260px',
    height: '100vh',
    padding: '10px',
  },
  image: {
    width: '75px',
    height: '75px',
    border: '5px solid green',
    borderRadius: '50%',
    padding: '1px',
    borderColor: '#EBEDF2',
  },
  button: { margin: '10px' },
  title: { color: '#5E5E5E' },
  conteiner: {
    display: 'flex',
    height: '120px',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '10px',
  },
  active: {
    background: '#CDCDCD',
    transition: 'all 300ms linear',
    '&:hover, &:focus': {
      background: '#CDCDCD',
    },
  },
};
