!function() {

	$('button').click(function() {
		$nameInput = $('#name').val();
		$phoneInput = $('#phone').val();
		$emailInput = $('#email').val();

		let addAddress = '<tr class="removeable">';
		addAddress += '<td>' + $nameInput + '</td>';
		addAddress += '<td>' + $phoneInput + '</td>';
		addAddress += '<td>' + $emailInput + '</td>';
		addAddress += '</tr>';

		$('table').append(addAddress);

		$('.removeable').click(function() {
			$(this).remove();
		});
	}); // end button

}();