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
          - pb-32
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
    text: "<!-- Three.js Scene Start -->\_ \_ \_ <div style=\"display: flex; justify-content: center; align-items: center; width: 100%;\">\_ \_ \_ \_ <canvas id=\"three-canvas\" style=\"display: block; margin: 0 auto;\"></canvas>\_ \_ \_ </div>\_ \_ \_ \\<script src=\"https\\://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js\"></script>\_ \_ \_ \\<script>\_ \_ \_ \_ // --- Scene Setup ---\_ \_ \_ \_ const scene = new THREE.Scene();\_ \_ \_ \_ const camera = new THREE.PerspectiveCamera(\_ \_ \_ \_ \_ 75,\_ \_ \_ \_ \_ window\\.innerWidth / window\\.innerHeight,\_ \_ \_ \_ \_ 0.1,\_ \_ \_ \_ \_ 1000\_ \_ \_ \_ );\_ \_ \_ \_ // Use our existing canvas element instead of appending a new one.\_ \_ \_ \_ const canvas = document.getElementById('three-canvas');\_ \_ \_ \_ const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvas });\_ \_ \_ \_ renderer.setSize(window\\.innerWidth, window\\.innerHeight);\n\_ \_ \_ \_ // --- Create the Extruded Ring (Hollow Disc) ---\_ \_ \_ \_ const outerRadius = 9;\_ \_ \_ \_ const innerRadius = 8;\_ \_ \_ \_ const ringShape = new THREE.Shape();\_ \_ \_ \_ ringShape.absarc(0, 0, outerRadius, 0, Math.PI \\* 2, false);\_ \_ \_ \_ const holePath = new THREE.Path();\_ \_ \_ \_ holePath.absarc(0, 0, innerRadius, 0, Math.PI \\* 2, true);\_ \_ \_ \_ ringShape.holes.push(holePath);\_ \_ \_ \_ const extrudeSettings = {\_ \_ \_ \_ \_ steps: 1,\_ \_ \_ \_ \_ depth: 1,\_ \_ \_ \_ \_ bevelEnabled: false,\_ \_ \_ \_ \_ curveSegments: 64\_ \_ \_ \_ };\_ \_ \_ \_ const ringGeometry = new THREE.ExtrudeGeometry(ringShape, extrudeSettings);\_ \_ \_ \_ ringGeometry.center();\_ \_ \_ \_ const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });\_ \_ \_ \_ const extrudedRing = new THREE.Mesh(ringGeometry, ringMaterial);\_ \_ \_ \_ scene.add(extrudedRing);\n\_ \_ \_ \_ // --- Create the Static Center White Circle ---\_ \_ \_ \_ const centerCircleRadius = 5;\_ \_ \_ \_ const centerCircleGeometry = new THREE.CircleGeometry(centerCircleRadius, 64);\_ \_ \_ \_ const centerCircleMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });\_ \_ \_ \_ const centerCircle = new THREE.Mesh(centerCircleGeometry, centerCircleMaterial);\_ \_ \_ \_ centerCircle.position.z = 1.51;\_ \_ \_ \_ scene.add(centerCircle);\n\_ \_ \_ \_ // --- Create the Black Inner Circle ---\_ \_ \_ \_ const blackCircleRadius = 4;\_ \_ \_ \_ const blackCircleGeometry = new THREE.CircleGeometry(blackCircleRadius, 64);\_ \_ \_ \_ const blackCircleMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });\_ \_ \_ \_ const blackCircle = new THREE.Mesh(blackCircleGeometry, blackCircleMaterial);\_ \_ \_ \_ blackCircle.position.z = centerCircle.position.z + 0.01;\_ \_ \_ \_ scene.add(blackCircle);\n\_ \_ \_ \_ // --- Position the Camera and Tilt the Perspective ---\_ \_ \_ \_ camera.position.z = 25;\_ \_ \_ \_ camera.rotation.z = Math.PI / 4;\n\_ \_ \_ \_ // --- Scroll-Based Rotation ---\_ \_ \_ \_ function onScroll() {\_ \_ \_ \_ \_ const scrollFraction = window\\.scrollY / (document.body.scrollHeight - window\\.innerHeight);\_ \_ \_ \_ \_ const effectiveFraction = Math.min(scrollFraction / 0.2, 1);\_ \_ \_ \_ \_ extrudedRing.rotation.x = effectiveFraction \\* Math.PI / 2;\_ \_ \_ \_ \_ extrudedRing.rotation.y = effectiveFraction \\* Math.PI / 2;\_ \_ \_ \_ }\_ \_ \_ \_ window\\.addEventListener('scroll', onScroll);\n\_ \_ \_ \_ // --- Animation Loop ---\_ \_ \_ \_ function animate() {\_ \_ \_ \_ \_ requestAnimationFrame(animate);\_ \_ \_ \_ \_ renderer.render(scene, camera);\_ \_ \_ \_ }\_ \_ \_ \_ animate();\n\_ \_ \_ \_ // --- Handle Window Resizing ---\_ \_ \_ \_ window\\.addEventListener('resize', () => {\_ \_ \_ \_ \_ camera.aspect = window\\.innerWidth / window\\.innerHeight;\_ \_ \_ \_ \_ camera.updateProjectionMatrix();\_ \_ \_ \_ \_ renderer.setSize(window\\.innerWidth, window\\.innerHeight);\_ \_ \_ \_ });\_ \_ \_ </script>\_ \_ \_ <!-- Three.js Scene End -->\n\n\n\n"
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
        url: /the-hoodie
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: ''
    media:
      type: ImageBlock
      url: /images/Untitled_Artwork.jpg
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
      Here's a bad drawing of the hoodie to prove it.
  - type: HeroSection
    title: The TEE
    subtitle: The most unique bland shirt you'll ever buy
    actions:
      - type: Button
        label: Buy The Tee
        altText: ''
        url: /the-tee
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: ''
    media:
      type: ImageBlock
      url: /images/IMG_0010.PNG
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
