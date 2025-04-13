"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "嗨，我是Aurora AI，一位专业的提示词工程师，今天我能帮您什么？"
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // 添加用户消息
    const newMessages = [
      ...messages,
      { role: "user", content: input } as Message
    ];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      // 模拟API调用
      setTimeout(() => {
        const botReply: Message = {
          role: "assistant",
          content: `感谢您的提问！关于"${input}"的提示词建议是：\n\n尝试更具体地描述您想要的输出格式、风格和内容。提供一些背景信息和目标受众。`
        };
        setMessages([...newMessages, botReply]);
        setLoading(false);
      }, 1500);
    } catch (error) {
      console.error("Error sending message:", error);
      setLoading(false);
    }
  };

  const handleClearHistory = () => {
    setMessages([
      {
        role: "assistant",
        content: "嗨，我是Aurora AI，一位专业的提示词工程师，今天我能帮您什么？"
      }
    ]);
  };

  return (
    <div className="max-w-4xl mx-auto flex flex-col h-[calc(100vh-200px)]">
      <div className="flex justify-end mb-2">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleClearHistory}
          className="text-sm"
        >
          清除历史
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto bg-white rounded-md p-4 mb-4">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`mb-4 ${
              message.role === "user" ? "pl-10" : "pr-10"
            }`}
          >
            <div 
              className={`flex items-start gap-2 ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {message.role === "assistant" && (
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm">
                  AI
                </div>
              )}
              <div 
                className={`p-3 rounded-lg ${
                  message.role === "user" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                <div className="whitespace-pre-wrap">{message.content}</div>
              </div>
              {message.role === "user" && (
                <div className="flex-shrink-0 w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center text-sm">
                  You
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="输入您的提示词问题..."
          className="resize-none"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSendMessage();
            }
          }}
        />
        <Button 
          onClick={handleSendMessage} 
          disabled={loading || !input.trim()}
          className="h-auto"
        >
          发送
        </Button>
      </div>
    </div>
  );
} 