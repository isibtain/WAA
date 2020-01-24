<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE HTML>
<html>
<head>
<title>Save Employee</title>
<style type="text/css">@import url("<c:url value="/css/main.css"/>");</style>
</head>
<body>
<div id="global">
    <h4>The employee details have been saved.</h4>
    <p>
        <h5>Details:</h5>
        First Name: ${employee.firstName}<br/>
        Last Name: ${employee.lastName}<br/>
        Date of Birth: ${employee.birthDate}
    </p>
             <form action="employee_input" method="get">
           <input id="submit" type="submit"  
                value="Add Employee">
	</form>
    
</div>
</body>
</html>