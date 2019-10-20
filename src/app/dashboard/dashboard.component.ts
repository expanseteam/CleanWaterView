import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    @ViewChild('barChart',  {static: true}) someInput: ElementRef;
    chart: any;

    ngOnInit() {
      this.chart = new Chart(this.someInput.nativeElement, {
        type: 'bar',
        data: {
        labels: ['2016', '2017', '2018', '2019'],
        datasets: [
          {
            label: 'Expectation level',
            backgroundColor: '#3e95cd',
            data: [11, 11, 12, 11]
          }, {
            label: 'Current Level',
            backgroundColor: 'red',
            data: [25, 13, 15, 15]
          }
        ],
        borderWidth: 1,
      },
      options: {
        responsive: true,
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Water pollution level'
        }
      }
      });
    }
}
