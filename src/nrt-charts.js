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

					series: [
						{
							name:"this zipcode",
							dashStyle:"ShortDash",
							data: [270000,280000,220000,210000,200000,195000,205000,215000,220000,210000,240000,255000,265000]
						},
						{
							name:"this home",
							data: [250000,260000,200000,190000,180000,175000,185000,195000,200000,210000,220000,235000,245000]
						}
					]
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
									color: 'rgba(87, 120, 164, 0.8)',//'rgba(48, 80, 123, 0.8)',
									zIndex:9
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
						],
						color: '#30507b',
						fillColor: '#30507b'//5778a4
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
												color: '#30507b',
												dataLabels: {
														enabled: true,
														align: 'right',
														distance: -50,
														style: {
																 color: 'white',//(Highcharts.theme &&        Highcharts.theme.contrastTextColor) || 'black',
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
						//backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
						borderColor: '#CCC',
						borderWidth: 1,
						shadow: false,
						itemStyle: {
						fontWeight: 'normal'
						}
					},
						 series: [{
								type: 'bar',
							 borderRadius: 5,
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
						//color:'#122647'
						 //colors: ['#dce8f9','#a3bad8','#5778a4','#30507b','#122647']
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
										},
										colors: ['#30507b','#30507b','#30507b','#30507b','#30507b'],
										borderRadius:5
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
					Highcharts.getOptions().plotOptions.pie.colors = (function () {
		var colors = [],
				base = Highcharts.getOptions().colors[0],
				i;

		for (i = 0; i < 10; i += 1) {
				// Start out with a darkened base color (negative brighten), and end
				// up with a much brighter color
				colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
		}
		return colors;
}());
					console.log(Highcharts);
					Highcharts.theme = {
	 //colors: Highcharts.getOptions().plotOptions.pie.colors,
	 //['#7cb5ec', '#f7a35c', '#90ee7e', '#7798BF', '#aaeeee', '#ff0066', '#eeaaee',
		 // '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
		//NRT Colors
	colors: ['#30507b','#5778a4','#a3bad8','#dce8f9','#122647'],

	 chart: {
	//    backgroundColor: null,
			style: {
				 fontFamily: 'Dosis, sans-serif'
			}
	 },
	 title: {
			style: {
				 fontSize: '16px',
				 fontWeight: 'bold',
				 textTransform: 'uppercase'
			}
	 },
	 tooltip: {
			borderWidth: 0,
			backgroundColor: 'rgba(219,219,216,0.8)',
			shadow: false
	 },
	 legend: {
			itemStyle: {
				 fontWeight: 'bold',
				 fontSize: '13px'
			}
	 },
	 xAxis: {
			gridLineWidth: 1,
			labels: {
				 style: {
						fontSize: '12px'
				 }
			}
	 },
	 yAxis: {
			minorTickInterval: 'auto',
			title: {
				 style: {
						textTransform: 'uppercase'
				 }
			},
			labels: {
				 style: {
						fontSize: '12px'
				 }
			}
	 },
	 plotOptions: {
			candlestick: {
				 lineColor: '#404048'
			}
	 },


	 // General
	d2: '#F0F0EA'

};
Highcharts.setOptions(Highcharts.theme);

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



	.component('nrtChartsDonut', {
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
							text: 'Minneapolis Ethnicity Breakdown'
					},
					subtitle: {
							text: 'Click the slices to view gender breakdown.'
					},
					plotOptions: {
							series: {
									dataLabels: {
											enabled: true,
											distance: -50,
											format: '{point.y:.1f}% {point.name}: '

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
							innerSize: '45%',
								 data: [{
									name: 'White',
									y: 21.5,
									drilldown: 'genderw'
							}, {
									name: 'Black',
									y: 19.5,
									drilldown: 'genderb'
							}, {
									name: 'Hispanic',
									y: 19.6,
									drilldown: 'genderh'
							}, {
									name: 'Asian',
									y: 10.6,
									drilldown: 'gendera'
							}]
						}],
							 drilldown: {
							series: [{
							 innerSize: '45%',
									id: 'genderw',
									data: [
								['Male', 70],
									['Female',  30]
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




	.component('nrtChartsSemiDonut', {
		bindings:{
			chartData: '=',
			chartTitle:'@'
		},
		controller: [
			function () {
				var vm = this;
				vm.$onInit = function() {
				vm.config= {
					plotBackgroundColor: null,
					plotBorderWidth: null,
					plotShadow: false,
					title:{text:'Gender Report'},
									xAxis: {
											categories: ['Male','Female']},

									plotOptions: {
											pie: {
													dataLabels: {
															enabled: true,
															distance: -50,
															style: {
																	color: 'white',
																	fontsize: '10px',
																fontWeight: 'normal',
																textOutline: '0px 0 px'
															}
													},
													startAngle: -90,
													endAngle: 90,
													center: ['50%', '70%']
											}
									},
									 series: [{
							type: 'pie',
							name: 'Gender Distribution',
							innerSize: '50%',
							data: [
									['Male',   61.5],
									['Female',  38.5]
							]
					}]
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
									//color: Highcharts.getOptions().colors[4],
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
