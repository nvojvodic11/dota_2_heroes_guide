export interface TableData{
    columnDef: string;
    columnName: string;
    cell: (param: any) => string;
}