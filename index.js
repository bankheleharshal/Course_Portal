const express = require("express");
const app = express();

app.set("view engine", "ejs");

// Sample course data (Array of Objects)
const courses = [
  { id: 1, name: "MERN Stack", duration: "6 Months", fees: 25000 },
  { id: 2, name: "Python Full Stack", duration: "5 Months", fees: 20000 },
  { id: 3, name: "Java Development", duration: "4 Months", fees: 18000 }
];

// HOME ROUTE
app.get("/", (req, res) => {
  res.render("home");
});

// COURSES ROUTE (Passing Array)
app.get("/courses", (req, res) => {
  res.render("courses", { courses });
});

// COURSE DETAILS ROUTE (Route Parameter)
app.get("/courses/:id", (req, res) => {
  const courseId = parseInt(req.params.id);
  const course = courses.find(c => c.id === courseId);

  res.render("course-details", { course });
});

// ABOUT ROUTE
app.get("/about", (req, res) => {
  res.render("about");
});
 

const PORT = 3000
const HOST = '127.0.0.1'   // ✅ Correct IP

app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`)
})
