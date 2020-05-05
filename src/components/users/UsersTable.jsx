import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import moment from 'moment';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import { getAll } from '../../redux/modules/users/actions';
import styleSource from '../../assets/jss/components/user';

const useStyle = makeStyles(styleSource);

const headers = [
  {
    id: 1,
    align: 'center',
    name: 'Image',
  },
  {
    id: 2,
    align: 'center',
    name: 'Gender',
  },
  {
    id: 3,
    align: 'center',
    name: 'Firstname',
  },
  {
    id: 4,
    align: 'center',
    name: 'Secondname',
  },
  {
    id: 5,
    align: 'center',
    name: 'Phone',
  },
  {
    id: 6,
    align: 'center',
    style: { minWidth: 150 },
    name: 'Quote',
  },
  {
    id: 7,
    align: 'center',
    name: 'Birth',
  },
  {
    id: 8,
    align: 'center',
    name: 'lastLoggedIn',
  },
  {
    id: 9,
    align: 'center',
    style: { minWidth: 50 },
    name: 'Actions',
  },
];

export default () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const allUsers = useSelector(({ users }) => users.users);
  const total = useSelector(({ users }) => users.total);

  useEffect(() => dispatch(getAll(page + 1, rowsPerPage)), [dispatch, rowsPerPage, page]);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };
  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Paper>
        <TableContainer>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {
                  headers.map(({
                    id, align, style, name,
                  }) => (
                    <TableCell key={`${id}${name}`} align={align} style={style}>{name}</TableCell>
                  ))
                }
              </TableRow>
            </TableHead>
            <TableBody>
              {
                allUsers.map((user) => (
                  <TableRow hover key={`${user.id}`}>
                    <TableCell align="center">
                      <img
                        src={user.image}
                        alt="User"
                        className={classes.image}
                      />
                    </TableCell>
                    <TableCell align="center">{ user.gender.name }</TableCell>
                    <TableCell align="center">{ user.firstname }</TableCell>
                    <TableCell align="center">{ user.secondname }</TableCell>
                    <TableCell align="center">{ user.phone }</TableCell>
                    <TableCell align="center">{ user.quote }</TableCell>
                    <TableCell align="center">{ moment(user.dateOfBirth).format('DD/MM/YYYY') }</TableCell>
                    <TableCell align="center">{ moment(user.lastLoggedIn).format('DD/MM/YYYY') }</TableCell>
                    <TableCell align="center">
                      <IconButton><DeleteIcon /></IconButton>
                    </TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 20, 25]}
          component="div"
          count={total}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
        />
      </Paper>
    </>
  );
};
