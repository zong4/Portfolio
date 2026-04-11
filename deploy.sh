#!/bin/bash

# 部署脚本
# 使用方法: ./deploy.sh

echo "🚀 开始部署到 GitHub Pages..."

# 检查是否是 git 仓库
if [ ! -d .git ]; then
    echo "❌ 错误：当前目录不是 git 仓库"
    echo "请先运行："
    echo "  git init"
    echo "  git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git"
    exit 1
fi

# 检查是否有未提交的更改
if [[ -n $(git status -s) ]]; then
    echo "📝 检测到未提交的更改，正在提交..."
    git add .

    # 提示输入提交信息
    read -p "请输入提交信息 (默认: Update): " commit_msg
    commit_msg=${commit_msg:-"Update"}

    git commit -m "$commit_msg"
else
    echo "✅ 没有新的更改需要提交"
fi

# 推送到 GitHub
echo "📤 推送到 GitHub..."
git push origin main

echo "✨ 完成！"
echo "GitHub Actions 将自动部署你的网站"
echo "请访问 GitHub 仓库的 Actions 标签查看部署进度"
