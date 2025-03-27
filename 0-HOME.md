---
banner: "[[mist_forest_2 1.png]]"
cssclasses:
  - launchpad
tags:
  - home
banner-height: 460
content-start: 81
banner-display: cover
---

```dataviewjs
const clockDiv = this.container.createDiv({ cls: "analog-clock-widget" });
clockDiv.innerHTML = `
  <div style="position: relative; width: 200px; height: 200px; min-width: 200px; min-height: 200px; border-radius: 40px; border: 10px solid var(--text-normal); background-color: var(--text-normal); margin: auto;">
    <div id="hour-hand" style="position: absolute; width: 6px; height: 50px; background-color: var(--background-primary-alt); border-radius: 50px; top: 50%; left: 50%; transform-origin: 50% 100%; transform: translateX(-50%) translateY(-100%);"></div>
    <div id="minute-hand" style="position: absolute; width: 4px; height: 70px; background-color:  var(--background-primary); top: 50%; left: 50%; border-radius: 50px; transform-origin: 50% 100%; transform: translateX(-50%) translateY(-100%);"></div>
    <div id="second-hand" style="position: absolute; width: 2px; height: 90px; background-color:  var(--text-error); top: 50%; left: 50%; border-radius: 50px; transform-origin: 50% 100%; transform: translateX(-50%) translateY(100%);"></div>
  </div>
`;

function updateAnalogClock() {
  const now = new Date();
  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const hourRotation = (hours * 30) + (minutes / 2);
  const minuteRotation = minutes * 6;
  const secondRotation = seconds * 6;
  const hourHand = clockDiv.querySelector("#hour-hand");
  const minuteHand = clockDiv.querySelector("#minute-hand");
  const secondHand = clockDiv.querySelector("#second-hand");
  if (hourHand && minuteHand && secondHand) {
    hourHand.style.transform = `translateX(-50%) translateY(-100%) rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `translateX(-50%) translateY(-100%) rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `translateX(-50%) translateY(-100%) rotate(${secondRotation}deg)`;
  }
  requestAnimationFrame(updateAnalogClock);
}

updateAnalogClock();
```

`````col
````col-md
flexGrow=1
===
```dataviewjs
const now = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
const formattedDate = now.toLocaleDateString('en-EN', options);
const container = dv.el("div", "", {
    cls: "widget",
});

container.textContent = formattedDate;
```
````
`````





`````col
````col-md
![[forest_stairs.jpg]]
````
````col-md
```dataviewjs
const CACHE_DURATION = 60 * 60 * 1000;

async function countMdFiles() {
    const cacheKey = 'mdCountCache';
    const currentFile = dv.current().file;
    const folderPath = currentFile.path.includes('/')
        ? currentFile.path.split('/').slice(0, -1).join('/') + '/'
        : '';
    const allFiles = dv.pages().filter(p =>
        p.file.path.startsWith(folderPath) &&
        p.file.path.endsWith('.md')
    );
    const count = allFiles.length;
    dv.page(currentFile.path)[cacheKey] = {
        timestamp: Date.now(),
        count: count
    };
    return count;
}

countMdFiles().then(count => {
    const div = document.createElement('div');
    div.className = "widget";
    const h1 = document.createElement('h1');
    h1.textContent = `${count} NOTES`;
    div.appendChild(h1);
    dv.container.appendChild(div);
});
```
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
```dataviewjs
const TARGET_FILE = "2-PROJECTS.md";

async function getTagData() {
    try {
        const content = await dv.io.load(TARGET_FILE);
        const matches = content.match(/#([A-Za-z0-9_-]+)/g) || [];
        const uniqueTags = [...new Set(matches)];
        return {
            count: uniqueTags.length,
            tags: uniqueTags
        };
    } catch (error) {
        throw new Error(`File "${TARGET_FILE}" not found: ${error.message}`);
    }
}

async function main() {
    try {
        const {count, tags} = await getTagData();

        const div = document.createElement('div');
        div.className = "widget";
        const h1 = document.createElement("h1");
        h1.textContent = `PROJECTS: ${count}`
        div.appendChild(h1)
        dv.container.appendChild(div)

    } catch (error) {
        dv.el("div", `⚠️ ERROR: ${error.message}`, {
            attr: { style: "color: red; padding: 10px;" }
        });
    }
}
main();
```
```dataviewjs
const folderPath = "Books";
async function countFilesInFolder() {
    const allFiles = dv.pages();
    const filesInFolder = allFiles.filter(p => p.file.path.startsWith(folderPath + "/"));
    return filesInFolder.length;
}
async function main() {
    const fileCount = await countFilesInFolder();
    const div = document.createElement('div');
    div.className = "widget";
    const h1 = document.createElement('h1');
    h1.textContent = `BOOKS: ${fileCount}`;
    div.appendChild(h1);
    dv.container.appendChild(div);
}
main();
```
````
`````





`````col
````col-md
flexGrow=1
textAlign=center
===
![[mist_forest_2.png]]


#TypeScript
#python
#CPP
#C 


````

````col-md
flexGrow=1
===
![[waterfall_2.png]]


#Trigonometry
#Math
#Geometry
#SocialStudies

````
`````





> [!todo] TODO
>
> - [x] Database design
> - [x] Table of projects
> - [x] Implementation of API for project management
> - [ ] Login / Register page
> - [ ] Add project uniqueness check in OWL database
> - [ ] Fixing Docker containers
> - [ ] Task table
> - [ ] Implementation of task management via API
> - [ ] Implementation of the settings table
> - [ ] API testing
> - [ ] Switching to https, improving security
> - [ ] Implementation of a test console client
> - [ ] Admin panel implementation
> - [ ] Statistics collection system
> - [ ] Connecting the backend to the application
