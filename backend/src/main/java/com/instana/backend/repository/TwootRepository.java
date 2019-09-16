package com.instana.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.instana.backend.model.Twoot;

@Repository
public interface TwootRepository extends MongoRepository<Twoot, String> {
  // spring boot will fill in the details :-)
}
