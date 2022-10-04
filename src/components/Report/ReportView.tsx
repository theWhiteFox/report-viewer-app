import { DataGrid } from '@mui/x-data-grid';
import { IColumn, IData } from '../../interfaces';
import { useGetReportQuery } from '../../services/report';

let columns: IColumn[] = [];
let rowsData: any[] = [];

function createData(
    id: string,
    officeLocation: string,
    chargesEuro: string,
): IData {
    return { id, officeLocation, chargesEuro };
}

const rowsDataOld = [
    createData('58935372', 'Waterford', '7465.33'),
    createData('India', 'IN', '1324171354'),
    createData('China', 'CN', '1403500365'),
    createData('Italy', 'IT', '60483973'),
    createData('United States', 'US', '327167434'),
    createData('Canada', 'CA', '37602103'),
    createData('Australia', 'AU', '25475400'),
    createData('Germany', 'DE', '83019200'),
    createData('Ireland', 'IE', '4857000'),
    createData('Mexico', 'MX', '126577691'),
    createData('Japan', 'JP', '126317000'),
    createData('France', 'FR', '67022000'),
    createData('United Kingdom', 'GB', '67545757'),
    createData('Russia', 'RU', '146793744'),
    createData('Nigeria', 'NG', '200962417'),
    createData('Brazil', 'BR', '210147125'),
];

function generate(data: any) {
    columns = [
        { field: 'id', headerName: `${data?.columns[0]}`, minWidth: 120 },
        { field: 'officeLocation', headerName: `${data?.columns[1]}`, minWidth: 140 },
        { field: 'chargesEuro', headerName: `${data?.columns[2]}`, minWidth: 140 }
    ];
    {
        data?.data.slice(1, data?.data.length).map((item: any, index: any) => {
            return (
                createData(item[0], item[1], item[2])
            );
        })
    }
}

export default function DataTable() {
    const { data } = useGetReportQuery({ reportId: '41', billingPeriod: '201708' })
    generate(data)

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
