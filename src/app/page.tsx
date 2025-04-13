"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [mode, setMode] = useState<'normal' | 'structural'>('normal');
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGeneratePrompt = async () => {
    if (!prompt.trim()) return;
    
    setLoading(true);
    setResult("");
    
    try {
      // 这里模拟API调用
      // 实际应用中，这里会调用OpenAI API或者其他AI服务
      setTimeout(() => {
        const sampleResults = {
          normal: `改进的提示词：${prompt}\n\n请详细描述你需要的内容，包括风格、长度、格式和任何特定要求。提供相关背景信息和目标受众。`,
          structural: `# 结构化提示词\n## 背景\n${prompt}\n\n## 任务\n详细描述任务\n\n## 格式\n指定输出格式\n\n## 限制\n字数和其他限制\n\n## 示例\n参考示例`
        };
        
        setResult(mode === 'normal' ? sampleResults.normal : sampleResults.structural);
        setLoading(false);
      }, 1500);
    } catch (error) {
      console.error("Error generating prompt:", error);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-6xl font-bold text-primary mb-6">Promptate</h1>
      
      <p className="text-xl text-center max-w-3xl mb-10 text-gray-700">
        解锁您的创造力，使用终极AI提示词生成器。为您的写作、艺术或任何创意活动创建出色的提示词。
      </p>
      
      <div className="flex space-x-4 mb-8">
        <Button 
          variant={mode === 'normal' ? 'default' : 'outline'} 
          onClick={() => setMode('normal')}
          className="rounded-full px-8"
        >
          Normal
        </Button>
        <div className="relative">
          <Button 
            variant={mode === 'structural' ? 'default' : 'outline'} 
            onClick={() => setMode('structural')}
            className="rounded-full px-8"
          >
            Structural
          </Button>
          <span className="absolute -right-2 -top-2 bg-pink-400 text-white text-xs px-2 py-0.5 rounded-full">
            Beta
          </span>
        </div>
      </div>
      
      <div className="w-full max-w-3xl">
        <Textarea
          placeholder="在此输入您的提示词..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="min-h-[200px] mb-4 bg-white"
        />
        
        <div className="flex justify-end">
          <Button 
            onClick={handleGeneratePrompt} 
            disabled={loading || !prompt.trim()}
          >
            {loading ? "生成中..." : "生成提示词"}
          </Button>
        </div>
        
        {result && (
          <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">生成结果</h2>
            <div className="whitespace-pre-wrap">
              {result}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 