import os
# import datetime

# timestr="2019-12-1912_58_59"
# path="finaloutput\datafle"+timestr+".docx"
# os.system(path)

# date_string = datetime.datetime.now().strftime("%Y-%m-%d-%H:%M")
# print (date_string)

# import time
# date_string = time.strftime("%Y-%m-%d-%H:%M")
# print (date_string)
# importing datetime module 
import datetime 
  
# datetime.datetime.now() to get  
# current date as filename. 
filename = datetime.datetime.now() 
  
# create empty file 
def create_file(): 
    # Function creates an empty file 
    # %d - date, %B - month, %Y - Year 
    with open(filename.strftime("%d%B%Y%H%M%S")+".docx", "w") as file: 
        file.write("") 
  
# Driver Code 
create_file() 