package com.habib.bloodbank.service;



import com.habib.bloodbank.entities.Request;

public interface RequestService {

    public Request saveRequest(Request request);
    public void deleteRequestById(int idrequest);
    public Request getRequestById(int idrequest);
    public Iterable<Request> getAllRequests();
    public Request updateRequest(Request request);

    public void deleteByPatient(int idpatient);





}
