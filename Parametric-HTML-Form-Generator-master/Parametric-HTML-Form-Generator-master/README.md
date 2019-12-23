Parametric-HTML-Form-Generator
==============================

This short script generates HTML form inputs from a specification provided by a JSON packet.

Ever faced a situation where you had to create HTML form input elements on the fly?
Or create these elements multiple times based on user's request.

To solve this issue, I created this script, which creates the HTML form inputs on the run.
The contract/specification of the inputs is defined in an array (ideally this array should be created from a JSON response).

Currently the input elements supported are:
==============================
TextBox
RadioButton
Slider
CheckBox

The script depends upon jquery & jquery UI to create these elements.
The styling is provided by the twitter-bootstrap-library!

To use this script:
==============================
First of all download the zip, and run it locally. You will understand what is going on.
The input params have to be defined in  specific way for eg. a textbox is defined as:

    type : 'textbox',
    id : 'frmTxtBox',
    keyName : 'TextBoxKey',
    label : 'This is the label for a TextBox Element',    
    name : 'TextBoxName',    
    defaultVal : 'Default Value'


For the different input elements, you can check the format-specification from the js file.

The nice part:
==============================
This script can take care of nested elements as well.
That is you do not have to worry about if one of your radiobuttons opens up a mini-form of other input elements.
This case is shown in the provided files.

Future Plans:
==============================
I do not have time right now to add new features to the script, but the plan is:
1. Support more input elements.
2. Support attaching functions with each of the input elements.
3. Support form-submission actions.
