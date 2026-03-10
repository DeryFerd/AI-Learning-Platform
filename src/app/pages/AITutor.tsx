import { useState } from "react";
import { Send, Sparkles, Code2, FileText, BarChart3 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export default function AITutor() {
  const [message, setMessage] = useState("");

  const chatHistory = [
    { id: 1, title: "Neural Networks Basics", date: "Today" },
    { id: 2, title: "Backpropagation Explained", date: "Yesterday" },
    { id: 3, title: "CNN Architecture Help", date: "2 days ago" },
    { id: 4, title: "PyTorch vs TensorFlow", date: "1 week ago" },
  ];

  const conversation = [
    {
      role: "assistant",
      content: "👋 Hi! I'm your AI tutor. I can help you understand concepts, debug code, and answer questions about machine learning and deep learning. What would you like to learn about today?",
    },
    {
      role: "user",
      content: "Can you explain the difference between CNN and RNN?",
    },
    {
      role: "assistant",
      content: "Great question! Let me break down the key differences:\n\n**Convolutional Neural Networks (CNNs):**\n- Designed for grid-like data (images, videos)\n- Use convolutional layers to detect spatial patterns\n- Excellent for computer vision tasks\n- Process input in parallel\n\n**Recurrent Neural Networks (RNNs):**\n- Designed for sequential data (text, time series)\n- Have memory of previous inputs\n- Process input sequentially\n- Great for natural language processing\n\nWould you like me to show you a code example of either?",
    },
    {
      role: "user",
      content: "Yes, please show me a simple CNN example",
    },
    {
      role: "assistant",
      content: "Here's a simple CNN for image classification:",
      code: `import torch
import torch.nn as nn

class SimpleCNN(nn.Module):
    def __init__(self, num_classes=10):
        super(SimpleCNN, self).__init__()
        
        # Convolutional layers
        self.conv1 = nn.Conv2d(3, 32, kernel_size=3, padding=1)
        self.conv2 = nn.Conv2d(32, 64, kernel_size=3, padding=1)
        
        # Pooling layer
        self.pool = nn.MaxPool2d(2, 2)
        
        # Fully connected layers
        self.fc1 = nn.Linear(64 * 8 * 8, 512)
        self.fc2 = nn.Linear(512, num_classes)
        
        # Activation and dropout
        self.relu = nn.ReLU()
        self.dropout = nn.Dropout(0.5)
    
    def forward(self, x):
        # Conv layers with pooling
        x = self.pool(self.relu(self.conv1(x)))
        x = self.pool(self.relu(self.conv2(x)))
        
        # Flatten
        x = x.view(-1, 64 * 8 * 8)
        
        # FC layers
        x = self.dropout(self.relu(self.fc1(x)))
        x = self.fc2(x)
        
        return x`,
    },
  ];

  const quickActions = [
    { icon: Sparkles, label: "Explain concept", color: "text-purple-500" },
    { icon: Code2, label: "Fix my code", color: "text-blue-500" },
    { icon: FileText, label: "Generate example", color: "text-green-500" },
    { icon: BarChart3, label: "Visualize model", color: "text-orange-500" },
  ];

  return (
    <div className="flex h-screen bg-background">
      {/* Left Sidebar - Chat History */}
      <aside className="w-64 border-r border-border bg-card p-4">
        <div className="mb-4">
          <h2 className="mb-2">Chat History</h2>
          <Button className="w-full" variant="outline">
            + New Conversation
          </Button>
        </div>

        <div className="space-y-1">
          {chatHistory.map((chat) => (
            <button
              key={chat.id}
              className="w-full rounded-lg p-3 text-left transition-colors hover:bg-muted"
            >
              <div className="mb-1 truncate text-sm">{chat.title}</div>
              <div className="text-xs text-muted-foreground">{chat.date}</div>
            </button>
          ))}
        </div>
      </aside>

      {/* Main Chat Area */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border bg-card px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600">
              <Sparkles className="size-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg">AI Tutor</h1>
              <p className="text-xs text-muted-foreground">
                Powered by GPT-4 • Context-aware learning assistant
              </p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mx-auto max-w-3xl space-y-6">
            {conversation.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-4 ${
                  msg.role === "user" ? "flex-row-reverse" : "flex-row"
                }`}
              >
                {msg.role === "assistant" ? (
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600">
                    <Sparkles className="size-4 text-white" />
                  </div>
                ) : (
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent">
                    <span className="text-xs text-accent-foreground">You</span>
                  </div>
                )}

                <div
                  className={`flex-1 ${
                    msg.role === "user" ? "flex justify-end" : ""
                  }`}
                >
                  <div
                    className={`max-w-2xl rounded-2xl p-4 ${
                      msg.role === "user"
                        ? "bg-accent text-accent-foreground"
                        : "border border-border bg-card"
                    }`}
                  >
                    <p className="whitespace-pre-line text-sm leading-relaxed">
                      {msg.content}
                    </p>
                    {msg.code && (
                      <div className="mt-3 overflow-hidden rounded-lg border border-border bg-[#0d1117]">
                        <div className="border-b border-border bg-[#161b22] px-3 py-2">
                          <span className="text-xs text-muted-foreground">Python</span>
                        </div>
                        <pre className="overflow-x-auto p-3 text-xs">
                          <code className="text-gray-300">{msg.code}</code>
                        </pre>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="border-t border-border bg-card px-6 py-3">
          <div className="mx-auto max-w-3xl">
            <div className="mb-3 flex gap-2">
              {quickActions.map((action, idx) => {
                const Icon = action.icon;
                return (
                  <button
                    key={idx}
                    className="flex items-center gap-2 rounded-lg border border-border bg-muted/30 px-3 py-2 text-sm transition-colors hover:bg-muted"
                  >
                    <Icon className={`size-4 ${action.color}`} />
                    <span>{action.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Input */}
            <div className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask me anything about AI, ML, or deep learning..."
                className="flex-1"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    // Handle send message
                    setMessage("");
                  }
                }}
              />
              <Button size="icon">
                <Send className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Context */}
      <aside className="w-80 border-l border-border bg-card p-6">
        <h3 className="mb-4">Context & Resources</h3>

        <div className="space-y-4">
          <div>
            <h4 className="mb-2 text-sm text-muted-foreground">Current Lesson</h4>
            <div className="rounded-lg border border-border bg-muted/30 p-3">
              <div className="mb-1 text-sm">Backpropagation Algorithm</div>
              <div className="text-xs text-muted-foreground">Deep Learning Course</div>
            </div>
          </div>

          <div>
            <h4 className="mb-2 text-sm text-muted-foreground">Related Documentation</h4>
            <div className="space-y-2">
              <button className="w-full rounded-lg border border-border bg-muted/30 p-3 text-left transition-colors hover:bg-muted">
                <div className="mb-1 flex items-center gap-2 text-sm">
                  <FileText className="size-4 text-blue-500" />
                  <span>CNN Architecture Guide</span>
                </div>
                <div className="text-xs text-muted-foreground">Official documentation</div>
              </button>
              <button className="w-full rounded-lg border border-border bg-muted/30 p-3 text-left transition-colors hover:bg-muted">
                <div className="mb-1 flex items-center gap-2 text-sm">
                  <Code2 className="size-4 text-green-500" />
                  <span>PyTorch Examples</span>
                </div>
                <div className="text-xs text-muted-foreground">Code samples</div>
              </button>
            </div>
          </div>

          <div>
            <h4 className="mb-2 text-sm text-muted-foreground">Recent Code Snippets</h4>
            <div className="overflow-hidden rounded-lg border border-border bg-[#0d1117]">
              <div className="border-b border-border bg-[#161b22] px-3 py-2">
                <span className="text-xs text-muted-foreground">From your lab</span>
              </div>
              <pre className="overflow-x-auto p-3 text-xs">
                <code className="text-gray-300">{`model.compile(
  optimizer='adam',
  loss='categorical_crossentropy',
  metrics=['accuracy']
)`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="mb-2 text-sm text-muted-foreground">Suggested Topics</h4>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-accent/20 px-3 py-1 text-xs text-accent">
                Activation Functions
              </span>
              <span className="rounded-full bg-accent/20 px-3 py-1 text-xs text-accent">
                Optimizers
              </span>
              <span className="rounded-full bg-accent/20 px-3 py-1 text-xs text-accent">
                Regularization
              </span>
              <span className="rounded-full bg-accent/20 px-3 py-1 text-xs text-accent">
                Batch Normalization
              </span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
