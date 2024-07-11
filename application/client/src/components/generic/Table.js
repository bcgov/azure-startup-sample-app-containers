import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Skeleton from '@mui/material/Skeleton';
import { styled } from '@mui/material/styles';

import { Card } from './Card';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  ...theme.typography.body1,
  '&.MuiTableCell-head': {
    backgroundColor: theme.palette.common.white,
    color: '#333333',
  },
  '&.MuiTableCell-body': {
    backgroundColor: theme.palette.background.default,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-child(1)': {
    borderTop: `2px solid ${theme.palette.secondary.main}`,
  },
  '&:nth-of-type(odd)': {
    backgroundColor: '#FAFAFA',
  },
}));

const CustomTable = ({ columns, rows, isLoading }) => {
  return (
    <Card noPadding>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column, index) => (
              <StyledTableCell key={index}>{column}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading ? [...Array(8)].map((_, i) => (
            <StyledTableRow key={i}>
              {[...Array(columns.length)].map((_, j) => (
                <StyledTableCell key={j}><Skeleton animation="wave" /></StyledTableCell>
              ))}
            </StyledTableRow>
          )) : rows.map((row, index) => (
            <StyledTableRow key={index}>
              {Object.keys(row).map((key) => (
                <StyledTableCell key={key}>{row[key]}</StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export { CustomTable as Table };
