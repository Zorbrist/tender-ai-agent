# pdf_loader.py
from crewai.tools import tool

@tool("unicode_safe_reader")
def unicode_safe_reader(file_path: str) -> str:
    """Reads technical tender documents safely using UTF-8 encoding."""
    try:
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
            return f.read()
    except Exception as e:
        return f"Error reading file: {str(e)}"