# wine-down-4-what
# TO DO AFTER REPO IS CREATED
1. Clone master to local
2. Create new branch
	`git checkout -b *BRANCHNAME*`
	### creates branch and moves to it

# WHEN YOU ARE READY TO PUSH TO REPO
1. Perform add and commit
2. Change to master branch
	`git checkout master`
3. Re-pull master from repo
	* git pull origin master
4. Change back to your branch and merge master
	`git checkout *BRANCHNAME*`
	* git merge master
5. Check code for conflicts
6. Once conflicts resolved
	`git push origin *BRANCHNAME*`
	
# ONCE BRANCH HAS BEEN PUSHED
1. On github put in new pull request