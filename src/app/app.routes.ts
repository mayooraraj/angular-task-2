import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
    {
        component:HomeComponent,
        path:''
    },
    {
        component:AboutComponent,
        path:'about'
    },
    {
        component:ContactComponent,
        path:'contact'
    },
    {
        component:ProductComponent,
        path:'product'
    },

];
