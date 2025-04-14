Blockly.HTML['svg_container'] = function(block) {
    var width = block.getFieldValue('width');
    var height = block.getFieldValue('height');
    var content = Blockly.HTML.statementToCode(block, 'content');
    
    var code = '<svg width="' + width + '" height="' + height + '" xmlns="http://www.w3.org/2000/svg">\n';
    code += content;
    code += '</svg>\n';
    
    return code;
};

Blockly.HTML['svg_circle'] = function(block) {
    var cx = block.getFieldValue('cx');
    var cy = block.getFieldValue('cy');
    var radius = block.getFieldValue('radius');
    var style = Blockly.HTML.statementToCode(block, 'style');
    
    var code = '<circle cx="' + cx + '" cy="' + cy + '" r="' + radius + '"';
    
    if (style) {
        code += ' style="' + style.trim() + '"';
    }
    
    code += '></circle>\n';
    
    return code;
};

Blockly.HTML['svg_rect'] = function(block) {
    var x = block.getFieldValue('x');
    var y = block.getFieldValue('y');
    var width = block.getFieldValue('width');
    var height = block.getFieldValue('height');
    var style = Blockly.HTML.statementToCode(block, 'style');
    
    var code = '<rect x="' + x + '" y="' + y + '" width="' + width + '" height="' + height + '"';
    
    if (style) {
        code += ' style="' + style.trim() + '"';
    }
    
    code += '></rect>\n';
    
    return code;
};

Blockly.HTML['svg_triangle'] = function(block) {
    var x1 = block.getFieldValue('x1');
    var y1 = block.getFieldValue('y1');
    var x2 = block.getFieldValue('x2');
    var y2 = block.getFieldValue('y2');
    var x3 = block.getFieldValue('x3');
    var y3 = block.getFieldValue('y3');
    var style = Blockly.HTML.statementToCode(block, 'style');
    
    var points = x1 + ',' + y1 + ' ' + x2 + ',' + y2 + ' ' + x3 + ',' + y3;
    var code = '<polygon points="' + points + '"';
    
    if (style) {
        code += ' style="' + style.trim() + '"';
    }
    
    code += '></polygon>\n';
    
    return code;
};

Blockly.HTML['svg_line'] = function(block) {
    var x1 = block.getFieldValue('x1');
    var y1 = block.getFieldValue('y1');
    var x2 = block.getFieldValue('x2');
    var y2 = block.getFieldValue('y2');
    var style = Blockly.HTML.statementToCode(block, 'style');
    
    var code = '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '"';
    
    if (style) {
        code += ' style="' + style.trim() + '"';
    }
    
    code += '></line>\n';
    
    return code;
};

Blockly.HTML['svg_text'] = function(block) {
    var content = block.getFieldValue('content');
    var x = block.getFieldValue('x');
    var y = block.getFieldValue('y');
    var style = Blockly.HTML.statementToCode(block, 'style');
    
    var code = '<text x="' + x + '" y="' + y + '"';
    
    if (style) {
        code += ' style="' + style.trim() + '"';
    }
    
    code += '>' + content + '</text>\n';
    
    return code;
};

Blockly.HTML['svg_ellipse'] = function(block) {
    var cx = block.getFieldValue('cx');
    var cy = block.getFieldValue('cy');
    var rx = block.getFieldValue('rx');
    var ry = block.getFieldValue('ry');
    var style = Blockly.HTML.statementToCode(block, 'style');
    
    var code = '<ellipse cx="' + cx + '" cy="' + cy + '" rx="' + rx + '" ry="' + ry + '"';
    
    if (style) {
        code += ' style="' + style.trim() + '"';
    }
    
    code += '></ellipse>\n';
    
    return code;
};

Blockly.HTML['svg_fill'] = function(block) {
    var color = block.getFieldValue('color');
    return 'fill: ' + color + '; ';
};

Blockly.HTML['svg_stroke'] = function(block) {
    var color = block.getFieldValue('color');
    var width = block.getFieldValue('width');
    return 'stroke: ' + color + '; stroke-width: ' + width + '; ';
};

Blockly.HTML['svg_opacity'] = function(block) {
    var opacity = block.getFieldValue('opacity');
    return 'opacity: ' + opacity + '; ';
};

Blockly.HTML['svg_transform'] = function(block) {
    var type = block.getFieldValue('type');
    var value1 = block.getFieldValue('value1');
    var value2 = block.getFieldValue('value2');
    
    var transformValue = '';
    
    if (type === 'translate') {
        transformValue = 'translate(' + value1 + ',' + value2 + ')';
    } else if (type === 'rotate') {
        transformValue = 'rotate(' + value1 + ')';
    } else if (type === 'scale') {
        transformValue = 'scale(' + value1 + ',' + value2 + ')';
    }
    
    return 'transform: ' + transformValue + '; ';
};