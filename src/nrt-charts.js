(function() {
	'use strict';

	angular.module('nrt-charts', ['highcharts-ng'])


	.component('nrtChartsSolidGauge', {
		bindings:{
			chartData: '=',
			chartTitle:'@'
		},
		controller: [
			function () {
				var vm = this;
				vm.$onInit = function() {
				vm.config= {
					chart: {
							type: 'solidgauge',
							marginTop: 50
					},
					title: {
							text: vm.chartTitle
					},
					pane: {
							startAngle: 60,
							endAngle: 300,
							background: [{ // Track for the gauge (todo: start and stop angle for the track)
									outerRadius: '100%',
									innerRadius: '70%',
									backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0])
											.setOpacity(0.3)
											.get(),
									borderWidth: 0,
							}]
					},
					yAxis:{
							min: vm.chartData.min,
							max: vm.chartData.max,
							lineWidth: 0,
							tickPositions: [],
					},
					plotOptions: {
							solidgauge: {
									linecap: 'round',
									rounded: true,
							},
					},
					tooltip:{enabled:false},
					series: [{
							data: [{
									color: Highcharts.getOptions().colors[0],
									radius: '100%',
									innerRadius: '70%',
									y: vm.chartData.value,
									dataLabels: {
											enabled: true,
											align: 'center',
											borderWidth:0,
											style: {
													fontWeight: 'bold',
													fontSize:'80px'
											},
											verticalAlign: 'middle'
									}
							}]
					}]
				};
			};
		}],

		template: '<highchart config="$ctrl.config"></highchart>'
	})



	.component('nrtChartsLine', {
		bindings:{
			chartData: '=',
			chartTitle:'@'
		},
		controller: [
			function () {
				var vm = this;
				vm.$onInit = function() {
				vm.config= {
					title:{text:vm.chartTitle},
					 type:"line",
					 plotOptions:{
						 line:{lineWidth:5}

					 },
					xAxis: {
							categories: ['2005','2006','2007','2008','2009','2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']},

					series: [{
						name:"this home",
							data: [250000,260000,200000,190000,180000,175000,185000,195000,200000,210000,220000,235000,245000]
					},
									{
						name:"this zipcode",
										dashStyle:"ShortDash",
										color:"#ccc",
							data: [270000,280000,220000,210000,200000,195000,205000,215000,220000,210000,240000,255000,265000]
					}]
				};
			};
		}],

		template: '<highchart config="$ctrl.config"></highchart>'
	})


})();
