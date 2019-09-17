package com.instana.twoot;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TwootApp implements CommandLineRunner {

  public static void main(String[] args) {
    SpringApplication.run(TwootApp.class, args);
  }

  @Override
  public void run(String... args) throws Exception {
    System.out.println("Running TwootApp....");
  }

}
