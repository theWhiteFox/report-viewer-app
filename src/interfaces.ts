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
            id: number,
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
