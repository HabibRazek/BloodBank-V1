package com.habib.bloodbank.repos;

import com.habib.bloodbank.entities.Patient;
import com.habib.bloodbank.entities.Request;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RequestRepository extends JpaRepository<Request, Integer> {

    public void deleteByPatient(Patient patient);

    public Request findByPatient(Patient patient);


}
