---
banner: "[[green_forest_2.png]]"
cssclasses:
  - books
banner-height: 550
banner-display: cover
---

# FREELANCE PROJECTS 
```dataview
TABLE WITHOUT ID
    "<br /><br />TITLE:<br /><br />" + file.link AS Book,
    "<br /><br />PRICE:<br /><br />" + price AS Price,
    "<br /><br />DATE:<br /><br />" + date AS Date,
    "<br /><br />COMPLETED:<br /><br />" + completed AS completed
FROM #Freelance AND -#Extras
SORT file.ctime desc
where file.folder!="Templates"
```
