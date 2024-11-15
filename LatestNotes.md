```dataview  
TABLE WITHOUT ID  
link(file.name) AS "Latests notes"
FROM "/"  
WHERE file.mtime >= date(today) - dur(30 days)  
AND file.name != this.file.name  
AND !contains(file.path, "z_Assets")  
AND !contains(file.path, "Inline Scripts")  
AND !contains(file.path, "z_Templates")  
AND !contains(file.path, "daily notes")  
AND !contains(file.path, "BRAT")  
SORT file.mtime DESC  
LIMIT 20 
```
