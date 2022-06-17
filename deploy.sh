#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# add git submodule
git add dist -f

git status

git commit -m "deploy"

# push code to github pages
git subtree push --prefix dist origin gh-pages

cd -