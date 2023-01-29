package com.habib.bloodbank.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class BloodGroup {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idbloodgroup;
    private String bloodgroup;

    @JsonIgnore
    @OneToMany(mappedBy = "bloodGroup")
    private List<Donor> donors;


}
