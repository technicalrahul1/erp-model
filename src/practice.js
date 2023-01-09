import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name= string,
  calories= number,
  fat= number,
  carbs= number,
  protein= number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Table5(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>{props.first ? props.first : "Submission Tabric"}&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">{props.header2}&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">{props.header3}&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">{props.header4}&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">{props.header5}&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((items) => (
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
                {items.SrNo ? items.SrNo : items.SrNo ? items.SrNo : items.SrNo ? items.SrNo : items.submissionTime}
              </StyledTableCell>
              <StyledTableCell align="right">{items.productname ? items.productname : items.customerID ? items.customerID : items.date ? items.date :items.customerID }</StyledTableCell>
              <StyledTableCell align="right">{items.category ? items.category : items.city ? items.city : items.xgBoostAlgorithum ? items.xgBoostAlgorithum : items.items }</StyledTableCell>
              <StyledTableCell align="right">{items.quantity ? items.quantity : items.state ? items.state : items.randomForestAlgorithum ? items.randomForestAlgorithum : items.activePrice}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}