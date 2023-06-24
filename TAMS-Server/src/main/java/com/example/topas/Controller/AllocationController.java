package com.example.topas.Controller;

import com.example.topas.Entity.Allocation;
import com.example.topas.Service.AllocationService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/allocation")
public class AllocationController {

    @Autowired
    private AllocationService allocationService;

    @PostMapping("/add")
    public String addAllocation(HttpServletResponse res, @RequestBody Allocation allocationInfo) {
        String response = this.allocationService.addAllocation(res, allocationInfo);

        return response;
    }

    @GetMapping("/getMyAllocations/{talentId}")
    public Object getMyAllocations (HttpServletResponse res, @PathVariable("talentId") int talentId) {
        Object response = this.allocationService.getMyAllocation(res, talentId);

        return response;
    }

    @DeleteMapping("/delete/{allocationId}")
    public Object deleteAllocation (HttpServletResponse res, @PathVariable("allocationId") int allocationId) {
        Object response = this.allocationService.deleteAllocation(res, allocationId);

        return response;
    }
}
