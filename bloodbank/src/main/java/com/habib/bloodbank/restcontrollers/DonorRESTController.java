package com.habib.bloodbank.restcontrollers;

import com.habib.bloodbank.entities.Donor;
import com.habib.bloodbank.service.DonorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class DonorRESTController {
    @Autowired
    DonorService donorService;

    @RequestMapping(method = RequestMethod.GET)
    public Iterable<Donor> getAllDonors() {
        return donorService.getAllDonors();
    }

    @RequestMapping(value="/{id}",method = RequestMethod.GET)
    public Donor getDonorById(@PathVariable("id") int id) {
        return donorService.getDonorById(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Donor saveDonor(@RequestBody Donor donor) {
        return donorService.saveDonor(donor);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public Donor updateDonor(@RequestBody Donor donor) {
        return donorService.updateDonor(donor);
    }



    @RequestMapping(value="/{id}",method = RequestMethod.DELETE)
    public void deleteDonorById(@PathVariable("id") int id) {
        donorService.deleteDonorById(id);
    }

    @RequestMapping(value="/name/{name}",method = RequestMethod.GET)
    public Iterable<Donor> findByName(@PathVariable("name") String name) {
        return donorService.findByName(name);
    }

    @RequestMapping(value="/bloodGroup/{bloodGroup}",method = RequestMethod.GET)
    public List<Donor> findByBloodGroup(@PathVariable("bloodGroup") String bloodGroup) {
        return donorService.findByBloodGroup(bloodGroup);
    }

    @RequestMapping(value="/donate/{id}",method = RequestMethod.PUT)
    public void donateBlood(@PathVariable("id") int id) {
        donorService.donateBlood(id);
    }


    @RequestMapping(value="/count",method = RequestMethod.GET)
    public int countAllBy() {
        return donorService.countAllBy();
    }












}
