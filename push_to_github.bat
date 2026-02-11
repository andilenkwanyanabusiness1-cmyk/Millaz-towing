@echo off
echo Adding changes...
git add .
echo Committing changes...
set /p commit_msg="Enter commit message: "
git commit -m "%commit_msg%"
echo Pushing to GitHub...
git push origin main
echo.
echo Done!
pause
