#!/bin/bash

# 删除远程origin仓库中除了main分支之外的所有分支
# 使用方法: ./delete_remote_branches.sh

set -e  # 遇到错误时停止执行

echo "🔍 正在获取远程分支列表..."

# 获取所有远程分支，排除main分支
remote_branches=$(git branch -r | grep "origin/" | grep -v "origin/main" | grep -v "origin/HEAD" | sed 's/origin\///' | xargs)

if [ -z "$remote_branches" ]; then
    echo "✅ 没有找到除main外的其他远程分支"
    exit 0
fi

echo "📋 以下远程分支将被删除："
branch_count=0
for branch in $remote_branches; do
    echo "  - $branch"
    ((branch_count++))
done

echo ""
echo "📊 总计: $branch_count 个远程分支"
echo ""
read -p "⚠️  确认要删除这些远程分支吗？(y/N): " confirm

if [[ $confirm =~ ^[Yy]$ ]]; then
    echo "🗑️  开始删除远程分支..."

    for branch in $remote_branches; do
        echo "正在删除: origin/$branch"
        git push origin --delete "$branch"
    done

    echo "✅ 所有远程分支删除完成！"
    echo "🧹 正在清理本地远程分支引用..."
    git remote prune origin

    echo "🎉 操作完成！"
else
    echo "❌ 操作已取消"
    exit 1
fi
