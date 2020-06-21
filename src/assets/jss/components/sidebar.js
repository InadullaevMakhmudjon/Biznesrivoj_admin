export default {
  itemText: {
    marginLeft: '10px',
  },
  item: {
    textDecoration: 'none',
    '&:hover,&:focus,&:visited,&': {
      color: '#212529',
    },
  },
  paperContainer: {
    width: '150px',
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
  title: { color: '#212529' },
  conteiner: {
    display: 'flex',
    height: '120px',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '10px',
  },
  active: {
    transition: 'all 300ms linear',
  },
};
