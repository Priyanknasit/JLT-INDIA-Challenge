import os, fnmatch
from mailmerge import MailMerge

import os
if (os.path.isfile('finaloutput/datafile.docx')):
    os.remove('finaloutput/datafile.docx')

dir_path = ('uploads')

for root, dirs, files in os.walk(dir_path):
    for file in files:

        # change the extension from '.mp3' to
        # the one of your choice.
        if file.endswith('.docx'):
            quick = (root + '/' + str(file))

with MailMerge(quick) as document:
    print (document.get_merge_fields())
    data = document.get_merge_fields()
    q=1
    file1 = open("TTK.json","a")
#print(data)
file1.write("{")
for i in data:
    #print(i,q)
    file1.write("\"")
    file1.write(str(q))
    file1.write("\":\"")
    file1.write(i)
    file1.write("\",")
    q += 1

file1.close()

os.system("python remove.py")
