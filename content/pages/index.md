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
    text: |+
      ###### ∅

      ```
      <!DOCTYPE html>
      ```

      ```
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Scroll Animation: Circle to Null Symbol</title>
        <style>
          /* Ensure there is enough height to scroll */
          body {
            height: 2000px;
            margin: 0;
            background: #f0f0f0;
          }
          /* Center the animation in the viewport */
          .animation-container {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 220px;
            height: 220px;
            perspective: 600px; /* Enables 3D effect */
          }
          /* This wrapper will be rotated to create the perspective effect */
          .circle-wrapper {
            position: relative;
            width: 100%;
            height: 100%;
            transform: rotateX(0deg);
          }
          /* The outer circle */
          .outer-circle {
            width: 100%;
            height: 100%;
            border: 5px solid black;
            border-radius: 50%;
            box-sizing: border-box;
          }
          /* The inner circle */
          .inner-circle {
            width: 50%;
            height: 50%;
            background: black;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 1;
          }
          /* The slash that will appear as you scroll */
          .slash {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 5px;
            height: 140%;
            background: black;
            transform: translate(-50%, -50%) rotate(45deg);
            opacity: 0;
          }
        </style>
      </head>
      <body>
        <div class="animation-container">
          <div class="circle-wrapper" id="circleWrapper">
            <div class="outer-circle"></div>
            <div class="inner-circle" id="innerCircle"></div>
            <div class="slash" id="slash"></div>
          </div>
        </div>
      ```

      ```
        <script>
          // The animation will progress over the first 300 pixels of scrolling.
          const maxScroll = 300;
          window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            // Calculate a progress value between 0 and 1.
            const progress = Math.min(scrollY / maxScroll, 1);

            // Rotate the circle wrapper from 0° to 90° along the X-axis.
            document.getElementById('circleWrapper').style.transform = `rotateX(${progress * 90}deg)`;

            // Fade out the inner circle gradually.
            document.getElementById('innerCircle').style.opacity = 1 - progress;

            // Fade in the slash gradually.
            document.getElementById('slash').style.opacity = progress;
          });
        </script>
      ```

      ```
      </body>
      </html>
      ```

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
