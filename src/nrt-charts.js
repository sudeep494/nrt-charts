(function() {
	'use strict';

	angular.module('nrt-charts', ['highcharts-ng'])


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





	.component('nrtChartsAreaSpline', {
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
							type: 'areaspline'
					},
					title: {
							text: 'Avg Home Value',
							align: 'left',
							x: 10
					},
				//  subtitle: {
				//      text: 'Source: <a href="https://ColwellBankerHomes.com">' +
				//          'ColwellBankerHomes.com</a>'
				//  },
					xAxis: {
							allowDecimals: false,
						categories:  ['2008','2009','2010','2011','2012','2013','2014','2015','2016','2017'],


				 //   labels: {
					 //       formatter: function () {
						 //         return this.value; // clean, unformatted number for year
							 //   }
						 // },
							plotBands: [{ // visualize the weekend
									from: 7,
									to: 9,
									color: 'rgba(68, 170, 213, .2)'
							}]
					},
					yAxis: {
							title: {
									text: null
							},
							labels: {
									formatter: function () {
											return this.value / 1000 + 'k';
									}
							}
					},
					tooltip: {
							pointFormat: '{series.name} avg home value <b>{point.y:,.0f}</b><br/>Home value in {point.x}'
					},
					plotOptions: {
							area: {
									pointStart: 2008,
									marker: {
											enabled: false,
											symbol: 'circle',
											radius: 2,
											states: {
													hover: {
															enabled: true
													}
											}
									}
							}
					},
					series: [{
							name: 'Edina',
							data: [235860,
									223800, 210040, 172870, 147470, 160760, 195550, 174098, 180090, 199500
						]
			 // }, {
			 //       name: 'Nokomis Neighborhood',
			 //       data: [374310, 391970, 400000, 401000, 380000, 390000, 370000, 350000, 330000, 310000]
					}]
			};
			};
		}],

		template: '<highchart config="$ctrl.config"></highchart>'
	})



	.component('nrtChartsBar', {
		bindings:{
			chartData: '=',
			chartTitle:'@'
		},
		controller: [
			function () {
				var vm = this;
				vm.$onInit = function() {
				vm.config= {
					title:{text:'Age',
								align: 'left',
								x: 10},
					xAxis: {
							categories: ['0 - 9','10 - 19','20 - 29','30 - 39', '40 - 49','50 - 59','60 - 69','70 - 79','80+']},
					yAxis: {
						title: {
								text: null
							}
						},
								plotOptions: {
										bar: {
												linecap: 'round',
												rounded: 'true',
												dataLabels: {
														enabled: true,
														align: 'right',
														distance: -50,
														style: {
																 color: (Highcharts.theme &&        Highcharts.theme.contrastTextColor) || 'black',
															//fontsize: '10px',
															fontWeight: 'normal',
															textOutline: '0px 0 px'
														}
												},
												//startAngle: -90,
												//endAngle: 90,
												//center: ['50%', '55%']
										}
								},
						 legend: {
						//reversed: true,
						 align: 'left',
						x: 10,
						verticalAlign: 'top',
						y: 15,
						floating: true,
						backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
						borderColor: '#CCC',
						borderWidth: 1,
						shadow: false,
						itemStyle: {
						fontWeight: 'normal'
						}
					},
						 series: [{
								type: 'bar',
							 borderRadius: 8,
							 pointWidth: 20,
							 showInLegend: false,
			 //name: 'Age',
						 data: [
							 ['0 - 9', 3000],
						['10 - 19',  6800],
						['20 - 29',  9422],
							 ['30 - 39', 19207],
							 ['40 - 49', 15000],
							 ['50 - 59', 5800],
							 ['60 - 69', 2780],
							 ['70 - 79', 1203],
							 ['80+', 352],
					]
				}]
			};
		};
		}],

		template: '<highchart config="$ctrl.config"></highchart>'
	})




	.component('nrtChartsColumn', {
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
						type: 'column'
						 //colors: ['#dce8f9','#a3bad8','#5778a4','#30507b','#122647']
						},
						title: {
								text: 'Ethnicity drilldown'
						},
						xAxis: {
								type: 'category'
						},
						yAxis: {
									title: {
										text: 'Percentage'
									}
						},

						legend: {
								enabled: true
						},

						plotOptions: {
								series: {
										borderWidth: 0,
										dataLabels: {
												enabled: true
										}
								}
						},

						series: [{
								name: 'Ehnicities',
								colorByPoint: true,
								data: [{
										name: 'White',
										y: 31.5,
										drilldown: 'genderw'
								}, {
										name: 'Black',
										y: 29.5,
										drilldown: 'genderb'
								}, {
										name: 'Hispanic',
										y: 24.6,
										drilldown: 'genderh'
								}, {
										name: 'Asian',
										y: 24.6,
										drilldown: 'gendera'
								}]
						}],
						drilldown: {
								series: [{
										id: 'genderw',
										data: [
										['Male',   75],
										['Female',  25]
										]
								}, {
										id: 'genderb',
										data: [
											 ['Male',   20],
											 ['Female',  80]
										]
								}, {
										id: 'genderh',
										data: [
									 ['Male',   61.5],
										['Female',  38.5]
									]
							 }, {
										id: 'gendera',
										data: [
									 ['Male',   61.5],
										['Female',  38.5]
									]
								}]
						}
				};
			};
		}],

		template: '<highchart config="$ctrl.config"></highchart>'
	})



	.component('nrtChartsPie', {
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
							type: 'pie'
					},
					title: {
							text: 'Minneapolis Ethnicity Drill down'
					},
					subtitle: {
							text: 'Click the slices to view versions. Source: NRT LLC.'
					},
					plotOptions: {
							series: {
									dataLabels: {
											enabled: true,
											format: '{point.name}: {point.y:.1f}%'
									}
							}
					},

					tooltip: {
							headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
							pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
					},
					series: [{
							name: 'Ethnicity',
							colorByPoint: true,
							data: [{
									name: 'White',
									y: 34.03,
									drilldown: 'White'
							}, {
									name: 'Black',
									y: 25.38,
									drilldown: 'Black'
							}, {
									name: 'Hispanic',
									y: 14.77,
									drilldown: 'Hispanic'
							}, {
									name: 'Asian',
									y: 10.91,
									drilldown: 'Asian'
							 }]
					}],
					drilldown: {
							series: [{
									name: 'White',
									id: 'White',
									data: [
										 ['Male',   60],
										 ['Female',  40]
									]
							}, {
									name: 'Black',
									id: 'Black',
									data: [
										 ['Male',   40],
										 ['Female',  60]
									]
							}, {
									name: 'Hispanic',
									id: 'Hispanic',
									data: [
										 ['Male',   25],
										 ['Female',  75]
									]
							}, {
									name: 'Asian',
									id: 'Asian',
									data: [
										 ['Male',   55],
										 ['Female',  45]
									]
							}]
					}
			};
		};
		}],

		template: '<highchart config="$ctrl.config"></highchart>'
	})




	.component('nrtChartsRoundGauge', {
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
	});


})();
