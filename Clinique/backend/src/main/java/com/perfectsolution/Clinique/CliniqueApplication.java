package com.perfectsolution.Clinique;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.boot.web.servlet.server.ConfigurableServletWebServerFactory;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CliniqueApplication extends SpringBootServletInitializer{

	public static void main(String[] args) {
            SpringApplication.run(CliniqueApplication.class, args);
	}
        
        @Bean
        public WebServerFactoryCustomizer<ConfigurableServletWebServerFactory>
          webServerFactoryCustomizer() {
            return factory -> factory.setContextPath("/Clinique");
        }
          
        @Override
        protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
            return application.sources(CliniqueApplication.class);
        }

}
