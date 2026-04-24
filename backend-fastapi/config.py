import os
from dotenv import load_dotenv
from crewai import LLM

load_dotenv()

# Centralized LLM config
gemini_llm = LLM(
    model="gemini/gemini-2.0-flash-lite", # Swapped to lite for quota safety!
    api_key=os.getenv("GOOGLE_API_KEY")
)