package com.example.topas.Service;

import com.example.topas.Entity.Allocation;
import com.example.topas.Entity.Project;
import com.example.topas.Entity.Talent;
import com.example.topas.Repository.AllocationRepo;
import com.example.topas.Repository.ProjectRepo;
import com.example.topas.Repository.TalentRepo;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AllocationService {

    @Autowired
    private AllocationRepo allocationRepo;

    @Autowired
    private TalentRepo talentRepo;

    @Autowired
    private ProjectRepo projectRepo;

    public String addAllocation(HttpServletResponse res, Allocation allocationInfo) {
        if (this.talentRepo.existsByEmpId(allocationInfo.getTalent().getEmpId())){
            Talent talentInfo = this.talentRepo.findByEmpId(allocationInfo.getTalent().getEmpId());
            allocationInfo.setTalent(talentInfo);
            if (this.projectRepo.existsByProjectCode(allocationInfo.getProject().getProjectCode())){
                Project projectInfo = this.projectRepo.findByProjectCode(allocationInfo.getProject().getProjectCode());
                allocationInfo.setProject(projectInfo);
                this.allocationRepo.save(allocationInfo);

                return "Allocation created";
            } else {
                res.setStatus(400);
                return "Project with this id does not exist";
            }
        } else {
            res.setStatus(400);
            return "Talent with this id does not exist";
        }
    }

    public Object getMyAllocation(HttpServletResponse res, int talentId) {
        if (this.talentRepo.existsById(talentId)) {
            Talent talentInfo = this.talentRepo.findById(talentId).get();
            List<Allocation> allocationList = this.allocationRepo.findByTalent(talentInfo);

            return allocationList;
        } else {
            res.setStatus(400);
            return "Employee with this id does not exist";
        }

    }

    public Object deleteAllocation (HttpServletResponse res, int allocationId) {
        if (this.allocationRepo.existsById(allocationId)) {
            this.allocationRepo.deleteById(allocationId);

            return "Allocation deleted";
        } else {
            res.setStatus(400);
            return "Allocation with this id does not exist";
        }

    }
}
