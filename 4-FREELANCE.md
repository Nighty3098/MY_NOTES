---
banner: "[[green_forest_2.png]]"
cssclasses:
  - books
banner-height: 550
banner-display: cover
---

# FREELANCE PROJECTS

```dataviewjs
const freelanceProjects = dv.pages('#Freelance AND !#Extras')
    .where(p => p.file.folder !== "Templates")
    .sort(p => p.file.ctime, 'desc');

const gridContainer = document.createElement('div');
gridContainer.style.display = 'grid';
gridContainer.style.gridTemplateColumns = 'repeat(auto-fill, minmax(250px, 1fr))';
gridContainer.style.gap = '20px';
gridContainer.style.padding = '10px';

freelanceProjects.forEach(p => {
    const card = document.createElement('div');
    card.style.borderRadius = '10px';
    card.style.padding = '15px';
    card.style.textAlign = 'center';
    card.style.backgroundColor = 'var(--background-primary-alt)';
    card.style.position = 'relative';

    card.innerHTML = `
        <h3><a href="${p.file.link}" style="text-decoration: none;">${p.file.name}</a></h3>
        <p><strong>Price:</strong> ${p.price || "?"}</p>
        <p><strong>Date:</strong> ${dv.date(p.date).toLocaleString({ dateStyle: 'medium' })}</p>
        <p><strong>Completed:</strong> ${p.completed ? "Yes" : "No"}</p>
    `;

    gridContainer.appendChild(card);
});

dv.container.appendChild(gridContainer);
```
