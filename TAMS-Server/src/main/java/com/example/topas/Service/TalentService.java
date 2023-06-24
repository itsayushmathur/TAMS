package com.example.topas.Service;

import com.example.topas.Entity.Talent;
import com.example.topas.Entity.TalentAuthCred;
import com.example.topas.Repository.ProjectRepo;
import com.example.topas.Repository.TalentRepo;
import com.example.topas.Repository.TalentAuthRepo;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
public class TalentService implements UserDetailsService {
    @Autowired
    private TalentAuthRepo talentAuthRepo;

    @Autowired
    private TalentRepo talentRepo;
    @Autowired
    private ProjectRepo projectRepo;

    private PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        if (talentRepo.existsByEmpEmail(username)){
            Talent talent = this.talentRepo.findByEmpEmail(username);

            return (UserDetails) talent;
        } else {
            throw new UsernameNotFoundException("User with this id is not present");
        }
    }

    public String addTalent(HttpServletResponse res, TalentAuthCred talentAuthCred){
        if(this.talentRepo.existsByEmpEmail(talentAuthCred.getTalent().getEmpEmail())){
            res.setStatus(400);

            return "Talent with this id already exists";
        }
        else {
            Talent talentInfo = talentAuthCred.getTalent();
            talentInfo.setTalentAuthCred(talentAuthCred);

            talentAuthCred.setPassword(passwordEncoder().encode(talentAuthCred.getPassword()));

            this.talentRepo.save(talentInfo);

            return "Talent added";
        }

    }

    public Object getMyProfile(HttpServletResponse res, String talentId) {
        if (this.talentRepo.existsByEmpId(talentId)) {
            Talent talentInfo = this.talentRepo.findByEmpId(talentId);

            return talentInfo;
        } else {
            res.setStatus(400);

            return "Talent with this id does not exist";
        }
    }

    public List<Talent> getAllTalent (HttpServletResponse res) {
        return this.talentRepo.findAll();
    }

    public String updateProfile(HttpServletResponse res, int talentId, HashMap<String, Object> updateInfo) {
        if (this.talentRepo.existsById(talentId)) {
            Talent talentInfo = this.talentRepo.findById(talentId).get();

// to be written ......

            return "Talent info updated";
        } else {
            res.setStatus(400);

            return "Talent with this id does not exist";
        }
    }

    public String updatePassword(HttpServletResponse res, int talentId, HashMap<String, String> pwdDetails) {
        if (this.talentRepo.existsById(talentId)) {
            Talent talentInfo = this.talentRepo.findById(talentId).get();

            TalentAuthCred talentAuthCred = this.talentAuthRepo.findByTalent(talentInfo);

            if (passwordEncoder().matches(pwdDetails.get("oldPwd"), talentAuthCred.getPassword())) {
                talentAuthCred.setPassword(passwordEncoder().encode(pwdDetails.get("newPwd")));

                this.talentAuthRepo.save(talentAuthCred);

                return "Password updated";
            } else {
                res.setStatus(403);

                return "Password did not match";
            }
        } else {
            res.setStatus(400);

            return "Talent with this id does not exist";
        }
    }

}
