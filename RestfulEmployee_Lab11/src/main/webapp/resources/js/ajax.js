function makeAjaxCall() {

	var contextURL = "/" + window.location.pathname.split('/')[1];

	$.ajax({
				url : contextURL + "/addEmployee",
				data : serializeObject("employeeForm"),
				dataType : "json",
				success : function(employee) {
					$('#formInput').html("");
					$("#formInput")
							.append(
									'<H3 align="center"> New Employee Information <H3>');
					$('#formInput').append(
							"<H4 align='center'>First Name:  "
									+ employee.firstName + "</h4>");
					$('#formInput').append(
							"<H4 align='center'>Last Name: "
									+ employee.lastName + "</h4>");
					$('#formInput').append(
							"<H4 align='center'>Email: " + employee.email
									+ "</h4>");
					$("#formInput")
							.append(
									'<h4 align="center"> <a href="#" onclick="toggle_visibility(\'formInput\');resetForm(\'employeeForm\');"><b>EXIT</b> </a> </h4>');
					make_visible('formInput');
					make_hidden('errors');
				},

				error : function(err) {

					if (errorObject.responseJSON.errorType == "ValidationError") {
						$('#success').html("");
						$('#errors').append(
								'<h3 align="cEnter"> Error(s) !! </h3>');
						$('#result').append('<p>');
						var errorList = errorObject.responseJSON.errors;

						$.each(errorList, function(i, error) {
							$("#errors").append(error.message + '<br>');
						});
						$("#errors").append('</p>');
						make_visible('errors');

					} else {
						alert(errorObject.responseJSON.message);

					}

				}

			});
}

toggle_visibility = function(id) {
	var element = document.getElementById(id);
	if (element.style.display == 'block')
		element.style.display = 'none';
	else
		element.style.display = 'block';
}

make_hidden = function(id) {
	var element = document.getElementById(id);
	element.style.display = 'none';
}

make_visible = function(id) {
	var element = document.getElementById(id);
	element.style.display = 'block';
}

resetForm = function(id) {
	var element = document.getElementById(id);
	$(element)[0].reset();

}

// Translate form to array
// Then put in JSON format
function serializeObject(form) {
	var jsonObject = {};
	var array = form.serializeArray();
	$.each(array, function() {
		jsonObject[this.name] = this.value;
	});
	return jsonObject;

};

