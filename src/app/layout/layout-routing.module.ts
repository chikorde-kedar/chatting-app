import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
      path: '',
      component: LayoutComponent,
      children: [
        { path: '', redirectTo: 'dashboard' },
        { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
        { path: 'chat', loadChildren: './chat/chat.module#ChatModule' },
        { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
      ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
