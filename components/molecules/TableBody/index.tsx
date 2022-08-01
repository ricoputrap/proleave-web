import { TableBody as TBody, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import { TableRowData } from '../../../types/data-table.types';
import { Cell } from './index.styles';

interface Props {
  data: TableRowData[];
}

const TableBody: React.FC<Props> = ({ data }) => {
  return (
    <TBody>
      {data.map(rowData => (
        <TableRow key={ rowData.id }>
          {rowData.fieldData.map(field => (
            <Cell key={ field.id } align='center' variant="body">
              { field.label }
            </Cell>
          ))}
        </TableRow>
      ))}
    </TBody>
  )
}

export default TableBody