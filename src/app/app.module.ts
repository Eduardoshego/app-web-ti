import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';


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

import { PrintsCrudComponent } from './views/prints-crud/prints-crud.component';
import { SetoresCrudComponent } from './views/setores-crud/setores-crud.component';
import { SwitchsCrudComponent } from './views/switchs-crud/switchs-crud.component';
import {EquipamentosCrudComponent} from './views/equipamentos-crud/equipamentos-crud.component'



// Componentes referente ao CRUD de Produtos.
import { ProdutoCreateComponent} from './components/produtos/produto-create/produto-create.component';
import { ProdutoReadComponent } from './components/produtos/produto-read/produto-read.component';
import { ProdutoUpdateComponent } from './components/produtos/produto-update/produto-update.component';
import { ProdutoDeleteComponent } from './components/produtos/produto-delete/produto-delete.component';

// Componentes referente ao CRUD de Pessoas
import { CadastroCrudComponent } from './views/cadastroPessoas-crud/cadastro-crud.component';
import { CadastroCreateComponent } from './components/cadastros/cadastro-create/cadastro-create';
import { CadastroReadComponent } from './components/cadastros/cadastro-read/cadastro-read.component';


import  { FlexLayoutModule } from '@angular/flex-layout'






import { EstoqueCreatedComponent } from './components/estoque/estoque-created/estoque-created.component';
import { SetoresReadComponent } from './components/setores/setores-read/setores-read.component';
import { ProdutoSaidaCrudComponent } from './views/produto-saida-crud/produto-saida-crud.component';
import { ProdutoSaidaReadComponent } from './components/produto-saida/produto-saida-read/produto-saida-read.component';
import { LoginComponent } from './components/login/login.component';
import { MonitorCrudComponent } from './views/monitor-crud/monitor-crud.component';
import {ComputadorReadComponent} from './components/equipamentos/computadores/computador-read/computador-read.component'
;







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    PrintsCrudComponent,
    SetoresCrudComponent,
    SwitchsCrudComponent,
    ProdutoCrudComponent,
    EstoqueCreatedComponent,
    ProdutoCreateComponent,
    ProdutoReadComponent,
    ProdutoUpdateComponent,
    ProdutoDeleteComponent,
    SetoresReadComponent,
    CadastroCrudComponent,
    CadastroReadComponent,
    CadastroCreateComponent,
    ProdutoSaidaCrudComponent,
    ProdutoSaidaReadComponent,
    LoginComponent,
    MonitorCrudComponent,
    EquipamentosCrudComponent,
    ComputadorReadComponent,
    


    
    

    
  
   
    
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
    MatMenuModule,
    MatGridListModule,
    FlexLayoutModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
