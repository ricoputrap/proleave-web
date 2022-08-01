import { TableContainer, Paper, Table } from '@mui/material'
import React from 'react'
import { TableHeaderField, TableRowData } from '../../../types/data-table.types';
import TableBody from '../../molecules/TableBody';
import TableHeader from '../../molecules/TableHeader';

interface Props {
  ariaLabel: string;
  headerFields: TableHeaderField[];
  data: TableRowData[];
}

const DataTable: React.FC<Props> = ({ ariaLabel, headerFields, data }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label={ ariaLabel }>
        <TableHeader fields={ headerFields } />
        <TableBody data={ data } />
      </Table>
    </TableContainer>
  )
}

export default DataTable