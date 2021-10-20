import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './components/templates/header/header.component';
import { FooterComponent } from './components/templates/footer/footer.component';
import { NavComponent } from './components/templates/nav/nav.component';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'



import { ComputerCrudComponent } from './views/computer-crud/computer-crud.component';
import { PrintsCrudComponent } from './views/prints-crud/prints-crud.component';
import { SetoresCrudComponent } from './views/setores-crud/setores-crud.component';
import { EstoqueCrudComponent } from './views/estoque-crud/estoque-crud.component';
import { SwitchsCrudComponent } from './views/switchs-crud/switchs-crud.component';
import { ProdutoCrudComponent } from './views/produto-crud/produto-crud.component';
import { EstoqueCreatedComponent } from './components/estoque/estoque-created/estoque-created.component';
import { ProdutoCreateComponent} from './components/produtos/produto-create/produto-create.component';
import { ProdutoReadComponent } from './components/produtos/produto-read/produto-read.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
// import { ProdutoRead2Component } from './components/produtos/produto-read2/produto-read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ProdutoUpdateComponent } from './components/produtos/produto-update/produto-update.component';
import { ProdutoDeleteComponent } from './components/produtos/produto-delete/produto-delete.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ComputerCrudComponent,
    PrintsCrudComponent,
    SetoresCrudComponent,
    EstoqueCrudComponent,
    SwitchsCrudComponent,
    ProdutoCrudComponent,
    EstoqueCreatedComponent,
    ProdutoCreateComponent,
    ProdutoReadComponent,
    ProdutoUpdateComponent,
    ProdutoDeleteComponent,
    // ProdutoRead2Component,
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTreeModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
