package com.example.topas.Repository;

import com.example.topas.Entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DepartmentRepo extends JpaRepository<Department,Integer> {
    Department findByDeptName(String deptName);

    boolean existsByDeptName(String deptName);
}
