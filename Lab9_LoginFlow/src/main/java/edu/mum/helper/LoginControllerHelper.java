package edu.mum.helper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import edu.mum.domain.Login;
import edu.mum.service.LoginService;

@Component
public class LoginControllerHelper {
	
	@Autowired
	private LoginService service;
	
	public String authenticate(Login login) {
		return service.verify(login);
	}

}
