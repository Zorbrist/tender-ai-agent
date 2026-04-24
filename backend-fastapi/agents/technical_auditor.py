from crewai import Agent
from pdf_loader import unicode_safe_reader
from config import gemini_llm

tech_auditor = Agent(
    role="Technical Auditor",
    goal="Identify specific crane models and performance requirements from the structured data.",
    backstory="Veteran port engineer with 20 years experience. You look for technical gaps in the specifications.",
    llm=gemini_llm,
    verbose=True
)

