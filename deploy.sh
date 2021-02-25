#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
cd dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'
git branch -M main
# 如果发布到 https://<USERNAME>.github.io
# git remote add origin https://github.com/Ruler1020730/blog.git
git push -f https://github.com/Ruler1020730/blog.git main
# git push -f git@github.com:Ruler1020730/Ruler1020730/blog.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -