package com.okta.developer.jugtours;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication
public class JugtoursApplication {

    public static void main(String[] args) {
        SpringApplication.run(JugtoursApplication.class, args);
    }

}
