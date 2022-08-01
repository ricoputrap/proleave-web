import { TableHead, TableRow } from '@mui/material';
import React from 'react'
import { COLORS } from '../../../styles/variables';
import { Cell } from './index.styles';

interface Field {
  label: string;
  size?: string;
}

interface Props {
  fields: Field[];
}

const TableHeader: React.FC<Props> = ({ fields }) => {
  return (
    <TableHead sx={{ background: COLORS.GRAY_700 }}>
      <TableRow>
        {fields.map(field => (
          <Cell 
            key={ field.label }
            align="center"
            className="color-white"
            variant="head"
          >
            { field.label }
          </Cell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export default TableHeader