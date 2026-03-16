---
date: '2'
title: 'Research Paper Classifier'
cover: './demo.png'
github: 'https://github.com/sej07/Research-Paper-Classification-Fine-Tuning-BERT-'
# external: 'https://spotify-profile.herokuapp.com/'
tech:
  - PyTorch
  - BERT
  - Transformers
  - Python
---

Fine-tuned BERT-base (109M parameters) on 28K arXiv abstracts for 11 category classification to achieve 80.3% test
accuracy(8.8x above random baselines) with 9 of 11 categories exceeding 80% F1

Conducted systematic error analysis via confusion matrix identifying semantic overlap between interdisciplinary
categories, documenting category-specific failure modes to guide future dataset refinement

Optimized training for Apple Silicon MPS with gradient clipping, linear warmup scheduling, and AdamW, achieving
stable convergence in a single epoch across 3,549 batches on a resource-constrained environment