# Signal Macro
# Deployment Guide
Version: V1.0

---

# Architecture

Mac（开发）

↓

GitHub

↓

VPS

↓

Docker

↓

Nginx

↓

Cloudflare

↓

Users

---

# Development Environment

Hardware

MacBook

OS

macOS

Tools

Homebrew

Node.js 22 LTS

pnpm

Git

Docker Desktop

VSCode

Codex

---

# VPS

OS

Ubuntu 24.04 LTS

CPU

2 Core+

Memory

4GB+

Storage

50GB SSD+

Docker

Latest

Docker Compose

Latest

Nginx

Latest

Redis

Latest

PostgreSQL 16

---

# Domain

example.com

DNS

Cloudflare

SSL

Let's Encrypt

HTTPS Only

---

# Folder Structure

/opt/signal-macro

```
apps/

backend/

frontend/

database/

docker/

nginx/

scripts/

.env

docker-compose.yml
```

---

# Docker Services

signal-web

↓

Next.js

Port

3000

---

signal-db

↓

PostgreSQL

Port

5432

---

signal-redis

↓

Redis

Port

6379

---

signal-nginx

↓

Nginx

Port

80

443

---

Architecture

```
Internet

↓

Cloudflare

↓

Nginx

↓

Next.js

↓

PostgreSQL

↓

Redis
```

---

# Docker Compose

Services

- web
- postgres
- redis
- nginx

全部自动启动。

Restart

always

---

# Environment

.env

```
NODE_ENV=production

DATABASE_URL=

REDIS_URL=

OPENAI_API_KEY=

NEXT_PUBLIC_APP_URL=

TZ=Asia/Shanghai
```

禁止：

把 Key 写进代码。

---

# Reverse Proxy

Nginx

```
443

↓

Next.js:3000
```

自动：

HTTPS

HTTP2

Gzip

Brotli

Cache

---

# Database Backup

每天

03:00

自动

pg_dump

保存：

30天

---

# Redis

Cache

TTL

Dashboard

10分钟

Fed

1小时

Knowledge

24小时

---

# Logs

Docker Logs

+

Nginx Logs

+

App Logs

统一：

/logs

---

# Monitoring

Health Check

/api/v1/health

Docker Restart

always

---

# Deployment Flow

Mac

↓

Git Commit

↓

GitHub

↓

SSH VPS

↓

git pull

↓

docker compose pull

↓

docker compose up -d

↓

Done

整个更新时间：

约30秒

---

# CI/CD（V2）

GitHub Actions

↓

SSH VPS

↓

Auto Deploy

第一版：

手动部署即可。

---

# Security

Firewall

仅开放：

22

80

443

关闭：

PostgreSQL

Redis

公网访问

---

# SSL

Cloudflare

+

Let's Encrypt

自动续期

---

# Backup

Database

每天

Redis

无需

Knowledge

Git

配置

Git

---

# Server Requirements

Minimum

2C

4G

50G SSD

Recommended

4C

8G

100G SSD

---

# Cost

VPS

$8~15/月

Domain

约10美元/年

Cloudflare

Free

Docker

Free

PostgreSQL

Free

Redis

Free

总成本：

≈ ¥80~150/月

---

# Future Scaling

V2

增加：

Worker

↓

AI Queue

↓

Vector DB

↓

RAG

↓

CDN

↓

Object Storage

无需重构。
