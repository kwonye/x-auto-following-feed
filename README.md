# x-following-tab

Chrome extension that automatically switches to the Following tab on the X (formerly Twitter) homepage.

## Installation

1. Clone or download this repository.
2. In Chrome, open `chrome://extensions`.
3. Enable **Developer mode**.
4. Choose **Load unpacked** and select this folder.
5. Visit [x.com](https://x.com). If the **For you** feed loads, the extension redirects you to **Following**.

## Development

The extension source lives in `manifest.json` and `content.js`.

To lint the extension with [web-ext](https://github.com/mozilla/web-ext):

```bash
npx web-ext lint
```

## License

[MIT](LICENSE)
