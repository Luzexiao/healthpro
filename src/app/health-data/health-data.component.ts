import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-health-data',
  templateUrl: './health-data.component.html',
  styleUrls: ['./health-data.component.css']
})
export class HealthDataComponent implements OnInit {
  constructor(
    private router: Router,
  ) { }
  chartOption: any;
  ngOnInit() {
    this.chartOption ={
      tooltip: {
          trigger: 'axis'
      },
      legend: {
          color: ["#F58080", "#47D8BE"],
          data: ['收缩压', '舒张压'],
          left: 'center',
          bottom: '3%'
      },
      grid: {
          top: 'middle',
          left: '3%',
          right: '4%',
          bottom: '3%',
          height: '80%',
          containLabel: true
      },
      xAxis: {
          type: 'category',
          data: [100,200,20,30,60,89],
          axisLine: {
              lineStyle: {
                  color: "#999"
              }
          }
      },
      yAxis: {
          type: 'value',
          name:'血压平均值',
          splitLine: {
              lineStyle: {
                  type: 'dashed',
                  color: '#DDD'
              }
          },
          axisLine: {
              show: false,
              lineStyle: {
                  color: "#333"
              },
          },
          nameTextStyle: {
              color: "#999"
          },
          splitArea: {
              show: false
          }
      },
      series: [{
              name: '收缩压',
              type: 'line',
              data: [800,900,220,130,660,289],
              color: "#F58080",
              lineStyle: {
                  normal: {
                      width: 5,
                      color: {
                          type: 'linear',
  
                          colorStops: [{
                              offset: 0,
                              color: '#FFCAD4' // 0% 处的颜色
                          }, {
                              offset: 0.4,
                              color: '#F58080' // 100% 处的颜色
                          }, {
                              offset: 1,
                              color: '#F58080' // 100% 处的颜色
                          }],
                          globalCoord: false // 缺省为 false
                      },
                      shadowColor: 'rgba(245,128,128, 0.5)',
                      shadowBlur: 10,
                      shadowOffsetY: 7
                  }
              },
              itemStyle: {
                  normal: {
                      color: '#F58080',
                      borderWidth: 10,
                      /*shadowColor: 'rgba(72,216,191, 0.3)',
                       shadowBlur: 100,*/
                      borderColor: "#F58080"
                  }
              },
              smooth: true
          },
          {
              name: '舒张压',
              type: 'line',
              data: [123,568,111,222,123,56],
              lineStyle: {
                  normal: {
                      width: 5,
                      color: {
                          type: 'linear',
  
                          colorStops: [{
                                  offset: 0,
                                  color: '#AAF487' // 0% 处的颜色
                              },
                              {
                                  offset: 0.4,
                                  color: '#47D8BE' // 100% 处的颜色
                              }, {
                                  offset: 1,
                                  color: '#47D8BE' // 100% 处的颜色
                              }
                          ],
                          globalCoord: false // 缺省为 false
                      },
                      shadowColor: 'rgba(71,216,190, 0.5)',
                      shadowBlur: 10,
                      shadowOffsetY: 7
                  }
              },
              itemStyle: {
                  normal: {
                      color: '#AAF487',
                      borderWidth: 10,
                      /*shadowColor: 'rgba(72,216,191, 0.3)',
                       shadowBlur: 100,*/
                      borderColor: "#AAF487"
                  }
              },
              smooth: true
          }
      ]
  }
}
  index = 0;
}
