import json
import os
import webbrowser
jsonfile = "TTK.json"
# with open(jsonfile) as file_object:
#     data = json.load(file_object)
#     for r , a in data.items():
#         print (r,a)

f = open("yooho1.html","w+")
# str="<!DOCTYPE html> \n <html> \n  <head> \n    <title>Register form</title> \n </head>\n<body>\n<form>\n	<table>\n"
#print (str)
front="<!DOCTYPE html>\n<html>\n<head>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<style>\nbody {font-family: Arial, Helvetica, sans-serif;}\n* {box-sizing: border-box;}\ninput[type=text], select, textarea {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  margin-top: 6px;\n  margin-bottom: 16px;\n  resize: vertical;\n}\ninput[type=button] {\n  background-color: #007bff;\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\ninput[type=button]:hover {\n  background-color: #45a049;\n}\n.container {\n  border-radius: 5px;\n  background-color: #f2f2f2;\n  padding: 20px;\n}\n.header{\n   border-radius: 5px;\n  padding: 10px;\n  padding-left: 20px;\n	background-color: #007bff;\n	color: white;\n}\n</style>\n</head>\n<body>\n<div class=header>\n<h2>Registration Form</h2>\n</div>\n<div class=\"container\">\n  <form>"
f.write(front)
with open(jsonfile) as file_object:
    data = json.load(file_object)
dict = {1: 'rikin', 2: 'priyank', 3: 'sunder'}
dict = data
i=1
for i in range(1,len(dict)+1):
   # str1="<tr>\n  <td> \n      "+a+"\n  </td>\n  <td>\n    <input type=\"text\"> \n </td>\n </tr>"
   middle="\n<label>"+dict[str(i)]+"</label>\n   <input type=\"text\" id=\""+dict[str(i)]+"\" >"
   #print(middle)
   f.write(middle)
   i=i+1

# str2="   </table>\n</form>\n</body>\n</html>"
last1=" \n<input type=\"button\" value=\"Submit\" onclick=\"saveFile()\">\n  </form>\n</div>\n</body>\n<script>\n   let saveFile = () => {"
# print(last1)
f.write(last1)

for i in range(1,len(dict)+1):
   middle2 = "\nconst "+ dict[str(i)]+ "= document.getElementById('"+dict[str(i)]+"');"
   f.write(middle2)
   i=i+1

last2="let data =            '{"
f.write(last2)

for i in range(1,len(dict)+1):
   middle3="\"" + dict[str(i)] +"\": ' +\"\\\"\"+"+ dict[str(i)] +".value +"
   f.write(middle3)
   if(i==len(dict)):
      f.write("\"\\\"\"+")
   else:
      f.write("\"\\\"\\,\"+\'")
   i=i+1

f.write("\"}\";\n")

last3="const textToBLOB = new Blob([data], { type: 'text/plain' });\n        const sFileName = 'letter.json'; \n  "
f.write(last3)

last4="let newLink = document.createElement(\"a\");\n        newLink.download = sFileName;\n        if (window.webkitURL != null) {\n            newLink.href = window.webkitURL.createObjectURL(textToBLOB);\n       }\n        else {\n            newLink.href = window.URL.createObjectURL(textToBLOB);\n            newLink.style.display = \"none\";            document.body.appendChild(newLink);\n        }\n        newLink.click(); \n    }\n</script>\n</html>"
f.write(last4)
f.close()
webbrowser.open_new_tab('yooho1.html')

while True:
	if (os.path.isfile('C:/Users/ASUS/Downloads/letter.json')):
		os.system('python copyfile.py')
		break
