import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { IColumn, IData } from '../../interfaces';
import { useGetReportQuery } from '../../services/report';

let rowsData: any[] = [];

function createData(
    id: string,
    officeLocation: string,
    chargesEuro: string,
): IData {
    return { id, officeLocation, chargesEuro };
}

const generate = (data: any) => {
    rowsData = data?.data.slice(1, data?.data.length).map((item: any, index: any) => createData(item[0], item[1], item[2]))
}

export default function DataTable() {
    const { data, error, isLoading } = useGetReportQuery({ reportId: '41', billingPeriod: '201708' })
    const columns: GridColDef[] = [
        { field: 'id', headerName: `${data?.columns[0]}`, minWidth: 120 },
        { field: 'officeLocation', headerName: `${data?.columns[1]}`, minWidth: 140 },
        { field: 'chargesEuro', headerName: `${data?.columns[2]}`, minWidth: 140 },
    ];

    generate(data)

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rowsData}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}
