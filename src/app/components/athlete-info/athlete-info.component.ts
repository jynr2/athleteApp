import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Athlete } from 'src/app/models/athlete';
import { AthleteInfoService } from 'src/app/services/athlete-info.service';

@Component({
  selector: 'app-athlete-info',
  templateUrl: './athlete-info.component.html',
  styleUrls: ['./athlete-info.component.css']
})
export class AthleteInfoComponent implements AfterViewInit, OnInit {

  role = localStorage.getItem('role');
  athletes: Athlete[] = [];
  displayedColumns: string[] = ['athlete', 'age', 'country', 'year', 'date', 'sport', 'gold', 'silver', 'bronze', 'total'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private athleteInfoService: AthleteInfoService) { }

  ngOnInit(): void {
    this.athleteInfoService.GetAthleteInfo().subscribe(res => this.dataSource.data = res)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
