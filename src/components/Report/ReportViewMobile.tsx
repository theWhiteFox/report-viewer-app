import { Outlet, useLocation, useParams, useNavigate } from 'react-router-dom';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { IData, IMobileData } from '../../interfaces';
import { useGetReportQuery } from '../../services/report';

let rowsData: any[] = [];

function createData(
    id: string,
    usageBytes: string,
): IMobileData {
    return { id, usageBytes };
}

const generate = (data: any) => {
    rowsData = data?.data.slice(1, data?.data.length).map((item: any) => createData(item[0], item[1]))
}

export default function DataTable() {
    const { reportId } = useParams();
    const { data, error, isLoading } = useGetReportQuery({ reportId: '245', billingPeriod: '201708' })
    const columns: GridColDef[] = [
        { field: 'id', headerName: `${data?.columns[0]}`, minWidth: 180 },
        { field: 'usageBytes', headerName: `${data?.columns[1]}`, minWidth: 120 },
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
