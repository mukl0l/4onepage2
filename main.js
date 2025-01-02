window.onload = function() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        // Get the dimensions of the rightbottom div
        const rightBottom = document.querySelector('.rightbottom');
        canvas.width = rightBottom.offsetWidth;
        canvas.height = rightBottom.offsetHeight;

        // Clear previous drawings
        ctx.clearRect(0, 0, canvas.width, canvas.height); 
        
        // Draw multiple lines with different customizations
        drawLine(75, 165, 75, 265, 'orange', 3); 
        drawLine(75, 265, 290, 265, 'orange', 3); 
        drawLine(290, 265, 290, 85, 'orange', 3); 
        drawLine(290, 85, 500, 85, 'orange', 3); 
        drawLine(500, 85, 500, 265, 'orange', 3); 
        drawLine(500, 265, 715, 265, 'orange', 3); 
        drawLine(715, 265, 715, 165, 'orange', 3); 
    }

    // Function to draw a line with custom parameters (start x, start y, end x, end y, color, thickness)
    function drawLine(startX, startY, endX, endY, color, thickness) {
        ctx.beginPath();
        ctx.moveTo(startX, startY); // Starting point (x, y)
        ctx.lineTo(endX, endY); // Ending point (x, y)
        ctx.strokeStyle = color; // Set line color
        ctx.lineWidth = thickness; // Set line thickness
        ctx.stroke(); // Apply the drawing
    }

    // Call resizeCanvas initially
    resizeCanvas();

    // Update canvas size and drawing on window resize
    window.addEventListener('resize', resizeCanvas);
};
