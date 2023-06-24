package com.example.topas.Repository;

import com.example.topas.Entity.Allocation;
import com.example.topas.Entity.Talent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AllocationRepo extends JpaRepository<Allocation, Integer> {

    List<Allocation> findByTalent(Talent talent);
}
