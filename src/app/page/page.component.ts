import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  selectedEntry: string | null = null;
  selectedEntryPdfUrl: SafeResourceUrl | null = null;
  showPdfViewer: boolean = false;
  modalRef: NgbModalRef | null = null;

  

  constructor(
    private modalService: NgbModal,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.filteredEntries = this.entries.filter(entry => entry !== 'Entry 14');
  }

  entries: string[] = [
    'This is a test',
    'Entry 2',
    'Entry 3',
    'Entry 4',
    'Entry 5',
    'Entry 6',
    'Entry 7',
    'Entry 8',
    'Entry 9',
    'Entry 10',
    'Entry 11',
    'Entry 12',
    'Entry 13',
    'Entry 14'
  ];

  filteredEntries: string[] = [];

  searchEntries(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const query = inputElement.value.trim();
    if (query === '') {
      this.filteredEntries = this.entries.filter(entry => entry !== 'Entry 14');
    } else {
      this.filteredEntries = this.entries.filter(entry =>
        entry.toLowerCase().includes(query.toLowerCase()) && entry !== 'Entry 14'
      );
    }
  }

  showPdf(entry: string): void {
    let pdfName: string;

    switch (entry) {
      case 'This is a test':
        pdfName = 'PDF1.pdf';
        break;
      case 'Entry 2':
        pdfName = 'Tuesday Memo.pdf';
        break;
      case 'Entry 3':
        pdfName = 'Bootcamp day 2 memo.pdf';
        break;
      case 'Entry 11':
        pdfName = 'Technical requirements.pdf';
        break;
        case 'Entry 14':
        pdfName = 'Technical ERD 2022(2).pdf';
        break;
      // Add more cases for other entries as needed

      default:
        // Handle the case when entry doesn't match any known URLs
        return;
    }

    this.selectedEntry = entry;
    this.selectedEntryPdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`assets/PDFs/${pdfName}`);
    this.showPdfViewer = true;
  }

  hidePdfViewer(): void {
    this.showPdfViewer = false;
  }

  openModal(content: any): void {
    this.modalRef = this.modalService.open(content, { size: 'lg' });
  }

  closeModal(): void {
    if (this.modalRef) {
      this.modalRef.close();
      this.modalRef = null;
    }
  }

  

}
