'use strict';

const takeCollegeAdmission = (
  boardPercentage,
  studentName,
  collegeName = 'Utkal University',
) => {
  const finalAdm = {
    boardPercentage,
    studentName,
    collegeName,
  };

  console.log(finalAdm);
};

takeCollegeAdmission(78);
takeCollegeAdmission(80, 'Madhusudan Bhukta');
takeCollegeAdmission(90, 'Amuka Dhamuka', 'KIIT');
