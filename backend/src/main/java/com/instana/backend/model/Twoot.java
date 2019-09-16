package com.instana.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Twoot {

  @Id
  public String id;

  public String author;
  public String text;

  public Twoot() {
    // nop
  }

  public Twoot(String author, String text) {
    this.author = author;
    this.text = text;
  }
}
