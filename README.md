# NRT-CHARTS
## HTML 5 charts library (powered by highcharts)
### easily pluggable to any angular app
---
## Installation:
Simply install the module via bower or clone/fork/download from github (future versions to support nuget, npm and jspm and angular2)

		bower install nrt-charts

and add nrt-charts module to your angular app

---

## Chart Types:
#### see full list of charts at https://nrt-charts.herokuapp.com/Example/main.html

1. **nrt-charts-line**

		<nrt-charts-line chart-data="data" chart-title="title"></nrt-charts-line>

	sample data:

		{
		 x: {
		  label:'years',
		  values: [2015, 2016, 2017]
		  },
		  y:[
		    {
		      label:'this home',
		      values:[220000, 230000, 240000],
		      style:'solid'
		    },
		    {
		      label:'this zipcode',
		      values:[230000, 240000, 250000],
		      style:'dashed'
		    }
		  ]
		}

	demo:https://nrt-charts.herokuapp.com/Example/main.html#nrt-charts-line

2. **nrt-charts-area-spline**

		<nrt-charts-area-spline chart-data="data" chart-title="title"></nrt-charts-area-spline>

	sample data:

			{
			 x: {
			  label:'years',
			  values: [2015, 2016, 2017]
			  },
			  y:[
			    {
			      label:'average home price',
			      values:[220000, 230000, 240000]
			    },
			    {
			      label:'Up 20%',
			      plotBand:true
			      min:2016,
			      max:2017
			    }
			  ]
			}

	demo:https://nrt-charts.herokuapp.com/Example/main.html#nrt-charts-area-spline

3. **nrt-charts-bar**

		<nrt-charts-bar chart-data="data" chart-title="title"></nrt-charts-bar>

	sample data:

		{
		 x: {
		  label:'age range',
		  values: ['0-9', '10-19', '20-29']
		  },
		  y:[
		    {
		      label:'population',
		      values:[12000, 10000, 15000]
		    }
		  ]
		}

	demo:https://nrt-charts.herokuapp.com/Example/main.html#nrt-charts-bar

4. **nrt-charts-column**

		<nrt-charts-column chart-data="data" chart-title="title"></nrt-charts-column>

	sample data:

	demo:https://nrt-charts.herokuapp.com/Example/main.html#nrt-charts-column

5. **nrt-charts-pie**

		<nrt-charts-pie chart-data="data" chart-title="title"></nrt-charts-pie>

	sample data:

	demo:https://nrt-charts.herokuapp.com/Example/main.html#nrt-charts-pie

6. **nrt-charts-donut**

		<nrt-charts-donut chart-data="data" chart-title="title"></nrt-charts-donut>

	sample data:

	demo:https://nrt-charts.herokuapp.com/Example/main.html#nrt-charts-donut

7. **nrt-charts-semi-donut**

		<nrt-charts-semi-donut chart-data="data" chart-title="title"></nrt-charts-semi donut>

	sample data:

	demo:https://nrt-charts.herokuapp.com/Example/main.html#nrt-charts-semi-donut

8. **nrt-charts-round-gauge**

		<nrt-charts-round-gauge chart-data="data" chart-title="title"></nrt-round-gauge>

	sample data:

		{
		value:4,
		min:0,
		max:5,
		}

	demo:https://nrt-charts.herokuapp.com/Example/main.html#nrt-charts-round-gauge
