package com.habib.bloodbank.service;

import com.habib.bloodbank.entities.Message;
import com.habib.bloodbank.entities.Request;
import com.habib.bloodbank.repos.BloodStockRepository;
import com.habib.bloodbank.repos.MessageRepository;
import com.habib.bloodbank.repos.PatientRepository;
import com.habib.bloodbank.repos.RequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class MessageServiceImpl implements MessageService{
    @Autowired
    MessageRepository messageRepository;
    @Autowired
    BloodStockRepository bloodStockRepository;
    @Autowired
    PatientRepository patientRepository;
    @Autowired
    RequestRepository requestRepository;

    @Override
    public Message saveMessageApproved(Message message) {
        bloodStockRepository.getByBloodgroup(message.getPatient().getBloodGroup()).setQuantity(bloodStockRepository.getByBloodgroup(message.getPatient().getBloodGroup()).getQuantity()-450);
        Request R = requestRepository.findByPatient(message.getPatient());
        requestRepository.delete(R);
        return messageRepository.save(message);
    }

    @Override
    public Message saveMessageRejected(Message message) {
        Request R = requestRepository.findByPatient(message.getPatient());
        requestRepository.delete(R);
        return messageRepository.save(message);
    }



    @Override
    public void deleteMessageById(int idmessage) {
        messageRepository.deleteById(idmessage);
    }

    @Override
    public Message getMessageById(int idmessage) {
        return messageRepository.findById(idmessage).get();
    }

    @Override
    public Iterable<Message> getAllMessages() {
        return messageRepository.findAll();
    }

    @Override
    public List<Message> getMessagesByPatientId(Integer idpatient) {
        return messageRepository.getMessagesByPatientId(idpatient);
    }


}
