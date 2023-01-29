package com.habib.bloodbank.service;

import com.habib.bloodbank.entities.BloodStock;
import com.habib.bloodbank.repos.BloodStockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BloodStockServiceImpl implements BloodStockService {

    @Autowired
    BloodStockRepository bloodStockRepository;
    @Override
    public BloodStock saveBloodStock(BloodStock bloodStock) {
        return bloodStockRepository.save(bloodStock);
    }

    @Override
    public BloodStock updateBloodStock(BloodStock bloodStock) {
        return bloodStockRepository.save(bloodStock);
    }

    @Override
    public void deleteBloodStock(BloodStock bloodStock) {
        bloodStockRepository.delete(bloodStock);
    }

    @Override
    public void deleteBloodStockById(int idbloodstock) {
        bloodStockRepository.deleteById(idbloodstock);
    }

    @Override
    public BloodStock getBloodStockById(int idbloodstock) {
        return bloodStockRepository.findById(idbloodstock).get();
    }

    @Override
    public List<BloodStock> getAllBloodStocks() {
        return bloodStockRepository.findAll();
    }

    @Override
    public BloodStock findByBloodType(String bloodType) {
        return null;
    }

    @Override
    public int sumBloodGroupQuantities() {
        return bloodStockRepository.sumBloodGroupQuantities();
    }


}




