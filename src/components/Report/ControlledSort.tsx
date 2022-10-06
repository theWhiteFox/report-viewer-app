import { useState } from 'react';
import { DataGrid, GridSortModel } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { useGetReportQuery } from '../../services/report';

const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];

export default function ControlledSort() {

    useGetReportQuery({ reportId: '41', billingPeriod: '201708' })

    const { data } = useDemoData({
        dataSet: 'Employee',
        visibleFields: VISIBLE_FIELDS,
        rowLength: 100,
    });

    console.log(data)
    const [sortModel, setSortModel] = useState<GridSortModel>([
        {
            field: 'rating',
            sort: 'desc',
        },
    ]);

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                {...data}
                sortModel={sortModel}
                onSortModelChange={(newSortModel) => setSortModel(newSortModel)}
            />
        </div>
    );
}
