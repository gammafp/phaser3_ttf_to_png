import { Component, OnInit } from '@angular/core';
import * as html2canvas from 'html2canvas';
import * as JSZip from 'jszip';
import { saveAs } from 'file-saver/dist/FileSaver';

declare var multi: any;
declare var $: any;
declare var swal: any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    // Fix colorPicker hex
    hex: any;

    fontName: String = 'font';
    letters: String = '0123456789   ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    charPerRow: Number = 13;
    fontSize: Number = 16;
    colorFont: String = '#000000';
    metaBitmap: Object = {};
    styleBoxSize: Object = {};
    outFont: Array<any> = [];
    constructor() {
        this.generateGrid();
    }

    ngOnInit() {
    }

    generateGrid() {
        const size = `${this.fontSize}px`;
        // Fuentes
        this.styleBoxSize = {
            'font-size': size,
            'width': size,
            'height': size,
            'color': this.colorFont,
            // 'text-align': 'center',
            // 'line-height': size,
            'display': 'flex',
            'justify-align-content': 'center',
            'align-items': 'center'
        };

        // Bitmap
        this.metaBitmap = {
            image: this.fontName,
            width: this.fontSize,
            height: this.fontSize,
            chars: this.letters,
            offset: { x: 0, y: 0 },
            spacing: { x: 0, y: 0 },
            charsPerRow: this.charPerRow
        };

        this.outFont = multi(this.letters, this.charPerRow);
    }

    generateFontPNG(): void {

        const zip = new JSZip();
        zip.file(`${this.fontName}.json`, JSON.stringify(this.metaBitmap, null, '    '));

        html2canvas($('#outFont'), {
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }).then((canvas) => {
            zip.file(`${this.fontName}.png`, canvas.toDataURL().replace('data:image/png;base64,', ''), { base64: true });
            zip.generateAsync({ type: 'blob' })
                .then(function (content) {
                    saveAs(content, `ttf2png_gamma.zip`);
                });
        });
    }
    changeFont(file) {
        const archivo = file.target.files[0];
        const lector = new FileReader();
        lector.onload = (e: any) => {
            const result = e.target.result;
            const fontStyle = document.createElement('style');
            const fontImportName = e;
            fontStyle.appendChild(document.createTextNode(`
                @font-face {
                    font-family: newFont;
                    src: url("${result}");
                }
                `));
            document.head.appendChild(fontStyle);
            $('#outFont').style.fontFamily = 'newFont';
            swal('Font imported', `You have imported the ${archivo.name} font`, 'success');
        };
        lector.readAsDataURL(archivo);
    }

}
