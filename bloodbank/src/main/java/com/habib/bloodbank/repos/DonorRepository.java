package com.habib.bloodbank.repos;

import com.habib.bloodbank.entities.BloodGroup;
import com.habib.bloodbank.entities.Donor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;


@RepositoryRestResource(path = "rest")
public interface DonorRepository extends JpaRepository<Donor, Integer> {

    List<Donor> findByName(String name);
    List<Donor> findByNameContains(String name);



    List<Donor> findByBloodGroup(BloodGroup bloodGroup);
    List<Donor> findByBloodGroupContains(String bloodGroup);

    int countAllBy();


}

