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
import EditIcon from '@material-ui/icons/Edit';
import { useHistory } from 'react-router-dom';
import { getAll } from '../../redux/modules/article/actions';

const headers = [
  {
    id: 1,
    align: 'center',
    name: 'Slug',
  },
  {
    id: 2,
    align: 'center',
    style: { minWidth: 80 },
    name: 'Meta fields',
  },
  {
    id: 3,
    align: 'center',
    name: 'TitleUz',
  },
  {
    id: 5,
    align: 'center',
    name: 'DescriptionUz',
  },
  {
    id: 6,
    align: 'center',
    name: 'Views',
  },
  {
    id: 7,
    align: 'center',
    name: 'Likes',
  },
  {
    id: 8,
    align: 'center',
    style: { minWidth: 150 },
    name: 'Created',
  },
  {
    id: 8,
    align: 'center',
    style: { minWidth: 50 },
    name: 'Actions',
  },
];

export default () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const history = useHistory();

  const articles = useSelector(({ article }) => article.articles);
  const total = useSelector(({ article }) => article.total);

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
                articles.map((article) => (
                  <TableRow hover key={`${article.id}`}>
                    <TableCell align="center">{ article.slug }</TableCell>
                    <TableCell align="center">{ article.metaFields }</TableCell>
                    <TableCell align="center">{ article.title_uz }</TableCell>
                    <TableCell align="center">{ article.description_uz }</TableCell>
                    <TableCell align="center">{ article.views }</TableCell>
                    <TableCell align="center">{ article.likes }</TableCell>
                    <TableCell align="center">{ moment(article.createdAt).format('DD/MM/YYYY HH:mm') }</TableCell>
                    <TableCell align="center">
                      <IconButton onClick={() => { history.push(`/articles/edit/${article.slug}`); }}><EditIcon /></IconButton>
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
