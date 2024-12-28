---
tags:
  - Git
---
## Branches in Git

**A branch in Git** is a set of commits arranged in chronological order. Each branch has its own name. The main branch is most often called master, it appears when the repository is initialized and is considered the main branch of the project. You name other branches yourself. Additional branches are used to create new functionality and fix bugs. That is, all changes in the project are created in a separate branch, and then this branch is merged with the main one.

## What is a branch in Git

The `git branch` command is needed to work with branching in Git. With it, you can create new branches, as well as view, rename and delete existing ones.

## How to create a new branch in Git

To create a new branch, enter the command:

```bash
git branch new-branch
```

where **new-branch** is the name of the new branch.

When you use this command, you create a new branch, but you do not switch to it.

## How to switch to a branch in Git

To switch to a new branch, use the command:

```bash
git checkout your-branch
```

where **your-branch** is the name of the branch you want to switch to.

## How to create a new branch and switch to it

As a rule, when creating a new branch, the user immediately needs to switch to it. In this case, you can use the command:

```bash
git checkout branch new-branch
```

where **new-branch** is the name of the new branch.

Or you can enter the git checkout command with the -b switch:

```bash
git checkout -b new-branch
```

where **new-branch** is the name of the new branch.

## Merging branches

Branching allows you to separate the finished code of the project from the functionality that is under development and testing. When the developer has completed the task, the branch with the new code must be merged with the main one. This can be done using the git merge command. To merge the code into the main branch:

- **Go to the master branch:**
```bash
git checkout master
```

- **Update the local branch from the server:**
```
git pull origin master
```

- **Run the command:**
```bash
git merge merged-branch
```

where **merged-branch** is the name of the branch being merged. The branch being merged is the one
from which the changes are taken.

The git merge command takes all the data from the merged branch and adds it to the main one. After the merge procedure, the merged branch does not change, all the data in it remains as before.

Conflicts may arise when merging branches. Conflicts most often occur when two people make changes to the same line in a file, or when one user deletes a file that another user is editing. In such cases, Git interrupts the command execution so that you can resolve the conflict.

The following options are used to work with conflicts:

- **--continue** — allows you to continue merging after resolving the conflict,
- **--abort** — interrupts the merge process and returns the branch to its initial state.

To resolve a merge conflict when changing lines, you need to edit the file in which the conflict occurred. You need to remove the conflict markers and leave the changes that should be in the final version. To resolve a conflict with file deletion, you need to decide whether to return the deleted file to the repository or permanently delete it.

## How to manage branches with git branch

To list existing branches, use the command:

```bash
git branch
```

Your current branch will be marked with a * and highlighted in green.

To see the last saved commit in each branch, use the command:

```bash
git branch -v
```

To list branches that have been merged into the current branch, use the command:

```bash
git branch --merged
```

To list branches that have not yet been merged into the current branch, use the command:

```bash
git branch --no-merged
```

## How to commit changes to a new branch

After making changes to a new branch, you need to commit the code to save it. To do this, use the commands:

```bash
git add .
```

```bash
git commit -m "<comment>"
```

## How to push changes to a remote repository

To push a local branch to a remote repository, use the command:

```bash
git push origin your-branch
```

where **your-branch** is the name of the branch you want to push.

## How to rename a branch in Git

To rename the branch you are on, use the command:

```bash
git branch -m new-name
```

where **new-name** is the new name of the branch.

If you need to rename another branch, use the command:

```bash
git branch -m old-name new-name
```

where:

- **old-name** is the old branch name,
- **new-name** is the new branch name.

If you push the renamed branch to the remote repository, a branch with a new name will appear, but the branch with the old name will not disappear. Therefore, the branch with the old name must be removed from the remote repository:

```bash
git push origin :old-name
```

where **old-name** is the old branch name.

Then you need to push the new branch to the remote repository and set up a local branch to track the remote branch:

```bash
git push --set-upstream origin new-name
```

where **new-name** is the new branch name.

## How to delete a branch in Git

To delete a local branch in Git, use the command:

```bash
git branch -d your-branch
```

where **your-branch** is the name of the branch you want to delete.

You can't delete the branch you're currently on. So before deleting, you need to switch to another branch, for example, master. You can do this with the command:

```bash
git checkout master
```

If the branch has unsaved changes, you won't be able to delete it using the -d switch. This is how Git protects users from accidental data loss. If you are sure that you do not need the changes you made and the data can be deleted, use the command:

```bash
git branch -D your-branch
```

where **your-branch** is the name of the branch you want to delete.

This command will forcefully delete the specified branch.

## How to view the states of branch files

If you switch to another branch without committing first, all uncommitted changes will be transferred to the branch you switched to. Therefore, before switching, you need to check whether you have committed the changes in the current branch. You can do this using the command:

```bash
git status
```

This command shows the current state of your repository. If all changes are committed, you will see the following:

```bash
On branch master
nothing to commit, working tree clean
```

If you created, edited, or deleted files and did not commit the changes, the output will be something like this:

```bash
On branch master
Changes not staged for commit:

(use "git add <file>..." to update what will be committed)
(use "git restore <file>..." to discard changes in working directory)
modified: file.txt

Untracked files:
(use "git add <file>..." to include in what will be committed)
file1.txt
```

In this case, all necessary changes need to be committed.

## How to view commit history

To view commit history, use the command:

```bash
git log
```

To get more specific output, you can use the options:

- `--author="your-name"` — shows commits created by the specified user;
- `--after="date"` — shows commits created after the specified date;
- `--before="date"` — shows commits created before the specified date;
- `-n` — shows the last n commits;
- `--oneline` — shows a shortened output of commits (on one line). It outputs only the hash and the title;
- `-p` — outputs the changes contained in the commit.

This is only part of the options. The full list can be viewed using the command:

```bash
git log --help
```

## How to view the difference between commits

To view the changes in files compared to the last commit, use the command:

```bash
git diff
```

To compare the changes in two different commits, use the command:

```bash
git diff <commit1_hash> <commit2_hash>
```