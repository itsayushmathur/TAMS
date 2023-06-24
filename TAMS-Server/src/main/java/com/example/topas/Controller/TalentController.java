package com.example.topas.Controller;

import com.example.topas.Entity.Talent;
import com.example.topas.Entity.TalentAuthCred;
import com.example.topas.Service.TalentService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/talent")
public class TalentController {
    @Autowired
    private TalentService talentService;

    @PostMapping("/add")
    public ResponseEntity<String> addTalent(HttpServletResponse res, @RequestBody TalentAuthCred talentInfo){
        String message = this.talentService.addTalent(res, talentInfo);
        return  new ResponseEntity<>(message, HttpStatus.CREATED);
    }

    @GetMapping("/get/{talentId}")
    public Object getMyProfile(HttpServletResponse res, @PathVariable("talentId") String talentId) {
        Object response = this.talentService.getMyProfile(res, talentId);

        return response;
    }

    @GetMapping("/getAll")
    public List<Talent> getAllTalent (HttpServletResponse res) {
        List<Talent> talentList = this.talentService.getAllTalent(res);

        return talentList;
    }

    @PutMapping("/update/{talentId}")
    public String updateProfile (HttpServletResponse res, @PathVariable("talentId") int talentId, @RequestBody HashMap<String, Object> updateInfo) {
        String response = this.talentService.updateProfile(res, talentId, updateInfo);

        return response;
    }

    @PatchMapping("/changePwd/{talentId}")
    public String changePwd (HttpServletResponse res, @PathVariable("talentId") int talentId, @RequestBody HashMap<String, String> pwdDetails) {
        String response = this.talentService.updatePassword(res, talentId, pwdDetails);

        return response;
    }

}
