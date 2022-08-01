import { ForeignKeyData } from "./data-table.types";

export type Department = {
  id: number;
  name: string;
  pic?: ForeignKeyData;
  supervisor?: ForeignKeyData;
}