# Image Comparison Guide & FAQ

The example should be ready to go with both local and Browserstack testing, simply run npm run image_comparison:local or npm run image_comparison (remember to update the Browserstack credentials)

## How To
* The service is added in the wdio.conf.js and wdio.conf.local.js files, you can change settings there
* Add Test lines to your spec file (see '/examples/Image_Comparison/specs/googlesearch.test.js')
* On first run, the test will create it's own baseline in this folder: /examples/Image_Comparison/baseline/--name of browser--
* On first and consecutive runs, the test will create a folder for "actual" and "diff" screenshots in /examples/Image_Comparison/tmp

## FAQ
* How can I tell the test which part of my page to ignore?
	* You can find multiple ways to do this in the method options: https://github.com/wswebcreation/webdriver-image-comparison/blob/master/docs/OPTIONS.md#method-options
* I don't like the naming conventions and folder structure of screenshots
	* If you don't like saving your images in per-browser folders, set "savePerInstance" to false
	* You can change the way images are named with "formatImageName" with this syntax: {tag}-{browserName}-{width}x{height}-dpr-{dpr}

## Links
* Quick Start Guide
	* https://webdriver.io/blog/2019/05/18/visual-regression-for-v5.html
* Official Documentation
	* https://github.com/wswebcreation/wdio-image-comparison-service/blob/master/docs/OPTIONS.md
	* https://github.com/wswebcreation/webdriver-image-comparison/blob/master/docs/OPTIONS.md