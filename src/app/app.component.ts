import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  artist = '';
  title = '';
  isrc = '';
  upc = '';
  generatedXML = '';

  generateXML() {
    this.generatedXML = `<Song>\n<Artist>${this.artist}</Artist>\n<Song>${this.title}</Song>\n<ISRC>${this.isrc}</ISRC>\n<UPC>${this.upc}</UPC>\n</Song>`;
  }

  downloadXML() {
    if (this.generatedXML) {
      const blob = new Blob([this.generatedXML], { type: 'application/xml' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${this.isrc}.xml`;
      link.click();
      URL.revokeObjectURL(url);
    }
  }
}
