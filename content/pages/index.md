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

  - type: TextSection
    colors: colors-f
    variant: variant-a
    title: The Section Title
    subtitle: The section subtitle
    text: >
      ```

      <script>

      // --- Scene Setup ---

      const scene = new THREE.Scene();

      // Using container dimensions: full width and fixed height (500px)

      const container = document.getElementById('animationContainer');

      const width = container.clientWidth;

      const height = container.clientHeight;

      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

      ```


      ```

      // Set up renderer and attach it to the container

      const renderer = new THREE.WebGLRenderer({ antialias: true });

      renderer.setSize(width, height);

      container.appendChild(renderer.domElement);

      ```


      ```

      // --- Create the Extruded Ring (Hollow Disc) ---

      const outerRadius = 9;

      const innerRadius = 8;

      const ringShape = new THREE.Shape();

      ringShape.absarc(0, 0, outerRadius, 0, Math.PI * 2, false);

      const holePath = new THREE.Path();

      holePath.absarc(0, 0, innerRadius, 0, Math.PI * 2, true);

      ringShape.holes.push(holePath);

      ```


      ```

      const extrudeSettings = {

      steps: 1,

      depth: 1,

      bevelEnabled: false,

      curveSegments: 64

      };

      const ringGeometry = new THREE.ExtrudeGeometry(ringShape,
      extrudeSettings);

      ringGeometry.center();

      const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

      const extrudedRing = new THREE.Mesh(ringGeometry, ringMaterial);

      scene.add(extrudedRing);

      ```


      ```

      // --- Create the Static Center White Circle ---

      const centerCircleRadius = 5;

      const centerCircleGeometry = new THREE.CircleGeometry(centerCircleRadius,
      64);

      const centerCircleMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff
      });

      const centerCircle = new THREE.Mesh(centerCircleGeometry,
      centerCircleMaterial);

      centerCircle.position.z = 1.51;

      scene.add(centerCircle);

      ```


      ```

      // --- Create the Black Inner Circle ---

      const blackCircleRadius = 4;

      const blackCircleGeometry = new THREE.CircleGeometry(blackCircleRadius,
      64);

      const blackCircleMaterial = new THREE.MeshBasicMaterial({ color: 0x000000
      });

      const blackCircle = new THREE.Mesh(blackCircleGeometry,
      blackCircleMaterial);

      blackCircle.position.z = centerCircle.position.z + 0.01;

      scene.add(blackCircle);

      ```


      ```

      // --- Position the Camera and Tilt the Perspective ---

      camera.position.z = 25;

      camera.rotation.z = Math.PI / 4;

      ```


      ```

      // --- Optional: Scroll-Based Rotation ---

      // If you want to keep the scroll-triggered rotation, you might want to
      calculate the scroll relative to the container’s position.

      function onScroll() {

      const scrollFraction = window.scrollY / (document.body.scrollHeight -
      window.innerHeight);

      const effectiveFraction = Math.min(scrollFraction / 0.2, 1);

      extrudedRing.rotation.x = effectiveFraction * Math.PI / 2;

      extrudedRing.rotation.y = effectiveFraction * Math.PI / 2;

      }

      window.addEventListener('scroll', onScroll);

      ```


      ```

      // --- Animation Loop ---

      function animate() {

      requestAnimationFrame(animate);

      renderer.render(scene, camera);

      }

      animate();

      ```


      // --- Handle Container Resizing (if needed) ---

      window\.addEventListener('resize', () => {

      const newWidth = container.clientWidth;

      const newHeight = container.clientHeight;

      camera.aspect = newWidth / newHeight;

      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);

      });
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
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
      text:
        textAlign: center
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
