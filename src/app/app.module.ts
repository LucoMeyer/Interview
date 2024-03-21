import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelpComponent } from './help/help.component';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component'; // Add this line
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { TechComponent } from './tech/tech.component';



const routes: Routes = [
  // Existing routes...
  {
    path: 'assets/PDFs/:pdfName',
    component: PdfViewerComponent,
  },
];




@NgModule({
  declarations: [
    AppComponent,
    HelpComponent,
    PageComponent,
    TechComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
    NgxExtendedPdfViewerModule,
    PdfViewerModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
