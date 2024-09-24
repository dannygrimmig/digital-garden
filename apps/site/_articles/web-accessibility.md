---
title: 'Web Accessibility Basics and Helpful Tools'
exerpt: 'Taking what I have learned from creating accessible web pages / components and putting into helpful guide.'
date: '2024-08-2'
author: 'Danny Grimmig'
tags: ['accessibility', 'web dev']
image: 
    src: "https://res.cloudinary.com/practicaldev/image/fetch/s--cuurMzI6--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/ozrbmo3718fkoz4lf4wr.png"
    citation: 'Nikhil Karkra | dev.to '
---
Web accessibility ensures that your website is usable by everyone, including people with disabilities. As a front-end developer, your role is crucial in making sure that your designs and code are accessible to all users, regardless of their abilities. I summarized my notes from previous experience in making net new or migrating existing web applications into accessible web applications.

## Why it matters
The [key importance](https://www.w3.org/WAI/fundamentals/accessibility-intro/#important) of web accessibility is inclusion. It is incredibly important to make sure anyone can interact with your application. This will allow you to improve all user experience, reach and interact with a broader audience, and comply with the legal and industry standards. 

## Key Principles
Here is an overview the [key principles](https://www.w3.org/WAI/fundamentals/accessibility-principles/#standards) to remember when designing accessible code. 

**Perception**
Content is presented so that all users can understand it. Examples include... 
- text alternatives for non text content
- captions or alternative for multmedia
- content can be presented in multiple ways

**Operable & Navigatable**
Websites should be fully accessibly via the keyboard only for audiences whom may not use a mouse.
- all functionality available to a mouse should also be for the keyboard

**Understandable**
Text content should be understandable to the broadest of audiences.

**Robust**
Reliable content that is compatible across multiple browsers and assistive technologies.
- valid markup, 

## Best Practices for Frontend Developers
There are a few key practices to remember that will help your site span across the key principles mentioned above

**Semantic HTML**
It is important to use the most semantically correct HTML when possible. Out of the box, using the correct HTML tag will ensure proper accessibility features!
- `<button>`, `<header>`,`<nav>`, `<main>`, etc...

> "If you can use a native HTML element or attribute with the semantics and behavior you require already built in, instead of re-purposing an element and adding an ARIA role, state or property to make it accessible, then do so." - The first rule of ARIA use 

**Keyboard Navigation**
If you can access it with your mouse, you should be able to access it with your keyboard (and should know your keyboard is focused on it)
- Focusable: use buttons, form inputs, or tabindex to ensure interactive elements recieve focus.
- Focus Styling: ensure interactive elements have focus styling (such as a blue outline) to show users their keyboard is focused on the selected page element

**Aria**
Ensure proper [Aria Roles and Attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) throughout your web application.
- Read up on the [roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles) here.

## Accessibilty Testing Tools
While you can manually test for some things, automated testing helps catch important accessibility features you may miss. Here are a few of my favorite tools:

**Google Lighthouse**
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview) is a helpful tool for seeing specific elements missing ARIA roles and attributes accross your application. You can also create automations to implement it in your CI/CD Pipeline (with your CI tool like github actions or jenkins, or in your e2e testing tool such as cypress)

**IBM Equal Access Accessibility Checker**
- [IBM Equal Access Accessibility Checker](https://chromewebstore.google.com/detail/ibm-equal-access-accessib/lkcagbfjnkomcinoddgooolagloogehp?hl=en-US) is incredible for visualizing your websites keyboard navigation. Rather than manually testing a page with your keyboard to see what is focusable, the IBM tool can scan your page and show you the navigation path.

**WAVE Evaluation Tool**
- [WAVE Evaluation Tool](https://chromewebstore.google.com/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh?hl=en-US) is another useful tool for providing visual feedback on your sites accessibility by injecting icons and indicators into your page on components that are falling behind accessibility standards.

## Conclusion
Web accessibility is very important, especially as a frontend developer. It is important to keep in mind the [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) web accessibiliity standards to ensure your site is usable to all. 