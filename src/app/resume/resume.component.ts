import { mySkills } from './skills';
import { Component, OnInit } from '@angular/core';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  projectData: any = [];
  
  constructor(private myskills: mySkills, private AmCharts: AmChartsService) {
    this.projectData = this.myskills.data;
    
    // Experiance in Stack
    var chart = this.AmCharts.makeChart("experiance", {
      "theme": "light",
      "hideCredits": true,
      "type": "serial",
      "startDuration": 2,
      "dataProvider": [{
        "lang": "Ruby on Rails",
        "years": 1.5,
        "color": "#ec1622"
      }, {
        "lang": "Angular 2+",
        "years": 1.3,
        "color": "#CA0033"
      }, {
        "lang": "Ionic",
        "years": 0.8,
        "color": "#2189F2"
      }, {
        "lang": "Node Js",
        "years": 0.5,
        "color": "#363636"
      }, {
        "lang": "Python",
        "years": 0.2,
        "color": "#009CBC"
      }, {
        "lang": "Javascript",
        "years": 1.2,
        "color": "#D8B847"
      }, {
        "lang": "Git",
        "years": 1.4,
        "color": "#FF0F00"
      }],
      "valueAxes": [{
        "position": "left",
        "axisAlpha": 0,
        "gridAlpha": 0,
        "title": "Number of Year"
      }],
      "graphs": [{
        "balloonText": "[[category]]: <b>[[value]]</b>",
        "colorField": "color",
        "fillAlphas": 0.85,
        "lineAlpha": 0.1,
        "type": "column",
        "topRadius": 1,
        "fixedColumnWidth": 40,
        "valueField": "years"
      }],
      "depth3D": 40,
      "angle": 30,
      "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
      },
      "categoryField": "lang",
      "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha": 0,
        "title": "Languages",
        "gridAlpha": 0

      },
      "balloon": {
        "adjustBorderColor": true,
        "color": "#6c757d",
        "font-family": "Roboto Slab",
        "cornerRadius": 5,
        "fillColor": "#FFFFFF"
      },
    }, 0);
    // Company Experiance 
    var chart = this.AmCharts.makeChart("experiance-company", {
      "theme": "light",
      "hideCredits": true,
      "type": "serial",
      "startDuration": 2,
      "dataProvider": [{
        "lang": "Litz Tech India Pvt Ltd",
        "years": 0.3,
        "position": "Android Developer",
        "color": "#535353"
      }, {
        "lang": "Blazon",
        "years": 0.6,
        "position": "PHP Developer",
        "color": "#FC764F"
      }, {
        "lang": "Altius Technologies",
        "years": 0.6,
        "position": "RoR Developer",
        "color": "#009DA8"
      }, {
        "lang": "Thoughtbees technologies Pvt Ltd",
        "years": 0.8,
        "position": "FullStack Developer",
        "color": "#004B4B"
      }, {
        "lang": "Angler Technologies",
        "years": 0.3,
        "position": "RoR Developer",
        "color": "#3AC4CE"
      }, {
        "lang": "Total",
        "years": 0.3 + 0.8 + 0.6 + 0.3,
        "color": "#013007"
      }],
      "valueAxes": [{
        "position": "left",
        "axisAlpha": 0,
        "gridAlpha": 0,
        "title": "Number of Year"
      }],
      "graphs": [{
        "balloonText": "[[category]]: <b>[[value]]</b>",
        "colorField": "color",
        "fillAlphas": 0.85,
        "lineAlpha": 0.1,
        "type": "column",
        "topRadius": 1,
        "fixedColumnWidth": 40,
        "valueField": "years"
      }],
      "depth3D": 40,
      "angle": 30,
      "chartCursor": {
        "categoryBalloonEnabled": true,
        "cursorAlpha": 0,
        "zoomable": false
      },
      "balloon": {
        "adjustBorderColor": true,
        "color": "#6c757d",
        "font-family": "Roboto Slab",
        "cornerRadius": 5,
        "fillColor": "#FFFFFF"
      },
      "categoryField": "lang",
      "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha": 0,
        "title": "Company",
        "gridAlpha": 0

      }
    }, 0);

    //Education Chart

    var chart = this.AmCharts.makeChart("education",
      {
        "type": "serial",
        "hideCredits": true,
        "theme": "light",
        "dataProvider": [{
          "name": "Secondary School Leaving Certificate",
          "points": 79,
          "inst": "Govt Hr Sec School",
          "duration": "2009-2010",
          "color": "#295C3C",
          "bullet": "assets/images/sslc.png"
        }, {
          "name": "Higher Secondary School Certificate",
          "points": 53,
          "inst": "St Marys Hr Sec School",
          "duration": "2010-2012",
          "color": "#354DC6",
          "bullet": "assets/images/hsc.jpeg"
        }, {
          "name": "Bachelors in Computer Application",
          "points": 71,
          "inst": "SVM Arts & Science College",
          "duration": "2012-2014",
          "color": "#0082AE",
          "bullet": "assets/images/svmc.jpeg"
        }, {
          "name": "Master of Computer Applications",
          "points": 76,
          "inst": "SNS COllege of Engineering",
          "duration": "2014-2016",
          "color": "#00148D",
          "bullet": "assets/images/sns.jpg"
        }],
        "valueAxes": [{
          "maximum": 100,
          "minimum": 0,
          "axisAlpha": 0,
          "dashLength": 4,
          "position": "left"
        }],
        "startDuration": 1,
        "graphs": [{
          "balloonText": "<span style='font-size:13px;'>[[inst]]: <b>[[duration]]</b> : <b>[[points]] %</b></span>",
          "bulletOffset": 10,
          "bulletSize": 52,
          "colorField": "color",
          "cornerRadiusTop": 8,
          "customBulletField": "bullet",
          "fillAlphas": 0.8,
          "lineAlpha": 0,
          "type": "column",
          "valueField": "points"
        }],
        "balloon": {
          "adjustBorderColor": true,
          "color": "#6c757d",
          "font-family": "Roboto Slab",
          "cornerRadius": 5,
          "fillColor": "#FFFFFF"
        },
        "marginTop": 0,
        "marginRight": 0,
        "marginLeft": 0,
        "marginBottom": 0,
        "autoMargins": false,
        "categoryField": "name",
        "categoryAxis": {
          "axisAlpha": 0,
          "gridAlpha": 0,
          "inside": true,
          "tickLength": 0
        }
      });
    this.projectData.map(res => {
      var chart = this.AmCharts.makeChart(res.project, {
        "type": "pie",
        "hideCredits": true,
        "theme": "none",
        "titles": [{
          "text": "Used Stacks",
          "size": 16
        }],
        "dataProvider": res.data,
        "valueField": "percent",
        "titleField": "stacks",
        "colorField": "color",
        "startEffect": "elastic",
        "startDuration": 2,
        "labelRadius": 15,
        "innerRadius": "50%",
        "depth3D": 10,
        "balloon": {
          "adjustBorderColor": true,
          "color": "#6c757d",
          "font-family": "Roboto Slab",
          "cornerRadius": 5,
          "fillColor": "#FFFFFF"
        },
        "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
        "angle": 15
      });
    })



  }

  ngOnInit() {

  }
  oddEven(num){
    console.log("dsdv",String(num/2).length)
    return String(num/2).length
  }
}
