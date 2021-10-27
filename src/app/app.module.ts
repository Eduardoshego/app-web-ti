import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './components/templates/header/header.component';
import { FooterComponent } from './components/templates/footer/footer.component';
import { NavComponent } from './components/templates/nav/nav.component';


import { HomeComponent } from './views/home/home.component';


import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';

// Componentes do Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatCardModule} from '@angular/material/card';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule} from '@angular/material/list';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule} from '@angular/material/menu'

// Componentes da views
import { ProdutoCrudComponent } from './views/produto-crud/produto-crud.component';
import { ComputerCrudComponent } from './views/computer-crud/computer-crud.component';
import { PrintsCrudComponent } from './views/prints-crud/prints-crud.component';
import { SetoresCrudComponent } from './views/setores-crud/setores-crud.component';
import { EstoqueCrudComponent } from './views/estoque-crud/estoque-crud.component';
import { SwitchsCrudComponent } from './views/switchs-crud/switchs-crud.component';

// Componentes referente ao CRUD de Produtos.
import { ProdutoCreateComponent} from './components/produtos/produto-create/produto-create.component';
import { ProdutoReadComponent } from './components/produtos/produto-read/produto-read.component';
import { ProdutoUpdateComponent } from './components/produtos/produto-update/produto-update.component';
import { ProdutoDeleteComponent } from './components/produtos/produto-delete/produto-delete.component';

// Componentes referente ao CRUD de Pessoas
import { SupervisorCrudComponent } from './views/supervisor-crud/supervisor-crud.component';
import { SupervisorCreateComponent } from './components/supervisor/supervisor-create/supervisor-create.component';
import { SupervisorReadComponent } from './components/supervisor/supervisor-read/supervisor-read.component';








import { EstoqueCreatedComponent } from './components/estoque/estoque-created/estoque-created.component';
import { SetoresReadComponent } from './components/setores/setores-read/setores-read.component';





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
    SetoresReadComponent,
    SupervisorCrudComponent,
    SupervisorReadComponent,
    SupervisorCreateComponent,
    
    

    
  
   
    
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
    MatMenuModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
