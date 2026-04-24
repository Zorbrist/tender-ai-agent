# pipeline.py
from crewai import Task, Crew, Process
# Import your agents from their separate files
from agents.data_architect import data_architect
from agents.tech_auditor import tech_auditor
from agents.synthesis_engine import synthesis_engine

def create_tender_crew(file_path: str):
    # 1. Define Tasks
    task_clean = Task(
        description=f"Read the file at {file_path}. Extract crane specs and site requirements into JSON.",
        expected_output="A raw JSON object.",
        agent=data_architect
    )

    task_audit = Task(
        description="Review the JSON data for technical risks and hardware constraints.",
        expected_output="A bulleted risk assessment.",
        agent=tech_auditor,
        context=[task_clean]
    )

    task_report = Task(
        description="Draft a 3-paragraph executive summary for the Port Manager.",
        expected_output="A markdown report.",
        agent=synthesis_engine,
        context=[task_audit]
    )

    # 2. Assemble Crew
    return Crew(
        agents=[data_architect, tech_auditor, synthesis_engine],
        tasks=[task_clean, task_audit, task_report],
        process=Process.sequential,
        max_rpm=2,
        verbose=True
    )