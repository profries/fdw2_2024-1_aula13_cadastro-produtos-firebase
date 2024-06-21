import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FormProdutosComponent } from './form-produtos/form-produtos.component';
import { FormsModule } from '@angular/forms';
import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    FormProdutosComponent,
    TabelaProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideFirebaseApp(() => initializeApp(/*colocar as configs do firebase*/)),
    provideFirestore(() => getFirestore())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
