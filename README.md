## Preview

![Preview](preview.jpg?raw=true "Preview")

## Limitations
- This project uses pnpm. You need to have it set up already.

- If you don't know how to properly edit a JSON file or run the project, this project unfortunately isn't for you.

- When changing your data.json, you'll have to restart the project (close terminal or CTRL + C, then run "pnpm dev" again). You can also change a line of code, for example adding a line feed, then saving, that'll force a recompile, which will include updated files in /public/. I tried putting the data into Typescript files, but unfortunately I wasn't able to get dynamic imports to work as you'd hope, you know, because when you first clone the project, you won't have your own data file, only the placeholder. I could just remove the placeholder and have just a single file, which is always imported, where you replace the placeholder information with yours, but I didn't want any personal information to be part of the repo, which is why the data.json you create is ignored by git.

- I unfortunately don't have time to support this project for other users, because it's really just meant for me, but it still might be useful for others, therefore I have it public, aside form portfolio purposes.

- Content is fixed to 833 px * 1178 px, so it's a bit too large for 1080p screens, therefore you'll have to scroll a little bit. I used this specific size, because it's a pretty good preview for what the page looks like as a PDF.

- 1 link for social (f. e. LinkedIn), 1 link for a repo. If you want to use more, you can either fork and / or edit the project to add more, or use something like linktree for your social link, which will then lead to all your socials in one place.

- This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Google Fonts.

## Getting Started
1. Put a JPG image of yourself as "portrait.jpg", with a 1:1 aspect ratio, I used 1600 px * 1600 px, into /cv/public/.
2. Put a PNG image of your signature as "signature.png", with a recommended 3:1 aspect ratio, I used 300 px * 100 px, into /cv/public/.
3. Copy the placeholder data files (*.JSON) from /cv/public/placeholders/ and paste them into /cv/public/, then remove the "placeholder_" from their name.
4. Fill out the data files you just copied with your information. You can adjust the amount of paragraphs in data_text.json, you can remove or add any amount, but keep space in mind. You can also remove the value of address2 in data_recipient.json, if you don't want to have 2 address lines.
5. Install dependencies with "pnpm install".
6. Run the development server with "pnpm dev".
7. Open [http://localhost:3000](http://localhost:3000) with your browser.
8. Save page as PDF or use "Print", then select the entry "save as PDF". If you don't know how to do that with your browser, check the web for instructions.
9. Hopefully everything will have come out as I intended, it does for me at least. If it doesn't, but you are experienced enough, try modifying the project. I unfortunately don't have time to support this project for other users, because it's really just meant for me, but it still might be useful for others, therefore I have it public, aside form portfolio purposes.

## Credits

### Icons
- License: CC Attribution License (https://www.svgrepo.com/page/licensing/#CC%20Attribution)
- Author: Dazzle UI (https://www.svgrepo.com/author/Dazzle%20UI/)
- Note: No changes to the original files were made, though in the project, I inverted the colors to improve visibility. See /public/icons/CREDITS for more information.
