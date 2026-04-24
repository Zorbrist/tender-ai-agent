from crewai import Agent
from pdf_loader import unicode_safe_reader
from config import gemini_llm

data_architect = Agent(
    role="Data Architect",
    goal="Extract and structure raw data from the technical specs into a clean JSON format.",
    backstory="You have a photographic memory for technical documents. You read the entire file and convert specifications into machine-readable JSON.",
    tools=[unicode_safe_reader],
    llm=gemini_llm,
    verbose=True
)
