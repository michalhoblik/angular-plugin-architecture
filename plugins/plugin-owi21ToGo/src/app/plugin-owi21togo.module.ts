import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluginOwi21ToGoComponent } from './plugin-owi21togo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PluginOwi21ToGoComponent],
  entryComponents: [PluginOwi21ToGoComponent],
  providers: [{
     provide: 'plugins',
     useValue: [{
       name: 'plugin-owi21togo-component',
       component: PluginOwi21ToGoComponent
     }],
     multi: true
   }]
})
export class PluginOwi21ToGoModule { }