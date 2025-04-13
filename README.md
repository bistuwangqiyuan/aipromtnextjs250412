# Promptate 克隆项目

这是一个使用Next.js和Supabase构建的Promptate网站克隆版本。

## 主要功能

- 提示词生成器
- AI聊天界面
- PromptCoder链接（外部子站点）

## 技术栈

- Next.js 14 (App Router)
- React
- TypeScript
- Tailwind CSS
- Shadcn UI
- Supabase (用于数据库和认证)
- OpenAI API (用于AI功能)

## 如何开始

### 环境变量

创建`.env.local`文件并添加以下变量:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
OPENAI_API_KEY=your_openai_api_key
```

### 安装依赖

```bash
npm install
```

### 运行开发服务器

```bash
npm run dev
```

### 构建项目

```bash
npm run build
```

## 项目结构

- `/src/app` - Next.js App Router路由和页面
- `/src/components` - 可复用UI组件
- `/src/lib` - 工具函数和Supabase客户端
- `/src/styles` - 全局样式

## 数据库结构

Supabase数据库包含以下主要表:

- `users` - 用户信息
- `prompts` - 存储用户生成的提示词
- `chat_messages` - 存储用户与AI的聊天历史

## 部署

该项目可以部署到Vercel等平台,只需连接到GitHub仓库并设置环境变量。 