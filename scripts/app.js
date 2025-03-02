// header section theme changing randomly
document.getElementById("theme-btn").addEventListener("click", function () {
  const bgBody = document.getElementById("bg-color");
  bgBody.style.backgroundColor = getRgbRandomColor();
});

// Task Assigned Value change
// mobile button fix
document
  .getElementById("mobile-fix-btn")
  .addEventListener("click", function () {
    handleTaskCompletion(
      "mobile-fix-btn",
      "task-assigned",
      "taskCount",
      "activity-log",
      "mobile-btn-text"
    );
  });
// add dark mode button
document
  .getElementById("Add-Dark-Mode-btn")
  .addEventListener("click", function () {
    handleTaskCompletion(
      "Add-Dark-Mode-btn",
      "task-assigned",
      "taskCount",
      "activity-log",
      "Add-Dark-Mode-text"
    );
  });
// Optimize button
document.getElementById("Optimize-btn").addEventListener("click", function () {
  handleTaskCompletion(
    "Optimize-btn",
    "task-assigned",
    "taskCount",
    "activity-log",
    "Optimize-text"
  );
});
//Add new  button
document.getElementById("Add-new-btn").addEventListener("click", function () {
  handleTaskCompletion(
    "Add-new-btn",
    "task-assigned",
    "taskCount",
    "activity-log",
    "Add-new-text"
  );
});
// AI search text
document.getElementById("ai-search-btn").addEventListener("click", function () {
  handleTaskCompletion(
    "ai-search-btn",
    "task-assigned",
    "taskCount",
    "activity-log",
    "ai-search-text"
  );
});
// Job Searching button
document
  .getElementById("job-searching-btn")
  .addEventListener("click", function () {
    handleTaskCompletion(
      "job-searching-btn",
      "task-assigned",
      "taskCount",
      "activity-log",
      "Job-Searching-text"
    );
  });

// remove element
document.getElementById("clear-history").addEventListener("click", function () {
  document.getElementById("activity-log").innerHTML = "";
});
