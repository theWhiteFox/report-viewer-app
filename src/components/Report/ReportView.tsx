import { DataGrid } from '@mui/x-data-grid';
import { IColumn, IData } from '../../interfaces';

const columns: IColumn[] = [
    { field: 'id', headerName: 'Account Id', minWidth: 120 },
    { field: 'officeLocation', headerName: 'Office Location', minWidth: 190 },
    { field: 'chargesEuro', headerName: 'ChargesEuro', minWidth: 190 }
];

function createData(
    id: string,
    officeLocation: string,
    chargesEuro: number,
): IData {
    return { id, officeLocation, chargesEuro };
}

const rowsData = [
    createData('India', 'IN', 1324171354),
    createData('China', 'CN', 1403500365),
    createData('Italy', 'IT', 60483973),
    createData('United States', 'US', 327167434),
    createData('Canada', 'CA', 37602103),
    createData('Australia', 'AU', 25475400),
    createData('Germany', 'DE', 83019200),
    createData('Ireland', 'IE', 4857000),
    createData('Mexico', 'MX', 126577691),
    createData('Japan', 'JP', 126317000),
    createData('France', 'FR', 67022000),
    createData('United Kingdom', 'GB', 67545757),
    createData('Russia', 'RU', 146793744),
    createData('Nigeria', 'NG', 200962417),
    createData('Brazil', 'BR', 210147125),
];

export default function DataTable() {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rowsData}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[3]}
                checkboxSelection
            />
        </div>
    );
}
