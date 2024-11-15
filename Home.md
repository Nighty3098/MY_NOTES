---
moc: 
tags:
  - "#moc"
title: Root
created: 2024-04-21 19:12
modified: 2024-05-04 09:09
cssclasses:
  - hide-properties
  - hide-title
---
<img src="https://github.com/Nighty3098/MY_NOTES/blob/main/obsidian-banner-2.png?raw=true" style="border-radius: 30px" />


````col
height=max
===
```col-md
# NOTES

```dataview  
TABLE WITHOUT ID  
link(file.name) AS "`ris:StickyNote` Latests notes"
FROM "/"  
WHERE file.mtime >= date(today) - dur(30 days)  
AND file.name != this.file.name  
AND !contains(file.path, "z_Assets")  
AND !contains(file.path, "Inline Scripts")  
AND !contains(file.path, "z_Templates")  
AND !contains(file.path, "daily notes")  
AND !contains(file.path, "BRAT")  
SORT file.mtime DESC  
LIMIT 10  
```

```col-md
# HOME
```
````



