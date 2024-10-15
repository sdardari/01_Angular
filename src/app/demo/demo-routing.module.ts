import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoBindingsComponent } from './demo-bindings/demo-bindings.component';
import { DemoPipesComponent } from './demo-pipes/demo-pipes.component';
import { DemoDirectivesComponent } from './demo-directives/demo-directives.component';
import { DemoInputOutputComponent } from './demo-input-output/demo-input-output.component';

const routes: Routes = [
  {path:'demo01', component: DemoBindingsComponent},
  {path: 'demo02', component: DemoPipesComponent},
  {path: 'demo03', component: DemoDirectivesComponent},
  {path: 'demo04', component: DemoInputOutputComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
