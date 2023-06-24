package com.example.topas.Repository;

import com.example.topas.Entity.Project;
import com.example.topas.Entity.Talent;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProjectRepo extends JpaRepository<Project, Integer> {

    boolean existsByProjectNameAndProjectCode(String projectName, String projectCode);

    boolean existsByProjectCode(String projectCode);

    Project findByProjectCode (String projectCode);

    List<Project> findAllByProjectCode (String projectCode);

    List<Project> findAllByProjectManager (Talent projectManager);

}
