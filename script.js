// Cliked variable is created to avoiod selected multiple seats
let cliked = 0;
let choosen_seat_id;
let choosen_id = [];
let newChoosenId = [];

$('document').ready(function() {

	// Print date time
	let deadline = new Date("august 30, 2019 13:07:50");
	let deadlineTime = deadline.getTime();

	let timer = setInterval(function() {
		let date = new Date();
		let currentTime = date.getTime();

		let reduction = deadlineTime - currentTime;

		let days = Math.floor(reduction / (1000 * 60 * 60 * 24));
		let hours = Math.floor( (reduction%(1000 * 60 * 60 * 24))/(1000 * 60 * 60) );
		let minutes = Math.floor( (reduction % (1000 * 60 * 60)) / (1000 * 60) );
		let seconds = Math.floor( (reduction % (1000 * 60)) / 1000 );

		$(".day").html(days);
		$(".hour").html(hours);
		$(".minute").html(minutes);
		$(".second").html(seconds);

		if (reduction < 0) {
	        clearInterval(timer);
	        $(".day").css('background-color', '#0E1736');
	        $(".day").html("Film has been started");
	        $('.desc').html("- HAPPY WATCHING SW49 -");
	        $("#hour").hide();
	        $("#minute").hide();
	        $("#second").hide();
	    }
	}, 1000);
	

	// Print the seat number
	let id = 1;
	for(i=0 ; i<5 ; i++) {
		for(j=0 ; j<10 ; j++) {
			$('.avengers-main-seat').append(`
				<p class="btn btn-primary avengers-seat" id="`+ id +`">`+ id +`</p>
			`);

			id++;
		}

		$('.avengers-main-seat').append(`
			<br></br>
		`);
	}

	// Function when you click each seats
	$('.avengers-seat').on('click', function() {
		if(cliked === 0 && disable(this.id) !== 1) {
			$('#'+ this.id +'').addClass('select');

			show();
			cliked = 1;
			choosen_seat_id = this.id;
			grey(choosen_seat_id);

			$('#btn-cancel').on('click', function() {
				blue(choosen_seat_id);

				hide();
				cliked = 0;
			});

			$('#btn-choose').on('click', function() {
				dark(choosen_seat_id);
				$('#'+ choosen_seat_id +'').addClass('not-valid');

				hide();
				cliked = 0;
			});
		}
	});

});

// Function to disable selected seat
function disable(id) {
	let classList = document.getElementById(''+ id +'').className.split(/\s+/);
	for (i=0; i<classList.length; i++) {
		if (classList[i] === 'not-valid') {
			return 1;
		}
	}
}

// Function to show the button element
function show() {
	$('#btn-cancel').show();
	$('#btn-choose').show();
}

// Function to hide the button element
function hide() {
	$('#btn-cancel').hide();
	$('#btn-choose').hide();
}

// Function to make the seat color to available seat
function blue(id) {
	$('#'+ id +'').addClass('btn-primary');
	$('#'+ id +'').removeClass('btn-secondary');
}

// Function to make the seat color to choosen seat
function grey(id) {
	$('#'+ id +'').removeClass('btn-primary');
	$('#'+ id +'').addClass('btn-secondary');

}

// Function to make the seat color to choosen seat
function dark(id) {
	$('#'+ id +'').addClass('btn-dark');
	$('#'+ id +'').removeClass('btn-secondary');
}
