import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent} from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from '../../app-routing.module';
import { MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    AppRoutingModule,
    MatListModule
  ],
  exports: [
    HeaderComponent,
    NavComponent,
    FooterComponent
  ]

})
export class TemplatesModule { }
