package com.example.topas.Controller;

import com.example.topas.Entity.Department;
import com.example.topas.Service.DepartmentService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@CrossOrigin
@RestController
@RequestMapping("/dept")
public class DepartmentController {

    @Autowired
    private DepartmentService departmentService;

    @PostMapping("/add")
    public String addDesignation(HttpServletResponse res, @RequestBody Department departmentInfo) {
        String response = this.departmentService.addDepartment(res, departmentInfo);

        return response;
    }

    @GetMapping("/getAllTalent/{deptId}")
    public Object getAllTalent (HttpServletResponse res, @PathVariable("deptId") int deptId) {
        Object response = this.departmentService.getAllTalent(res, deptId);

        return response;
    }
}
