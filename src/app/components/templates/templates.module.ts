import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent} from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from '../../app-routing.module';
import { MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    AppRoutingModule,
    MatListModule,
    MatIconModule,
    FormsModule,
    MatButtonModule
  ],
  exports: [
    HeaderComponent,
    //NavComponent,
    FooterComponent
  ]

})
export class TemplatesModule { }
