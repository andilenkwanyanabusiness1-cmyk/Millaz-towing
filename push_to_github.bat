@echo off
echo Initializing Git repository...
git init
git add .
git commit -m "Initial commit of Millaz Towing website with UI/UX overhaul"
echo.
echo Adding remote origin...
git remote add origin https://github.com/andilenkwanyanabusiness1-cmyk/Millaz-towing.git
echo.
echo Pushing to GitHub...
git branch -M main
git push -u origin main
echo.
echo Done! If you see errors above, ensure Git is installed.
pause
