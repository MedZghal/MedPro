package com.rest.configs;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;



@Configuration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

       
  /**
   * Enable authentication with three in-memory users: UserA, UserB and UserC.
   *
   * Spring Security will provide a default login form where insert username
   * and password.
   */
//    @Autowired
//    private UserDetailsService userDetailsService;
//    @Bean
//    public BCryptPasswordEncoder bCryptPasswordEncoder() {
//        return new BCryptPasswordEncoder();
//    }
    
  @Autowired
  public void configureGlobal(AuthenticationManagerBuilder auth)
  throws Exception {
    auth
      // Defines three users with their passwords and roles
      .inMemoryAuthentication()
      .withUser("med").password("med").roles("USER")
      .and()
      .withUser("user").password("user").roles("USER")
      .and()
      .withUser("admin").password("admin").roles("USER")
    .and()
      .withUser("sec").password("sec").roles("USER")
            .and()
      .withUser("medecin").password("medecin").roles("USER")
            .and()
      .withUser("marwa").password("123").roles("USER");
    
    //auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder());
  }
  
  /**
   * Disable CSRF protection (to simplify this demo) and enable the default
   * login form.
   */
  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http
            .cors().and()
      // Disable CSRF protection
      .csrf().disable()
      // Set default configurations from Spring Security
      .authorizeRequests()
            .antMatchers("/login").permitAll()
        .anyRequest().authenticated()
        .and()
      .formLogin()
            .loginPage("/login")
            .permitAll()
                .and()
            .logout()
                .permitAll();
//http.authorizeRequests().antMatchers("/login").authenticated();
//		http.exceptionHandling().authenticationEntryPoint(authenticationEntryPoint);
//		http.formLogin().successHandler(authenticationSuccessHandler);
//		http.formLogin().failureHandler(authenticationFailureHandler);
//		http.logout().logoutSuccessUrl("/");
//
//		// CSRF tokens handling
//		http.addFilterAfter(new CsrfTokenResponseHeaderBindingFilter(), CsrfFilter.class);
  }

} // class WebSecurityConfig
