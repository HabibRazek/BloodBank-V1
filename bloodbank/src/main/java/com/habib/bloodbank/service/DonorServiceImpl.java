package com.habib.bloodbank.service;

import com.habib.bloodbank.entities.BloodGroup;
import com.habib.bloodbank.entities.BloodStock;
import com.habib.bloodbank.entities.Donor;
import com.habib.bloodbank.repos.BloodGroupRepository;
import com.habib.bloodbank.repos.BloodStockRepository;
import com.habib.bloodbank.repos.DonorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DonorServiceImpl implements DonorService {
    @Autowired
    BloodStockRepository bloodStockRepository;
    @Autowired
    BloodGroupRepository bloodGroupRepository;
    @Autowired
    DonorRepository donorRepository;

    @Override
    public Donor saveDonor(Donor donor) {
        return donorRepository.save(donor);
    }

    @Override
    public Donor updateDonor(Donor donor) {
        return donorRepository.save(donor);
    }

    @Override
    public void deleteDonor(Donor donor) {
        donorRepository.delete(donor);
    }

    @Override
    public void deleteDonorById(int iddonor) {
        donorRepository.deleteById(iddonor);
    }

    @Override
    public Donor getDonorById(int iddonor) {
        return donorRepository.findById(iddonor).get();
    }

    @Override
    public List<Donor> getAllDonors() {
        return donorRepository.findAll();
    }

    @Override
    public List<Donor> findByName(String name) {
        return donorRepository.findByName(name);
    }

    @Override
    public List<Donor> findByNameContains(String name) {
        return donorRepository.findByNameContains(name);
    }

    @Override
    public List<Donor> findByBloodGroup(String bloodGroup) {
        BloodGroup bloodGroup1 = bloodGroupRepository.findByBloodgroup(bloodGroup);
        return donorRepository.findByBloodGroup(bloodGroup1);
    }



    @Override
    public List<Donor> findByBloodGroupContains(String bloodGroup) {
        return donorRepository.findByBloodGroupContains(bloodGroup);
    }

    @Override
    public void donateBlood(int iddonor) {
        Donor donor = donorRepository.findById(iddonor)
                .orElseThrow(() -> new ResourceNotFoundException("Donor not found for this id :" + iddonor));
        BloodGroup bloodGroup = donor.getBloodGroup();
        BloodStock bloodStock = bloodStockRepository.findByBloodgroup(bloodGroup);
        bloodStock.setQuantity(bloodStock.getQuantity() + 450);
        bloodStockRepository.save(bloodStock);
        donorRepository.delete(donor);
    }

    @Override
    public int countAllBy() {
        return donorRepository.countAllBy();
    }


}

