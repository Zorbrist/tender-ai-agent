import os
from dotenv import load_dotenv
from pipeline import create_tender_crew

def main():
    load_dotenv()
    
    # Path to your tender file
    tender_path = "../data/tender_specs.txt"
    
    print("\n🚀 Initializing Tender Analysis Pipeline...")
    
    # Initialize the crew from our pipeline file
    crew = create_tender_crew(tender_path)
    
    # Run it
    result = crew.kickoff()
    
    print("\n\n########################")
    print("## FINAL EXECUTIVE REPORT ##")
    print(result)

if __name__ == "__main__":
    main()