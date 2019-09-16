package com.instana.backend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MyWebApp implements CommandLineRunner {

  public static void main(String[] args) {
    SpringApplication.run(MyWebApp.class, args);
  }

  @Override
  public void run(String... args) throws Exception {
    System.out.println("Running MyWebApp....");
  }

}
