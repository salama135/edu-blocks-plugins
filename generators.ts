Blockly.Python['math_number'] = function(block) {
    var code = parseFloat(block.getFieldValue('NUM'));
    var order = code < 0 ? Blockly.Python.ORDER_UNARY_SIGN : Blockly.Python.ORDER_ATOMIC;
    return [code.toString(), order];
};

Blockly.Python['import_svg'] = function(block) {
    var code = 'from svg import SVGDrawing\n';
    return code;
};

Blockly.Python['svg_init'] = function(block) {
    var drawing = Blockly.Python.nameDB_.getName(block.getFieldValue('drawing'), Blockly.VARIABLE_CATEGORY_NAME);
    var width = Blockly.Python.valueToCode(block, 'width', Blockly.Python.ORDER_ATOMIC) || '400';
    var height = Blockly.Python.valueToCode(block, 'height', Blockly.Python.ORDER_ATOMIC) || '300';
    var code = `${drawing} = SVGDrawing(${width}, ${height})\n`;
    return code;
};

Blockly.Python['svg_draw_circle'] = function(block) {
    var shape = Blockly.Python.nameDB_.getName(block.getFieldValue('shape'), Blockly.VARIABLE_CATEGORY_NAME);
    var drawing = Blockly.Python.nameDB_.getName(block.getFieldValue('drawing'), Blockly.VARIABLE_CATEGORY_NAME);
    var cx = Blockly.Python.valueToCode(block, 'cx', Blockly.Python.ORDER_ATOMIC) || '0';
    var cy = Blockly.Python.valueToCode(block, 'cy', Blockly.Python.ORDER_ATOMIC) || '0';
    var radius = Blockly.Python.valueToCode(block, 'radius', Blockly.Python.ORDER_ATOMIC) || '50';
    var code = `${shape} = ${drawing}.draw_circle(${cx}, ${cy}, ${radius})\n`;
    return code;
};

Blockly.Python['svg_draw_rect'] = function(block) {
    var shape = Blockly.Python.nameDB_.getName(block.getFieldValue('shape'), Blockly.VARIABLE_CATEGORY_NAME);
    var drawing = Blockly.Python.nameDB_.getName(block.getFieldValue('drawing'), Blockly.VARIABLE_CATEGORY_NAME);
    var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC) || '0';
    var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC) || '0';
    var width = Blockly.Python.valueToCode(block, 'width', Blockly.Python.ORDER_ATOMIC) || '100';
    var height = Blockly.Python.valueToCode(block, 'height', Blockly.Python.ORDER_ATOMIC) || '50';
    var code = `${shape} = ${drawing}.draw_rect(${x}, ${y}, ${width}, ${height})\n`;
    return code;
};

Blockly.Python['svg_draw_triangle'] = function(block) {
    var shape = Blockly.Python.nameDB_.getName(block.getFieldValue('shape'), Blockly.VARIABLE_CATEGORY_NAME);
    var drawing = Blockly.Python.nameDB_.getName(block.getFieldValue('drawing'), Blockly.VARIABLE_CATEGORY_NAME);
    var x1 = Blockly.Python.valueToCode(block, 'x1', Blockly.Python.ORDER_ATOMIC) || '0';
    var y1 = Blockly.Python.valueToCode(block, 'y1', Blockly.Python.ORDER_ATOMIC) || '0';
    var x2 = Blockly.Python.valueToCode(block, 'x2', Blockly.Python.ORDER_ATOMIC) || '50';
    var y2 = Blockly.Python.valueToCode(block, 'y2', Blockly.Python.ORDER_ATOMIC) || '50';
    var x3 = Blockly.Python.valueToCode(block, 'x3', Blockly.Python.ORDER_ATOMIC) || '0';
    var y3 = Blockly.Python.valueToCode(block, 'y3', Blockly.Python.ORDER_ATOMIC) || '50';
    var code = `${shape} = ${drawing}.draw_triangle(${x1}, ${y1}, ${x2}, ${y2}, ${x3}, ${y3})\n`;
    return code;
};

