// src/routes.ts

// pages
import Home from "./pages/Home";
import Modal from "./components/Modals/ReportDetails";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import { IRoute } from './interfaces'

export const routes: Array<IRoute> = [
    {
        key: 'home-route',
        title: 'Home',
        path: '/',
        enabled: true,
        component: Home
    },
    {
        key: 'modal-route',
        title: 'Report',
        path: ':reportName',
        enabled: true,
        component: Modal
    },
    {
        key: 'about-route',
        title: 'About',
        path: '/about',
        enabled: true,
        component: About
    },
    {
        key: 'not-found-route',
        title: '',
        path: '*',
        enabled: true,
        component: NotFound
    }
]