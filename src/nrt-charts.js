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

		template: '<highchart id="solid-gauge" config="$ctrl.config"></highchart>'
	});


})();
