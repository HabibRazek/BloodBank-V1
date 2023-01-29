package com.habib.bloodbank.service;

import com.habib.bloodbank.entities.Donor;

import java.util.List;

public interface DonorService {
    Donor saveDonor(Donor donor);
    Donor updateDonor(Donor donor);
    void deleteDonor(Donor donor);
    void deleteDonorById(int iddonor);
    Donor getDonorById(int iddonor);
    List<Donor> getAllDonors();
    List<Donor> findByName(String name);
    List<Donor> findByNameContains(String name);
    List<Donor> findByBloodGroup(String bloodGroup);
    List<Donor> findByBloodGroupContains(String bloodGroup);
    void donateBlood(int iddonor);
    int countAllBy();







}
