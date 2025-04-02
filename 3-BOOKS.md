---
cssclasses:
  - books
banner-display: cover
---

# BOOKS

```dataviewjs
const books = dv.pages('#Book AND !#Extras')
    .where(p => p.file.folder !== "Templates")
    .sort(p => p.file.ctime, 'desc');

const unreadBooks = books.where(p => !p.read);
const readBooks = books.where(p => p.read);

const gridContainer = document.createElement('div');
gridContainer.style.display = 'grid';
gridContainer.style.gridTemplateColumns = 'repeat(auto-fill, minmax(250px, 1fr))';
gridContainer.style.gap = '20px';
gridContainer.style.padding = '10px';

const addBooksToGrid = (bookList) => {
    bookList.forEach(p => {
        const percent = Math.round((p.progress / p.total_pages) * 100);

        const card = document.createElement('div');
        card.style.borderRadius = '10px';
        card.style.padding = '10px';
        card.style.textAlign = 'center';
        card.style.backgroundColor = 'var(--background-primary-alt)';
        card.style.display = 'flex';
        card.style.flexDirection = 'column';
        card.style.justifyContent = 'space-between';
        card.style.height = 'auto';
        card.innerHTML = `
            <div style='flex-grow: 1;'>
                <h3><a href="${p.file.link}" target="_blank">${p.file.name}</a></h3>
                <p>${p.author || "?"}</p>
                <p>${dv.date(p.file.ctime).toLocaleString({ dateStyle: 'medium' })}</p>
                <p>${p.rating || "?"} ⭐</p>
                <p>
                    <progress value="${percent}" max="100" style="vertical-align: middle"></progress> ${percent}%
                </p>
            </div>
            <div style='text-align: center;'>
                <img src='${p.picture}' style='height: 300px; object-fit: cover; border-radius: 10px;'/>
            </div>
        `;

        gridContainer.appendChild(card);
    });
};

addBooksToGrid(unreadBooks);

addBooksToGrid(readBooks);

dv.container.appendChild(gridContainer);
```
