package com.example.topas.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor

public class Designation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String desgnId;
    private String desgnName;

    @OneToMany(mappedBy = "designation", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Talent> talentList;
}