Blockly.Python['svg_draw_line'] = function(block) {
    var shape = Blockly.Python.nameDB_.getName(block.getFieldValue('shape'), Blockly.VARIABLE_CATEGORY_NAME);
    var drawing = Blockly.Python.nameDB_.getName(block.getFieldValue('drawing'), Blockly.VARIABLE_CATEGORY_NAME);
    var x1 = Blockly.Python.valueToCode(block, 'x1', Blockly.Python.ORDER_ATOMIC) || '0';
    var y1 = Blockly.Python.valueToCode(block, 'y1', Blockly.Python.ORDER_ATOMIC) || '0';
    var x2 = Blockly.Python.valueToCode(block, 'x2', Blockly.Python.ORDER_ATOMIC) || '100';
    var y2 = Blockly.Python.valueToCode(block, 'y2', Blockly.Python.ORDER_ATOMIC) || '0';
    var code = `${shape} = ${drawing}.draw_line(${x1}, ${y1}, ${x2}, ${y2})\n`;
    return code;
};

Blockly.Python['svg_draw_text'] = function(block) {
    var shape = Blockly.Python.nameDB_.getName(block.getFieldValue('shape'), Blockly.VARIABLE_CATEGORY_NAME);
    var drawing = Blockly.Python.nameDB_.getName(block.getFieldValue('drawing'), Blockly.VARIABLE_CATEGORY_NAME);
    var text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC) || '"Text"';
    var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC) || '0';
    var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC) || '0';
    var code = `${shape} = ${drawing}.draw_text(${text}, ${x}, ${y})\n`;
    return code;
};

Blockly.Python['svg_set_style'] = function(block) {
    var shape = Blockly.Python.nameDB_.getName(block.getFieldValue('shape'), Blockly.VARIABLE_CATEGORY_NAME);
    var fill_color = Blockly.Python.valueToCode(block, 'fill_color', Blockly.Python.ORDER_ATOMIC) || '"blue"';
    var stroke_color = Blockly.Python.valueToCode(block, 'stroke_color', Blockly.Python.ORDER_ATOMIC) || '"black"';
    var stroke_width = Blockly.Python.valueToCode(block, 'stroke_width', Blockly.Python.ORDER_ATOMIC) || '2';
    var code = `${shape}.set_style(${fill_color}, ${stroke_color}, ${stroke_width})\n`;
    return code;
};

Blockly.Python['svg_move'] = function(block) {
    var shape = Blockly.Python.nameDB_.getName(block.getFieldValue('shape'), Blockly.VARIABLE_CATEGORY_NAME);
    var dx = Blockly.Python.valueToCode(block, 'dx', Blockly.Python.ORDER_ATOMIC) || '10';
    var dy = Blockly.Python.valueToCode(block, 'dy', Blockly.Python.ORDER_ATOMIC) || '10';
    var code = `${shape}.move(${dx}, ${dy})\n`;
    return code;
};

Blockly.Python['svg_rotate'] = function(block) {
    var shape = Blockly.Python.nameDB_.getName(block.getFieldValue('shape'), Blockly.VARIABLE_CATEGORY_NAME);
    var angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC) || '45';
    var code = `${shape}.rotate(${angle})\n`;
    return code;
};

Blockly.Python['svg_save'] = function(block) {
    var drawing = Blockly.Python.nameDB_.getName(block.getFieldValue('drawing'), Blockly.VARIABLE_CATEGORY_NAME);
    var filename = Blockly.Python.valueToCode(block, 'filename', Blockly.Python.ORDER_ATOMIC) || '"drawing.svg"';
    var code = `${drawing}.save(${filename})\n`;
    return code;
};

Blockly.Python['svg_display'] = function(block) {
    var drawing = Blockly.Python.nameDB_.getName(block.getFieldValue('drawing'), Blockly.VARIABLE_CATEGORY_NAME);
    var code = `${drawing}.display()\n`;
    return code;
};
