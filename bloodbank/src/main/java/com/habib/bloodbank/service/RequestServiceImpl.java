package com.habib.bloodbank.service;

import com.habib.bloodbank.entities.Patient;
import com.habib.bloodbank.entities.Request;
import com.habib.bloodbank.repos.BloodStockRepository;
import com.habib.bloodbank.repos.PatientRepository;
import com.habib.bloodbank.repos.RequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RequestServiceImpl implements RequestService{
    @Autowired
    RequestRepository requestRepository;
    @Autowired
    PatientRepository patientRepository;
    @Autowired
    BloodStockRepository bloodStockRepository;

    @Override
    public Request saveRequest(Request request) {
        Request R = requestRepository.findByPatient(request.getPatient());
        if(R==null){
            return requestRepository.save(request);
        }
        return request;
    }

    @Override
    public void deleteRequestById(int idrequest) {
        requestRepository.deleteById(idrequest);
    }

    @Override
    public Request getRequestById(int idrequest) {
        return requestRepository.findById(idrequest).get();
    }


    @Override
    public List<Request> getAllRequests() {
        return requestRepository.findAll();
    }

    @Override
    public Request updateRequest(Request request) {
        return requestRepository.save(request);
    }

    @Override
    public void deleteByPatient(int idpatient) {
        Patient patient = patientRepository.findById(idpatient).get();
        requestRepository.deleteByPatient(patient);

    }
}
