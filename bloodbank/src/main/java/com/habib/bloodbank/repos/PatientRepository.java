package com.habib.bloodbank.repos;


import com.habib.bloodbank.entities.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PatientRepository extends JpaRepository<Patient, Integer> {

    List<Patient> findByName(String name);
    List<Patient> findByNameContains(String name);

    List<Patient> findByBloodGroup(String bloodGroup);
    List<Patient> findByBloodGroupContains(String bloodGroup);

    int countAllBy();



}
