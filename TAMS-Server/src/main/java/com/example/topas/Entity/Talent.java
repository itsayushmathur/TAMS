package com.example.topas.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
public class Talent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String empId;

    private String firstName;

    private String lastName;

    private String phoneNo;

    private String location;

    private String empEmail;

    @Temporal(TemporalType.DATE)
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate dateOfJoining;

    private float experience;

    private int allocation;

    @OneToMany(mappedBy = "projectManager", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Project> myProjects;

    @OneToOne(mappedBy = "talent", cascade = CascadeType.ALL)
    @JsonIgnore
    private TalentAuthCred talentAuthCred;

    @ManyToOne
    private Department department;

    @ManyToOne
    private Designation designation;

    @OneToMany(mappedBy = "talent", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Allocation> allocationList;

}
