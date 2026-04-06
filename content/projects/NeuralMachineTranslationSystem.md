---
date: '2025-12-01'
title: 'Neural Machine Translation System'
github: 'https://github.com/sej07/Reimplementation-of-Seq2Seq-paper'
external: ''
tech:
  - PyTorch
  - LSTM
  - Sequence to Sequence
  - NLP
showInProjects: true
---

Reimplemented ”Sequence to Sequence Learning with Neural Networks” paper using TensorFlow on English-French WMT14
dataset with 40,000 sentence pairs

Designed 4-layer LSTM encoder-decoder architecture using Bahdanau attention mechanism to handle variable-length se-
quences up to 50 tokens and 512-dimensional hidden state representations

Optimized training pipeline implementing gradient clipping, teacher forcing with decay schedule, and adaptive learning
rate to reduce the convergence time by 30% and prevent gradient explosion