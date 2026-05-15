# Building a Custom LLM from Scratch

My journey training a 256M-parameter Transformer model entirely on Apple Silicon

## Introduction

In this post, I detail my experience building a 256M-parameter Transformer model from scratch using only Apple Silicon. I cover the architecture choices, dataset engineering, and advanced fine-tuning techniques I used.

## Architecture Choices

Building a Transformer from scratch required careful consideration of the model architecture. I chose a 16-layer encoder-decoder structure with 8 attention heads and a hidden size of 512.

### Key Decisions

- **Tokenization**: Used BPE with 32k vocabulary
- **Positional Encoding**: Learned positional embeddings instead of fixed
- **Attention**: Standard scaled dot-product attention

## Dataset Engineering

The dataset was one of the most critical components. I curated a dataset of 10B tokens from various sources including:

- Wikipedia articles
- Books from Project Gutenberg
- Code repositories from GitHub

## Training on Apple Silicon

Training a model of this size on Apple Silicon was challenging but rewarding. I used PyTorch with MPS backend for acceleration.

### Training Configuration

- Batch size: 2048 tokens
- Learning rate: 1e-4 with warmup
- Training time: 72 hours on M1 Pro

## Results

The model achieved impressive results on various benchmarks:

| Benchmark | Score |
|-----------|-------|
| GLUE | 78.5 |
| SQuAD v2 | 72.3 |
| CNN/DailyMail | 21.5 ROUGE-L |

## Conclusion

Building a custom LLM from scratch was an incredible learning experience. I gained deep insights into transformer architecture, training dynamics, and optimization techniques.

## Future Work

- Experiment with different attention mechanisms
- Try larger model sizes
- Explore quantization for deployment
