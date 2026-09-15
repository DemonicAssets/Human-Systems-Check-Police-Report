HSC // Human Systems Check - Future Police Website Template
==========================================================

FILES
-----
index.html   - Home page
model.html   - Babylon.js interactive 3D page
story.html   - Wanted story / case file page
styles.css   - Shared futuristic HUD styling
app.js       - Shared clock script
model.js     - Babylon.js 3D scene and controls
assets/robot-logo.png     - Robot logo extracted from your supplied drawing
assets/subject-portrait.jpg - Half-human / half-AI portrait used by the template

HOW TO RUN
----------
Option 1: Double-click index.html. The normal pages work immediately.

Option 2 (recommended): Serve the folder with a simple local web server.
For example, if Python is installed:

  python -m http.server 8000

Then open:
  http://localhost:8000

BABYLON.JS
----------
model.html connects to Babylon.js through the official CDN:
  https://cdn.babylonjs.com/babylon.js

The current 3D page builds a cybernetic head/torso procedurally, so it works
without a separate 3D model file.

TO USE YOUR OWN .GLB MODEL
--------------------------
1. Put the .glb in assets/, for example:
     assets/subject.glb

2. Add this script below the Babylon.js script in model.html:
     <script src="https://cdn.babylonjs.com/loaders/babylonjs.loaders.min.js"></script>

3. In model.js, use:
     BABYLON.SceneLoader.Append("assets/", "subject.glb", scene, () => {
       console.log("Model loaded");
     });

EDITING THE STORY
-----------------
Open story.html and change the text inside the case-copy, timeline, charges,
and incident sections.

EDITING THE BOUNTY
------------------
Search the HTML files for "$10,000" and replace it with any amount you want.
