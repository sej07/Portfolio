---
date: '3'
title: 'Neural Machine Translation System'
cover: './demo.png'
external: 'https://github.com/sej07/Reimplementation-of-Seq2Seq-paper'
cta: 'https://github.com/sej07/Reimplementation-of-Seq2Seq-paper'
tech:
  - TensorFlow
  - Keras
  - LSTM
  - Attention
---

Reimplemented encoder–decoder training loop for Seq2Seq models with attention using TensorFlow, training on 40k sentence pairs from WMT14 dataset while analyzing common failure modes such as exposure bias and long-sequence degradation. 

Designed 4-layer LSTM encoder-decoder architecture using Bahdanau attention mechanism to handle variable-length sequences up to 50 tokens and 512-dimensional hidden state representations
