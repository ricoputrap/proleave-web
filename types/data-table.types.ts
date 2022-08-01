export type TableHeaderField = {
  label: string;
}

export type TableFieldData = {
  id: string;
  label: string;
  url?: string;
}

export type TableRowData = {
  id: number;
  fieldData: TableFieldData[];
}

export type ForeignKeyData = {
  id: number;
  name: string;
  url?: string;
}