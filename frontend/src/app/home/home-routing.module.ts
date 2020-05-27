import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePage} from './home.page';
import {ImageComponent} from './image/image.component';

const routes: Routes = [
    {
        path: '',
        component: HomePage,
    },
    {
        path: 'image',
        component: ImageComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomePageRoutingModule {
}
