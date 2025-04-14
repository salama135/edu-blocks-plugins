const svgColor = "#FF6B6B";

Blockly.Blocks['svg_container'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("SVG Container");
      this.appendStatementInput("content")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("width")
          .appendField(new Blockly.FieldNumber(400, 0), "width")
          .appendField("height")
          .appendField(new Blockly.FieldNumber(300, 0), "height");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(svgColor);
      this.setTooltip("Create an SVG container");
    }
};

Blockly.Blocks['svg_circle'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Circle")
          .appendField("cx")
          .appendField(new Blockly.FieldNumber(100, 0), "cx")
          .appendField("cy")
          .appendField(new Blockly.FieldNumber(100, 0), "cy")
          .appendField("radius")
          .appendField(new Blockly.FieldNumber(50, 0), "radius");
      this.appendDummyInput()
          .appendField("style");
      this.appendStatementInput("style")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(svgColor);
      this.setTooltip("Create a circle element");
    }
};

Blockly.Blocks['svg_rect'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Rectangle")
          .appendField("x")
          .appendField(new Blockly.FieldNumber(50, 0), "x")
          .appendField("y")
          .appendField(new Blockly.FieldNumber(50, 0), "y");
      this.appendDummyInput()
          .appendField("width")
          .appendField(new Blockly.FieldNumber(100, 0), "width")
          .appendField("height")
          .appendField(new Blockly.FieldNumber(50, 0), "height");
      this.appendDummyInput()
          .appendField("style");
      this.appendStatementInput("style")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(svgColor);
      this.setTooltip("Create a rectangle element");
    }
};

Blockly.Blocks['svg_triangle'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Triangle");
      this.appendDummyInput()
          .appendField("point 1:")
          .appendField("x")
          .appendField(new Blockly.FieldNumber(100, 0), "x1")
          .appendField("y")
          .appendField(new Blockly.FieldNumber(50, 0), "y1");
      this.appendDummyInput()
          .appendField("point 2:")
          .appendField("x")
          .appendField(new Blockly.FieldNumber(150, 0), "x2")
          .appendField("y")
          .appendField(new Blockly.FieldNumber(150, 0), "y2");
      this.appendDummyInput()
          .appendField("point 3:")
          .appendField("x")
          .appendField(new Blockly.FieldNumber(50, 0), "x3")
          .appendField("y")
          .appendField(new Blockly.FieldNumber(150, 0), "y3");
      this.appendDummyInput()
          .appendField("style");
      this.appendStatementInput("style")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(svgColor);
      this.setTooltip("Create a triangle using polygon");
    }
};

Blockly.Blocks['svg_line'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Line");
      this.appendDummyInput()
          .appendField("from:")
          .appendField("x1")
          .appendField(new Blockly.FieldNumber(50, 0), "x1")
          .appendField("y1")
          .appendField(new Blockly.FieldNumber(50, 0), "y1");
      this.appendDummyInput()
          .appendField("to:")
          .appendField("x2")
          .appendField(new Blockly.FieldNumber(200, 0), "x2")
          .appendField("y2")
          .appendField(new Blockly.FieldNumber(50, 0), "y2");
      this.appendDummyInput()
          .appendField("style");
      this.appendStatementInput("style")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(svgColor);
      this.setTooltip("Create a line element");
    }
};

Blockly.Blocks['svg_text'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Text");
      this.appendDummyInput()
          .appendField("content")
          .appendField(new Blockly.FieldTextInput("Hello SVG!"), "content");
      this.appendDummyInput()
          .appendField("position:")
          .appendField("x")
          .appendField(new Blockly.FieldNumber(100, 0), "x")
          .appendField("y")
          .appendField(new Blockly.FieldNumber(100, 0), "y");
      this.appendDummyInput()
          .appendField("style");
      this.appendStatementInput("style")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(svgColor);
      this.setTooltip("Create a text element");
    }
};

Blockly.Blocks['svg_ellipse'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Ellipse")
          .appendField("cx")
          .appendField(new Blockly.FieldNumber(100, 0), "cx")
          .appendField("cy")
          .appendField(new Blockly.FieldNumber(100, 0), "cy");
      this.appendDummyInput()
          .appendField("rx")
          .appendField(new Blockly.FieldNumber(70, 0), "rx")
          .appendField("ry")
          .appendField(new Blockly.FieldNumber(40, 0), "ry");
      this.appendDummyInput()
          .appendField("style");
      this.appendStatementInput("style")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(svgColor);
      this.setTooltip("Create an ellipse element");
    }
};

Blockly.Blocks['svg_fill'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Fill")
          .appendField(new Blockly.FieldColour("#3366ff"), "color");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(svgColor);
      this.setTooltip("Set fill color");
    }
};

Blockly.Blocks['svg_stroke'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Stroke")
          .appendField(new Blockly.FieldColour("#000000"), "color")
          .appendField("width")
          .appendField(new Blockly.FieldNumber(2, 0), "width");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(svgColor);
      this.setTooltip("Set stroke color and width");
    }
};

Blockly.Blocks['svg_opacity'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Opacity")
          .appendField(new Blockly.FieldNumber(1, 0, 1, 0.1), "opacity");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(svgColor);
      this.setTooltip("Set opacity from 0 to 1");
    }
};

Blockly.Blocks['svg_transform'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Transform")
          .appendField(new Blockly.FieldDropdown([
              ["translate", "translate"],
              ["rotate", "rotate"],
              ["scale", "scale"]
          ]), "type");
      this.appendDummyInput()
          .appendField("x/angle")
          .appendField(new Blockly.FieldNumber(10), "value1")
          .appendField("y")
          .appendField(new Blockly.FieldNumber(10), "value2");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(svgColor);
      this.setTooltip("Apply transform");
    }
};
