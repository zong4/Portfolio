# Zong's Portfolio

个人游戏设计与开发作品集网站。

## 技术栈

- React 18
- TypeScript
- Vite
- Tailwind CSS v4
- Motion (Framer Motion)
- React Router

## 本地开发

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

访问 `http://localhost:5173` 查看网站。

### 构建生产版本

```bash
pnpm build
```

构建输出在 `dist/` 目录。

### 预览生产版本

```bash
pnpm preview
```

## 部署到 GitHub Pages

### 方法一：自动部署（推荐）

1. **推送代码到 GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **在 GitHub 仓库中启用 GitHub Pages**
   - 进入仓库的 Settings → Pages
   - Source 选择 "GitHub Actions"
   - 保存设置

3. **触发部署**
   - 每次推送到 `main` 分支会自动触发部署
   - 或在 Actions 标签页手动触发 workflow

4. **配置自定义域名（可选）**
   - 如果使用项目仓库 (username.github.io/repo-name)，需要修改 `vite.config.ts` 中的 `base` 为 `'/repo-name/'`
   - 如果使用用户/组织页面 (username.github.io)，保持 `base: '/'`

### 方法二：手动部署

1. **安装 gh-pages 工具**
   ```bash
   pnpm add -D gh-pages
   ```

2. **构建并部署**
   ```bash
   pnpm run deploy
   ```

   这会自动构建项目并推送到 `gh-pages` 分支。

3. **配置 GitHub Pages**
   - 进入仓库的 Settings → Pages
   - Source 选择 "Deploy from a branch"
   - Branch 选择 `gh-pages` 和 `/ (root)`
   - 保存设置

## 项目结构

```
项目根目录/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions 自动部署
├── public/
│   ├── .nojekyll          # GitHub Pages 配置
│   └── vite.svg           # 网站图标
├── src/
│   ├── app/
│   │   ├── components/    # React 组件
│   │   ├── pages/        # 页面组件
│   │   └── routes.ts     # 路由配置
│   ├── imports/          # 静态资源（图片、PDF等）
│   ├── styles/           # 样式文件
│   └── main.tsx          # React 应用入口
├── index.html            # Vite 入口文件（必需）
├── vite.config.ts        # Vite 配置
├── package.json          # 项目依赖
└── deploy.sh            # 快速部署脚本
```

## 配置说明

### 粒子效果配置

在 `src/app/components/MouseParticles.tsx` 中可以调整：

- **粒子数量**：`particleCount`（第 33 行）
- **移动速度**：`speedMultiplier`（第 35 行）
- **粒子大小**：`particleSizeRange` 和 `particleMinSize`（第 39-40 行）

### 个人信息修改

在 `src/app/pages/Home.tsx` 中：

- **座右铭**：第 452 行
- **项目信息**：第 42 行开始的 `games` 数组
- **联系方式**：在各个卡片和 Footer 组件中

## 许可证

© 2026 Zong. All rights reserved.
