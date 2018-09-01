import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'prettyJson'
})
export class PrettyJsonPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        return JSON.stringify(value, null, '    ')
        .replace('{', '\n{')
        .replace('"image"', 'image')
        .replace('"width"', 'width')
        .replace('"height"', 'height')
        .replace('"chars"', 'chars')
        .replace('"offset"', 'offset')
        .replace('"spacing"', 'spacing')
        .replace('"x"', 'x')
        .replace('"y"', 'y')
        .replace('"x"', 'x')
        .replace('"y"', 'y')
        .replace('"charsPerRow"', 'charsPerRow');
    }
}
