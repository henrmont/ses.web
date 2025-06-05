import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { LoadingBoxComponent } from '../../../components/utilities/loading-box/loading-box.component';
import { SesadmCountiesCountyBoxComponent } from '../../../components/sesadm/sesadm-counties-county-box/sesadm-counties-county-box.component';
import { SisppiService } from '../../../services/sisppi.service';

@Component({
  selector: 'app-sisppi-counties',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatTableModule, MatTooltipModule],
  templateUrl: './sisppi-counties.page.html',
  styleUrl: './sisppi-counties.page.scss'
})
export class SisppiCountiesPage {

  constructor(
    private sisppiService: SisppiService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.getCounties()
  }

  displayedColumns: string[] = ['ibge','name','health_region','actions'];
  dataSource: any
  getCounties() {
    this.openLoadingBox()
    this.sisppiService.getCounties().subscribe({
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

  openCountyBox(county: any) {
    this.dialog.open(SesadmCountiesCountyBoxComponent, {
      width: '1000px',
      disableClose: true,
      autoFocus: false,
      data: {
        county: county
      }
    });
  }

}
