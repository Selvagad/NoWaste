import { Injectable } from '@angular/core';
import { ObjetTrie } from '../Model/objet-trie';
import { of } from 'rxjs';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Contenu } from '../Model/contenu';

@Injectable({
  providedIn: 'root'
})
export class ObjetTrieRepositoryService {
  private poubelleContenu =new Contenu();
  private poubelle = [
    new ObjetTrie({
      Id:1,
      Type: "cannette",
    }),
    new ObjetTrie({
      Id:2,
      Type: "cannette",
    }),
    new ObjetTrie({
      Id:3,
      Type: "bouteille",
    }),
    new ObjetTrie({
      Id:4,
      Type: "bouteille",
    }),
    new ObjetTrie({
      Id:5,
      Type: "bouteille",
    }),
    new ObjetTrie({
      Id:6,
      Type: "emballage",
    }),
    new ObjetTrie({
      Id:7,
      Type: "emballage",
    }),
    new ObjetTrie({
      Id:8,
      Type: "emballage",
    }),
    new ObjetTrie({
      Id:9,
      Type: "bouteille",
    }),
    new ObjetTrie({
      Id:10,
      Type: "inconnu",
    })
  ];
  

  constructor() { }

  public getPoubelle() {
    return of (this.poubelle);
  }
  public ajouter(a: ObjetTrie) {
    var nouveau = new ObjetTrie;
    nouveau.setValue(a);
    nouveau.setId(this.getIdMax() + 1);
    this.poubelle.push(nouveau);
    return nouveau;
  }
  public getIdMax() {
    var id = -1;
    this.poubelle.forEach(b => {
      if (b.Id > id)
        id = b.Id;
    });
    return id;
  }
  public getContenu(){    
      var c =new Contenu({
        nbBouteille: 0,
        nbCannette: 0,
        nbEmballage: 0,
        nbInconnu: 0
      })
      this.poubelle.forEach(b => {
        if (b.Type ==  "bouteille"){
          c.nbBouteille += 1;
        }
        if (b.Type ==  "emballage"){
          c.nbEmballage += 1;
        }
        if (b.Type ==  "cannette"){
          c.nbCannette += 1;
        }
        if (b.Type ==  "inconnu"){
          c.nbInconnu += 1;
        }
      });     
    this.poubelleContenu=c;
    return (this.poubelleContenu)
      
    
    
  }
}
