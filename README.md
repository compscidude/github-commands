Github Commands
=============

This repository will be used to become familiar with Git commands.


1) This will initialize the folder we want to upload to our repository
> git init 

2) Add every file and folders to our initial area
> git add . 

3) makes a temporary commit to our repository
> git commit -m "initial commit"

4) This remotely add our work to our github repository 
> git remote add origin (repository link)

5) Finally commit our work to the repository
> git push -u origin master


To add new changes to the repository, the following three commands are required.

> git add . 

> git commit -m "new commit"

> git push -u origin master


Forking
=============
To make your own version of someone else's work, the best option is to "Fork".
This creates a new repository in your github with all the files from the original repository.
Any subsequent commits will now directly affect the newly created folder.

After you've clicked the fork icon on the top right side of the webpage, you need to clone the files to your folder using the following command.
  git clone https://github.com/MY_USERNAME/REPOSITORY.git
