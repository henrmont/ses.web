import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SesadmService } from '../../../services/sesadm.service';
import { MatDialog } from '@angular/material/dialog';
import { LoadingBoxComponent } from '../../../components/utilities/loading-box/loading-box.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SesadmProceduresProcedureBoxComponent } from '../../../components/sesadm/sesadm-procedures-procedure-box/sesadm-procedures-procedure-box.component';

@Component({
  selector: 'app-sesadm-procedures',
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './sesadm-procedures.page.html',
  styleUrl: './sesadm-procedures.page.scss'
})
export class SesadmProceduresPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private sesadmService: SesadmService,
    private dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.getProcedures()
  }

  displayedColumns: string[] = ['code', 'name', 'actions'];
  dataSource: any
  getProcedures() {
    this.openLoadingBox()
    this.sesadmService.getAllProcedures(this.route.snapshot.paramMap.get('competence_id')).subscribe({
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

  openLoadingBox() {
    this.dialog.open(LoadingBoxComponent, {
      width: '100px',
      height: '200px',
      disableClose: true,
      autoFocus: false,
    });
  }

  openProcedureBox(procedure: any) {
    this.dialog.open(SesadmProceduresProcedureBoxComponent, {
      width: '1000px',
      disableClose: true,
      autoFocus: false,
      data: {
        procedure: procedure
      }
    });
  }

}
