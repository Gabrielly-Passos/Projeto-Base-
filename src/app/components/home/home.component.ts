import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  codigoRMA : number  =  212101 ;
  nome : string  =  "Gabrielly" ;
  nota1 : number =  2 ;
  nota2 : number = 2 ;
  nota3 : number=  0 ;
  nota4 : number=  5;
  aprovado : boolean = false;
  resultado : Number = 0;
  data = '2022-05-24'


  constructor() {

    this.resultado =(this.nota1+this.nota2+this.nota3+this.nota4)/4

    if (this.resultado>=6){
      this.aprovado=true;

    }else{
      this.aprovado=false;
    }
   }

  ngOnInit(): void {



}
}
