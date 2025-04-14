// This file exists to satisfy the config.json requirement,
// but the core functionality is all handled through the HTML blocks directly.
// You could add helper functions or additional JavaScript here if needed.

// Example helper function for SVG manipulation that could be used
function getSVGElement() {
    // Get the first SVG element on the page
    return document.querySelector('svg');
}

// Function to make an element draggable
function makeDraggable(element) {
    let selectedElement = null;
    let offset = { x: 0, y: 0 };
    
    element.addEventListener('mousedown', startDrag);
    element.addEventListener('mousemove', drag);
    element.addEventListener('mouseup', endDrag);
    element.addEventListener('mouseleave', endDrag);
    
    function startDrag(evt) {
        selectedElement = evt.target;
        offset.x = evt.clientX;
        offset.y = evt.clientY;
    }
    
    function drag(evt) {
        if (selectedElement) {
            evt.preventDefault();
            const dx = evt.clientX - offset.x;
            const dy = evt.clientY - offset.y;
            offset.x = evt.clientX;
            offset.y = evt.clientY;
            
            // Get current transform or create a new one
            const transform = selectedElement.getAttribute('transform') || '';
            
            // Extract current translate values (if any)
            let currentX = 0;
            let currentY = 0;
            const translateMatch = transform.match(/translate\(([^,]+),([^)]+)\)/);
            if (translateMatch) {
                currentX = parseFloat(translateMatch[1]);
                currentY = parseFloat(translateMatch[2]);
                
                // Update the transform attribute with new translate values
                const newTransform = transform.replace(
                    /translate\([^)]+\)/, 
                    `translate(${currentX + dx},${currentY + dy})`
                );
                selectedElement.setAttribute('transform', newTransform);
            } else {
                // Add a new translate transform
                selectedElement.setAttribute('transform', 
                    `${transform} translate(${dx},${dy})`);
            }
        }
    }
    
    function endDrag() {
        selectedElement = null;
    }
}

// Initialize draggable SVG elements when page loads
document.addEventListener('DOMContentLoaded', function() {
    const svg = getSVGElement();
    if (svg) {
        // Apply draggable functionality to all SVG shapes
        const shapes = svg.querySelectorAll('circle, rect, polygon, line, text, ellipse');
        shapes.forEach(shape => makeDraggable(shape));
    }
});
