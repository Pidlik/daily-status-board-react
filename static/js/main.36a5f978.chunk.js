(this["webpackJsonpdaily-status-board-react"]=this["webpackJsonpdaily-status-board-react"]||[]).push([[0],[,,,,,,,,,function(t,e,a){t.exports=a(20)},,,,,function(t,e,a){},function(t,e,a){},,,function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(7),s=a.n(o),i=(a(14),a(1)),c=a(2),u=a(4),d=a(3),l=a(5),h=(a(15),a(8)),b=a.n(h);a(18),a(19);window.chartColors={red:"rgb(220, 20, 60)",redOp:"rgb(220, 20, 60, 0.6)",orange:"rgb(255, 159, 64)",yellow:"rgb(255, 205, 86)",green:"rgb(34, 175, 34)",greenOp:"rgb(34, 175, 34, 0.6)",blue:"rgb(54, 162, 235)",purple:"rgb(153, 102, 255)",grey:"rgb(231,233,237)"};var p={labels:[],datasets:[{label:"Plus",backgroundColor:window.chartColors.greenOp,borderColor:window.chartColors.green,borderWidth:1,data:[]},{label:"Minus",backgroundColor:window.chartColors.redOp,borderColor:window.chartColors.red,borderWidth:1,data:[]}]},f={responsive:!0,legend:{display:!1},tooltips:{bodyFontSize:36,titleFontSize:18},scales:{xAxes:[{stacked:!0,ticks:{fontSize:15}}],yAxes:[{stacked:!0,ticks:{fontSize:25,suggestedMin:0,suggestedMax:8}}]}},g=function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(u.a)(this,Object(d.a)(e).call(this,t))).canvasRef=r.a.createRef(),a}return Object(l.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.myChart=new b.a(this.canvasRef.current,{type:"bar",options:f,data:p})}},{key:"componentDidUpdate",value:function(){this.myChart.data.labels=this.props.data.map((function(t){return t.label})),this.myChart.data.datasets[0].data=this.props.data.map((function(t){return t.value})),this.myChart.update()}},{key:"render",value:function(){return r.a.createElement("canvas",{ref:this.canvasRef})}}]),e}(r.a.Component);function v(t){for(var e=[],a=0;a<t;a++)e.push({label:"ABCDEFGHIJKLMNOPQRSTUVWXYZ"[a],value:Math.round(20+80*Math.random())});return e}function m(t){for(var e=[],a=new Date("2018-05-01T00:00:00").getTime(),n=0;n<t;n++)e.push({time:new Date(a+864e5*n),value:Math.round(20+80*Math.random())});return e}function C(){var t=[];return t.push({title:"Visits",data:m(150)}),t.push({title:"Categories",data:v(20)}),t.push({title:"Categories",data:v(10)}),t.push({title:"Data 4",data:v(6)}),t}var w=function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(u.a)(this,Object(d.a)(e).call(this,t))).state={data:C()},a}return Object(l.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this;window.setInterval((function(){t.setState({data:C()})}),5e3)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,{data:this.state.data[1].data,title:this.state.data[1].title,color:"#70CAD1"}))}}]),e}(r.a.Component);s.a.render(r.a.createElement(w,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.36a5f978.chunk.js.map