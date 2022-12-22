import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'MENUITEMS.MAIN.TEXT',
    icon: '',
    class: '',
    groupTitle: true,
    submenu: []
  },
  {
    path: '',
    title: 'MENUITEMS.HOME.TEXT',
    icon: 'life-buoy',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: 'dashboard/main',
        title: 'Home',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: 'dashboard/dashboard2',
        title: 'MENUITEMS.HOME.LIST.DASHBOARD2',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      
    ]
  },
  {
    path: '',
    title: 'Cartola',
    icon: 'layers',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: 'dashboard/dashboard3',
        title: 'Ligas',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      
    ]
  },

  {
    path: '',
    title: 'Carteira',
    icon: 'credit-card',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/pix/pix',
        title: 'Gerenciar',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
    ]
  }
  
];
