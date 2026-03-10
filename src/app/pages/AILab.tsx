import { useState } from "react";
import { Play, Save, Download, Cpu, Database, TrendingUp, MessageSquare } from "lucide-react";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export default function AILab() {
  const [isRunning, setIsRunning] = useState(false);
  const [trainingProgress, setTrainingProgress] = useState(0);

  const handleRunCode = () => {
    setIsRunning(true);
    setTrainingProgress(0);
    
    // Simulate training progress
    const interval = setInterval(() => {
      setTrainingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsRunning(false);
          return 100;
        }
        return prev + 5;
      });
    }, 200);
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Left Panel - Instructions */}
      <aside className="w-80 border-r border-border bg-card p-6 overflow-y-auto">
        <div className="mb-6">
          <h2 className="mb-2 text-xl">Lab: Image Classification</h2>
          <p className="text-sm text-muted-foreground">
            Build a CNN model to classify images from the CIFAR-10 dataset
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="mb-2">Objectives</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>Load and preprocess image data</li>
              <li>Build a convolutional neural network</li>
              <li>Train the model with data augmentation</li>
              <li>Evaluate model performance</li>
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-accent/5 p-4">
            <h4 className="mb-2 text-sm">💡 Tip</h4>
            <p className="text-sm text-muted-foreground">
              Try experimenting with different activation functions and layer configurations
              to improve accuracy.
            </p>
          </div>

          <div>
            <h3 className="mb-2">Dataset</h3>
            <div className="rounded-lg border border-border bg-muted/30 p-3">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm">CIFAR-10</span>
                <Database className="size-4 text-accent" />
              </div>
              <div className="space-y-1 text-xs text-muted-foreground">
                <div className="flex justify-between">
                  <span>Training samples:</span>
                  <span>50,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Test samples:</span>
                  <span>10,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Classes:</span>
                  <span>10</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-2">Resources</h3>
            <div className="space-y-2">
              <button className="w-full rounded-lg border border-border bg-muted/30 p-2 text-left text-sm transition-colors hover:bg-muted">
                📚 CNN Architecture Guide
              </button>
              <button className="w-full rounded-lg border border-border bg-muted/30 p-2 text-left text-sm transition-colors hover:bg-muted">
                🔬 Data Augmentation Techniques
              </button>
              <button className="w-full rounded-lg border border-border bg-muted/30 p-2 text-left text-sm transition-colors hover:bg-muted">
                📊 Model Evaluation Metrics
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Center Panel - Code Editor */}
      <div className="flex flex-1 flex-col">
        {/* Toolbar */}
        <div className="flex items-center justify-between border-b border-border bg-card px-4 py-3">
          <div className="flex items-center gap-2">
            <Button
              onClick={handleRunCode}
              disabled={isRunning}
              className="flex items-center gap-2"
            >
              <Play className="size-4" />
              {isRunning ? "Running..." : "Run Code"}
            </Button>
            <Button variant="outline" size="icon">
              <Save className="size-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Download className="size-4" />
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <Cpu className={`size-4 ${isRunning ? "text-green-500" : "text-muted-foreground"}`} />
              <span className="text-muted-foreground">GPU: Tesla V100</span>
            </div>
          </div>
        </div>

        {/* Code Editor */}
        <div className="flex-1 overflow-y-auto bg-[#0d1117] p-4">
          <div className="font-mono text-sm">
            <pre className="text-gray-300">
              <code>{`# Cell 1: Import Libraries
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
import numpy as np
import matplotlib.pyplot as plt

print("TensorFlow version:", tf.__version__)

# Cell 2: Load and Preprocess Data
(x_train, y_train), (x_test, y_test) = keras.datasets.cifar10.load_data()

# Normalize pixel values
x_train = x_train.astype("float32") / 255.0
x_test = x_test.astype("float32") / 255.0

print(f"Training samples: {len(x_train)}")
print(f"Test samples: {len(x_test)}")

# Cell 3: Build CNN Model
model = keras.Sequential([
    layers.Conv2D(32, (3, 3), activation='relu', input_shape=(32, 32, 3)),
    layers.MaxPooling2D((2, 2)),
    layers.Conv2D(64, (3, 3), activation='relu'),
    layers.MaxPooling2D((2, 2)),
    layers.Conv2D(64, (3, 3), activation='relu'),
    layers.Flatten(),
    layers.Dense(64, activation='relu'),
    layers.Dropout(0.5),
    layers.Dense(10, activation='softmax')
])

model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

model.summary()

# Cell 4: Train Model
history = model.fit(
    x_train, y_train,
    epochs=10,
    batch_size=64,
    validation_split=0.2,
    verbose=1
)

# Cell 5: Evaluate Model
test_loss, test_acc = model.evaluate(x_test, y_test, verbose=0)
print(f"Test accuracy: {test_acc:.4f}")
print(f"Test loss: {test_loss:.4f}")`}</code>
            </pre>
          </div>
        </div>

        {/* Bottom Panel - Output */}
        <div className="border-t border-border bg-card">
          <Tabs defaultValue="output" className="w-full">
            <TabsList className="w-full justify-start rounded-none border-b border-border bg-transparent p-0">
              <TabsTrigger value="output" className="rounded-none">
                Output
              </TabsTrigger>
              <TabsTrigger value="metrics" className="rounded-none">
                Metrics
              </TabsTrigger>
              <TabsTrigger value="logs" className="rounded-none">
                Logs
              </TabsTrigger>
            </TabsList>

            <TabsContent value="output" className="h-64 overflow-y-auto p-4">
              <div className="space-y-2 font-mono text-sm text-muted-foreground">
                <div>TensorFlow version: 2.15.0</div>
                <div>Training samples: 50000</div>
                <div>Test samples: 10000</div>
                <div className="mt-4">Model: "sequential"</div>
                <div className="border-b border-border pb-2">
                  Layer (type) &nbsp;&nbsp;&nbsp;&nbsp; Output Shape &nbsp;&nbsp;&nbsp;&nbsp; Param #
                </div>
                {isRunning && (
                  <div className="mt-4 space-y-3">
                    <div>
                      <div className="mb-2 flex items-center justify-between text-xs">
                        <span>Training Progress</span>
                        <span className="text-accent">{trainingProgress}%</span>
                      </div>
                      <Progress value={trainingProgress} className="h-2" />
                    </div>
                    <div className="text-green-500">
                      Epoch {Math.floor(trainingProgress / 10)}/10 - loss: 0.{Math.floor(Math.random() * 9000 + 1000)} - accuracy: 0.{Math.floor(Math.random() * 3000 + 7000)}
                    </div>
                  </div>
                )}
                {trainingProgress === 100 && (
                  <div className="mt-4 space-y-1 text-green-500">
                    <div>✓ Training completed successfully</div>
                    <div>Test accuracy: 0.8247</div>
                    <div>Test loss: 0.5123</div>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="metrics" className="h-64 overflow-y-auto p-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg border border-border bg-muted/30 p-4">
                  <div className="mb-2 text-sm text-muted-foreground">Training Accuracy</div>
                  <div className="text-2xl text-green-500">82.47%</div>
                  <div className="mt-1 text-xs text-muted-foreground">+2.3% from last run</div>
                </div>
                <div className="rounded-lg border border-border bg-muted/30 p-4">
                  <div className="mb-2 text-sm text-muted-foreground">Validation Loss</div>
                  <div className="text-2xl text-blue-500">0.5123</div>
                  <div className="mt-1 text-xs text-muted-foreground">-0.08 from last run</div>
                </div>
                <div className="rounded-lg border border-border bg-muted/30 p-4">
                  <div className="mb-2 text-sm text-muted-foreground">Training Time</div>
                  <div className="text-2xl text-purple-500">4m 32s</div>
                  <div className="mt-1 text-xs text-muted-foreground">GPU accelerated</div>
                </div>
                <div className="rounded-lg border border-border bg-muted/30 p-4">
                  <div className="mb-2 text-sm text-muted-foreground">Parameters</div>
                  <div className="text-2xl text-orange-500">122K</div>
                  <div className="mt-1 text-xs text-muted-foreground">Trainable params</div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="logs" className="h-64 overflow-y-auto p-4 font-mono text-xs text-muted-foreground">
              <div className="space-y-1">
                <div>[2024-03-10 14:32:15] Session started</div>
                <div>[2024-03-10 14:32:16] Loading dataset: CIFAR-10</div>
                <div>[2024-03-10 14:32:18] Dataset loaded successfully</div>
                <div>[2024-03-10 14:32:19] Preprocessing data...</div>
                <div>[2024-03-10 14:32:20] Building model architecture</div>
                <div>[2024-03-10 14:32:21] Model compiled</div>
                {isRunning && (
                  <>
                    <div className="text-yellow-500">[2024-03-10 14:32:22] Training started</div>
                    <div className="text-yellow-500">[2024-03-10 14:32:24] GPU allocated: Tesla V100</div>
                  </>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Right Panel - AI Assistant */}
      <aside className="w-80 border-l border-border bg-card flex flex-col">
        <div className="border-b border-border p-4">
          <div className="flex items-center gap-2">
            <MessageSquare className="size-5 text-accent" />
            <h3>AI Assistant</h3>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <div className="rounded-lg bg-accent/10 p-3">
            <p className="text-sm text-muted-foreground">
              👋 I'm here to help! Ask me about your code, debugging, or ML concepts.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-lg bg-muted/30 p-3">
              <p className="mb-1 text-xs text-muted-foreground">You</p>
              <p className="text-sm">How can I improve my model's accuracy?</p>
            </div>

            <div className="rounded-lg bg-accent/10 p-3">
              <p className="mb-1 text-xs text-muted-foreground">AI Assistant</p>
              <p className="text-sm">
                Great question! Here are some suggestions:
              </p>
              <ul className="mt-2 list-disc pl-4 text-sm space-y-1">
                <li>Add data augmentation</li>
                <li>Increase model depth</li>
                <li>Use batch normalization</li>
                <li>Try different optimizers</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border p-4">
          <div className="space-y-2">
            <h4 className="text-sm">Quick Actions</h4>
            <button className="w-full rounded-lg border border-border bg-muted/30 p-2 text-left text-sm transition-colors hover:bg-muted">
              🔍 Explain this code
            </button>
            <button className="w-full rounded-lg border border-border bg-muted/30 p-2 text-left text-sm transition-colors hover:bg-muted">
              🐛 Debug my error
            </button>
            <button className="w-full rounded-lg border border-border bg-muted/30 p-2 text-left text-sm transition-colors hover:bg-muted">
              💡 Suggest improvements
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
