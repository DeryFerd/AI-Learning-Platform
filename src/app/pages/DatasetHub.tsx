import { useState } from "react";
import { Search, Download, Eye, Database, Filter, TrendingUp, Calendar } from "lucide-react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

export default function DatasetHub() {
  const [selectedDataset, setSelectedDataset] = useState<number | null>(null);

  const datasets = [
    {
      id: 1,
      name: "CIFAR-10",
      description: "60,000 32x32 color images in 10 classes",
      size: "170 MB",
      task: "Image Classification",
      downloads: "1.2M",
      samples: "60,000",
      features: "3,072",
      updated: "2023-01-15",
    },
    {
      id: 2,
      name: "ImageNet",
      description: "Large-scale image database for visual recognition",
      size: "150 GB",
      task: "Image Classification",
      downloads: "850K",
      samples: "14M",
      features: "Varies",
      updated: "2023-11-20",
    },
    {
      id: 3,
      name: "IMDB Reviews",
      description: "50,000 movie reviews for sentiment analysis",
      size: "80 MB",
      task: "Text Classification",
      downloads: "620K",
      samples: "50,000",
      features: "Varies",
      updated: "2023-08-10",
    },
    {
      id: 4,
      name: "COCO Dataset",
      description: "Object detection, segmentation, and captioning",
      size: "25 GB",
      task: "Object Detection",
      downloads: "940K",
      samples: "330K",
      features: "80 classes",
      updated: "2023-12-05",
    },
    {
      id: 5,
      name: "Boston Housing",
      description: "Housing prices in Boston area",
      size: "45 KB",
      task: "Regression",
      downloads: "450K",
      samples: "506",
      features: "13",
      updated: "2023-03-22",
    },
    {
      id: 6,
      name: "Titanic",
      description: "Passenger survival classification",
      size: "60 KB",
      task: "Classification",
      downloads: "780K",
      samples: "891",
      features: "11",
      updated: "2023-07-18",
    },
  ];

  const sampleData = [
    { id: 1, feature1: "3.2", feature2: "145", feature3: "0.82", label: "Class A" },
    { id: 2, feature1: "2.8", feature2: "132", feature3: "0.76", label: "Class B" },
    { id: 3, feature1: "4.1", feature2: "168", feature3: "0.91", label: "Class A" },
    { id: 4, feature1: "1.9", feature2: "98", feature3: "0.64", label: "Class C" },
    { id: 5, feature1: "3.5", feature2: "156", feature3: "0.88", label: "Class A" },
  ];

  const getTaskColor = (task: string) => {
    const colors: { [key: string]: string } = {
      "Image Classification": "bg-blue-500/10 text-blue-500",
      "Text Classification": "bg-green-500/10 text-green-500",
      "Object Detection": "bg-purple-500/10 text-purple-500",
      "Regression": "bg-orange-500/10 text-orange-500",
      "Classification": "bg-pink-500/10 text-pink-500",
    };
    return colors[task] || "bg-gray-500/10 text-gray-500";
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="mb-2 text-3xl">Dataset Hub</h1>
          <p className="text-muted-foreground">
            Browse and download curated datasets for your ML projects
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-6 flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search datasets..." className="pl-10" />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="size-4" />
            Filters
          </Button>
        </div>

        {/* Stats */}
        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
              <Database className="size-4" />
              <span>Total Datasets</span>
            </div>
            <p className="text-2xl">1,247</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
              <TrendingUp className="size-4" />
              <span>Total Downloads</span>
            </div>
            <p className="text-2xl">4.8M</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="size-4" />
              <span>New This Week</span>
            </div>
            <p className="text-2xl">12</p>
          </div>
        </div>

        {/* Dataset Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {datasets.map((dataset) => (
            <div
              key={dataset.id}
              onClick={() => setSelectedDataset(dataset.id)}
              className={`cursor-pointer rounded-xl border bg-card p-5 transition-all ${
                selectedDataset === dataset.id
                  ? "border-accent shadow-lg"
                  : "border-border hover:border-accent/50"
              }`}
            >
              <div className="mb-3 flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <Database className="size-5 text-accent" />
                  <h3>{dataset.name}</h3>
                </div>
                <Badge className={getTaskColor(dataset.task)}>{dataset.task}</Badge>
              </div>

              <p className="mb-4 text-sm text-muted-foreground">{dataset.description}</p>

              <div className="mb-4 grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-muted-foreground">Size:</span>{" "}
                  <span className="text-foreground">{dataset.size}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Samples:</span>{" "}
                  <span className="text-foreground">{dataset.samples}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Downloads:</span>{" "}
                  <span className="text-foreground">{dataset.downloads}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Features:</span>{" "}
                  <span className="text-foreground">{dataset.features}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button size="sm" className="flex-1">
                  <Download className="mr-2 size-4" />
                  Download
                </Button>
                <Button size="sm" variant="outline">
                  <Eye className="size-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Sidebar - Dataset Preview */}
      {selectedDataset && (
        <aside className="w-96 border-l border-border bg-card p-6 overflow-y-auto">
          <div className="mb-6">
            <h2 className="mb-2 text-xl">
              {datasets.find((d) => d.id === selectedDataset)?.name}
            </h2>
            <p className="text-sm text-muted-foreground">
              {datasets.find((d) => d.id === selectedDataset)?.description}
            </p>
          </div>

          {/* Metadata */}
          <div className="mb-6">
            <h3 className="mb-3">Metadata</h3>
            <div className="space-y-2 rounded-lg border border-border bg-muted/30 p-4 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Task Type:</span>
                <span>{datasets.find((d) => d.id === selectedDataset)?.task}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Size:</span>
                <span>{datasets.find((d) => d.id === selectedDataset)?.size}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Samples:</span>
                <span>{datasets.find((d) => d.id === selectedDataset)?.samples}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Features:</span>
                <span>{datasets.find((d) => d.id === selectedDataset)?.features}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Last Updated:</span>
                <span>{datasets.find((d) => d.id === selectedDataset)?.updated}</span>
              </div>
            </div>
          </div>

          {/* Data Preview */}
          <div>
            <h3 className="mb-3">Data Preview</h3>
            <div className="overflow-hidden rounded-lg border border-border">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="border-b border-border bg-muted/50">
                    <tr>
                      <th className="px-3 py-2 text-left">ID</th>
                      <th className="px-3 py-2 text-left">Feature 1</th>
                      <th className="px-3 py-2 text-left">Feature 2</th>
                      <th className="px-3 py-2 text-left">Feature 3</th>
                      <th className="px-3 py-2 text-left">Label</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sampleData.map((row) => (
                      <tr key={row.id} className="border-b border-border last:border-0">
                        <td className="px-3 py-2">{row.id}</td>
                        <td className="px-3 py-2">{row.feature1}</td>
                        <td className="px-3 py-2">{row.feature2}</td>
                        <td className="px-3 py-2">{row.feature3}</td>
                        <td className="px-3 py-2">
                          <Badge variant="outline">{row.label}</Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Usage Example */}
          <div className="mt-6">
            <h3 className="mb-3">Usage Example</h3>
            <div className="overflow-hidden rounded-lg border border-border bg-[#0d1117]">
              <div className="border-b border-border bg-[#161b22] px-3 py-2">
                <span className="text-xs text-muted-foreground">Python</span>
              </div>
              <pre className="overflow-x-auto p-3 text-xs">
                <code className="text-gray-300">{`# Load dataset
from tensorflow import keras

(x_train, y_train), (x_test, y_test) = \\
    keras.datasets.cifar10.load_data()

# Preprocess
x_train = x_train / 255.0
x_test = x_test / 255.0

print(f"Training: {len(x_train)}")
print(f"Test: {len(x_test)}")`}</code>
              </pre>
            </div>
          </div>

          <Button className="mt-6 w-full">
            <Download className="mr-2 size-4" />
            Download Dataset
          </Button>
        </aside>
      )}
    </div>
  );
}
