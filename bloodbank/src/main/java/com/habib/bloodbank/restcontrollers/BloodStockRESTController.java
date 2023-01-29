package com.habib.bloodbank.restcontrollers;

import com.habib.bloodbank.entities.BloodStock;
import com.habib.bloodbank.repos.BloodStockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bloodStock")
@CrossOrigin("*")
public class BloodStockRESTController {

    @Autowired
    BloodStockRepository bloodStockRepository;

    @RequestMapping(method = RequestMethod.GET)
    public List<BloodStock> getAllBloodStocks() {
        return bloodStockRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.POST)
    public BloodStock saveBloodStock(@RequestBody BloodStock bloodStock) {
        return bloodStockRepository.save(bloodStock);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public BloodStock updateBloodStock(@RequestBody BloodStock bloodStock) {
        return bloodStockRepository.save(bloodStock);
    }

    @RequestMapping(method = RequestMethod.DELETE)
    public void deleteBloodStock(@RequestBody BloodStock bloodStock) {
        bloodStockRepository.delete(bloodStock);
    }

    @RequestMapping(value = "/{idbloodstock}", method = RequestMethod.DELETE)
    public void deleteBloodStockById(@PathVariable int idbloodstock) {
        bloodStockRepository.deleteById(idbloodstock);
    }


    @RequestMapping(value = "/sum", method = RequestMethod.GET)
    public int sumBloodGroupQuantities() {
        return bloodStockRepository.sumBloodGroupQuantities();
    }



}
