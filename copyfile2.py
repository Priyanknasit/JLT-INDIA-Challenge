import sys
import glob
import errno
import os

if (os.path.isfile('finaloutput/datafile.docx')):
    os.remove('finaloutput/datafile.docx')


path = 'C:/Users/ASUS/Downloads/*.json'
files=glob.glob(path)
for file in files:
    with open(file) as f:
        with open("D:/XAMPP/htdocs/log/letter2.json", "w") as f1:
            for line in f:
                f1.write(line)

os.system('python webmaerge2.py')

