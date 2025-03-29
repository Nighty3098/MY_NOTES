---
cssclasses:
  - books
---
```dataview
TABLE WITHOUT ID
    "<br /><br />TITLE:<br /><br />" + file.link AS Book,
    "<br /><br />PRICE:<br /><br />" + price AS Price,
    "<br /><br />DATE:<br /><br />" + date AS Date,
    "<br /><br />COMPLETED:<br /><br />" + completed AS completed,
    "<br /><br />LINK:<br /><br />" + link AS link
FROM #Freelance AND -#Extras
SORT file.name ASC
```
