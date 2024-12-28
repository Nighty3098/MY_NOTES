---
tags:
  - nvim
---
![[Pasted image 20241224175947.png]]

# Neovim keyboard shortcuts

## General keyboard shortcuts

- **`jk`**: Exit insert mode.
- **`<leader>nh`**: Clear search highlighting.
- **`x`**: Delete one character without copying to register.
- **`<leader>+`**: Increase number under cursor.
- **`<leader>-`**: Decrease number under cursor.

## Window management

- **`<leader>sv`**: Split window vertically.
- **`<leader>sh`**: Split window horizontally.
- **`<leader>se`**: Make split windows equal in size.
- **`<leader>cs`**: Close current split window.
- **`<leader>nt`**: Open a new tab.
- **`<leader>ct`**: Close the current tab.
- **`<leader>tn`**: Go to the next tab.
- **`<leader>tp`**: Go to the previous tab.

## Plugins

### LSP (Language Server Protocol)

- **`gR`**: Show definition references.
- **`gD`**: Go to declaration.
- **`gd`**: Show LSP definitions.
- **`gi`**: Show LSP implementations.
- **`gt`**: Show typical LSP definitions.
- **`<leader>ca`**: Show available code actions (in visual mode, apply to selection).
- **`<leader>rn`**: Smart rename.
- **`<leader>D`**: Show diagnostics for file.
- **`<leader>d`**: Show diagnostics for line.
- **`[d`**: Go to previous diagnostic in buffer.
- **`]d`**: Go to next diagnostic in buffer.
- **`K`**: Show documentation for element under cursor.
- **`<leader>rs`**: Restart LSP if needed.

### Buffer management

- **`<A-1>` - `<A-9>`**: Go to matching buffer (1-9).
- **`<A-0>`**: Go to buffer 0.

### vim-maximizer

- **`<leader>mt`**: Toggle split window maximization.

### Neo Tree

- **`<leader>e`**: Toggle file explorer.
- **`<leader>ef`**: Open file explorer in popup.
- **`<leader>ec`**: Close file explorer.
- **`<leader>eg`**: Open file explorer with git status.

### Tagbar

- **`<leader>t`**: Toggle Tagbar.

### Terminal

- **`<leader>ot`**: Open terminal.

### Telescope

- **`<leader>ff`**: Find files in current working directory.
- **`<leader>fw`**: Find string in current working directory.
- **`<leader>fs`**: Find string under cursor in current working directory.
- **`<leader>fb`**: Show open buffers.
- **`<leader>fh`**: Show available help tags.

### Git commands in Telescope

- **`<leader>gc`**: Show all git commits.
- **`<leader>gbc`**: Show git commits for the current file/buffer.
- **`<leader>gb`**: Show git branches.
- **`<leader>gs`**: Show current changes by file.

### Sessions

- **`<leader>wr`**: Restore the last session for the current directory.
- **`<leader>ws`**: Save the session for the current working directory.

### Harpoon

- **`<leader>hm`**: Tag a file with Harpoon.
- **`<leader>hn`**: Jump to the next Harpoon tag.
- **`<leader>hp`**: Jump to the previous Harpoon label.

### Themes

- **`<leader>tt`**: Switch theme using Themery.

### Diagnostics

- **`<leader>ch`**: Show diagnostics for the current line.

### Select all text

- **`<C-a>`**: Select all text in the buffer.

### Additional keyboard shortcuts

- **`<C-n>`**: Jump to the next word.
- **`<C-m>`**: Save file.
- **`<C-c>`**: Copy selected text to the system buffer.
- **`<C-v>`**: Paste text from the system buffer.