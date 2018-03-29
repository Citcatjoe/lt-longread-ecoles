jQuery(document).ready(function($) 
{
	$(".btn-reveal").click(function() {
		if($(this).parent().parent().hasClass('is-collapsed'))
		{
			//alert('is-collapsed');
			$(this).parent().parent().removeClass('is-collapsed');
			$(this).parent().find('figure').addClass('is-hidden');
			$(this).parent().find('span').addClass('is-hidden');
			$(this).html('Masquer');
		}
		else
		{
			//alert("is-not-collapsed");
			$(this).parent().parent().addClass("is-collapsed");
			$(this).parent().find('figure').removeClass('is-hidden');
			$(this).parent().find('span').removeClass('is-hidden');
			$(this).html("Révéler");
		}
		
	});

	// LAZYLOADING DES IMAGES AVEC LA CLASSE "LAZY"
	$("img.lazy").lazyload({
	    effect : "fadeIn"
	});

	
	// scroll indicator
	// $('body').progressScroll({
	// 	backgroundColor: "#3498DB",
	// 	height : "5px",
	// });
	
	// Vertical navigation
	//var dotCounter = $('p.f-inter').length;


// init();
// function init(){
// 	$('p.f-inter').each(function( index ) {
// 	  	$('nav ul').append('<li></li>');


// 	});

// 	$('nav ul li').on('click', function(e) {
// 		$('nav ul li').removeClass('is-active');
// 		$(this).addClass('is-active');
// 		//alert($(this).index());
// 		// SCROLL TO AN ELEMENT FUNCTION
// 	    $('html, body').animate({
// 	       scrollTop:$('p.f-inter:eq(' + $(this).index() + ')').offset().top
// 	    }, 1);
// 	});

	// ZOOM SUR LES IMAGES DISPOSANT DE LA CLASSE ZOOM
	if ($(window).width() > 1200) {
		$(".zoom").click(function () {
			zoom.to({
				element: $(this)[0]
			});
		});
	} 	


// }

$('.slider').owlCarousel({
    margin:10,
    loop:true,
    items:1,
    lazyLoad: true,
    nav: false,
    navText: ['<i class="fa fa-caret-left" aria-hidden="true"></i>','<i class="fa fa-caret-right" aria-hidden="true"></i>']
})

	var ctx = document.getElementById('myChart').getContext('2d');
    // ctx.canvas.width = 200;
   //ctx.canvas.height = 400;


    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"],
            datasets: [
                {
                    fill: false,
                    pointRadius: 2,
                    label: 'Hong Kong',
                    data: [1089.7, 1250.2, 1423.2, 1508.1, 1546.8, 1420.2, 1641.8, 1786.2, 1945.9, 2432.1, 2698.4, 2168.3, 3185.5, 4090.8, 4370.9, 4124.9, 4121.9, 3179.0, 2382.6, 2524.7],
                    backgroundColor: '#CE0F0C',
                    borderColor: '#CE0F0C',
                    borderWidth: 2

                },
                {
                    fill: false,
                    pointRadius: 2,
                    label: 'Chine',
                    data: [35.5, 40.1, 45.0, 36.0, 94.2, 197.2, 279.5, 351.6, 404.1, 577.6, 826.3, 700.4, 1100.1, 1637.6, 1652.6, 1446.4, 1401.4, 1336.8, 1293.4, 1536.7],
                    backgroundColor: '#BC2926',
                    borderColor: '#BC2926',
                    borderWidth: 2
                },
                {
                    fill: false,
                    pointRadius: 2,
                    label: 'Japon',
                    data: [786.7, 839.7, 928.4, 1052.3, 1100.4, 984.9, 990.0, 1147.2, 1267.0, 1207.4, 1154.6, 768.3, 807.1, 913.0, 1092.4, 1155.0, 1330.5, 1305.5, 1261.9, 1229.4],
                    backgroundColor: '#FF0606',
                    borderColor: '#FF0606',
                    borderWidth: 2
                },
                {
                    fill: false,
                    pointRadius: 2,
                    label: 'Singapour',
                    data: [310.6, 386.3, 422.5, 438.4, 433.6, 395.1, 439.3, 480.4, 538.8, 670.0, 782.9, 674.0, 899.3, 1146.6, 1124.7, 1135.5, 1119.8, 1130.9, 1012.9, 1099.5],
                    backgroundColor: '#E99823',
                    borderColor: '#E99823',
                    borderWidth: 2
                },
                {
                    fill: false,
                    pointRadius: 2,
                    label: 'Emirats arabes unis',
                    data: [168.2, 166.9, 180.5, 189.2, 241.4, 237.6, 301.9, 347.3, 386.2, 527.6, 672.9, 438.5, 579.1, 683.1, 855.3, 934.1, 1017.9, 950.9, 923.6, 891.4],
                    backgroundColor: '#6AAC6C',
                    borderColor: '#6AAC6C',
                    borderWidth: 2
                },
                {
                    fill: false,
                    pointRadius: 2,
                    label: 'Etats-Unis',
                    data: [1346.4, 1530.7, 1847.0, 1585.7, 1643.9, 1661.5, 1875.9, 2156.1, 2287.4, 2441.1, 2369.5, 1471.5, 1676.6, 1985.4, 2187.1, 2239.7, 2377.3, 2359.1, 2145.3, 2050.1],
                    backgroundColor: '#4C88B3',
                    borderColor: '#4C88B3',
                    borderWidth: 2
                },
                {
                    fill: false,
                    pointRadius: 2,
                    label: 'Italie',
                    data: [785.2, 798.3, 883.3, 840.0, 813.6, 735.1, 777.2, 854.7, 901.3, 1019.4, 1045.2, 899.9, 923.6, 1012.2, 1175.3, 1229.3, 1235.5, 1315.9, 1180.8, 1181.1],
                    backgroundColor: '#4CD982',
                    borderColor: '#4CD982',
                    borderWidth: 2
                },
                {
                    fill: false,
                    pointRadius: 2,
                    label: 'Royaume-Uni',
                    data: [371.1, 372.5, 429.4, 509.8, 562.7, 580.4, 552.4, 583.7, 590.0, 658.5, 641.0, 544.5, 596.7, 659.2, 806.1, 951.9, 975.0, 1163.0, 1206.4, 1290.5],
                    backgroundColor: '#2FA9EF',
                    borderColor: '#2FA9EF',
                    borderWidth: 2
                },
                {
                    fill: false,
                    pointRadius: 2,
                    label: 'France',
                    data: [509.9, 535.4, 652.9, 720.3, 671.4, 611.0, 611.0, 670.7, 813.3, 982.7, 1132.0, 968.8, 1169.2, 1300.9, 1317.5, 1190.7, 1119.9, 1225.7, 985.8, 981.9],
                    backgroundColor: '#3C4BFF',
                    borderColor: '#3C4BFF',
                    borderWidth: 2
                },
                {
                    fill: false,
                    pointRadius: 2,
                    label: 'Allemagne',
                    data: [719.1, 707.2, 716.2, 783.2, 630.8, 568.3, 564.9, 635.2, 768.7, 828.8, 912.9, 794.1, 768.6, 900.4, 1198.1, 1307.1, 1223.6, 1233.0, 1101.6, 1077.6],
                    backgroundColor: '#DBCE30',
                    borderColor: '#DBCE30',
                    borderWidth: 2
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Exportations horlogères suisses par pays'
            },
            responsive: true,
            maintainAspectRatio: false,
            tooltips: {
                mode: 'nearest', //label
                callbacks: {
                    afterTitle: function () {
                        window.total = 0;
                    },
                    label: function (tooltipItem, data) {
                        var corporation = data.datasets[tooltipItem.datasetIndex].label;
                        var valor = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                        window.total += valor;
                        return corporation + ": " + valor.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                    }
                    // footer: function () {
                    //     return "TOTAL: " + window.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                    // }
                }
            },
            scales: {
                yAxes: [{
                    // stacked: true,
                    ticks: {
                        beginAtZero: true,
                        //max: 200

                    },
                    scaleLabel: {
                        display: true,
                        labelString: "Quantité exportée en MIO"
                    }
                }],
                xAxes: [{
                    // stacked: true,
                    ticks: {
                        beginAtZero: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: "Années"
                    }
                }]
            }
        }
    });




	
	

	

	// $(".button").on('click', function(e) {
	// 	$('.button').removeClass('is-active');
	// 	$(this).addClass('is-active');
	// 	// alert('hello');
	// 	// $(".iframe").load('http://theurltoload.com')
	// 	// e.preventDefault();
	// 	e.preventDefault();
	// 	var $el = $(this);
	// 	// alert($el.attr('map-url'));
	// 	$(".iframe").attr("src", $el.attr('map-url'));
	// });











	// THIS IS EXECUTED WHEN EVERYTHING IS LOADED
	// var everythingLoaded = setInterval(function() {
	//   if (/loaded|complete/.f-inter(document.readyState)) {
	//     clearInterval(everythingLoaded);
	//   }
	// }, 10);

	// USE THIS IF SOMETHING CANT LOAD CORRECTLY
	// $(window).load(function(){
	// });

	// THIS IS DONE AT EVERY SCROLL
	// $(window).scroll(function (event) {
 //    });

    // SCROLL TO AN ELEMENT FUNCTION
    //$('html, body').animate({
    //    scrollTop:$('.element').offset().top
    //}, 1000);

    // SCROLL TO A CALCULATED HEIGHT
	//$('html, body').animate({
    //      scrollTop:$(scrollHeight).offset().top
    //}, 1000);

    // SIMPLE CLICK
 //    $(".menu").click(function(){
	// });
	
    // SET A DELAY IN A FUNCTION
	// setTimeout(function() 
	// {
	// }, 250);

	// KEEP A DIV SQUARE HACK
	// var largeur = $('.un-quart').width();
	// $('.un-quart').height(largeur);

 //   	$(window).resize(function(){
 //   		var largeur = $('.un-quart').width();
 //   		$('.un-quart').height(largeur);
 //    });

   	// THIS IS EXECUTED ON RESIZE
   	// $(window).resize(function(){

    // });

   	// THIS IS EXECUTED DEPENDING ON WINDOW WIDTH
	// if($(window).width() > 500)
	// {
	// }

});
