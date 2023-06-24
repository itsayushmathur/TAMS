package com.example.topas.Repository;

import com.example.topas.Entity.Talent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TalentRepo extends JpaRepository<com.example.topas.Entity.Talent, Integer> {

    boolean existsByEmpEmail(String empEmail);

    boolean existsByEmpId(String empId);

   Talent findByEmpEmail(String empEmail);

   Talent findByEmpId(String empId);
}
