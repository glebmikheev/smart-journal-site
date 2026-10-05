# Smart Journal website

A static EN/FR/RU project page. No build dependencies are required.

## Preview

From this directory, run `python -m http.server 8127 --bind 127.0.0.1`,
then open `http://127.0.0.1:8127/`. Files can also be opened locally.

## Publish

Commit the site files to this repository's `main` branch. In GitHub, select
Settings → Pages → Deploy from a branch → main → /(root).
`.nojekyll` keeps the static files unchanged. Asset paths are relative so the site
also works at a project URL such as `/smart-journal-site/`.

## Add the demo video

Upload the video to YouTube as Public or Unlisted and enable embedding. In `site.js`,
set `YOUTUBE_VIDEO_ID` to its 11-character ID (the value after `watch?v=`).
Commit and push. The pending notice automatically becomes a playable demo card.
The YouTube player is loaded on click; no video file is stored in this repository.

## Content

The workspace visual is a labelled HTML/CSS illustration using fictional demo
documents, not a live application or a claimed screenshot. Replace or supplement it
with actual demo screenshots as the recorded walkthrough becomes available.
The current demo notice is dated 05.10.2026. Update it if the schedule changes.

## Editorial choices

The page leads with the demo and uses the public-facing label **alpha v1.0**.
There is no link to the private application repository.

The Marcus Aurelius quotation is from Book III, section 9 in Jeremy Collier's
free 1701 translation, not a literal translation of the Greek. Russian and French
render that English wording; the attribution says so and links to the historical text:
https://en.wikisource.org/wiki/The_Emperor_Marcus_Antoninus:_His_Conversation_with_Himself/Book_3

The landing palette uses warm ivory, clay, forest and muted blue; the product
illustration keeps the application's own colours.
