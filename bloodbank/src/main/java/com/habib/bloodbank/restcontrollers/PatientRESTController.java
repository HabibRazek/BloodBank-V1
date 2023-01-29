package com.habib.bloodbank.restcontrollers;



import com.habib.bloodbank.entities.Patient;
import com.habib.bloodbank.service.MessageService;
import com.habib.bloodbank.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("/api/patient")
@CrossOrigin
public class PatientRESTController {
    @Autowired
    PatientService patientService;


    @RequestMapping(method = RequestMethod.GET)
    public Iterable<Patient> getAllPatients() {
        return patientService.getAllPatients();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Patient getPatientById(@PathVariable("id") int id) {
        return patientService.getPatientById(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Patient savePatient(@RequestBody Patient patient) {
        return patientService.savePatient(patient);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public Patient updatePatient(@RequestBody Patient patient) {
        return patientService.updatePatient(patient);
    }


    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deletePatientById(@PathVariable("id") int id) {
        patientService.deletePatientById(id);
    }


    @RequestMapping(value = "/name/{name}", method = RequestMethod.GET)
    public Iterable<Patient> findByName(@PathVariable("name") String name) {
        return patientService.findByName(name);
    }


    @RequestMapping(value = "/count", method = RequestMethod.GET)
    public int countAllBy() {
        return patientService.countAllBy();
    }



}





