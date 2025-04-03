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
    text: >-
      The Stackbit theme is flexible and scalable to every need. It can manage
      any layout and any screen.
    actions: []
    colors: colors-c
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
  - type: CtaSection
    title: ''
    text: >
      <!-- Three.js Scene Start -->

      <div style="display: flex; justify-content: center; align-items: center;
      width: 100%;">
        <canvas id="three-canvas" style="display: block; margin: 0 auto;"></canvas>
      </div>

      <script
      src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

      <script>
        // --- Scene Setup ---
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
          75,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        );
        // Use our existing canvas element instead of appending a new one.
        const canvas = document.getElementById('three-canvas');
        const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvas });
        renderer.setSize(window.innerWidth, window.innerHeight);

        // --- Create the Extruded Ring (Hollow Disc) ---
        const outerRadius = 9;
        const innerRadius = 8;
        const ringShape = new THREE.Shape();
        ringShape.absarc(0, 0, outerRadius, 0, Math.PI * 2, false);
        const holePath = new THREE.Path();
        holePath.absarc(0, 0, innerRadius, 0, Math.PI * 2, true);
        ringShape.holes.push(holePath);
        const extrudeSettings = {
          steps: 1,
          depth: 1,
          bevelEnabled: false,
          curveSegments: 64
        };
        const ringGeometry = new THREE.ExtrudeGeometry(ringShape, extrudeSettings);
        ringGeometry.center();
        const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const extrudedRing = new THREE.Mesh(ringGeometry, ringMaterial);
        scene.add(extrudedRing);

        // --- Create the Static Center White Circle ---
        const centerCircleRadius = 5;
        const centerCircleGeometry = new THREE.CircleGeometry(centerCircleRadius, 64);
        const centerCircleMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const centerCircle = new THREE.Mesh(centerCircleGeometry, centerCircleMaterial);
        centerCircle.position.z = 1.51;
        scene.add(centerCircle);

        // --- Create the Black Inner Circle ---
        const blackCircleRadius = 4;
        const blackCircleGeometry = new THREE.CircleGeometry(blackCircleRadius, 64);
        const blackCircleMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
        const blackCircle = new THREE.Mesh(blackCircleGeometry, blackCircleMaterial);
        blackCircle.position.z = centerCircle.position.z + 0.01;
        scene.add(blackCircle);

        // --- Position the Camera and Tilt the Perspective ---
        camera.position.z = 25;
        camera.rotation.z = Math.PI / 4;

        // --- Scroll-Based Rotation ---
        function onScroll() {
          const scrollFraction = window.scrollY / (document.body.scrollHeight - window.innerHeight);
          const effectiveFraction = Math.min(scrollFraction / 0.2, 1);
          extrudedRing.rotation.x = effectiveFraction * Math.PI / 2;
          extrudedRing.rotation.y = effectiveFraction * Math.PI / 2;
        }
        window.addEventListener('scroll', onScroll);

        // --- Animation Loop ---
        function animate() {
          requestAnimationFrame(animate);
          renderer.render(scene, camera);
        }
        animate();

        // --- Handle Window Resizing ---
        window.addEventListener('resize', () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        });
      </script>

      <!-- Three.js Scene End -->
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
    subtitle: ''
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
