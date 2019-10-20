import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-stats-component',
  templateUrl: './stats.component.html'
})

export class StatsComponent implements OnInit {

  @ViewChild('lineChart', { static: true }) someInput: ElementRef;
  chart: any;

  ngOnInit() {
    this.chart = new Chart(this.someInput.nativeElement, {
      type: 'line',
      data: {
        labels: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2019],
        datasets: [{
          data: [86, 10, 13, 23, 67, 90, 50, 9, 30, 24],
          label: 'oxygen',
          borderColor: '#3e95cd',
          fill: false
        },
        {
          data: [5, 23, 13, 3, 7, 9, 4, 7, 10, 2],
          label: 'phosphate',
          borderColor: '#8e5ea2',
          fill: false
        },
        {
          data: [94, 15, 17, 63, 4, 9, 30, 92, 20, 34],
          label: 'nitrates',
          borderColor: '#3cba9f',
          fill: false
        },
        {
          data: [40, 20, 10, 16, 24, 38, 74, 29, 12, 37],
          label: 'temperature',
          borderColor: '#e8c3b9',
          fill: false
        },
        {
          data: [6, 5, 12, 12, 7, 9, 11, 17, 12, 10],
          label: 'PH',
          borderColor: '#c45850',
          fill: false
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Pollution of water'
        }
      }
    });
  }
}