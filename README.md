# bronsportfolio.com

The source for my personal portfolio site: **[bronsportfolio.com](https://bronsportfolio.com)**

I'm Bron Whitten, a backend software engineer in Birmingham, AL. This site covers my experience, projects, skills and education, and how to get in touch.

## Built with

- **HTML, CSS and JavaScript only.** No frameworks, no build step, no dependencies.
- Fonts: Inter, Space Grotesk and JetBrains Mono, hosted with the site (no third-party requests)
- Hosted on **GitHub Pages**, with a custom domain and HTTPS

I kept the stack simple on purpose, so the site loads fast, is easy to maintain and has nothing to update or patch.

## Features

- Responsive layout for desktop, tablet and phone, with a mobile menu
- Dark theme with neon accents and an animated background
- Fade-in animations as you scroll, with the current section highlighted in the nav
- Respects the **reduced motion** setting for people who turn animations off
- Accessible markup: a skip link, alt text, ARIA labels and keyboard support
- The email address is put together by JavaScript, so it isn't plain text in the HTML for spam bots
- A strict Content Security Policy: the page only loads scripts, styles, fonts and images from this site
- Lighthouse scores of 99–100 for performance, accessibility, best practices and SEO

## Project structure

```
index.html            Page content and layout
styles.css            All styling, including the responsive and reduced-motion rules
script.js             Navigation, scroll animations, card glow and email links
fonts/                Web fonts and their licenses (SIL Open Font License)
images/
  profile.png         Profile photo
  projects/           Project screenshots
CNAME                 Custom domain for GitHub Pages
```

## Run it locally

No install or build is needed. Clone the repo and open `index.html` in a browser:

```powershell
git clone https://github.com/Bron222/bronsportfolio.com.git
cd bronsportfolio.com
Start-Process .\index.html
```

## Deployment

GitHub Pages publishes the site from the root of the `main` branch. Anything pushed to `main` goes live at bronsportfolio.com within a minute or two.

When `styles.css` or `script.js` changes, bump the `?v=` number where `index.html` links to them, so browsers load the new version instead of a cached copy.

## License

© Bron Whitten. All rights reserved. You're welcome to look at the code and learn from it, but please don't copy the site's design or content as your own.
