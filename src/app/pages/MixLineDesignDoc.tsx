import { motion } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

const markdownContent = `
# MixLine 设计文档

## 概述

MixLine 是一款双人合作解谜游戏，受《双人成行》启发。玩家 A 只能控制手臂进行抓取、攀爬等动作，玩家 B 只能控制双脚进行行走、跳跃等移动。两位玩家必须紧密配合才能完成各种挑战。

## 核心玩法

### 玩家能力分工

**玩家 A（手臂玩家）**
- 抓取和拾取物品
- 攀爬墙壁、梯子
- 拉动机关和开关
- 投掷物品
- **限制**：无法移动位置，只能在原地使用手臂

**玩家 B（脚玩家）**
- 行走和跑步
- 跳跃和躲避
- 踩踏机关
- 承载手臂玩家移动
- **限制**：无法与物品和机关交互

### 合作机制

玩家必须通过以下方式合作：

1. **搭载移动**：脚玩家背着手臂玩家移动，让手臂玩家能够到达高处或远处的物体
2. **接力传递**：手臂玩家抓取物品，脚玩家移动到目标位置，手臂玩家再次投放
3. **同步操作**：某些机关需要两人同时触发（一个踩踏，一个拉动）
4. **动态配合**：脚玩家跳跃时，手臂玩家需要及时抓住平台边缘

## 关卡设计

### 关卡类型

**教学关卡**
- 分别教学两位玩家的基础操作
- 引入简单的合作机制
- 逐步增加难度

**解谜关卡**
- 环境谜题：利用场景元素和机关
- 时序谜题：需要精确的时间配合
- 空间谜题：利用 3D 空间的高度和距离

**平台挑战**
- 需要精准的跳跃和抓取配合
- 移动平台和时间限制
- 考验反应速度和沟通能力

### 核心谜题示例

**谜题 1：跨越深渊**
- 两侧有开关，需要同时触发才能降下桥梁
- 脚玩家踩踏一侧，手臂玩家拉动另一侧
- 需要交流和同步

**谜题 2：升降平台**
- 手臂玩家需要拉动绳索控制平台高度
- 脚玩家站在平台上到达高处
- 到达后脚玩家需要踩踏机关帮助手臂玩家

**谜题 3：传送物品**
- 手臂玩家抓取钥匙
- 脚玩家背着手臂玩家移动到门前
- 手臂玩家使用钥匙开门

## 美术风格

- 采用简约的低多边形风格
- 明亮的配色，营造轻松氛围
- 清晰的视觉引导，突出可交互物体

## 技术实现

### 物理系统
- 角色关节物理模拟
- 抓取和承载的物理反馈
- 环境碰撞检测

### 网络同步
- 低延迟的玩家位置同步
- 交互状态的即时同步
- 掉线重连机制

## 开发进度

### 第一阶段（已完成）
- ✅ 基础角色控制系统
- ✅ 手臂抓取机制
- ✅ 脚部移动系统

### 第二阶段（进行中）
- 🔄 搭载移动系统
- 🔄 核心谜题原型
- 🔄 网络同步优化

### 第三阶段（计划中）
- 📋 完整关卡流程
- 📋 音效和配乐
- 📋 UI/UX 优化

## 设计理念

MixLine 强调**玩法驱动**的设计哲学。通过将玩家能力极端化（一个只有手臂，一个只有脚），迫使玩家必须沟通和配合，创造独特的合作体验。每个谜题都围绕"分工合作"这一核心主题设计，让玩家体会到团队协作的乐趣。
`;

export function MixLineDesignDoc() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-violet-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-950 dark:to-purple-950">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="prose prose-lg dark:prose-invert max-w-none bg-card/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-border/50">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="text-4xl font-bold mb-6 text-foreground border-b-2 border-primary/20 pb-4">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-3xl font-semibold mt-8 mb-4 text-foreground">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-2xl font-semibold mt-6 mb-3 text-foreground">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside space-y-2 mb-4 text-muted-foreground">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="ml-4">{children}</li>
                ),
                code: ({ children }) => (
                  <code className="bg-muted px-2 py-1 rounded text-sm font-mono text-primary">
                    {children}
                  </code>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-foreground">
                    {children}
                  </strong>
                ),
              }}
            >
              {markdownContent}
            </ReactMarkdown>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
