package com.example.topas.Service;

import com.example.topas.Entity.Project;
import com.example.topas.Entity.Talent;
import com.example.topas.Repository.ProjectRepo;
import com.example.topas.Repository.TalentRepo;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepo projectRepo;

    @Autowired
    private TalentRepo talentRepo;

    public String addProject (HttpServletResponse res, Project projectInfo) {
        if (this.projectRepo.existsByProjectNameAndProjectCode(projectInfo.getProjectName(), projectInfo.getProjectCode())) {
            res.setStatus(400);

            return "Project with this name or code already exist";
        } else {
            this.projectRepo.save(projectInfo);

            return "Project has been added";
        }
    }

    public Object getMyProject (HttpServletResponse res, String talentId) {
        if (this.talentRepo.existsByEmpId(talentId)) {
            Talent talentInfo = this.talentRepo.findByEmpId(talentId);

            List<Project> projectList = this.projectRepo.findAllByProjectManager(talentInfo);

            return projectList;
        } else {
            res.setStatus(400);

            return "Talent with this id does not exist";
        }
    }

    public Object getProject(HttpServletResponse res, String projectId) {
        if (this.projectRepo.existsByProjectCode(projectId)){
            return this.projectRepo.findByProjectCode(projectId);
        } else {
            res.setStatus(400);

            return "Project with this id does not exist";
        }
    }

    public Object getAllocation(HttpServletResponse res, String projectId) {
        if (this.projectRepo.existsByProjectCode(projectId)){
            Project projectInfo = this.projectRepo.findByProjectCode(projectId);

            return projectInfo.getAllocationList();
        } else {
            res.setStatus(400);

            return "Project with this id does not exist";
        }
    }

}
