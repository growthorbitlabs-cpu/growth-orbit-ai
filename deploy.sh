#!/data/data/com.termux/files/usr/bin/bash

echo "Copying files..."

cp -f /storage/emulated/0/"Growth orbit ai"/Index.html index.html
cp -f /storage/emulated/0/"Growth orbit ai"/Style.css style.css
cp -f /storage/emulated/0/"Growth orbit ai"/Script.js script.js

echo "Git Status..."
git status

echo ""
echo "Files copied successfully."
echo "Now run:"
echo "git add ."
echo "git commit -m \"Your message\""
echo "git push"
