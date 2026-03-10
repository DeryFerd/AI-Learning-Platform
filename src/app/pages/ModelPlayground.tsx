import { useState } from "react";
import { Sparkles, Settings2, Copy, RefreshCw, Download } from "lucide-react";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import { Slider } from "../components/ui/slider";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

export default function ModelPlayground() {
  const [prompt, setPrompt] = useState("");
  const [temperature, setTemperature] = useState([0.7]);
  const [maxTokens, setMaxTokens] = useState([256]);
  const [topP, setTopP] = useState([0.9]);
  const [selectedModel, setSelectedModel] = useState("gpt-4");
  const [outputs, setOutputs] = useState<{ id: number; text: string; model: string }[]>([
    {
      id: 1,
      text: "Neural networks are computational models inspired by biological neural networks. They consist of interconnected nodes (neurons) organized in layers. Each connection has a weight that adjusts during training. The network learns by minimizing a loss function through backpropagation and gradient descent.\n\nKey components:\n1. Input layer - receives data\n2. Hidden layers - process information\n3. Output layer - produces results\n4. Activation functions - introduce non-linearity\n\nNeural networks excel at pattern recognition, making them ideal for tasks like image classification, natural language processing, and prediction.",
      model: "GPT-4",
    },
  ]);

  const models = [
    { value: "gpt-4", label: "GPT-4", description: "Most capable, best for complex tasks" },
    { value: "gpt-3.5", label: "GPT-3.5 Turbo", description: "Fast and efficient" },
    { value: "claude-3", label: "Claude 3", description: "Anthropic's advanced model" },
    { value: "llama-2", label: "Llama 2", description: "Open source alternative" },
  ];

  const examplePrompts = [
    "Explain gradient descent in simple terms",
    "Write a Python function to implement a perceptron",
    "What are the differences between supervised and unsupervised learning?",
    "Explain the transformer architecture",
  ];

  const handleGenerate = () => {
    if (!prompt.trim()) return;

    const newOutput = {
      id: Date.now(),
      text: "This is a simulated response from the AI model. In a real implementation, this would be the actual model output based on your prompt and settings.",
      model: selectedModel.toUpperCase(),
    };

    setOutputs([newOutput, ...outputs]);
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Left Panel - Settings */}
      <aside className="w-80 border-r border-border bg-card p-6 overflow-y-auto">
        <div className="mb-6 flex items-center gap-2">
          <Settings2 className="size-5 text-accent" />
          <h2 className="text-xl">Model Settings</h2>
        </div>

        <div className="space-y-6">
          {/* Model Selection */}
          <div>
            <Label className="mb-3 block">Model</Label>
            <Select value={selectedModel} onValueChange={setSelectedModel}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {models.map((model) => (
                  <SelectItem key={model.value} value={model.value}>
                    <div>
                      <div className="font-medium">{model.label}</div>
                      <div className="text-xs text-muted-foreground">
                        {model.description}
                      </div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Temperature */}
          <div>
            <div className="mb-3 flex items-center justify-between">
              <Label>Temperature</Label>
              <span className="text-sm text-muted-foreground">{temperature[0]}</span>
            </div>
            <Slider
              value={temperature}
              onValueChange={setTemperature}
              min={0}
              max={2}
              step={0.1}
              className="mb-2"
            />
            <p className="text-xs text-muted-foreground">
              Higher values make output more random, lower values more deterministic
            </p>
          </div>

          {/* Max Tokens */}
          <div>
            <div className="mb-3 flex items-center justify-between">
              <Label>Max Tokens</Label>
              <span className="text-sm text-muted-foreground">{maxTokens[0]}</span>
            </div>
            <Slider
              value={maxTokens}
              onValueChange={setMaxTokens}
              min={1}
              max={4096}
              step={1}
            />
          </div>

          {/* Top P */}
          <div>
            <div className="mb-3 flex items-center justify-between">
              <Label>Top P</Label>
              <span className="text-sm text-muted-foreground">{topP[0]}</span>
            </div>
            <Slider
              value={topP}
              onValueChange={setTopP}
              min={0}
              max={1}
              step={0.1}
              className="mb-2"
            />
            <p className="text-xs text-muted-foreground">
              Controls diversity via nucleus sampling
            </p>
          </div>

          {/* Example Prompts */}
          <div>
            <Label className="mb-3 block">Example Prompts</Label>
            <div className="space-y-2">
              {examplePrompts.map((example, idx) => (
                <button
                  key={idx}
                  onClick={() => setPrompt(example)}
                  className="w-full rounded-lg border border-border bg-muted/30 p-3 text-left text-sm transition-colors hover:bg-muted"
                >
                  {example}
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Center Panel - Prompt Editor */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border bg-card px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
              <Sparkles className="size-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg">Model Playground</h1>
              <p className="text-xs text-muted-foreground">
                Experiment with AI models in real-time
              </p>
            </div>
          </div>
          <Button variant="outline">
            <Download className="mr-2 size-4" />
            Export
          </Button>
        </div>

        {/* Prompt Input */}
        <div className="border-b border-border bg-card p-6">
          <Label className="mb-3 block">Prompt</Label>
          <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your prompt here... For example: 'Explain how neural networks work'"
            className="mb-4 min-h-[120px] resize-none"
          />
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              {prompt.length} characters
            </div>
            <Button onClick={handleGenerate} disabled={!prompt.trim()}>
              <Sparkles className="mr-2 size-4" />
              Generate
            </Button>
          </div>
        </div>

        {/* Outputs */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            {outputs.map((output) => (
              <div
                key={output.id}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 px-3 py-1 text-xs text-white">
                      {output.model}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      Just now
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Copy className="size-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <RefreshCw className="size-4" />
                    </Button>
                  </div>
                </div>
                <div className="whitespace-pre-line leading-relaxed text-foreground">
                  {output.text}
                </div>
              </div>
            ))}

            {outputs.length === 0 && (
              <div className="flex h-64 items-center justify-center text-center">
                <div>
                  <Sparkles className="mx-auto mb-4 size-12 text-muted-foreground" />
                  <h3 className="mb-2">No outputs yet</h3>
                  <p className="text-sm text-muted-foreground">
                    Enter a prompt and click Generate to get started
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right Panel - Comparison */}
      <aside className="w-96 border-l border-border bg-card p-6 overflow-y-auto">
        <h2 className="mb-6 text-xl">Response Comparison</h2>

        <div className="mb-6 rounded-lg border border-accent/30 bg-accent/5 p-4">
          <div className="mb-2 flex items-center gap-2 text-sm">
            <Sparkles className="size-4 text-accent" />
            <span className="font-medium">Compare Multiple Models</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Select multiple models to compare their responses side-by-side
          </p>
        </div>

        {/* Model Comparison Cards */}
        <div className="space-y-4">
          <div className="rounded-lg border border-border bg-muted/30 p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium">GPT-4</span>
              <span className="rounded-full bg-green-500/20 px-2 py-1 text-xs text-green-500">
                Active
              </span>
            </div>
            <div className="space-y-1 text-xs text-muted-foreground">
              <div className="flex justify-between">
                <span>Response Time:</span>
                <span>2.3s</span>
              </div>
              <div className="flex justify-between">
                <span>Tokens Used:</span>
                <span>245</span>
              </div>
              <div className="flex justify-between">
                <span>Cost:</span>
                <span>$0.012</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-dashed border-border bg-muted/10 p-4 text-center">
            <Button variant="outline" size="sm" className="w-full">
              + Add Model to Compare
            </Button>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mt-6">
          <h3 className="mb-4">Performance Metrics</h3>
          <div className="space-y-3">
            <div className="rounded-lg border border-border bg-muted/30 p-3">
              <div className="mb-1 text-sm text-muted-foreground">Avg Response Time</div>
              <div className="text-xl">2.3s</div>
            </div>
            <div className="rounded-lg border border-border bg-muted/30 p-3">
              <div className="mb-1 text-sm text-muted-foreground">Total Tokens</div>
              <div className="text-xl">1,247</div>
            </div>
            <div className="rounded-lg border border-border bg-muted/30 p-3">
              <div className="mb-1 text-sm text-muted-foreground">Session Cost</div>
              <div className="text-xl">$0.045</div>
            </div>
          </div>
        </div>

        {/* Recent Prompts */}
        <div className="mt-6">
          <h3 className="mb-4">Recent Prompts</h3>
          <div className="space-y-2">
            <button className="w-full rounded-lg border border-border bg-muted/30 p-3 text-left text-sm transition-colors hover:bg-muted">
              <div className="mb-1 truncate">Explain neural networks</div>
              <div className="text-xs text-muted-foreground">5 minutes ago</div>
            </button>
            <button className="w-full rounded-lg border border-border bg-muted/30 p-3 text-left text-sm transition-colors hover:bg-muted">
              <div className="mb-1 truncate">Write a perceptron function</div>
              <div className="text-xs text-muted-foreground">1 hour ago</div>
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
