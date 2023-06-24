package com.example.topas.Service;

import com.example.topas.Entity.Designation;
import com.example.topas.Repository.DesignationRepo;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DesignationService {

    @Autowired
    private DesignationRepo designationRepo;

    public String addDesignation(HttpServletResponse res, Designation designationInfo) {
        if (this.designationRepo.existsByDesgnName(designationInfo.getDesgnName())) {
            res.setStatus(400);

            return "Designation already exists";
        } else {
            this.designationRepo.save(designationInfo);

            return "Designation added";
        }
    }
}
