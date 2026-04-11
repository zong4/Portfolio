# 🚀 GitHub Pages 部署指南

## 📋 部署前准备

### 1. 确保你有 GitHub 账号
访问 [github.com](https://github.com) 注册或登录。

### 2. 安装 Git
如果还没有安装 Git，请访问 [git-scm.com](https://git-scm.com/) 下载安装。

### 3. 确认项目文件完整 ✅
项目已包含所有必需文件：
- ✅ `index.html` - Vite 入口文件（必需）
- ✅ `src/main.tsx` - React 应用入口
- ✅ `public/.nojekyll` - 禁用 Jekyll 处理
- ✅ `.github/workflows/deploy.yml` - 自动部署配置

---

## 🎯 推荐方法：自动部署（GitHub Actions）

### 步骤 1：创建 GitHub 仓库

1. 登录 GitHub
2. 点击右上角 "+" → "New repository"
3. 填写仓库信息：
   - **Repository name**: `portfolio` 或其他你喜欢的名字
   - **Public/Private**: 选择 Public（免费）
   - **不要**勾选 "Add a README file"
4. 点击 "Create repository"

### 步骤 2：配置部署基础路径

在 `vite.config.ts` 文件中，根据你的仓库类型配置 `base`：

**情况 A：使用用户页面 (username.github.io)**
- 仓库名必须是 `username.github.io`
- 保持 `base: '/'`

**情况 B：使用项目页面 (username.github.io/portfolio)**
- 仓库名可以是任意名称（如 `portfolio`）
- 修改 `base: '/portfolio/'`（替换为你的仓库名）

```typescript
export default defineConfig({
  base: '/portfolio/',  // 👈 修改这里
  // ...其他配置
})
```

### 步骤 3：推送代码到 GitHub

在项目根目录打开终端，执行：

```bash
# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 创建首次提交
git commit -m "Initial commit: Portfolio website"

# 重命名分支为 main
git branch -M main

# 添加远程仓库（替换 YOUR_USERNAME 和 YOUR_REPO）
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# 推送到 GitHub
git push -u origin main
```

### 步骤 4：启用 GitHub Pages

1. 在 GitHub 仓库页面，点击 "Settings"
2. 左侧菜单找到 "Pages"
3. 在 "Build and deployment" 部分：
   - **Source**: 选择 "GitHub Actions"
4. 保存后，GitHub 会自动检测到 `.github/workflows/deploy.yml` 文件

### 步骤 5：等待部署完成

1. 点击仓库的 "Actions" 标签
2. 查看部署进度（第一次部署大约需要 2-3 分钟）
3. 部署成功后，访问：
   - 用户页面：`https://YOUR_USERNAME.github.io/`
   - 项目页面：`https://YOUR_USERNAME.github.io/YOUR_REPO/`

---

## 🔄 后续更新网站

每次修改后，只需：

```bash
git add .
git commit -m "描述你的修改"
git push
```

GitHub Actions 会自动重新部署！

---

## 🛠️ 备选方法：手动部署

### 步骤 1：安装 gh-pages

```bash
pnpm add -D gh-pages
```

### 步骤 2：修改 vite.config.ts

同上面的步骤 2。

### 步骤 3：初始化并推送

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 步骤 4：部署

```bash
pnpm run deploy
```

### 步骤 5：配置 GitHub Pages

1. 进入 Settings → Pages
2. Source 选择 "Deploy from a branch"
3. Branch 选择 `gh-pages` 和 `/ (root)`
4. 保存

---

## ❓ 常见问题

### 1. 部署后页面空白

**原因**：`base` 配置不正确

**解决**：
- 检查 `vite.config.ts` 中的 `base` 值是否与仓库名匹配
- 项目页面必须设置 `base: '/仓库名/'`
- 用户页面必须设置 `base: '/'`

### 2. 图片或资源 404

**原因**：资源路径问题

**解决**：
- 确保图片放在 `src/imports/` 目录
- 使用相对导入：`import image from '../../imports/image.png'`

### 3. PDF 无法打开

**原因**：PDF 文件未被正确处理

**解决**：
- 确保 PDF 导入时使用 `?url` 后缀
- 例如：`import pdf from './file.pdf?url'`

### 4. GitHub Actions 部署失败

**解决步骤**：
1. 检查 Actions 标签页的错误日志
2. 确认 Settings → Pages → Source 设置为 "GitHub Actions"
3. 确认 `.github/workflows/deploy.yml` 文件存在

---

## 🎨 自定义域名（可选）

### 1. 购买域名

从域名注册商（如 Namecheap、GoDaddy）购买域名。

### 2. 添加 CNAME 文件

在 `public/` 目录创建 `CNAME` 文件（无扩展名），内容为你的域名：

```
yourdomain.com
```

### 3. 配置 DNS

在域名注册商的 DNS 设置中添加：

**A 记录**：
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**或 CNAME 记录**（针对子域名）：
```
www  →  YOUR_USERNAME.github.io
```

### 4. GitHub 设置

1. Settings → Pages → Custom domain
2. 输入你的域名
3. 勾选 "Enforce HTTPS"
4. 等待 DNS 生效（可能需要 24-48 小时）

---

## 📞 获取帮助

- GitHub Pages 文档：https://docs.github.com/pages
- Vite 部署指南：https://vitejs.dev/guide/static-deploy.html
- 遇到问题可以在 GitHub Issues 中提问

---

祝你部署顺利！🎉
