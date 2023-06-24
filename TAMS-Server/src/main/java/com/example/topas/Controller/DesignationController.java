package com.example.topas.Controller;

import com.example.topas.Entity.Designation;
import com.example.topas.Service.DesignationService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/desig")
public class DesignationController {

    @Autowired
    private DesignationService designationService;

    @PostMapping("/add")
    public String addDesignation(HttpServletResponse res, @RequestBody Designation designationInfo) {
        String response = this.designationService.addDesignation(res, designationInfo);

        return response;
    }
}
