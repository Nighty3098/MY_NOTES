---
tags:
  - Git
---
# Merge Conflicts in Git

Version control systems are designed to manage contributions to a project from multiple distributed authors (usually developers). Sometimes, the same content may be edited by multiple developers at the same time. If developer A tries to change the code that developer B is editing, a conflict may occur. To prevent conflicts, developers work in separate [isolated branches](https://www.atlassian.com/en/git/tutorials/using-branches). The main job of the `git merge` command is to merge separate branches and resolve any conflicting edits.

## Understanding Merge Conflicts

Merging and conflicts are an essential part of working with Git. In other version control tools, such as SVN, dealing with conflicts can be expensive and time-consuming. Git makes merging very easy. In most cases, Git will figure out how to automatically integrate new changes.

Conflicts typically occur when two people change the same lines in a file, or when one developer deletes a file that another developer is currently changing. In such cases, Git cannot automatically determine which change is correct. Conflicts only affect the developer performing the merge; the rest of the team is unaware of the conflict. Git marks the file as conflicted and stops the merge process. In this case, it is the responsibility of the developers to resolve the conflict.

## Types of Merge Conflicts

A merge conflict can occur at two separate points: when starting the merge and during the merge process. We'll look at how to resolve each of these conflict scenarios below.

### Git Aborts Right at the Start of a Merge

The merge command aborts right at the start if Git detects changes in the working directory or staging area of ​​the current project. Git cannot perform the merge because these pending changes would otherwise be overwritten by new commits. This happens because of conflicts not with other developers, but with pending local changes. The local state needs to be stabilized with `git stash`, `git checkout`, `git commit`, or `git reset`. If the merge command aborts at the very beginning, the following error message is printed:

```bash
error: Entry '<fileName>' not uptodate. Cannot merge. (Changes in working directory)

```

### Git aborts during merge

A merge failure DURING the merge indicates that there is a conflict between the current local branch and the branch being merged. This indicates a conflict with another developer's code. Git will do its best to merge the files, but will leave the conflicting sections for you to resolve manually. If the merge fails during the merge, the following error message is printed:

```bash
error: Entry '<fileName>' would be overwritten by merge. Cannot merge. (Changes in staging area)

```

## Creating a merge conflict

To better understand merge conflicts, in the next section we will simulate a conflict for further study and resolution. We will use the Unix-like Git command line interface to run the simulated example.

```scss
$ mkdir git-merge-test
$ cd git-merge-test
$ git init .
$ echo "this is some content to mess with" > merge.txt
$ git add merge.txt
$ git commit -am"we are committing the initial content"
[main (root-commit) d48e74c] we are committing the initial content
1 file changed, 1 insertion(+)
create mode 100644 merge.txt

```

The following actions are performed by the sequence of commands shown in this example.

- Create a new directory named `git-merge-test`, change into this directory and initialize it as a new Git repository.
- Create a new text file `merge.txt` with some content.
- Add `merge.txt` to the repository and commit.

Now we have a new repository with one branch `main` and a non-empty file `merge.txt`. Next, let's create a new branch that will be used as a conflicting branch for the merge.

```scss
$ git checkout -b new_branch_to_merge_later
$ echo "totally different content to merge later" > merge.txt
$ git commit -am"edited the content of merge.txt to cause a conflict"
[new_branch_to_merge_later 6282319] edited the content of merge.txt to cause a conflict
1 file changed, 1 insertion(+), 1 deletion(-)

```

The above sequence of commands does the following.

- Creates a new branch named `new_branch_to_merge_later` and switches to it.
- Overwrites the contents of `merge.txt`.
- Commits the new contents.

In this new branch `new_branch_to_merge_later` we created a commit that overrode the contents of the file `merge.txt`.

```bash
git checkout main
Switched to branch 'main'
echo "content to append" >> merge.txt
git commit -am"appended content to merge.txt"
[main 24fbe3c] appended content to merge.tx
1 file ch anged, 1 insertion(+)

```

This sequence of commands switches to the `main` branch, appends the contents to `merge.txt` and commits it. After that, our experimental repository has two new commits, one in the `main` branch and one in the `new_branch_to_merge_later` branch. Now let's run `git merge new_branch_to_merge_later` and see what happens!

```scss
$ git merge new_branch_to_merge_later
Auto-merging merge.txt
CONFLICT (content): Merge conflict in merge.txt
Automatic merge failed; fix conflicts and then commit the result.

```

BOOM! 💥 There was a conflict. Good thing Git told us about it.

## Identifying Merge Conflicts

As we saw in the example, Git prints a short descriptive message about the CONFLICT that occurred. To get a deeper understanding of the problem, you can run `git status`.

```bash
$ git status
On branch main
You have unmerged paths.
(fix conflicts and run "git commit")
(use "git merge --abort" to abort the merge)

Unmerged paths:
(use "git add <file>..." to mark resolution)

both modified: merge.txt

```

The output of `git status` tells us that the paths could not be merged due to a conflict. The `merge.text` file is now shown as modified. Let's examine this file and see what has changed.

```bash
$ cat merge.txt
<<<<<<< HEAD
this is some content to mess with
content to append
=======
totally different content to merge later
>>>>>>> new_branch_to_merge_later

```

To view the contents of the file `merge.txt`, we use the `cat` command. You can see that the file has some strange new additions:

- `<<<<<<< HEAD`
- `========`
- `>>>>>>> new_branch_to_merge_later`

These new lines can be thought of as "conflict separators". The line `=======` is the "center" of the conflict. All content between this center and the line `<<<<<<< HEAD` is in the current branch main, which is referenced by the `HEAD` pointer. And everything between the center and the line `>>>>>>> new_branch_to_merge_later` is the content of the branch to merge.

## Resolving merge conflicts using the command line

The easiest way to resolve a conflict is to edit the conflicting file. Open the `merge.txt` file in your favorite editor. In our example, we will simply remove all the conflict separators. The modified content of the `merge.txt` file will look like this:

```css
this is some content to mess with
content to append
totally different content to merge later

```

After editing the file, run `git add merge.txt` to add the newly merged content to the staged section. To complete the merge, create a new commit by running the following command:

```bash
git commit -m "merged and resolved the conflict in merge.txt"

```

Git will detect that the conflict is resolved and create a new merge commit to complete the merge procedure.

## Git commands that can be used to resolve merge conflicts

### Common tools

```
git status

```

The status command is often used when working with Git and helps identify files that are in conflict during a merge.

```bash
git log --merge

```

Passing the `--merge` argument to the `git log` command will create a log listing the commit conflicts between the branches being merged.

```
git diff

```

The `diff` command helps find differences between repository/file states. It is useful for identifying and preventing merge conflicts.

### Tools for when Git aborts early in a merge

```
git checkout

```

The `checkout` command can be used to _undo_ changes to files or to change branches.

```css
git reset --mixed

```

The `reset` command can be used to undo changes to the working directory or to the staging area.

### Tools for when Git conflicts arise during a merge

```css
git merge --abort

```

When `git merge` is run with the `--abort` option, the merge process will be aborted and the branch will be restored to the state it was in before the merge began.

```
git reset

```

The `git reset` command can be used to resolve conflicts that arise during a merge, to restore a known good state to the conflicting files.

## Summary

Merge conflicts can be scary. Fortunately, Git offers powerful tools for finding and resolving them. Git can handle most merges on its own with its automatic merge features. A conflict occurs when the same line in a file is changed in two branches, or when a file is deleted in one branch and edited in another. Conflicts usually arise when working in a team.

There are many ways to resolve merge conflicts. In this article, we covered quite a few of the command-line tools that Git provides. For more information on these tools, see the individual pages for the `git loganged, 1 insertion(+)

```

This sequence of commands switches to the `main` branch, appends the contents to `merge.txt` and commits it. After that, our experimental repository has two new commits, one in the `main` branch and one in the `new_branch_to_merge_later` branch. Now let's run `git merge new_branch_to_merge_later` and see what happens!

```scss
$ git merge new_branch_to_merge_later
Auto-merging merge.txt
CONFLICT (content): Merge conflict in merge.txt
Automatic merge failed; fix conflicts and then commit the result.

```

BOOM! 💥 There was a conflict. Good thing Git told us about it.

## Identifying Merge Conflicts

As we saw in the example, Git prints a short descriptive message about the CONFLICT that occurred. To get a deeper understanding of the problem, you can run `git status`.

```bash
$ git status
On branch main
You have unmerged paths.
(fix conflicts and run "git commit")
(use "git merge --abort" to abort the merge)

Unmerged paths:
(use "git add <file>..." to mark resolution)

both modified: merge.txt

```

The output of `git status` tells us that the paths could not be merged due to a conflict. The `merge.text` file is now shown as modified. Let's examine this file and see what has changed.

```bash
$ cat merge.txt
<<<<<<< HEAD
this is some content to mess with
content to append
=======
totally different content to merge later
>>>>>>> new_branch_to_merge_later

```

To view the contents of the file `merge.txt`, we use the `cat` command. You can see that the file has some strange new additions:

- `<<<<<<< HEAD`
- `========`
- `>>>>>>> new_branch_to_merge_later`

These new lines can be thought of as "conflict separators". The line `=======` is the "center" of the conflict. All content between this center and the line `<<<<<<< HEAD` is in the current branch main, which is referenced by the `HEAD` pointer. And everything between the center and the line `>>>>>>> new_branch_to_merge_later` is the content of the branch to merge.

## Resolving merge conflicts using the command line

The easiest way to resolve a conflict is to edit the conflicting file. Open the `merge.txt` file in your favorite editor. In our example, we will simply remove all the conflict separators. The modified content of the `merge.txt` file will look like this:

```css
this is some content to mess with
content to append
totally different content to merge later

```

After editing the file, run `git add merge.txt` to add the newly merged content to the staged section. To complete the merge, create a new commit by running the following command:

```bash
git commit -m "merged and resolved the conflict in merge.txt"

```

Git will detect that the conflict is resolved and create a new merge commit to complete the merge procedure.

## Git commands that can be used to resolve merge conflicts

### Common tools

```
git status

```

The status command is often used when working with Git and helps identify files that are in conflict during a merge.

```bash
git log --merge

```

Passing the `--merge` argument to the `git log` command will create a log listing the commit conflicts between the branches being merged.

```
git diff

```

The `diff` command helps find differences between repository/file states. It is useful for identifying and preventing merge conflicts.

### Tools for when Git aborts early in a merge

```
git checkout

```

The `checkout` command can be used to _undo_ changes to files or to change branches.

```css
git reset --mixed

```

The `reset` command can be used to undo changes to the working directory or to the staging area.

### Tools for when Git conflicts arise during a merge

```css
git merge --abort

```

When `git merge` is run with the `--abort` option, the merge process will be aborted and the branch will be restored to the state it was in before the merge began.

```
git reset

```

The `git reset` command can be used to resolve conflicts that arise during a merge, to restore a known good state to the conflicting files.

## Summary

Merge conflicts can be scary. Fortunately, Git offers powerful tools for finding and resolving them. Git can handle most merges on its own with its automatic merge features. A conflict occurs when the same line in a file is changed in two branches, or when a file is deleted in one branch and edited in another. Conflicts usually arise when working in a team.

There are many ways to resolve merge conflicts. In this article, we covered quite a few of the command-line tools that Git provides. For more information on these tools, see the individual pages for the `git log