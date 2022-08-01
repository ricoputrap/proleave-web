export type TableHeaderField = {
  label: string;
}

export type TableFieldData = {
  label: string;
  url?: string;
}

export type TableRowData = {
  id: number;
  fieldData: TableFieldData[];
}