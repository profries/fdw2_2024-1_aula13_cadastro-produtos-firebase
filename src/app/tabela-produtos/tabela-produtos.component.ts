import { Component } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrl: './tabela-produtos.component.css'
})
export class TabelaProdutosComponent {
  //listaProdutos: any[] = [];
  listaProdutos$: Observable<any[]> | undefined;

  constructor(private firestore: Firestore) {
    const produtoCollection = collection(this.firestore, 'produtos');
    /*collectionData(produtoCollection).subscribe((lista) =>
      this.listaProdutos = lista
    );*/
    this.listaProdutos$ = collectionData(produtoCollection);
  }

}
