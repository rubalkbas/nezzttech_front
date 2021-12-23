/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Ejemplo vacio',
        type    : 'group',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    },
    {
        id   : 'apps.scrumboard',
        title: 'Alta Asuntos',
        type    : 'collapsable',
        icon : 'heroicons_outline:view-boards',
        link : '/peticionario/asuntos',
        children: [
            {
                id   : 'apps.project',
                title: 'Mas Asuntos',
                type : 'basic',
                icon : 'heroicons_outline:clipboard-check',
                link : '/peticionario/asuntos'
            },
            {
                id   : 'apps.analytics',
                title: 'Mas Asuntos',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/dashboards/analytics'
            },
            {
                id   : 'apps.finance',
                title: 'Mas Asuntos',
                type : 'basic',
                icon : 'heroicons_outline:cash',
                link : '/dashboards/finance'
            },
            {
                id   : 'apps.crypto',
                title: 'Mas Asuntos',
                type : 'basic',
                icon : 'heroicons_outline:currency-dollar',
                link : '/dashboards/crypto'
            }
        ]
    },
    {
        id   : 'apps.scrumboard',
        title: 'Busqueda de Asuntos',
        type : 'basic',
        icon : 'heroicons_outline:view-boards',
        link : '/peticionario/asuntos1'
    },
    {
        id   : 'apps.scrumboard',
        title: 'Busqueda de quejas',
        type : 'basic',
        icon : 'heroicons_outline:view-boards',
        link : '/peticionario/asuntos2'
    },
    {
        id   : 'apps.scrumboard',
        title: 'Buscador de soluciones',
        type : 'basic',
        icon : 'heroicons_outline:view-boards',
        link : '/peticionario/asuntos3'
    },
];

export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
