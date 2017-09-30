draw = function() {
    stroke(mouseX, 62, mouseY);
    strokeWeight(20);
    fill(mouseX, mouseY, 0);
    ellipse(mouseX, mouseY, mouseY, mouseX);
};
