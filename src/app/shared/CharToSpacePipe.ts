import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'charToSpace'
})
export class CharToSpacePipe implements PipeTransform {
    transform (value: any, char: string): string {
        return value.replaceAll(char, ' ')
    }

}

