# spencerorton.com

Static site for Spencer Orton, served by GitHub Pages at https://spencerorton.com.
No build step: edit the HTML, commit, push to `main`, and Pages republishes in about a minute.

## Pages

| File | Page | What's on it |
|---|---|---|
| `index.html` | Home | Headshot hero, press quotes, upcoming shows |
| `about.html` | About | Photo and bio |
| `headshot-resume.html` | H + R | Headshot and resume downloads, full resume as text |
| `media.html` | Media | Production photos, editorial photos, video |
| `connect.html` | Connect | Email and representation |

Every page repeats the same `<header>` and `<footer>`. If you change the menu or the footer,
change it in all five files.

## Downloads

- `files/spencer-orton-headshot.jpg`: full-size headshot.
- `files/spencer-orton-resume.pdf`: built from `tools/resume.html`. After editing a credit,
  update **both** `tools/resume.html` and the resume tables in `headshot-resume.html`, then run
  `./tools/build-resume.sh` from the repo root (macOS, needs Google Chrome and `cwebp`).
  That also refreshes the preview image `images/resume-preview.webp`.

## Filling in placeholders

Search the HTML for `TODO`: press quotes, upcoming shows, video, representation, social links,
and whether to put a phone number on the PDF.

## Adding a photo

    cwebp -q 80 -resize 640 0 photo.jpg -o images/NAME-640.webp
    cwebp -q 80 -resize 1280 0 photo.jpg -o images/NAME-1280.webp

Then copy a `<li><figure>…</figure></li>` block in `media.html` and write alt text that
describes what is in the picture.
