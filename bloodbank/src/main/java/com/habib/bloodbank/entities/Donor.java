package com.habib.bloodbank.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data @AllArgsConstructor @NoArgsConstructor
@Entity
public class Donor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer iddonor;
    private String name;
    private Integer age;
    private String gender;
    private String phone;
    private String address;
    @ManyToOne
    private BloodGroup bloodGroup;



}
