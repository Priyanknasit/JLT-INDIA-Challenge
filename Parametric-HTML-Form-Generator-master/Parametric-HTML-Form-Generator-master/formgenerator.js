/**
 * @author Chanakya Bhardwaj/www.chanakyabhardwaj.com
 */
var params = [
    {
        type : 'textbox',
        id : 'frmTxtBox',
        keyName : 'TextBoxKey',
        label : 'This is the label for a TextBox Element',
        
        name : 'TextBoxName',
        
        defaultVal : 'Default Value'
    },
    {
        type : 'checkbox',
        id : 'frmChkBox',
        keyName : 'CheckBoxKey',
        label : 'This is the label for a Checkbox Element',
        
        uncheckedVal : 1,
        checkedVal : 2,
        
        defaultState : true
    },
    {
        type : 'slider',
        id : 'frmSldr',
        keyName : 'SliderKey',
        label : 'This is the label for a Slider Element',
        
        startingVal : 1,
        endingVal : 100,            
        stepSize : 5,
        displayElem : '',
        conversionFactor : 1,
        
        defaultVal : 10
    },
    {
        type : 'radio',
        id : 'frmRdio',
        keyName : 'RadioKey',
        label : 'This is the label for a Radio Element',
        name : 'RadioName',
        options : [
            {
                label : "This is the label for a Radio Element's Option# 1",
                value : "Val1",
                defaultState : true,
                params : [
                    {
                        type : 'checkbox',
                        id : 'frmNstdChkBox1',
                        keyName : 'NestedCheckboxKey1',
                        label : 'This is the label for a Nested Checkbox Element',
                        
                        uncheckedVal : 0,
                        checkedVal : 1,
                        
                        defaultState : true,
                        nested : true
                    }, 
                    {
                        type : 'slider',
                        id : 'frmNstdSldr1',
                        keyName : 'NestedSliderKey1',
                        label : 'This is the label for a Nested Slider Element',
                        
                        startingVal : 1,
                        endingVal : 100,                            
                        stepSize : 10,
                        displayElem : '',
                        conversionFactor : 1,
                        
                        defaultVal : 10,
                        nested : true
                    },
                    {
                        type : 'textbox',
                        id : 'frmNstdTxtBox1',
                        keyName : 'NestedTextBoxKey1',
                        label : 'This is the label for a Nested TextBox Element',
                        
                        name : 'NestedTextBoxName1',
                        
                        defaultVal : 'Default Value',
                        nested : true
                    }
                ]
            }, 
            {
                label : "This is the label for a Radio Element's Option# 2",
                value : "Val2",
                defaultState : false,
                params : [
                    {
                        type : 'checkbox',
                        id : 'frmNstdChkBox2',
                        keyName : 'NestedCheckboxKey2',
                        label : 'This is the label for a Nested Checkbox Element',
                        
                        uncheckedVal : 0,
                        checkedVal : 1,
                        
                        defaultState : true,
                        nested : true
                    }, 
                    {
                        type : 'slider',
                        id : 'frmNstdSldr2',
                        keyName : 'NestedSliderKey2',
                        label : 'This is the label for a Nested Slider Element',
                        
                        startingVal : 1,
                        endingVal : 100,                            
                        stepSize : 10,
                        displayElem : '',
                        conversionFactor : 1,
                        
                        defaultVal : 10,
                        nested : true
                    },
                    {
                        type : 'textbox',
                        id : 'frmNstdTxtBox2',
                        keyName : 'NestedTextBoxKey2',
                        label : 'This is the label for a Nested TextBox Element',
                        
                        name : 'NestedTextBoxName2',
                        
                        defaultVal : 'Default Value',
                        nested : true
                    }
                ]
            }
        ]
    }
];

