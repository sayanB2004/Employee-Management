package com.project.project.Service;

import java.util.List;
import com.project.project.Model.Employee;

public interface EmployeeService {

    Employee createEmployee(Employee employee);

    List<Employee> getAllEmployees();

    Employee updateEmployee(Long id, Employee entity);

    void deleteEmployee(Long id);
    
}
