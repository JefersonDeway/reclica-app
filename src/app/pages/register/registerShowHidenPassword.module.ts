import {Component, ContentChild} de '@ angular / core';
importar {IonInput} de '@ ionic / angular';
@Component ({
  seletor: 'app-show-hide-password',
  templateUrl: './show-hide-password.component.html',
  styleUrls: ['./show-hide-password.component.scss']
} )
exportar a classe
  ShowHidePasswordComponent { showPassword = false;
@ContentChild (IonInput) entrada: IonInput;
construtor () {}
toggleShow () {
    this.showPassword =! this.showPassword;
    this.input.type = this.showPassword? 'texto': 'senha';
  }
}
