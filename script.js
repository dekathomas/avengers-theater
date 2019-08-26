let cliked = 0;
let choosen_seat_id;

$('document').ready(function() {

	// Print the seat number
	var id = 1;
	for(var i=0 ; i<5 ; i++) {
		for(var j=0 ; j<10 ; j++) {
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
		if(cliked === 0) {
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

				hide();
				cliked = 0;
			});
		}
	});

});

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