# 🧠 Tender AI Agent

A web-based AI-powered system for analyzing and processing tender documents using intelligent agents.

---

## 🚀 Tech Stack

* **Frontend:** React (Vite)
* **Backend:** FastAPI (Python)
* **Environment:** Virtual Environment (venv)

---

## 📁 Project Structure

```
tender-ai-agent/
│
├── backend-stack/
│   └── fastapi-backend/
│       ├── main.py
│       ├── venv/
│       └── ...
│
├── front-end/
│   ├── src/
│   ├── package.json
│   └── ...
│
└── .gitignore
└── README.md
```

---

# ⚙️ Setup Instructions

## 1. Clone the repository

```bash
git clone <your-repo-url>
cd tender-ai-agent
```

---

# 🐍 Backend Setup (FastAPI)

## 2. Navigate to backend

```bash
cd backend-fastapi
```

---

## 3. Create virtual environment

```bash
python -m venv venv
```

---

## 4. Activate virtual environment

### Windows:

```bash
venv\Scripts\activate
```

### Mac/Linux:

```bash
source venv/bin/activate
```

---

## 5. Install dependencies

```bash
pip install -r requirements.txt

---

## 6. Run backend server

```bash
uvicorn main:app --reload
```

Backend will run at:

```
http://localhost:8000
```

API Docs:

```
http://localhost:8000/docs
```

---

# ⚛️ Frontend Setup (React + Vite)

## 7. Open new terminal and go to frontend

```bash
cd front-end
```

---

## 8. Install dependencies

```bash
npm install
```

---

## 9. Run frontend

```bash
npm run dev
```

Frontend will run at:

```
http://localhost:5173
```

---

# 🔄 Running Full Application

1. Start backend (FastAPI)
2. Start frontend (React)
3. Open browser at `http://localhost:5173`

---

# 📌 Notes

* Ensure backend is running before using frontend features
* Update API URLs in frontend if needed
* Use `.env` files for configuration in production

---

# 🛠️ Future Improvements

* Add Docker support
* Add authentication
* Add database integration

---

# 👨‍💻 Author

Tender AI Agent Project
