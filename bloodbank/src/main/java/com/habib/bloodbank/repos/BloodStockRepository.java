package com.habib.bloodbank.repos;

import com.habib.bloodbank.entities.BloodGroup;
import com.habib.bloodbank.entities.BloodStock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;



@Repository
public interface BloodStockRepository extends JpaRepository<BloodStock, Integer> {

     BloodStock findByBloodgroup(BloodGroup bloodgroup);

     @Query("SELECT SUM(b.quantity) FROM BloodStock b")
     int sumBloodGroupQuantities();


     BloodStock getByBloodgroup(BloodGroup bloodgroup);


}

