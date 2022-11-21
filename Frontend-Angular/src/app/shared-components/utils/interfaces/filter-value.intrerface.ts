export interface FilterValue{
    showGlobalFilter?: boolean;
    showColumnFilter?: boolean;
    sort?: {
        columnName: string;
        direction: 'asc' | 'desc' | ''
    }
}