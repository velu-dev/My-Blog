import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  private chart: AmChart;
  constructor(private AmCharts: AmChartsService) {

  }

  ngOnInit() {
    var chart = this.AmCharts.makeChart("coreLang", {
      "type": "serial",
      "hideCredits":true,
      "theme": "light",
      "dataProvider": [{
        "lang": "Ruby",
        "value": 60,
        "color": "#ec1622"
      }, {
        "lang": "Javascript",
        "value": 50,
        "color": "#D8B847"
      }, {
        "lang": "Python",
        "value": 30,
        "color": "#009CBC"
      }],
      "valueAxes": [{
        "gridColor": "#FFFFFF",
        "gridAlpha": 0.2,
        "dashLength": 0
      }],
      "gridAboveGraphs": true,
      "startDuration": 1,
      "graphs": [{
        "balloonText": "[[category]]: <b>[[value]]</b>",
        "fillColorsField": "color",
        "fillAlphas": 0.8,
        "lineAlpha": 0.2,
        "type": "column",
        "valueField": "value"
      }],
      "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
      },
      "categoryField": "lang",
      // "rotate": true,
      "categoryAxis": {
        // "position": "left",
        "gridPosition": "start",
        "gridAlpha": 0,
        "tickPosition": "start",
        "tickLength": 20
      }


    });
    this.AmCharts.makeChart("framework", {
      "type": "serial",
      "hideCredits":true,
      "theme": "light",
      "dataProvider": [{
        "lang": "Rails",
        "value": 70,
        "color": "#ec1622"
      }, {
        "lang": "Angular 2+",
        "value": 60,
        "color": "#CA0033"
      }, {
        "lang": "Ionic",
        "value": 70,
        "color": "#2189F2"
      },
      {
        "lang": "Typescript",
        "value": 50,
        "color": "#007BC7"
      },
      {
        "lang": "Django",
        "value": 30,
        "color": "#093227"
      }],
      "valueAxes": [{
        "gridColor": "#FFFFFF",
        "gridAlpha": 0.2,
        "dashLength": 0
      }],
      "gridAboveGraphs": true,
      "startDuration": 1,
      "graphs": [{
        "balloonText": "[[category]]: <b>[[value]]</b>",
        "fillColorsField": "color",
        "fillAlphas": 0.8,
        "lineAlpha": 0.2,
        "type": "column",
        "valueField": "value"
      }],
      "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
      },
      "categoryField": "lang",
      // "rotate": true,
      "categoryAxis": {
        // "position": "left",
        "gridPosition": "start",
        "gridAlpha": 0,
        "tickPosition": "start",
        "tickLength": 20
      }


    });

    this.AmCharts.makeChart("database", {
      "type": "serial",
      "hideCredits":true,
      "theme": "light",
      "dataProvider": [{
        "lang": "MySql",
        "value": 70,
        "color": "#FB8C42"
      }, {
        "lang": "PostgreSQL",
        "value": 80,
        "color": "#29678E"
      }, {
        "lang": "Mongodb",
        "value": 30,
        "color": "#4FA859"
      }],
      "valueAxes": [{
        "gridColor": "#FFFFFF",
        "gridAlpha": 0.2,
        "dashLength": 0
      }],
      "gridAboveGraphs": true,
      "startDuration": 1,
      "graphs": [{
        "balloonText": "[[category]]: <b>[[value]]</b>",
        "fillColorsField": "color",
        "fillAlphas": 0.8,
        "lineAlpha": 0.2,
        "type": "column",
        "valueField": "value"
      }],
      "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
      },
      "categoryField": "lang",
      // "rotate": true,
      "categoryAxis": {
        // "position": "left",
        "gridPosition": "start",
        "gridAlpha": 0,
        "tickPosition": "start",
        "tickLength": 20
      }


    });
  }
}
