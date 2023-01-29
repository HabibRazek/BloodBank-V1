package com.habib.bloodbank.restcontrollers;

import com.habib.bloodbank.entities.Message;
import com.habib.bloodbank.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/message")
@CrossOrigin
public class MessageRESTController {
    @Autowired
    MessageService messageService;


    @RequestMapping(method = RequestMethod.GET)
    public Iterable<Message> getAllMessages() {
        return messageService.getAllMessages();
    }

    @RequestMapping(value="/approve",method = RequestMethod.POST)
    public Message saveMessageApproved(@RequestBody Message message) {
        return messageService.saveMessageApproved(message);
    }

    @RequestMapping(value="/reject",method = RequestMethod.POST)
    public Message saveMessageRejected(@RequestBody Message message) {
        return messageService.saveMessageRejected(message);
    }


    @RequestMapping(value="/{id}",method = RequestMethod.DELETE)
    public void deleteMessageById(@PathVariable("id") int id) {
        messageService.deleteMessageById(id);
    }

    @RequestMapping(value="/{id}",method = RequestMethod.GET)
    public Message getMessageById(@PathVariable("id") int id) {
        return messageService.getMessageById(id);
    }


    @RequestMapping(value="/patient/{idpatient}",method = RequestMethod.GET)
    public Iterable<Message> getMessagesByPatientId(@PathVariable("idpatient") int idpatient) {
        return messageService.getMessagesByPatientId(idpatient);
    }

}
