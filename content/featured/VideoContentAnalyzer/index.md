---
date: '1'
title: 'AI-Powered Video Content Analyzer'
cover: './timeline.png'
github: 'https://github.com/sej07/VideoContentAnalyzer'
external: 'https://huggingface.co/spaces/Sej7/Video-Content-Analyzer'
tech:
  - Computer Vision
  - NLP
  - OpenCV
  - PyTorch
  - Python
---

Engineered a multimodal video analysis pipeline integrating YOLOv8 + BoTSORT object tracking, OpenAI Whisper
speech transcription, and CLIP scene understanding to automate semantic extraction across all three modalities
simultaneously

Achieved 6x faster than real-time processing on CPU-only inference to analyze a 6-minute video in under 62 seconds with
peak memory footprint under 1.7GB enabling deployment on memory-constrained environments

Architected a FastAPI backend with async background job processing and RESTful endpoints and containerized via
Docker supporting concurrent video uploads with real-time job status tracking and sub-500ms API response times
