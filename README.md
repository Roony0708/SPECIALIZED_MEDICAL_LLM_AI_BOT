# SPECIALIZED_MEDICAL_LLM_AI_BOT

# 🧠 MED_ASSIST – AI-Powered Medical Question Answering

> Fine-tuning a powerful language model on real medical datasets to simulate a clinical reasoning assistant.

![Python](https://img.shields.io/badge/Python-3.10-blue?logo=python)
![HuggingFace](https://img.shields.io/badge/HuggingFace-Model-yellow?logo=huggingface)
![Colab](https://img.shields.io/badge/Google%20Colab-Supported-orange?logo=googlecolab)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📌 Project Overview

**MED_ASSIST** is an AI project that fine-tunes the `DeepSeek-R1-Distill-Llama-8B` model using medical question-answer datasets with chain-of-thought (CoT) reasoning. The goal is to build a lightweight but effective **AI doctor assistant** capable of answering complex clinical queries step-by-step.

---

## 🚀 Key Features

✅ Instruction-tuned large language model  
✅ Chain-of-Thought (CoT) reasoning dataset  
✅ Efficient LoRA-based fine-tuning using [Unsloth](https://github.com/unslothai/unsloth)  
✅ Supports inference on GPU (Colab, Kaggle)  
✅ Integrated with [Weights & Biases](https://wandb.ai) for training logs

---

## 🧰 Tech Stack

| Tool            | Purpose                          |
|-----------------|----------------------------------|
| `Unsloth`       | Fast model loading & PEFT (LoRA) |
| `transformers`  | Model & tokenizer interface      |
| `datasets`      | Load medical QA dataset          |
| `wandb`         | Training tracking                |
| `Google Colab`  | Dev & training environment       |

---

## 📂 Project Structure

```bash
├── MED_ASSIST.ipynb        # Main notebook with all training & inference steps
├── README.md               # You're here
└── outputs/                # Fine-tuned model checkpoints
