package com.example.topas.Repository;

import com.example.topas.Entity.Talent;
import com.example.topas.Entity.TalentAuthCred;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TalentAuthRepo extends JpaRepository<TalentAuthCred, Integer> {

    TalentAuthCred findByTalent(Talent talentInfo);
}
