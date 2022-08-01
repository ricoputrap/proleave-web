import { TableBody as TBody, TableCell, TableRow } from '@mui/material'
import React from 'react'
import { Cell } from './index.styles';

interface FieldData {
  label: string;
  url?: string;
}

interface RowData {
  id: number;
  fieldData: FieldData[];
}

interface Props {
  data: RowData[];
}

const TableBody: React.FC<Props> = ({ data }) => {
  return (
    <TBody>
      {data.map(rowData => (
        <TableRow key={ rowData.id }>
          {rowData.fieldData.map(field => (
            <Cell key={ field.label } align='center' variant="body">
              { field.label }
            </Cell>
          ))}
        </TableRow>
      ))}
    </TBody>
  )
}

export default TableBody