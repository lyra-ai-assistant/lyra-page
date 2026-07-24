export type CellVariant = 'default' | 'mono' | 'status';

export interface TableCell {
  text: string;
  variant?: CellVariant;
}

export interface TableData {
  headers: string[];
  rows: TableCell[][];
}
