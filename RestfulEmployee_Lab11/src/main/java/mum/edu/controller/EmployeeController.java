package mum.edu.controller;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import mum.edu.domain.Employee;

public class EmployeeController {

	@RequestMapping(value = { "/", "addEmployee" }, method = RequestMethod.GET)
	public String showEmployee() {
		System.out.println("GET REQUEST Executed....");
		return "employee";
	}

	@RequestMapping(value = "addEmployee", method = RequestMethod.POST) // this is post Request
	public @ResponseBody Employee addEmployee(@Valid @RequestBody Employee employee) {
		return employee;
	}

}
