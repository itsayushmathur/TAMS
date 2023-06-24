package com.example.topas.Service;

import com.example.topas.Entity.Department;
import com.example.topas.Entity.Talent;
import com.example.topas.Repository.DepartmentRepo;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentService {

    @Autowired
    private DepartmentRepo departmentRepo;

    public String addDepartment(HttpServletResponse res, Department departmentInfo) {
        if (this.departmentRepo.existsByDeptName(departmentInfo.getDeptName())) {
            res.setStatus(400);

            return "Department already exists";
        } else {
            this.departmentRepo.save(departmentInfo);

            return "Department added";
        }
    }

    public Object getAllTalent(HttpServletResponse res, int deptId) {
        if (this.departmentRepo.existsById(deptId)) {
            Department departmentInfo = this.departmentRepo.findById(deptId).get();
            List<Talent> talentList = departmentInfo.getTalentList();

            return talentList;
        } else {
            res.setStatus(400);
            return "Department does not exist";
        }
    }
}
