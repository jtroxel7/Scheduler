import React from 'react';
import { ScrollView } from 'react-native';
import { useState } from 'react';
import TermSelector from './TermSelector';
import CourseSelector from './CourseSelector';

const termMap = { F: 'Fall', W: 'Winter', S: 'Spring'};
const terms = Object.values(termMap);

const getCourseTerm = course => (
  termMap[course.id.charAt(0)]
);

const CourseList = ({courses, view}) => {
  const [selectedTerm, setSelectedTerm] = useState('Fall');

  const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));
  
  
  return (
    <ScrollView>
      <TermSelector terms={terms} selectedTerm={selectedTerm} setSelectedTerm = {setSelectedTerm}/>
      <CourseSelector courses={termCourses} view={view}/>
    </ScrollView>
  );
};



export default CourseList;