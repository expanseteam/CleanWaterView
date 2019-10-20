import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-stats-component',
  templateUrl: './stats.component.html'
})

export class StatsComponent implements OnInit {

  @ViewChild('lineChart',  {static: true}) someInput: ElementRef;
  chart: any;

  ngOnInit() {
    this.chart = new Chart(this.someInput.nativeElement, {
      type: 'line',
  data: {
    labels: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2019],
    datasets: [{ 
        data: [86,114,106,106,107,111,133,221,783,2478],
        label: 'oxygen',
        borderColor: '#3e95cd',
        fill: false
      }, { 
        data: [282,350,411,502,635,809,947,1402,3700,5267],
        label: 'phosphate',
        borderColor: '#8e5ea2',
        fill: false
      }, { 
        data: [168,170,178,190,203,276,408,547,675,734],
        label: 'nitrates',
        borderColor: '#3cba9f',
        fill: false
      }, 
      { 
        data: [40, 20, 10, 16, 24, 38,74,167,508,784],
        label: 'temperature',
        borderColor: '#e8c3b9',
        fill: false
      }, { 
        data: [6,3,2,2,7,26,82,172,312,433],
        label: 'PH',
        borderColor: '#c45850',
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'pollution of water component'
    }
  }
    });
}
}