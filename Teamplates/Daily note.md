---
tags:
  - DailyNote
date:
---

```dataviewjs
const page = dv.current();
if (page) {
    const tasks = page.file.tasks || [];
    const completedTasks = tasks.filter(task => task.completed).length;
    const uncompletedTasks = tasks.filter(task => !task.completed).length;
    const tasksCount = completedTasks + uncompletedTasks;
    const percentage = tasksCount > 0 ? (completedTasks / tasksCount) * 100 : 0;

    const div = document.createElement('div');
    div.className = "widget";
    const h1 = document.createElement('h1');
    h1.textContent = `TASKS: ${percentage.toFixed(0)}% (${completedTasks}/${tasksCount})`;
    div.appendChild(h1);
    dv.container.appendChild(div);
} else {
    dv.paragraph(`CURRENT FILE NOT FOUND.`);
}
```

> [!cite] 
> Even in the worst fate, there are opportunities for happy change.


# **Thoughts:**


---

# **Tasks:**

- [ ] TASK 1

