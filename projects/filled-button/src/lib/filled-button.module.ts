import { NgModule } from '@angular/core';
import { FilledButtonComponent } from './components/filled-button/filled-button.component';
import { FilledButtonGroupComponent } from './components/filled-button-group/filled-button-group.component';

@NgModule({
  declarations: [FilledButtonComponent, FilledButtonGroupComponent],
  imports: [],
  exports: [FilledButtonComponent, FilledButtonGroupComponent],
})
export class FilledButtonModule {}
