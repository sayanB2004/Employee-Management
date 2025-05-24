package com.project.project.Service;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.project.Entity.EmployeeEntity;
import com.project.project.Model.Employee;
import com.project.project.Repository.EmployeeRepository;


@Service
public class EmployeeServiceImpl implements EmployeeService{

    @Autowired
    private EmployeeRepository employeeRepository;
    
    @Override
    public Employee createEmployee(Employee employee) {
        // TODO Auto-generated method stub
        EmployeeEntity emp = new EmployeeEntity();
        BeanUtils.copyProperties(employee, emp);
        employeeRepository.save(emp);
        return employee;
    }

    @Override
    public List<Employee> getAllEmployees() {
        // TODO Auto-generated method stub
        List<EmployeeEntity> empList = employeeRepository.findAll();
        List<Employee> employees = empList.stream().map(emp -> {
            Employee employee = new Employee();
            BeanUtils.copyProperties(emp, employee);
            return employee;
        }).toList();
        return employees;
    }

    @Override
    public Employee updateEmployee(Long id, Employee entity) {
        // TODO Auto-generated method stub
        EmployeeEntity emp = employeeRepository.findById(id).orElseThrow(() -> new RuntimeException("Employee not found"));
        BeanUtils.copyProperties(entity, emp, "id");
        employeeRepository.save(emp);
        return entity;

    }

    @Override
    public void deleteEmployee(Long id) {
        // TODO Auto-generated method stub
        employeeRepository.deleteById(id);
    }
    
}
