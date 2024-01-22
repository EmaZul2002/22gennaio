import { Component } from '@angular/core';
import { Libro } from './domain/Libro';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '22gennaio';

  elenco : string[] = ['lunedì','martedì','mercoledì','giovedì','venerdì','sabato','domenica']

  contatore : number = 0

  titolo : string = "Titotolo di prova"

  elencoLibri : Libro[] = [
    {titolo : 'titolo1', tipo : 'tipo1'},
    {titolo : 'titolo2', tipo : 'tipo2'}
  ]

  onClick() {
    //this.elenco.push('giorno ' + this.contatore++)
    this.elenco.push(this.titolo)
    this.titolo = "Titolo di prova " + this.contatore++
  }

  onDelete(index : number) {
    this.elenco.splice(index,1)
  }
}
