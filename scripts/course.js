const courses = [
    { code: "CSE110", name: "CSE 110", completed: true },
    { code: "CSE210", name: "CSE 210", completed: true },
    { code: "WDD130", name: "WDD 130", completed: true },
    { code: "CSE111", name: "CSE 111", completed: true },
    { code: "WDD131", name: "WDD 131", completed: true },
    { code: "WDD231", name: "WDD 231", completed: false }
];

function displayCourses(filter = "all") {
    const courseContainer = document.getElementById("courses");
    courseContainer.innerHTML = "";

    let filteredCourses = courses.filter(course => 
        filter === "all" || course.code.startsWith(filter)
    );

    filteredCourses.forEach(course => {
        let courseDiv = document.createElement("div");
        courseDiv.textContent = course.name;
        courseDiv.className = `course-box ${course.completed ? "completed" : "not-completed"}`;
        courseContainer.appendChild(courseDiv);
    });
}

displayCourses();
