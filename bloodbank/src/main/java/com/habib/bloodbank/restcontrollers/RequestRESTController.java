package com.habib.bloodbank.restcontrollers;

import com.habib.bloodbank.entities.Request;
import com.habib.bloodbank.service.RequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/request")
@CrossOrigin

public class RequestRESTController {
    @Autowired
    RequestService requestService;


    @RequestMapping(method = RequestMethod.GET)
    public Iterable<Request> getAllRequests() {
        return requestService.getAllRequests();
    }

    @RequestMapping(value="/{id}",method = RequestMethod.GET)
    public Request getRequestById(@PathVariable("id") int id) {
        return requestService.getRequestById(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Request saveRequest(@RequestBody Request request) {
        return requestService.saveRequest(request);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public Request updateRequest(@RequestBody Request request) {
        return requestService.updateRequest(request);
    }

    @RequestMapping(value="/{id}",method = RequestMethod.DELETE)
    public void deleteRequestById(@PathVariable("id") int id) {
        requestService.deleteRequestById(id);
    }

      @RequestMapping(value="/patient/{id}",method = RequestMethod.DELETE)
      public void deleteRequestByPatientId(@PathVariable("id") int id) {
          requestService.deleteByPatient(id);
      }

}
