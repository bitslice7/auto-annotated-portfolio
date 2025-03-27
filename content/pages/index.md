---
type: PageLayout
title: ∅
colors: colors-a
sections:
  - type: HeroSection
    title: 'WE are {NULL}'
    subtitle: /nŭl/
    actions: []
    colors: colors-f
    backgroundSize: full
    elementId: ''
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-16
          - pb-96
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: center
      subtitle:
        textAlign: center
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    text: >+
      <div style="text-align: center">adjective</div>


      <div style="text-align: center">Amounting to nothing; absent or
      nonexistent.</div>


      <div style="text-align: center"></div>

  - type: CtaSection
    title: ''
    text: "```\n<!DOCTYPE html><html lang=\"en\"><head>\_ <meta charset=\"UTF-8\">\_ <title>Tilted Perspective with Nested Circles (No Lighting)</title>\_ <style>\_ \_ body {\_ \_ \_ margin: 0;\_ \_ \_ /* Tall page to enable scrolling */\_ \_ \_ height: 200vh;\_ \_ \_ background: #000; /* Dark background for contrast */\_ \_ \_ overflow-y: scroll;\_ \_ }\_ \_ canvas {\_ \_ \_ display: block;\_ \_ }\_ </style></head><body>\_ <!-- Include Three.js from a CDN -->\_ <script src=\"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js\"></script>\_ <script>\_ \_ // --- Scene Setup ---\_ \_ const scene = new THREE.Scene();\_ \_ const camera = new THREE.PerspectiveCamera(\_ \_ \_ 75,\_ \_ \_ window.innerWidth / window.innerHeight,\_ \_ \_ 0.1,\_ \_ \_ 1000\_ \_ );\_ \_ const renderer = new THREE.WebGLRenderer({ antialias: true });\_ \_ renderer.setSize(window.innerWidth, window.innerHeight);\_ \_ document.body.appendChild(renderer.domElement);\n\_ \_ // --- Create the Extruded Ring (Hollow Disc) ---\_ \_ // Updated dimensions: outer radius = 9, inner radius = 7 (thickness = 2)\_ \_ const outerRadius = 9;\_ \_ const innerRadius = 8;\_ \_ const ringShape = new THREE.Shape();\_ \_ ringShape.absarc(0, 0, outerRadius, 0, Math.PI * 2, false);\n\_ \_ const holePath = new THREE.Path();\_ \_ holePath.absarc(0, 0, innerRadius, 0, Math.PI * 2, true);\_ \_ ringShape.holes.push(holePath);\n\_ \_ const extrudeSettings = {\_ \_ \_ steps: 1,\_ \_ \_ depth: 1, \_ \_ \_ \_ \_ \_ // Extrusion depth\_ \_ \_ bevelEnabled: false,\_ \_ \_ curveSegments: 64 \_ \_ // Smoother curves\_ \_ };\_ \_ const ringGeometry = new THREE.ExtrudeGeometry(ringShape, extrudeSettings);\_ \_ ringGeometry.center(); // Center the geometry at (0,0,0).\n\_ \_ // Use MeshBasicMaterial since no lighting is used.\_ \_ const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });\_ \_ const extrudedRing = new THREE.Mesh(ringGeometry, ringMaterial);\_ \_ scene.add(extrudedRing);\n\_ \_ // --- Create the Static Center White Circle ---\_ \_ const centerCircleRadius = 5; // White circle inside the ring.\_ \_ const centerCircleGeometry = new THREE.CircleGeometry(centerCircleRadius, 64);\_ \_ const centerCircleMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });\_ \_ const centerCircle = new THREE.Mesh(centerCircleGeometry, centerCircleMaterial);\_ \_ // Position the white circle in front of the ring’s front face to avoid z‑fighting.\_ \_ centerCircle.position.z = 1.51;\_ \_ scene.add(centerCircle);\n\_ \_ // --- Create the Black Inner Circle ---\_ \_ const blackCircleRadius = 4; // Smaller than the white circle.\_ \_ const blackCircleGeometry = new THREE.CircleGeometry(blackCircleRadius, 64);\_ \_ const blackCircleMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });\_ \_ const blackCircle = new THREE.Mesh(blackCircleGeometry, blackCircleMaterial);\_ \_ // Offset slightly in z to appear on top of the white circle.\_ \_ blackCircle.position.z = centerCircle.position.z + 0.01;\_ \_ scene.add(blackCircle);\n\_ \_ // --- Position the Camera and Tilt the Perspective ---\_ \_ camera.position.z = 25;\_ \_ // Tilt the camera 45° counterclockwise (rotate about the Z-axis)\_ \_ camera.rotation.z = Math.PI / 4;\n\_ \_ // --- Scroll-Based Rotation ---\_ \_ // Full effect (90° on both X and Y axes) is achieved after scrolling ~20% of the page.\_ \_ function onScroll() {\_ \_ \_ const scrollFraction = window.scrollY / (document.body.scrollHeight - window.innerHeight);\_ \_ \_ const effectiveFraction = Math.min(scrollFraction / 0.2, 1);\_ \_ \_ extrudedRing.rotation.x = effectiveFraction * Math.PI / 2;\_ \_ \_ extrudedRing.rotation.y = effectiveFraction * Math.PI / 2;\_ \_ }\_ \_ window.addEventListener('scroll', onScroll);\n\_ \_ // --- Animation Loop ---\_ \_ function animate() {\_ \_ \_ requestAnimationFrame(animate);\_ \_ \_ renderer.render(scene, camera);\_ \_ }\_ \_ animate();\n\_ \_ // --- Handle Window Resizing ---\_ \_ window.addEventListener('resize', () => {\_ \_ \_ camera.aspect = window.innerWidth / window.innerHeight;\_ \_ \_ camera.updateProjectionMatrix();\_ \_ \_ renderer.setSize(window.innerWidth, window.innerHeight);\_ \_ });\_ </script></body></html>\n\n\n\n```\n\n"
    actions: []
    colors: colors-f
    backgroundSize: full
    elementId: ''
    styles:
      self:
        height: auto
        width: narrow
        padding:
          - pt-28
          - pb-28
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: col
      title:
        textAlign: center
      text:
        textAlign: center
      actions:
        justifyContent: center
  - type: HeroSection
    title: The HOODIE
    subtitle: 'In this economy? We don''t know, but it looks really cool.'
    actions:
      - type: Button
        label: Buy The Hoodie
        altText: ''
        url: /buy-it
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: ''
    media:
      type: ImageBlock
      url: /images/about.jpg
      altText: Hero image
      caption: Caption of the image
      elementId: ''
    colors: colors-f
    backgroundSize: full
    elementId: ''
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-36
          - pb-10
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    text: |
      Here's a stock image of a woman to prove it.
  - type: HeroSection
    title: The TEE
    subtitle: ''
    actions:
      - type: Button
        label: Buy The Tee
        altText: ''
        url: /
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: ''
    media:
      type: ImageBlock
      url: /images/about.jpg
      altText: Hero image
      caption: Caption of the image
      elementId: ''
    colors: colors-f
    backgroundSize: full
    elementId: ''
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-36
          - pb-48
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row-reverse
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
  - type: ContactSection
    title: For all you "Influencers"
    text: ''
    form:
      type: FormBlock
      title: Form that just sends you spam
      fields:
        - type: TextFormControl
          name: name
          label: Name
          hideLabel: true
          placeholder: Your name
          width: 1/2
          isRequired: 'true'
        - type: EmailFormControl
          name: email
          label: Name
          hideLabel: true
          placeholder: Your email
          width: 1/2
          isRequired: 'true'
        - type: TextareaFormControl
          name: message
          label: Tell me all about your 100 followers
          hideLabel: true
          placeholder: Tell us all about your 100 followers
          width: full
          isRequired: true
      submitLabel: Send Message
      elementId: contact-form
      styles:
        submitLabel:
          textAlign: left
    colors: colors-f
    backgroundSize: full
    elementId: ''
    styles:
      self:
        height: auto
        width: narrow
        padding:
          - pt-28
          - pb-36
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: center
      text:
        textAlign: center
metaTitle: ''
metaTags: []
---
