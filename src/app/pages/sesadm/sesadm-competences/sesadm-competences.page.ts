import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SesadmService } from '../../../services/sesadm.service';
import { MatDialog } from '@angular/material/dialog';
import { LoadingBoxComponent } from '../../../components/utilities/loading-box/loading-box.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sesadm-competences',
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatTableModule, MatInputModule, MatTooltipModule, RouterModule],
  templateUrl: './sesadm-competences.page.html',
  styleUrl: './sesadm-competences.page.scss'
})
export class SesadmCompetencesPage implements OnInit {

   @ViewChild('sigtap') sigtap!: ElementRef
   private snackBar = inject(MatSnackBar);

  constructor(
    private sesadmService: SesadmService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.getCompetences()
  }

  displayedColumns: string[] = ['name', 'actions'];
  dataSource: any
  getCompetences() {
    this.openLoadingBox()
    this.sesadmService.getCompetences().subscribe({
      next: (response) => {
        this.dataSource = new MatTableDataSource(response)
      },
      complete: () => {
        this.dialog.closeAll()
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  selectSigtap() {
    this.sigtap.nativeElement.click()
  }

  file!:File
  onFileChange(event: any) {
    if (event.target.files.length > 0 && event.target.files[0].type == 'application/x-zip-compressed') {
      this.openLoadingBox();
      this.file = event.target.files[0];
      this.sesadmService.process(this.file).subscribe({
        next: (response) => {
          this.snackBar.open(response.message, 'Fechar', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        },
        error: (error) => {
          this.snackBar.open(error.error.message, 'Fechar', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        },
        complete: () => {
          this.dialog.closeAll();
        }
      })
    }
  }

  openLoadingBox() {
    this.dialog.open(LoadingBoxComponent, {
      width: '100px',
      height: '200px',
      disableClose: true,
      autoFocus: false,
    });
  }

}
