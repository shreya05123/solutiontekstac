"use strict";

const students = [];

const form = document.getElementById("studentForm");
const nameInput = document.getElementById("studentName");
const scoreInput = document.getElementById("studentScore");
const message = document.getElementById("message");
const studentList = document.getElementById("studentList");

function updateAverage() {
  if (students.length === 0) {
    message.textContent = "No student records available.";
    return;
  }

  const total = students.reduce((sum, student) => sum + student.score, 0);
  const average = total / students.length;

  message.textContent = `Current average score: ${average.toFixed(2)}`;
}

function displayStudents() {
  studentList.innerHTML = "";

  students.forEach((student, index) => {
    const listItem = document.createElement("li");

    listItem.textContent = `${student.name} - ${student.score}`;

    listItem.addEventListener("dblclick", function () {
      students.splice(index, 1);
      displayStudents();
      updateAverage();
    });

    studentList.appendChild(listItem);
  });
}

function handleFormSubmission(event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const scoreValue = scoreInput.value.trim();
  const score = Number(scoreValue);

  if (name === "" || scoreValue === "") {
    message.textContent = "Error: Student name and score cannot be empty.";
    return;
  }

  if (Number.isNaN(score)) {
    message.textContent = "Error: Score must be a valid number.";
    return;
  }

  if (score < 0) {
    message.textContent = "Error: Score cannot be negative.";
    return;
  }

  students.push({
    name: name,
    score: score
  });

  form.reset();
  displayStudents();
  updateAverage();
}

form.addEventListener("submit", handleFormSubmission);
updateAverage();
