export type TableHeaderField = {
  label: string;
}

type TableForeignKey = {
  id: number;
  type: string;
  url: string;
}

export type TableFieldData = {
  id: string;
  label: string;
  foreignKey?: TableForeignKey
}

export type TableRowData = {
  id: number;
  fieldData: TableFieldData[];
}

export type ForeignKeyData = {
  id: number;
  name: string;
  type: string;
  url?: string;
}