import os
import glob
import errno
import datetime
import shutil 

filename = datetime.datetime.now()

path='finaloutput'
source="finaloutput/datafile.docx"
dest="Total_Output/"+filename.strftime("%d%B%Y%H%M%S")+".docx"
shutil.copy(source,dest)
# path = 'finaloutput/*.docx'
# files=glob.glob(path)
# for file in files:
#     with open(file) as f:
#         with open(filename.strftime("%d%B%Y%H%M%S")+".docx", "w") as f1:
#             for line in f:
#                 f1.write(line)
#os.system('python webmaerge.py')


