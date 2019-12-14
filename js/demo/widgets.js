
// Widgets.js
// ====================================================================
// This file should not be included in your project.
// This is just a sample how to initialize plugins or components.
//
// - ThemeOn.net -


$(document).on('nifty.ready', function() {


    // REALTIME FLOT CHART
    // =================================================================
    // Require Flot Charts
    // -----------------------------------------------------------------
    // http://www.flotcharts.org/
    // =================================================================
    // We use an inline data source in the example, usually data would
    // be fetched from a server

    var data = [],  totalPoints = 100;

    function getRandomData() {
        if (data.length > 0)
            data = data.slice(1);

        // Do a random walk

        while (data.length < totalPoints) {
            var prev = data.length > 0 ? data[data.length - 1] : 50,
                y = prev + Math.random() * 10 - 5;

            if (y < 20) {
                y = 30;
            } else if (y > 100) {
                y = 100;
            }

            data.push(y);
        }

        // Zip the generated y values with the x values
        var res = [];
        for (var i = 0; i < data.length; ++i) {
            res.push([i, data[i]])
        }
        return res;
    }

    // Set up the control widget
    var updateInterval = 750;
    var flotOptions = {
        series: {
            lines: {
                lineWidth: 1,
                show: true,
                fill: true,
                fillColor : "#d8d9d9"
            },
            color: '#cccccc',
            shadowSize: 0	// Drawing is faster without shadows
        },
        yaxis: {
            min: 0,
            max: 110,
            ticks: 30,
            show: false
        },
        xaxis: {
            show: false
        },
        grid: {
            hoverable: true,
            clickable: true,
            borderWidth: 0
        },
        tooltip: false,
        tooltipOpts: {
            defaultTheme: false
        }
    }


    var plot = $.plot("#demo-realtime-chart", [ getRandomData() ], flotOptions);
    function update() {
        plot.setData([getRandomData()]);

        // Since the axes don't change, we don't need to call plot.setupGrid()

        plot.draw();
        setTimeout(update, updateInterval);
    }
    update();










    // GAUGE PLUGIN
    // =================================================================
    // Require Gauge.js
    // -----------------------------------------------------------------
    // http://bernii.github.io/gauge.js/
    // =================================================================
    var opts = {
        lines: 10, // The number of lines to draw
        angle: 0, // The length of each line
        lineWidth: 0.41, // The line thickness
        pointer: {
            length: 0.75, // The radius of the inner circle
            strokeWidth: 0.035, // The rotation offset
            color: 'rgba(0, 0, 0, 0.38)' // Fill color
        },
        limitMax: 'true', // If true, the pointer will not go past the end of the gauge
        colorStart: '#fff', // Colors
        colorStop: '#fff', // just experiment with them
        strokeColor: '#914887', // to see which ones work best for you
        generateGradient: true
    };


    var target = document.getElementById('demo-gauge'); // your canvas element
    var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
    gauge.maxValue = 100; // set max gauge value
    gauge.animationSpeed = 32; // set animation speed (32 is default value)
    gauge.set(57); // set actual value
    gauge.setTextField(document.getElementById("demo-gauge-text"));












    // PIE CHART
    // =================================================================
    // Require easyPieChart
    // -----------------------------------------------------------------
    // http://rendro.github.io/easy-pie-chart/
    // =================================================================
    $('#demo-pie-1').easyPieChart({
        barColor :'#ffffff',
        scaleColor:'#1B8F85',
        trackColor : '#1B8F85',
        lineCap : 'round',
        lineWidth :8,
        onStep: function(from, to, percent) {
            $(this.el).find('.pie-value').text(Math.round(percent) + '%');
        }
    });









    // MEDIUM WEATHER WIDGET
    // =================================================================
    // Require sckycons
    // -----------------------------------------------------------------
    // http://darkskyapp.github.io/skycons/
    // =================================================================

    // on Android, a nasty hack is needed: {"resizeClear": true}
    skyconsOptions = {
        "color": "#fff",
        "resizeClear": true
    }

    /* Main Icon */
    var skycons = new Skycons(skyconsOptions);
    skycons.add("demo-weather-md-icon-1", Skycons.PARTLY_CLOUDY_DAY);
    skycons.play();

    /* Small Icons*/
    var skycons2 = new Skycons(skyconsOptions);
    skycons2.add("demo-weather-md-icon-2", Skycons.CLOUDY);

    var skycons3 = new Skycons(skyconsOptions);
    skycons3.add("demo-weather-md-icon-3", Skycons.PARTLY_CLOUDY_DAY);

    var skycons4 = new Skycons(skyconsOptions);
    skycons4.add("demo-weather-md-icon-4", Skycons.RAIN);







    // LARGE WEATHER WIDGET
    // =================================================================
    // Require sckycons
    // -----------------------------------------------------------------
    // http://darkskyapp.github.io/skycons/
    // =================================================================

    // on Android, a nasty hack is needed: {"resizeClear": true}
    skyconsOptions = {
        "color": "#acb2b7",
        "resizeClear": true
    }


    /* Main Icon */
    var skycons = new Skycons(skyconsOptions);
    skycons.add("demo-weather-lg-icon-1", Skycons.CLEAR_DAY);
    skycons.play();


    skyconsOptions = {
        "color": "#595e62",
        "resizeClear": true
    }

    /* Small Icons*/
    var skycons2 = new Skycons(skyconsOptions);
    skycons2.add("demo-weather-lg-icon-2", Skycons.CLOUDY);


    var skycons3 = new Skycons(skyconsOptions);
    skycons3.add("demo-weather-lg-icon-3", Skycons.PARTLY_CLOUDY_NIGHT);


    var skycons4 = new Skycons(skyconsOptions);
    skycons4.add("demo-weather-lg-icon-4", Skycons.RAIN);


    var skycons5 = new Skycons(skyconsOptions);
    skycons5.add("demo-weather-lg-icon-5", Skycons.PARTLY_CLOUDY_DAY);











    // SMALL WEATHER WIDGET
    // =================================================================
    // Require sckycons
    // -----------------------------------------------------------------
    // http://darkskyapp.github.io/skycons/
    // =================================================================

    skyconsOptions = {
        "color": "#ffffff",
        "resizeClear": true
    }

    var skycons = new Skycons(skyconsOptions);
    skycons.add("demo-weather-sm-icon", Skycons.RAIN);
    skycons.play();











    // EXTRA SMALL WEATHER WIDGET
    // =================================================================
    // Require sckycons
    // -----------------------------------------------------------------
    // http://darkskyapp.github.io/skycons/
    // =================================================================
    skycons = new Skycons(skyconsOptions);
    skycons.add("demo-weather-xs-icon-1", Skycons.CLEAR_DAY);
    skycons.play();








    // EXTRA SMALL WEATHER WIDGET
    // =================================================================
    // Require sckycons
    // -----------------------------------------------------------------
    // http://darkskyapp.github.io/skycons/
    // =================================================================

    skycons.add("demo-weather-xs-icon-2", Skycons.PARTLY_CLOUDY_DAY);
    skycons.play();


});