var createForm = function (params) {
    try {
        var inputWindow = $("<div>");
        inputWindow.addClass("well");
        var helperArr = [];
        
        if (params.length == 0) {
            var elem = $("<h3>");
            elem.html('No input paramters.');
            inputWindow.append(elem);
            return {
                'win' : inputWindow,
                'arr' : helperArr
            };
        }

        for (var param = 0, l = params.length; param < l; param++) {
            var data = params[param];
            switch (data.type) {
            case 'slider':
                var sliderBox = $('<div>');
                sliderBox.html('<label class="label label-info">' + data.label + '</label>');

                var sliderHelper = $('<div>');
                sliderHelper.html(data.defaultVal);

                var sliderElem = $('<div>');
                sliderElem.attr('id',data.id);
                sliderBox.append(sliderElem);
                sliderBox.append(sliderHelper);

                sliderElem.slider({
                    value : data.defaultVal,
                    min : data.startingVal,
                    max : data.endingVal,
                    step : data.stepSize,
                    slide : function (event, ui) {
                        $(this).next().html(ui.value);
                    }
                });
                inputWindow.append(sliderBox);
                helperArr.push({
                    'type' : 'slider',
                    'key' : data.keyName,
                    'elem' : sliderElem
                });

                break;

            case 'checkbox':
                var chkboxBox = $('<div>');

                var chkboxElem = $('<input type="checkbox" name="' + data.keyName + '" value="">');
                chkboxElem.attr('id',data.id);
                if (data.defaultState) {
                    chkboxElem.attr('checked', true);
                }
                chkboxBox.append('<label class="label label-info">' + data.label + '</label>');
                chkboxBox.append(chkboxElem);
                
                if (data.params) {
                    var retObj = sg.uiMgr.controllers.createAppInputPanel(data.params);
                    chkboxBox.append(retObj.win);
                    for (var a = 0, b = retObj.arr.length; a < b; a++) {
                        var retEnt = retObj.arr[a];
                        retEnt.nested = true;
                        retEnt.parent = chkboxElem;
                        helperArr.push(retEnt);
                    };
                }
                inputWindow.append(chkboxBox);

                helperArr.push({
                    'type' : 'checkbox',
                    'key' : data.keyName,
                    'elem' : chkboxElem,
                    'uncheckedVal' : data.uncheckedVal,
                    'checkedVal' : data.checkedVal
                });

                break;

            case 'radio':
                var radioBox = $('<div>');
                radioBox.addClass('controls');
                
                var radioBoxLabel = $('<div>');
                radioBoxLabel.html('<label class="label label-info">' + data.label + '</label>');
                radioBox.append(radioBoxLabel);

                var radioElemBox = $('<div>');
                radioElemBox.attr('id',data.id);
                for (var i = 0; i < data.options.length; i++) {
                    var option = data.options[i];
                    var radioElem = $('<input type="radio" name="' + data.name + '" value="' + option.value + '"/>');
                    radioElem.addClass('radio');
                    var radioElemLabel = $('<label class="label label-info">' + option.label + '</label>');                    
                    radioElemBox.append(radioElemLabel);
                    radioElemBox.append(radioElem);
                    if (option.defaultState) {
                        radioElem.attr('checked', true);
                    }
                    if (option.params) {
                        var retObj = createForm(option.params);
                        /* if (!option.defaultState) {
                            retObj.win.css('display','none');
                            radioElem.click(function(){
                                $(retObj.win).toggle();
                            })
                        } */
                        radioElemBox.append(retObj.win);

                        for (var a = 0, b = retObj.arr.length; a < b; a++) {
                            var retEnt = retObj.arr[a];
                            retEnt.nested = true;
                            retEnt.parent = radioElem;
                            helperArr.push(retEnt);
                        };
                    }
                }
                radioBox.append(radioElemBox);

                inputWindow.append(radioBox);
                helperArr.push({
                    'type' : 'radio',
                    'key' : data.keyName,
                    'elem' : data.name
                });

                break;

            case 'textbox':
                var textboxBox = $('<div>');

                var textboxElem = $('<input type="text" name="' + data.name + '" value="' + data.defaultVal + '"/>');
                textboxElem.attr('id',data.id);

                textboxBox.append('<label class="label label-info">' + data.label + '</label>');
                textboxBox.append(textboxElem);

                if (data.params) {
                    var retObj = createForm(data.params);
                    textboxBox.append(retObj.win);
                    for (var a = 0, b = retObj.arr.length; a < b; a++) {
                        var retEnt = retObj.arr[a];
                        retEnt.nested = true;
                        retEnt.parent = textboxElem;
                        helperArr.push(retEnt);
                    };
                }
                inputWindow.append(textboxBox);

                helperArr.push({
                    'type' : 'textbox',
                    'key' : data.keyName,
                    'elem' : textboxElem
                });

                break;

            case 'default':
                helperArr.push({
                    'type' : 'default',
                    'key' : data.keyName,
                    'val' : data.val
                });

                break;

            default:
                console.log('Unknown type of input parameter specified.');               
            }

        }
        return {
            'win' : inputWindow,
            'arr' : helperArr
        };
    } 
    catch (e) {     
        console.log(e);
        console.log('Error in creating the form.');
    }
}

$(document).ready(function(){
    var appWindow = $("#appWindow");
    
    appWindow.addClass("hero-unit");
    appWindow.addClass("form-vertical");
    
    var res = createForm(params);
    appWindow.html(res.win);
});
