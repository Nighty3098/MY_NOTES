---
banner: "[[waterfall_2.png]]"
cssclasses:
  - books
banner-display: cover
---

```dataview
TABLE WITHOUT ID
    "<br />BOOK:<br /><br />" + file.link AS Book,
    "<br />AUTHOR:<br /><br />" + author AS Author,
    "<br />DATE:<br /><br />" + date AS Date,
    "<br />PROGRESS:<br /><br />" + progress AS Progress,
    ("<div style='text-align: center;'><img src='" + picture + "' style='width: 100px; border-radius: 10px;'/></div>") AS Picture
FROM #Book AND -#Extras
SORT file.name ASC
```

