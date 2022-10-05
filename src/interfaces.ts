import { FC } from "react";

export interface IRoute {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export interface IReports {
    columns: [
        accountId: string,
        officeLocation: string,
        chargesEuro: string
    ],
    data: [
        [
            accountId: string,
            officeLocation: string,
            chargesEuro: string
        ],
    ]
}

export interface IReport {
    content: [
        {
            id: string,
            name: string,
            description: string,
            modifiedDate: Date
        },
    ],
    totalElements: number,
    last: boolean,
    totalPages: number,
    first: boolean,
    numberOfElements: number,
    sort: [
        {
            direction: string,
            property: string,
            ignoreCase: false,
            nullHandling: string,
            ascending: boolean
        }
    ],
    size: number,
}

export interface IColumn {
    field: 'id' | 'officeLocation' | 'chargesEuro';
    headerName: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

export interface IData {
    id: string;
    officeLocation: string;
    chargesEuro: string;
}

export interface IData {
    id: string;
    officeLocation: string;
    chargesEuro: string;
}

export interface IMobileData {
    id: string,
    usageBytes: string,
}

export type Order = 'asc' | 'desc';

export interface IEnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof IData) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}