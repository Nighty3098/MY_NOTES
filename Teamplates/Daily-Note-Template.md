# :LiBookmark: Journal

Anything goes.

# :LiChevronsRight: Actionables
```dataview
TASK
FROM "Syncs"
WHERE completed = false
GROUP BY file.link
```
# :LiCheckCircle2: Mobile Tasks
```dataview
TASK
FROM "Captures/Drafts Tasks"
WHERE completed = false
```
# :LiMaximize: Captures

```dataview
TABLE WITHOUT ID file.ctime as "Created", file.link as "Note Title"
FROM "Captures"
WHERE dateformat(file.cday, "yyyy-MM-dd") AND dateformat(file.cday, "yyyy-MM-dd") = this.file.name
SORT file.ctime DESC
```

# :LiCheckCircle: Actioned Captures

```dataview
TABLE WITHOUT ID file.ctime as "Created", file.link as "Note Title"
FROM "Captures"
WHERE contains(file.tags, "actioned") 
AND dateformat(file.cday, "yyyy-MM-dd") AND dateformat(file.cday, "yyyy-MM-dd") = this.file.name
SORT file.ctime DESC
```

# :LiBookOpenCheck: Reading Log

Coming Soon™

# :LiCode2: Snippets

```dataview
TABLE WITHOUT ID file.ctime as "Created", file.link as "Note Title"
WHERE contains(tags, "snippet") AND dateformat(file.cday, "yyyy-MM-dd") = this.file.name
SORT file.ctime DESC
```

# :LiArrowLeftRight: Syncs

```dataview
TABLE WITHOUT ID file.ctime as "Created", file.link as "Note Title"
WHERE contains(tags, "sync") AND dateformat(file.cday, "yyyy-MM-dd") = this.file.name
SORT file.ctime DESC
```
