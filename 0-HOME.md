---
cssclasses:
  - launchpad
tags:
  - home
banner-height: 480
content-start: 276
banner-display: cover
---







``````col

`````col-md

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

`````

``````



``````col

`````col-md

```dataviewjs
async function countMdFiles() {
    const currentFile = dv.current().file;
    const folderPath = currentFile.path.includes('/')
        ? currentFile.path.split('/').slice(0, -1).join('/') + '/'
        : 'Daily';
    const allFiles = dv.pages().filter(p =>
        p.file.path.startsWith(folderPath) &&
        p.file.path.endsWith('.md')
    );
    const count = allFiles.length;
    return count;
}

countMdFiles().then(count => {
    const div = document.createElement('div');
    div.className = "widget";
    const h1 = document.createElement('h1');
    h1.textContent = `${count} DAILY NOTES`;
    div.appendChild(h1);
    dv.container.appendChild(div);
});
```

```dataviewjs
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

`````

``````







![[8Bit _ Pixel _ Spring 1.gif]]

`````col
````col-md
flexGrow=1
textAlign=center
===

#DailyNote
#TypeScript
#python
#CPP
#C


````

````col-md
flexGrow=1
===

#book
#Trigonometry
#Math
#Geometry
#SocialStudies

````
`````








````col-md
flexGrow=1
textAlign=center
===

![[@mejwh · mejwh.gif]]

```dataview
TASK
FROM !"Templates"
WHERE !completed
GROUP BY header
```

````









```dataview
CALENDAR file.cday
```