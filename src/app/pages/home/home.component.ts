import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  public operation: string = '0';
  public showResult: number | null;
  public numberAfterOperator: number;
  public numberBeforeOperator: number;
  public operator: string;
  public activeResult: boolean = false;


  constructor(){

  }

  public getValues(value: string){
    if(this.activeResult){
      this.clear();
      this.activeResult = false;
    }
    if(!this.activeResult){
      if(this.operation.length == 1 && this.operation[0] == '0'){
        this.operation = '';
      }
      this.operation += value;
    }


  }

  public result(){

    // for(let i = 0; i < 3; i++){
    //   console.log(this.operation[i]);
    //   if(
    //       this.operation[i] != '+'
    //       || this.operation[i] != '-'
    //       || this.operation[i] != '*'
    //       || this.operation[i] != '/'
    //     ){
    //       if(this.isOperator(this.operation[i + 1])){
    //         console.log("entrou1")
    //         this.numberBeforeOperator = Number(this.operation[i]);
    //       }

    //       else if(this.isOperator(this.operation[i - 1])){
    //         console.log("entrou2")
    //         this.numberAfterOperator = Number(this.operation[i]);
    //         this.showResult = this.calculate(this.numberBeforeOperator, this.numberAfterOperator, this.operator);
    //         console.log(`Resultado: ${this.showResult}`)
    //       }

    //       else if(this.isOperator(this.operation[i])){
    //         this.operator = this.operation[i];
    //       }
    //   }


    //   else if(this.isOperator(this.operation[i])){
    //     console.log("entrou3")
    //     this.operator = this.operation[i];
    //   }
    // }
    console.log(this.operation)
    let result = eval(this.operation);
    this.showResult = result;
    this.activeResult = true;

  }

  public clear(){
    this.operation = '0';
    this.showResult = null;
  }

  public calculate(num1: number, num2: number, operator: string){
    switch(operator){
      case '+':
        return num1 + num2;

      case '-' :
        return num1 - num2;

      case '/':
        return num1 / num2;

      case '*':
        return num1 * num2;

      default:
        return null
    }
  }

  public isOperator(operator: string): boolean{
    switch(operator){
      case '+':
        return true;

      case '-' :
        return true;

      case '/':
        return true;

      case '*':
        return true;

      default:
        return false
    }
  }
}
