package com.habib.bloodbank.repos;

import com.habib.bloodbank.entities.BloodGroup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;


@RepositoryRestResource(path = "bloodGroup")
@CrossOrigin("http://localhost:4200/")
public interface BloodGroupRepository extends JpaRepository<BloodGroup, Integer> {

    BloodGroup findByBloodgroup(String bloodGroup);

}

