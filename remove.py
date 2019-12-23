import os
file1 = "TTK.json"

with open(file1, 'rb+') as f:
    f.seek(0,2)                 # end of file
    size=f.tell()               # the size...
    f.truncate(size-1)

file2 = open("TTK.json","a")
file2.write("}")
file2.close()

#print("Removed!")


os.system('python maker.py')
