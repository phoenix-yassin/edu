/*$(function () {
    $('#charts-1').highcharts({
        title: false,
        subtitle: false,
        xAxis: {
            categories: ['1', '2', '3', '4', '5', '6',
                '7', '8', '9', '10', '11', '12']
        },
        yAxis: {
            title: false,
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Tokyo',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'London',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
    });
});*/
/*echarts pic学生拍题*/
var option_pic = {


    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['邮件营销','联盟广告']
    },
    grid: {
        left: '2%',
        right: '3%',
        bottom: '2%',
        top:'2%',
        containLabel: true
    },
    xAxis : 
        {
            type : 'category',
            boundaryGap : false,
            axisTick:{show:false},
            data : ['1','2','3','4','5','6','7','8','9','10','11','12'],
             splitLine:{ 
	            lineStyle:{
	               type:'dashed',
	               color:'#ededed'
	               
	            }
	        },
        },
     yAxis: {
        splitNumber:1,
        axisTick:{show:false},
        type: 'value',
        show:true,
        axisLine:{
            show:false,
            
        }
    },
    series : [
        
        {
            name:'直接访问',
            type:'line',
            data:[32, 33, 1, 33, 40, 30, 20,2, 1, 33, 40, 30],
            lineStyle:{
                normal:{
                   color:"#61a0a8" 
                }
            }
        },
        {
            name:'搜索引擎',
            type:'line',
            
            data:[82, 93, 90, 93, 19, 133, 12, 90, 93, 19, 133, 12],
            lineStyle:{
                normal:{
                   color:"#c23531" 
                }
            }
        }
    ]
};

var chart_pic = echarts.init(document.getElementById('charts-pic'));
chart_pic.setOption(option_pic);

/*echarts 备课情况*/
var option_preparation = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        x: 'center',
        y: 'bottom',

        data:[{icon:'circle',name:'备课充分'},
		        {icon:'circle',name:'备课一般'},
		        {icon:'circle',name:'备课不足'}
		        ]
    },
    color:['#c23531', '#61a0a8','#38586d'],
    series: [
        {
            name:'访问来源',
            type:'pie',
            center: ['50%', '45%'],
            radius: ['30%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(0, 0, 0, 0.8)'
                    },
                formatter: "{b}({d}%)"
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(0, 0, 0, 0.9)'
                    }
                }
            },
            data:[
                {value:3, name:'备课不足'},
                {value:4, name:'备课一般'},
                {value:16, name:'备课充分'}
            ]
        }
    ]
};
var chart_preparation = echarts.init(document.getElementById('charts-preparation'));
chart_preparation.setOption(option_preparation);
/*echarts 授课难度情况*/
var option_teaching_difficuty = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        x: 'center',
        y: 'bottom',

        data:[{icon:'circle',name:'易'},
		        {icon:'circle',name:'适中'},
		        {icon:'circle',name:'难'}
		        ]
    },
    color:['#c23531', '#61a0a8','#38586d'],
    series: [
        {
            name:'访问来源',
            type:'pie',
            center: ['50%', '45%'],
            radius: ['30%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(0, 0, 0, 0.8)'
                    },
                formatter: "{b}({d}%)"
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(0, 0, 0, 0.9)'
                    }
                }
            },
            data:[
                {value:3, name:'易'},
                {value:4, name:'适中'},
                {value:16, name:'难'}
            ]
        }
    ]
};
var chart_teaching_difficuty = echarts.init(document.getElementById('charts-teaching-difficuty'));
chart_teaching_difficuty.setOption(option_teaching_difficuty);
/*echarts 授课思路清晰情况*/
var option_teaching_idea= {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        x: 'center',
        y: 'bottom',

        data:[{icon:'circle',name:'清晰'},
		        {icon:'circle',name:'不清晰'}
		        ]
    },
    color:['#c23531', '#61a0a8','#38586d'],
    series: [
        {
            name:'访问来源',
            type:'pie',
            center: ['50%', '45%'],
            radius: ['30%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(0, 0, 0, 0.8)'
                    },
                formatter: "{b}({d}%)"
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(0, 0, 0, 0.9)'
                    }
                }
            },
            data:[
                {value:3, name:'清晰'},
                {value:16, name:'不清晰'}
            ]
        }
    ]
};
var chart_teaching_idea= echarts.init(document.getElementById('charts-teaching-idea'));
chart_teaching_idea.setOption(option_teaching_idea);


