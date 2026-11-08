# spencerorton.com

Static site for Spencer Orton, served by GitHub Pages at https://spencerorton.com.

No build step: edit `index.html`, commit, push to `main`, and Pages republishes in about a minute.

## Filling in placeholders

Search `index.html` for `TODO`. Open items: city, press quotes, upcoming shows, bio,
resume PDF (`files/spencer-orton-resume.pdf`), three photo captions, video embed,
representation, social links.

## Adding a photo

    cwebp -q 80 -resize 640 0 photo.jpg -o images/NAME-640.webp
    cwebp -q 80 -resize 1280 0 photo.jpg -o images/NAME-1280.webp

Then copy a `<li><figure>…</figure></li>` block in the gallery and write alt text that
describes what is in the picture.
