import {Component} from  '@angular/core';

@Component({
    //template: '<h3>Tạo Component đầu tiên</h3>', //Viết 1 dòng 
    templateUrl: './word.component.html', //Link tới file html
    selector: 'app-word',
    styleUrls:['./word.component.css'] //dùng css trực tiếp hoặc tách ra một file
})

export class WordComponent {
    //Dùng string interpolation
    name = '';
    en = "Hello";
    vn = "Xin chào";
    isHighlight = true;

    evenStyle = {color: 'red', fontSize: '40px'};
    oddStyle = {color: 'black', fontSize: '30px'};

    currentClass = {circle: this.isHighlight , square: !this.isHighlight};

    //Data binding
    imageUrl = "https://angular.io/assets/images/logos/angular/logo-nav@2x.png";
    forgot = false //Gàn forgot cho hidden


    toggleForgot = () => {
        this.forgot = !this.forgot
    }

    // showName = (event) => {
    //     this.name = event.target.value;
    // }
};