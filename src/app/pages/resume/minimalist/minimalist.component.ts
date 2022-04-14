import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-minimalist',
  templateUrl: './minimalist.component.html',
  styleUrls: ['./minimalist.component.scss']
})
export class MinimalistComponent {
  @Input() resume: any;
  @ViewChild('resumeContainer') resumeContainer!: ElementRef;

  downloadResume(): void {
    const data: any = document.getElementById('resumeContainer');

    html2canvas(data).then((canvas) => {
      const fileWidth = 210;
      const pageHeight = 297;
      const fileHeight = (canvas.height * fileWidth) / canvas.width;

      const pagesNumber = Math.ceil(fileHeight / pageHeight);

      const fileUri = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const x = 0;
      const y = 0;

      for (let i = 0; i < pagesNumber; i++) {
        if (i > 0) {
          pdf.addPage('a4', 'p');
        }

        pdf.addImage(fileUri, 'PNG', x, (y - i) * pageHeight, fileWidth, fileHeight);
      }

      pdf.save(`curriculo_${this.resume.name}.pdf`);
    });
  }

  goBack(): void {
    window.history.back();
  }
}
