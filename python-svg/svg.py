class SVGShape:
    def __init__(self, element_id, element_type):
        self.id = element_id
        self.type = element_type
        self.attributes = {}
        self.transform = ""
        self.content = None
        
    def set_style(self, fill_color, stroke_color, stroke_width):
        self.attributes["fill"] = fill_color
        self.attributes["stroke"] = stroke_color
        self.attributes["stroke-width"] = str(stroke_width)
        return self
        
    def move(self, dx, dy):
        if self.transform:
            self.transform += f" translate({dx} {dy})"
        else:
            self.transform = f"translate({dx} {dy})"
        return self
        
    def rotate(self, angle):
        if self.transform:
            self.transform += f" rotate({angle})"
        else:
            self.transform = f"rotate({angle})"
        return self
        
    def to_svg(self):
        attributes = ' '.join([f'{k}="{v}"' for k, v in self.attributes.items()])
        
        if self.transform:
            attributes += f' transform="{self.transform}"'
            
        if self.content is not None:
            return f'<{self.type} id="{self.id}" {attributes}>{self.content}</{self.type}>'
        else:
            return f'<{self.type} id="{self.id}" {attributes} />'


class SVGDrawing:
    def __init__(self, width=400, height=300):
        self.width = width
        self.height = height
        self.shapes = []
        self.shape_counter = 0
        
    def _next_id(self):
        self.shape_counter += 1
        return f"shape_{self.shape_counter}"
        
    def draw_circle(self, cx, cy, radius):
        circle = SVGShape(self._next_id(), "circle")
        circle.attributes["cx"] = str(cx)
        circle.attributes["cy"] = str(cy)
        circle.attributes["r"] = str(radius)
        circle.set_style("blue", "black", 2)
        self.shapes.append(circle)
        return circle
        
    def draw_rect(self, x, y, width, height):
        rect = SVGShape(self._next_id(), "rect")
        rect.attributes["x"] = str(x)
        rect.attributes["y"] = str(y)
        rect.attributes["width"] = str(width)
        rect.attributes["height"] = str(height)
        rect.set_style("green", "black", 2)
        self.shapes.append(rect)
        return rect
        
    def draw_triangle(self, x1, y1, x2, y2, x3, y3):
        triangle = SVGShape(self._next_id(), "polygon")
        triangle.attributes["points"] = f"{x1},{y1} {x2},{y2} {x3},{y3}"
        triangle.set_style("red", "black", 2)
        self.shapes.append(triangle)
        return triangle
        
    def draw_line(self, x1, y1, x2, y2):
        line = SVGShape(self._next_id(), "line")
        line.attributes["x1"] = str(x1)
        line.attributes["y1"] = str(y1)
        line.attributes["x2"] = str(x2)
        line.attributes["y2"] = str(y2)
        line.set_style("none", "black", 2)
        self.shapes.append(line)
        return line
        
    def draw_text(self, text, x, y):
        text_element = SVGShape(self._next_id(), "text")
        text_element.attributes["x"] = str(x)
        text_element.attributes["y"] = str(y)
        text_element.attributes["font-family"] = "Arial, sans-serif"
        text_element.attributes["font-size"] = "16"
        text_element.content = text
        text_element.set_style("black", "none", 0)
        self.shapes.append(text_element)
        return text_element
    
    def to_svg_string(self):
        svg_start = f'<svg width="{self.width}" height="{self.height}" xmlns="http://www.w3.org/2000/svg">'
        svg_end = '</svg>'
        shapes_svg = "\n".join([shape.to_svg() for shape in self.shapes])
        return f"{svg_start}\n{shapes_svg}\n{svg_end}"
    
    def save(self, filename):
        with open(filename, 'w') as f:
            f.write(self.to_svg_string())
        print(f"SVG saved to {filename}")
    
    def display(self):
        from IPython.display import SVG, display
        try:
            display(SVG(self.to_svg_string()))
            print("SVG displayed successfully")
        except:
            print("Could not display SVG. Are you running in Jupyter or similar environment?")
            print("SVG code:")
            print(self.to_svg_string())