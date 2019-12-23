 var myJSON = '{ "employee": { "display_name":"EMPLOYEE NAME:", "format":"string", "type":"textbox", "dflt":"null", "isMandatory":"true" } }';

 var employee = $.parseJSON(myJSON).employee; //get employee object
 if (employee.type == "textbox") {
   $('<label>').attr({for: 'employee_name'}).text(employee.display_name).appendTo($('body'));
   $('<input>').attr({type: 'text', id:'employee_name'}).appendTo($('body'));
 }