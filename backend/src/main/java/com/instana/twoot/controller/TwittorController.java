package com.instana.twoot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.instana.twoot.model.Twoot;
import com.instana.twoot.repository.TwootRepository;

@RestController
public class TwittorController {

  private TwootRepository repository;

  @Autowired
  public TwittorController(TwootRepository repository) {
    this.repository = repository;
  }

  @RequestMapping("/twoots")
  public List<Twoot> getAllTwoots() {
    return repository.findAll();
  }

  @PutMapping("/twoot")
  public @ResponseBody String updateStudent(@RequestBody Twoot twoot){
    repository.save(twoot);
    return "ok";
  }
}
