import os
from PyPDF2 import PdfMerger
from PyPDF2.errors import EmptyFileError

def merge_pdfs_in_directory(directory_path, output_file):
    # Create a PdfMerger object
    merger = PdfMerger()

    # Loop through all the files in the directory
    for filename in os.listdir(directory_path):
        if filename.endswith('.pdf'):
            file_path = os.path.join(directory_path, filename)
            try:
                # Check if the file is empty (size = 0)
                if os.path.getsize(file_path) == 0:
                    print(f"Skipping empty file: {filename}")
                    continue

                # Append each PDF file to the merger
                with open(file_path, 'rb') as pdf_file:
                    merger.append(pdf_file)
            except EmptyFileError:
                print(f"Error: Cannot read file {filename}. Skipping...")

    # Write the merged PDF to the output file
    if len(merger.pages) > 0:
        with open(output_file, 'wb') as output_pdf:
            merger.write(output_pdf)
        print(f"Merged PDFs saved to {output_file}")
    else:
        print("No valid PDFs found to merge.")

# Function to list all files in a directory
def list_files_in_directory(folder_path):
    try:
        # Get the list of all files and directories in the given path
        with os.scandir(folder_path) as entries:
            for entry in entries:
                if entry.is_file():
                    print(entry.name)  # Print the file name
    except FileNotFoundError:
        print(f"The folder path '{folder_path}' does not exist.")
    except Exception as e:
        print(f"An error occurred: {e}")

# Provide the folder path here
folder_path = r'C:\Users\mmani\OneDrive\Desktop\material\TAMIL'

# Call the function
list_files_in_directory(folder_path)
# Usage
#directory_path = '/path/to/your/pdf/folder'
output_file = r'C:\Users\mmani\OneDrive\Desktop\material\TAMIL\merged_output.pdf'
merge_pdfs_in_directory(folder_path, output_file)
