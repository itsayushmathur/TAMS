package com.example.topas.Controller;

import com.example.topas.Entity.Project;
import com.example.topas.Entity.Talent;
import com.example.topas.Service.ProjectService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@CrossOrigin
@RestController
@RequestMapping("/project")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @PostMapping("/add")
    public String addProject (HttpServletResponse res, @RequestBody Project project) {
        String response  = this.projectService.addProject(res, project);

        return response;
    }

    @GetMapping("/getMyProject/{talentId}")
    public Object getMyProject(HttpServletResponse res, @PathVariable("talentId") String talentId) {
        Object response = this.projectService.getMyProject(res, talentId);

        return response;
    }

    @GetMapping("/get/{projectId}")
    public Object getProject (HttpServletResponse res, @PathVariable("projectId") String projectId){
        Object response = this.projectService.getProject(res, projectId);

        return response;
    }

    @GetMapping("/getAllocation/{projectId}")
    public Object getAllocation (HttpServletResponse res, @PathVariable("projectId") String projectId){
        Object response = this.projectService.getAllocation(res, projectId);

        return response;
    }

}
