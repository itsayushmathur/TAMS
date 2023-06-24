package com.example.topas.Repository;

import com.example.topas.Entity.Designation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DesignationRepo extends JpaRepository<Designation, Integer> {

    boolean existsByDesgnName(String desgnName);

    Designation findByDesgnName(String desgnName);
}
