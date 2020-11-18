import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyPipePipe } from './my-pipe.pipe';
import { AmpmPipe } from './ampm.pipe';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: [	
    "MyPipePipe",
      AmpmPipe
   ]
})
export class AppRoutingModule { }
