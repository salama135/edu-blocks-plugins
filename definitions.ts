const svgColor = "#FF6B6B";

Blockly.Blocks['math_number'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldNumber(0), 'NUM');
      this.setOutput(true, 'Number');
      this.setColour(230);
      this.setTooltip("A number.");
      this.setHelpUrl("");
    }
};

  
Blockly.Blocks['import_svg'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("from svg import SVGDrawing");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(svgColor);
    }
};

Blockly.Blocks['svg_init'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("drawing"), "drawing")
          .appendField(" = SVGDrawing(");
      this.appendValueInput("width")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField(", ");
      this.appendValueInput("height")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(svgColor);
    }
};

Blockly.Blocks['svg_draw_circle'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("circle"), "shape")
          .appendField(" = ")
          .appendField(new Blockly.FieldVariable("drawing"), "drawing")
          .appendField(".draw_circle(");
      this.appendValueInput("cx")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField(", ");
      this.appendValueInput("cy")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField(", ");
      this.appendValueInput("radius")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(svgColor);
    }
};

Blockly.Blocks['svg_draw_rect'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("rect"), "shape")
          .appendField(" = ")
          .appendField(new Blockly.FieldVariable("drawing"), "drawing")
          .appendField(".draw_rect(");
      this.appendValueInput("x")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField(", ");
      this.appendValueInput("y")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField(", ");
      this.appendValueInput("width")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField(", ");
      this.appendValueInput("height")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(svgColor);
    }
};

Blockly.Blocks['svg_draw_triangle'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("triangle"), "shape")
          .appendField(" = ")
          .appendField(new Blockly.FieldVariable("drawing"), "drawing")
          .appendField(".draw_triangle(");
      this.appendValueInput("x1")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField(", ");
      this.appendValueInput("y1")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField(", ");
      this.appendValueInput("x2")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField(", ");
      this.appendValueInput("y2")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField(", ");
      this.appendValueInput("x3")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField(", ");
      this.appendValueInput("y3")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(svgColor);
    }
};

Blockly.Blocks['svg_draw_line'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("line"), "shape")
          .appendField(" = ")
          .appendField(new Blockly.FieldVariable("drawing"), "drawing")
          .appendField(".draw_line(");
      this.appendValueInput("x1")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField(", ");
      this.appendValueInput("y1")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField(", ");
      this.appendValueInput("x2")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField(", ");
      this.appendValueInput("y2")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(svgColor);
    }
};

Blockly.Blocks['svg_draw_text'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("text"), "shape")
          .appendField(" = ")
          .appendField(new Blockly.FieldVariable("drawing"), "drawing")
          .appendField(".draw_text(");
      this.appendValueInput("text")
          .setCheck("String");
      this.appendDummyInput()
          .appendField(", ");
      this.appendValueInput("x")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField(", ");
      this.appendValueInput("y")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(svgColor);
    }
};

Blockly.Blocks['svg_set_style'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("shape"), "shape")
          .appendField(".set_style(");
      this.appendValueInput("fill_color")
          .setCheck("String");
      this.appendDummyInput()
          .appendField(", ");
      this.appendValueInput("stroke_color")
          .setCheck("String");
      this.appendDummyInput()
          .appendField(", ");
      this.appendValueInput("stroke_width")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(svgColor);
    }
};

Blockly.Blocks['svg_move'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("shape"), "shape")
          .appendField(".move(");
      this.appendValueInput("dx")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField(", ");
      this.appendValueInput("dy")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(svgColor);
    }
};

Blockly.Blocks['svg_rotate'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("shape"), "shape")
          .appendField(".rotate(");
      this.appendValueInput("angle")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(svgColor);
    }
};

Blockly.Blocks['svg_save'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("drawing"), "drawing")
          .appendField(".save(");
      this.appendValueInput("filename")
          .setCheck("String");
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(svgColor);
    }
};

Blockly.Blocks['svg_display'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("drawing"), "drawing")
          .appendField(".display()");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(svgColor);
    }
};