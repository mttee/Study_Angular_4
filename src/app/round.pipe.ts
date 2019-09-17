import {Pipe, PipeTransform} from '@angular/core'

@Pipe({name: 'roundNum'})

export class RoundPipe implements PipeTransform {
    transform(value: number, isUpper: boolean, addTo: number): number{
        if(isUpper)return Math.ceil(value + addTo); //làm tròn lên
        return Math.floor(value + addTo); //Làm tròn xuống
    }
}