QUnit.test( "Select parent test", function( assert ) {
    createDefaultStructure();

    $('#child').parentCheckBox('#parent');

    $('#child').prop('checked', true).change();

    assert.ok($('#parent').is(":checked"),"Passed!");
});

QUnit.test( "Parent disabled test", function( assert ) {
    createDefaultStructure();

    $('#child').parentCheckBox('#parent');

    $('#child').prop('checked', true).change();

    assert.ok($('#parent').is(":disabled"),"Passed!");
});


QUnit.testDone(function( details ) {
    var elementWrapper = $('#elementWrapper');
    elementWrapper.empty();
});

var createDefaultStructure = function(){
    var elementWrapper = $('#elementWrapper');

    var checkbox = $('<input type="checkbox" />');
    var parentCheckBox = checkbox.clone();
    parentCheckBox.attr('id','parent');

    var childCheckBox = checkbox.clone();
    childCheckBox.attr('id', 'child');

    elementWrapper.append(parentCheckBox);
    elementWrapper.append(childCheckBox);


}