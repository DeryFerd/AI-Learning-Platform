import { useState } from "react";
import { Link } from "react-router";
import {
  ChevronRight,
  Bookmark,
  CheckCircle2,
  PlayCircle,
  Code2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";

export default function CourseLesson() {
  const [bookmarked, setBookmarked] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: number }>({});

  const tableOfContents = [
    { id: 1, title: "Introduction to Neural Networks", completed: true },
    { id: 2, title: "Perceptrons and Activation Functions", completed: true },
    { id: 3, title: "Backpropagation Algorithm", completed: false, active: true },
    { id: 4, title: "Gradient Descent Optimization", completed: false },
    { id: 5, title: "Building Your First Network", completed: false },
  ];

  const quizQuestions = [
    {
      question: "What is the primary purpose of an activation function?",
      options: [
        "To initialize weights",
        "To introduce non-linearity",
        "To calculate loss",
        "To update gradients",
      ],
      correct: 1,
    },
    {
      question: "Which optimization algorithm is most commonly used in deep learning?",
      options: [
        "Linear Regression",
        "K-Means",
        "Adam",
        "Random Forest",
      ],
      correct: 2,
    },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/learning-paths" className="hover:text-foreground">
            Learning Paths
          </Link>
          <ChevronRight className="size-4" />
          <Link to="/learning-paths" className="hover:text-foreground">
            Deep Learning
          </Link>
          <ChevronRight className="size-4" />
          <span className="text-foreground">Backpropagation Algorithm</span>
        </div>

        {/* Lesson Header */}
        <div className="mb-8 flex items-start justify-between">
          <div className="flex-1">
            <h1 className="mb-2 text-3xl">Backpropagation Algorithm</h1>
            <p className="text-muted-foreground">
              Learn how neural networks learn through backpropagation
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setBookmarked(!bookmarked)}
            >
              <Bookmark
                className={`size-5 ${bookmarked ? "fill-accent text-accent" : ""}`}
              />
            </Button>
          </div>
        </div>

        {/* Video Player Placeholder */}
        <div className="mb-8 overflow-hidden rounded-xl border border-border bg-card">
          <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
            <div className="text-center">
              <PlayCircle className="mx-auto mb-3 size-16 text-accent" />
              <p className="text-muted-foreground">Video: Introduction to Backpropagation</p>
              <p className="text-sm text-muted-foreground">Duration: 12:34</p>
            </div>
          </div>
        </div>

        {/* Lesson Content */}
        <div className="mb-8 space-y-6 rounded-xl border border-border bg-card p-8">
          <div>
            <h2 className="mb-4 text-xl">Understanding Backpropagation</h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Backpropagation is a fundamental algorithm in training neural networks. It
              efficiently computes the gradient of the loss function with respect to the
              weights of the network for a single input–output example, and does so by
              cleverly computing the gradient one layer at a time, iterating backward from
              the last layer to avoid redundant calculations of intermediate terms in the
              chain rule.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              The algorithm works by using the chain rule to propagate errors backward
              through the network, allowing us to update weights efficiently. This is what
              enables deep learning models to learn complex patterns from data.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-xl">Key Concepts</h2>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Forward pass: Computing outputs layer by layer</li>
              <li>Loss calculation: Measuring prediction error</li>
              <li>Backward pass: Computing gradients using chain rule</li>
              <li>Weight updates: Adjusting parameters to minimize loss</li>
            </ul>
          </div>

          {/* Code Example */}
          <div>
            <h2 className="mb-4 text-xl">Code Example</h2>
            <div className="overflow-hidden rounded-lg border border-border bg-[#0d1117]">
              <div className="flex items-center justify-between border-b border-border bg-[#161b22] px-4 py-2">
                <div className="flex items-center gap-2">
                  <Code2 className="size-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">backpropagation.py</span>
                </div>
              </div>
              <pre className="overflow-x-auto p-4 text-sm">
                <code className="text-gray-300">
                  {`import numpy as np

def backpropagation(X, y, weights, learning_rate=0.01):
    """
    Perform one step of backpropagation
    """
    # Forward pass
    layer1 = np.dot(X, weights['W1']) + weights['b1']
    activation1 = sigmoid(layer1)
    
    layer2 = np.dot(activation1, weights['W2']) + weights['b2']
    output = sigmoid(layer2)
    
    # Backward pass
    error = y - output
    d_output = error * sigmoid_derivative(output)
    
    error_hidden = d_output.dot(weights['W2'].T)
    d_hidden = error_hidden * sigmoid_derivative(activation1)
    
    # Update weights
    weights['W2'] += activation1.T.dot(d_output) * learning_rate
    weights['b2'] += np.sum(d_output, axis=0) * learning_rate
    weights['W1'] += X.T.dot(d_hidden) * learning_rate
    weights['b1'] += np.sum(d_hidden, axis=0) * learning_rate
    
    return weights`}
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* Interactive Quiz */}
        <div className="mb-8 rounded-xl border border-border bg-card p-8">
          <h2 className="mb-6 text-xl">Check Your Understanding</h2>
          <div className="space-y-6">
            {quizQuestions.map((q, idx) => (
              <div key={idx} className="space-y-3">
                <h4 className="font-medium">
                  {idx + 1}. {q.question}
                </h4>
                <div className="space-y-2">
                  {q.options.map((option, optIdx) => (
                    <button
                      key={optIdx}
                      onClick={() => setQuizAnswers({ ...quizAnswers, [idx]: optIdx })}
                      className={`w-full rounded-lg border p-3 text-left transition-colors ${
                        quizAnswers[idx] === optIdx
                          ? quizAnswers[idx] === q.correct
                            ? "border-green-500 bg-green-500/10 text-green-500"
                            : "border-red-500 bg-red-500/10 text-red-500"
                          : "border-border bg-muted/30 hover:border-accent"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Button variant="outline">
            <ChevronDown className="mr-2 size-4" />
            Previous Lesson
          </Button>
          <Link to="/lab/ml-fundamentals">
            <Button>
              Mark as Complete
              <CheckCircle2 className="ml-2 size-4" />
            </Button>
          </Link>
          <Button>
            Next Lesson
            <ChevronUp className="ml-2 size-4" />
          </Button>
        </div>
      </div>

      {/* Right Sidebar */}
      <aside className="w-80 border-l border-border bg-card p-6">
        <div className="mb-6">
          <h3 className="mb-4">Lesson Progress</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">3 of 5 completed</span>
              <span className="text-accent">60%</span>
            </div>
            <Progress value={60} className="h-2" />
          </div>
        </div>

        <div>
          <h3 className="mb-4">Table of Contents</h3>
          <div className="space-y-1">
            {tableOfContents.map((item) => (
              <button
                key={item.id}
                className={`flex w-full items-center gap-3 rounded-lg p-3 text-left text-sm transition-colors ${
                  item.active
                    ? "bg-accent/20 text-accent"
                    : item.completed
                    ? "text-muted-foreground hover:bg-muted"
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
                {item.completed ? (
                  <CheckCircle2 className="size-4 shrink-0 text-green-500" />
                ) : (
                  <div className="size-4 shrink-0 rounded-full border-2 border-muted-foreground" />
                )}
                <span className="flex-1">{item.title}</span>
              </button>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
