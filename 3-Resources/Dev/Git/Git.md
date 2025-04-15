---
tags:
  - Git
---
### **Installation**

Go to [git-scm.com](https://git-scm.com/downloads) and choose how to install Git for your operating system. For Windows, you can download the download file and install Git as a regular program. You don't need to change the basic settings.

It's convenient to install Git on macOS and Linux via the Terminal program. If you have Linux, find out the name of your distribution. If macOS, install the [Homebrew](https://brew.sh/ru/) package manager. Then enter the download command.

```bash
# Install Git on macOS
$ brew install git

# Install Git on popular Linux distributions
# Fedora
yum install git

# Debian/Ubuntu
apt-get install git

# OpenSUSE
zypper install git
```
If you have macOS and Linux, stay in the Terminal. If you have Windows, open the Git Bash program, which will be installed along with the Git system.

Enter the command in the console and check the installation of Git. You should see the version number that is downloaded to your system. Sometimes, instead of the version number, an error message is displayed: Unsupported command: git. This means that Git could not be installed and the process must be repeated.

```bash
# Command to check Git installation
git --version
```

![](https://skillbox.ru/upload/setka_images/11495616052024_6caf85fa09e0642959e62c753d9a2f18236eb1da.jpg)

Install Git on Windows and check the current version number via Git Bash

### **Setup**

After installing Git, you need to perform its initial setup. To do this, you need to specify your first name, last name, and email. This data is visible in commits, and other developers will know when you made changes to the project.

```bash
# Command to specify first and last name
git config --global user.name "Name Surname"

# Command to specify email
git config --global user.email "your@email"

# Command to check settings
git config --list
```

![](https://skillbox.ru/upload/setka_images/11495416052024_c0c954a3a268bfc515e88839a41a25de5bd1b194.jpg)

Configuring a test Git configuration on Windows via Git Bash

### **Creating a repository**

Once Git is configured, you can create a project. To do this, run a few commands: create a new folder, go into it and initialize the repository.

If the repository is successfully initialized, then you will have a hidden folder .git in your project. In this folder, the Git system will store meta information that is necessary for work. This is your local repository.

```bash
# Create a new folder
mkdir project_name
# Go to the created folder
cd project_name
# Initialize the local repository
git init
# Check the list of open and hidden files and folders
ls -a
```

![](https://skillbox.ru/upload/setka_images/11495516052024_cece785eb92cd643f5e788e5f37e3d933a76f56c.jpg)

Create a repository in the Windows system via Git Bash

Let's check the repository operation. To do this, create a new file and commit it — save it in our local repository. Necessary commands:

```bash
# Create a text file
echo "# Test message" >> test.txt

# Prepare the text file for commit
git add .
# Make a commit and save the file in the repository
git commit -m "My first commit"
```

![](https://skillbox.ru/upload/setka_images/11495416052024_2229e417950c39bd1ac90259b6c781a232a40430.jpg)

Save the file in the local repository via Git Bash

Enter the git log command and look at the log. You should see information about the commit made. You will see the date of the changes, the author's first and last name, email, message text, and [hash](https://skillbox.ru/media/code/kheshfunktsiya-chto-eto-dlya-chego-nuzhna-i-kak-rabotaet/?utm_source=media&utm_medium=link&utm_campaign=all_all_media_links_links_articles_all_all_skillbox) commit. Now if you continue developing, you can go back at any time and see what state the project was in at the first commit stage.

![](https://skillbox.ru/upload/setka_images/11495416052024_71b97f3681cfd481f98f8279e17d064ae63ea66a.jpg)