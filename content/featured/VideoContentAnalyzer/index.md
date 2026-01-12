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

Built an end-to-end multimodal AI pipeline integrating YOLOv8 object detection (82\% mAP), Whisper transcription (<10\% WER), and CLIP scene understanding (84\% accuracy) to reduce 10-minute video analysis from 30+ minutes to 2.5 minutes

Engineered FastAPI backend with async job processing and RESTful endpoints to enable concurrent video uploads with real-time status tracking and sub-500ms query response times

Deployed production system via Docker to Hugging Face Spaces handling 500MB videos to achieve 86\% object tracking ID consistency across occlusions and <500ms API response times for status queries
