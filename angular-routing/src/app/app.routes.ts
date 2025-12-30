import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Layouts } from './layouts/layouts';
import { Login } from './login/login';

export const routes: Routes = [
    {
        path: 'login',
        component:Login

    },
  {
    path: '',
    component: Layouts,
    children: [
      {
        path: 'home',
        component: Home
      },
      {
        path: 'about',
        component: About
      },
      {
        path: 'contact',
        component: Contact
      },
      {
        path: 'contact/:params',
        component: Contact
      }
    ]
  }
];
