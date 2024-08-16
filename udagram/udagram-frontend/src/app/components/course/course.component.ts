

import { Component, OnInit } from '@angular/core';
import { Courses, EnglishCourses } from './courses.data';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss',
})

export class CourseComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'cost', 'duration', 'teacher', 'numberOfLessons', 'status'];
  displayRegistered: string[] = ['id', 'name', 'cost', 'duration', 'teacher', 'numberOfLessons'];
  dataSource = EnglishCourses;
  registeredCourses: Courses[] = [];
  dataSourceRegister = new MatTableDataSource<Courses>();

  ngOnInit(): void {
    const productList = window.localStorage.getItem('products');
    this.registeredCourses =  productList ? JSON.parse(productList) : [];

    this.dataSource.forEach((course) => {
      const registered = this.registeredCourses.find((product) => product.id === course.id);
      course.registered = registered ? true : false;
    });

    this.dataSourceRegister = new MatTableDataSource(this.registeredCourses);
  }

  registerCourse(course: Courses) {
    this.dataSource[this.dataSource.indexOf(course)].registered = true;
    //this.registeredCourses.push(course);

    this.dataSourceRegister.data.push(course);
    //this.dataSourceRegister = new MatTableDataSource(this.registeredCourses);

    localStorage.setItem('products', JSON.stringify(this.registeredCourses));
  }
}
