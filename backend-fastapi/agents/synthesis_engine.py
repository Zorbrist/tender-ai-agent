from crewai import Agent
from pdf_loader import unicode_safe_reader
from config import gemini_llm

synthesis_engine = Agent(
    role="Synthesis Engine",
    goal="Write a high-level executive summary for project stakeholders.",
    backstory="You bridge the gap between complex engineering requirements and business strategy for Malaysian port projects.",
    llm=gemini_llm,
    verbose=True
)

