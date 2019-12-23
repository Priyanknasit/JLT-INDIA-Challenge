import zipfile
import string
import json
from lxml import etree
import os
import shutil
import datetime

def read_docx(filepath):
    # todo: Add test to make sure it's a docx
    zfile = zipfile.ZipFile(filepath)
    # return the xml
    return zfile.read("word/document.xml")

def replace_hash(kp, input_string):
    for key, value in kp.items():
        if key in input_string:
            return value

def replace_docx(filepath, newfilepath, newfile):
    zin = zipfile.ZipFile(filepath, 'r')
    zout = zipfile.ZipFile(newfilepath, 'w')
    for item in zin.infolist():
        buffer = zin.read(item.filename)
        if (item.filename != 'word/document.xml'):
            zout.writestr(item, buffer)
        else:
            zout.writestr('word/document.xml', newfile)
    zin.close()
    zout.close()
    return True

def check_element_is(element, type_char):
     word_schema = 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'
     return element.tag == '{%s}%s' % (word_schema,type_char)

def docxmerge(fname, kp, newfname):

    filexml = read_docx(fname)
    my_etree = etree.fromstring(filexml)
    for node in my_etree.iter(tag=etree.Element):

        if check_element_is(node, 'fldChar'): #Once we've hit this, we're money...

            # Now, we're looking for this attribute: w:fldCharType="separate"
            if node.get('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}fldCharType') == "separate":
                node_value = node.getparent().getnext().getchildren()[1].text
                node.getparent().getnext().getchildren()[1].text = replace_hash(kp, node_value)

        elif check_element_is(node, 'fldSimple'): #Once we've hit this, we're money...
            node_value = node.getchildren()[0].getchildren()[1].text
            node.getchildren()[0].getchildren()[1].text = replace_hash(kp, node_value)

    replace_docx(fname, newfname, etree.tostring(my_etree, encoding='utf8', method='xml'))


if __name__ == '__main__':

    # dir_path = ('uploads')

    # for root, dirs, files in os.walk(dir_path):
    #     for file in files:

    #         # change the extension from '.mp3' to
    #         # the one of your choice.
    #         if file.endswith('.docx'):
    #             quick = (root + '/' + str(file))

    mainfile = "pre\hello.docx"
    jsonfile = "letter2.json"
    newfile = "finaloutput\datafile.docx"
    with open(jsonfile) as file_object:
        # store file data in object
        data = json.load(file_object)
    docxmerge(mainfile, data, newfile)


os.remove("letter2.json")
os.remove("C:/Users/ASUS/Downloads/letter2.json")

    


# dir_path1 = ('finaloutput')

# for root, dirs, files in os.walk(dir_path1):
#     for file in files:

#         # change the extension from '.mp3' to
#         # the one of your choice.
#         if file.endswith('.docx'):
#             quick1 = (root + '/' + str(file))


os.system('finaloutput\datafile.docx')
os.system('python mod.py')



