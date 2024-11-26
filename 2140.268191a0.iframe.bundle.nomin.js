"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[2140],{

/***/ "../../node_modules/.pnpm/@wordpress+a11y@3.6.1/node_modules/@wordpress/a11y/build-module/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  L: () => (/* binding */ speak)
});

// UNUSED EXPORTS: setup

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dom-ready@3.27.0/node_modules/@wordpress/dom-ready/build-module/index.js
/**
 * @typedef {() => void} Callback
 *
 * TODO: Remove this typedef and inline `() => void` type.
 *
 * This typedef is used so that a descriptive type is provided in our
 * automatically generated documentation.
 *
 * An in-line type `() => void` would be preferable, but the generated
 * documentation is `null` in that case.
 *
 * @see https://github.com/WordPress/gutenberg/issues/18045
 */

/**
 * Specify a function to execute when the DOM is fully loaded.
 *
 * @param {Callback} callback A function to execute after the DOM is ready.
 *
 * @example
 * ```js
 * import domReady from '@wordpress/dom-ready';
 *
 * domReady( function() {
 * 	//do something after DOM loads.
 * } );
 * ```
 *
 * @return {void}
 */
function domReady(callback) {
  if (typeof document === 'undefined') {
    return;
  }

  if (document.readyState === 'complete' || // DOMContentLoaded + Images/Styles/etc loaded, so we call directly.
  document.readyState === 'interactive' // DOMContentLoaded fires at this point, so we call directly.
  ) {
    return void callback();
  } // DOMContentLoaded has not fired yet, delay callback until then.


  document.addEventListener('DOMContentLoaded', callback);
}
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+i18n@4.6.1/node_modules/@wordpress/i18n/build-module/index.js + 3 modules
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@4.6.1/node_modules/@wordpress/i18n/build-module/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+a11y@3.6.1/node_modules/@wordpress/a11y/build-module/add-intro-text.js
/**
 * WordPress dependencies
 */

/**
 * Build the explanatory text to be placed before the aria live regions.
 *
 * This text is initially hidden from assistive technologies by using a `hidden`
 * HTML attribute which is then removed once a message fills the aria-live regions.
 *
 * @return {HTMLParagraphElement} The explanatory text HTML element.
 */

function addIntroText() {
  const introText = document.createElement('p');
  introText.id = 'a11y-speak-intro-text';
  introText.className = 'a11y-speak-intro-text';
  introText.textContent = (0,build_module.__)('Notifications');
  introText.setAttribute('style', 'position: absolute;' + 'margin: -1px;' + 'padding: 0;' + 'height: 1px;' + 'width: 1px;' + 'overflow: hidden;' + 'clip: rect(1px, 1px, 1px, 1px);' + '-webkit-clip-path: inset(50%);' + 'clip-path: inset(50%);' + 'border: 0;' + 'word-wrap: normal !important;');
  introText.setAttribute('hidden', 'hidden');
  const {
    body
  } = document;

  if (body) {
    body.appendChild(introText);
  }

  return introText;
}
//# sourceMappingURL=add-intro-text.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+a11y@3.6.1/node_modules/@wordpress/a11y/build-module/add-container.js
/**
 * Build the live regions markup.
 *
 * @param {string} [ariaLive] Value for the 'aria-live' attribute; default: 'polite'.
 *
 * @return {HTMLDivElement} The ARIA live region HTML element.
 */
function addContainer() {
  let ariaLive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'polite';
  const container = document.createElement('div');
  container.id = `a11y-speak-${ariaLive}`;
  container.className = 'a11y-speak-region';
  container.setAttribute('style', 'position: absolute;' + 'margin: -1px;' + 'padding: 0;' + 'height: 1px;' + 'width: 1px;' + 'overflow: hidden;' + 'clip: rect(1px, 1px, 1px, 1px);' + '-webkit-clip-path: inset(50%);' + 'clip-path: inset(50%);' + 'border: 0;' + 'word-wrap: normal !important;');
  container.setAttribute('aria-live', ariaLive);
  container.setAttribute('aria-relevant', 'additions text');
  container.setAttribute('aria-atomic', 'true');
  const {
    body
  } = document;

  if (body) {
    body.appendChild(container);
  }

  return container;
}
//# sourceMappingURL=add-container.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+a11y@3.6.1/node_modules/@wordpress/a11y/build-module/clear.js
/**
 * Clears the a11y-speak-region elements and hides the explanatory text.
 */
function clear() {
  const regions = document.getElementsByClassName('a11y-speak-region');
  const introText = document.getElementById('a11y-speak-intro-text');

  for (let i = 0; i < regions.length; i++) {
    regions[i].textContent = '';
  } // Make sure the explanatory text is hidden from assistive technologies.


  if (introText) {
    introText.setAttribute('hidden', 'hidden');
  }
}
//# sourceMappingURL=clear.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+a11y@3.6.1/node_modules/@wordpress/a11y/build-module/filter-message.js
let previousMessage = '';
/**
 * Filter the message to be announced to the screenreader.
 *
 * @param {string} message The message to be announced.
 *
 * @return {string} The filtered message.
 */

function filterMessage(message) {
  /*
   * Strip HTML tags (if any) from the message string. Ideally, messages should
   * be simple strings, carefully crafted for specific use with A11ySpeak.
   * When re-using already existing strings this will ensure simple HTML to be
   * stripped out and replaced with a space. Browsers will collapse multiple
   * spaces natively.
   */
  message = message.replace(/<[^<>]+>/g, ' ');
  /*
   * Safari + VoiceOver don't announce repeated, identical strings. We use
   * a `no-break space` to force them to think identical strings are different.
   */

  if (previousMessage === message) {
    message += '\u00A0';
  }

  previousMessage = message;
  return message;
}
//# sourceMappingURL=filter-message.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+a11y@3.6.1/node_modules/@wordpress/a11y/build-module/index.js
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */





/**
 * Create the live regions.
 */

function setup() {
  const introText = document.getElementById('a11y-speak-intro-text');
  const containerAssertive = document.getElementById('a11y-speak-assertive');
  const containerPolite = document.getElementById('a11y-speak-polite');

  if (introText === null) {
    addIntroText();
  }

  if (containerAssertive === null) {
    addContainer('assertive');
  }

  if (containerPolite === null) {
    addContainer('polite');
  }
}
/**
 * Run setup on domReady.
 */

domReady(setup);
/**
 * Allows you to easily announce dynamic interface updates to screen readers using ARIA live regions.
 * This module is inspired by the `speak` function in `wp-a11y.js`.
 *
 * @param {string} message    The message to be announced by assistive technologies.
 * @param {string} [ariaLive] The politeness level for aria-live; default: 'polite'.
 *
 * @example
 * ```js
 * import { speak } from '@wordpress/a11y';
 *
 * // For polite messages that shouldn't interrupt what screen readers are currently announcing.
 * speak( 'The message you want to send to the ARIA live region' );
 *
 * // For assertive messages that should interrupt what screen readers are currently announcing.
 * speak( 'The message you want to send to the ARIA live region', 'assertive' );
 * ```
 */

function speak(message, ariaLive) {
  /*
   * Clear previous messages to allow repeated strings being read out and hide
   * the explanatory text from assistive technologies.
   */
  clear();
  message = filterMessage(message);
  const introText = document.getElementById('a11y-speak-intro-text');
  const containerAssertive = document.getElementById('a11y-speak-assertive');
  const containerPolite = document.getElementById('a11y-speak-polite');

  if (containerAssertive && ariaLive === 'assertive') {
    containerAssertive.textContent = message;
  } else if (containerPolite) {
    containerPolite.textContent = message;
  }
  /*
   * Make the explanatory text available to assistive technologies by removing
   * the 'hidden' HTML attribute.
   */


  if (introText) {
    introText.removeAttribute('hidden');
  }
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+media-utils@3.4.1/node_modules/@wordpress/media-utils/build-module/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Q: () => (/* reexport */ media_upload),
  o: () => (/* reexport */ uploadMedia)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+i18n@4.6.1/node_modules/@wordpress/i18n/build-module/index.js + 3 modules
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@4.6.1/node_modules/@wordpress/i18n/build-module/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+media-utils@3.4.1/node_modules/@wordpress/media-utils/build-module/components/media-upload/index.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



const {
  wp
} = window;
const DEFAULT_EMPTY_GALLERY = [];
/**
 * Prepares the Featured Image toolbars and frames.
 *
 * @return {wp.media.view.MediaFrame.Select} The default media workflow.
 */

const getFeaturedImageMediaFrame = () => {
  return wp.media.view.MediaFrame.Select.extend({
    /**
     * Enables the Set Featured Image Button.
     *
     * @param {Object} toolbar toolbar for featured image state
     * @return {void}
     */
    featuredImageToolbar(toolbar) {
      this.createSelectToolbar(toolbar, {
        text: wp.media.view.l10n.setFeaturedImage,
        state: this.options.state
      });
    },

    /**
     * Handle the edit state requirements of selected media item.
     *
     * @return {void}
     */
    editState() {
      const selection = this.state('featured-image').get('selection');
      const view = new wp.media.view.EditImage({
        model: selection.single(),
        controller: this
      }).render(); // Set the view to the EditImage frame using the selected image.

      this.content.set(view); // After bringing in the frame, load the actual editor via an ajax call.

      view.loadEditor();
    },

    /**
     * Create the default states.
     *
     * @return {void}
     */
    createStates: function createStates() {
      this.on('toolbar:create:featured-image', this.featuredImageToolbar, this);
      this.on('content:render:edit-image', this.editState, this);
      this.states.add([new wp.media.controller.FeaturedImage(), new wp.media.controller.EditImage({
        model: this.options.editImage
      })]);
    }
  });
};
/**
 * Prepares the Gallery toolbars and frames.
 *
 * @return {wp.media.view.MediaFrame.Post} The default media workflow.
 */


const getGalleryDetailsMediaFrame = () => {
  /**
   * Custom gallery details frame.
   *
   * @see https://github.com/xwp/wp-core-media-widgets/blob/905edbccfc2a623b73a93dac803c5335519d7837/wp-admin/js/widgets/media-gallery-widget.js
   * @class GalleryDetailsMediaFrame
   * @class
   */
  return wp.media.view.MediaFrame.Post.extend({
    /**
     * Set up gallery toolbar.
     *
     * @return {void}
     */
    galleryToolbar() {
      const editing = this.state().get('editing');
      this.toolbar.set(new wp.media.view.Toolbar({
        controller: this,
        items: {
          insert: {
            style: 'primary',
            text: editing ? wp.media.view.l10n.updateGallery : wp.media.view.l10n.insertGallery,
            priority: 80,
            requires: {
              library: true
            },

            /**
             * @fires wp.media.controller.State#update
             */
            click() {
              const controller = this.controller,
                    state = controller.state();
              controller.close();
              state.trigger('update', state.get('library')); // Restore and reset the default state.

              controller.setState(controller.options.state);
              controller.reset();
            }

          }
        }
      }));
    },

    /**
     * Handle the edit state requirements of selected media item.
     *
     * @return {void}
     */
    editState() {
      const selection = this.state('gallery').get('selection');
      const view = new wp.media.view.EditImage({
        model: selection.single(),
        controller: this
      }).render(); // Set the view to the EditImage frame using the selected image.

      this.content.set(view); // After bringing in the frame, load the actual editor via an ajax call.

      view.loadEditor();
    },

    /**
     * Create the default states.
     *
     * @return {void}
     */
    createStates: function createStates() {
      this.on('toolbar:create:main-gallery', this.galleryToolbar, this);
      this.on('content:render:edit-image', this.editState, this);
      this.states.add([new wp.media.controller.Library({
        id: 'gallery',
        title: wp.media.view.l10n.createGalleryTitle,
        priority: 40,
        toolbar: 'main-gallery',
        filterable: 'uploaded',
        multiple: 'add',
        editable: false,
        library: wp.media.query((0,lodash.defaults)({
          type: 'image'
        }, this.options.library))
      }), new wp.media.controller.EditImage({
        model: this.options.editImage
      }), new wp.media.controller.GalleryEdit({
        library: this.options.selection,
        editing: this.options.editing,
        menu: 'gallery',
        displaySettings: false,
        multiple: true
      }), new wp.media.controller.GalleryAdd()]);
    }
  });
}; // The media library image object contains numerous attributes
// we only need this set to display the image in the library.


const slimImageObject = img => {
  const attrSet = ['sizes', 'mime', 'type', 'subtype', 'id', 'url', 'alt', 'link', 'caption'];
  return (0,lodash.pick)(img, attrSet);
};

const getAttachmentsCollection = ids => {
  return wp.media.query({
    order: 'ASC',
    orderby: 'post__in',
    post__in: ids,
    posts_per_page: -1,
    query: true,
    type: 'image'
  });
};

class MediaUpload extends react.Component {
  constructor(_ref) {
    let {
      allowedTypes,
      gallery = false,
      unstableFeaturedImageFlow = false,
      modalClass,
      multiple = false,
      title = (0,build_module.__)('Select or Upload Media')
    } = _ref;
    super(...arguments);
    this.openModal = this.openModal.bind(this);
    this.onOpen = this.onOpen.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.onClose = this.onClose.bind(this);

    if (gallery) {
      this.buildAndSetGalleryFrame();
    } else {
      const frameConfig = {
        title,
        multiple
      };

      if (!!allowedTypes) {
        frameConfig.library = {
          type: allowedTypes
        };
      }

      this.frame = wp.media(frameConfig);
    }

    if (modalClass) {
      this.frame.$el.addClass(modalClass);
    }

    if (unstableFeaturedImageFlow) {
      this.buildAndSetFeatureImageFrame();
    }

    this.initializeListeners();
  }

  initializeListeners() {
    // When an image is selected in the media frame...
    this.frame.on('select', this.onSelect);
    this.frame.on('update', this.onUpdate);
    this.frame.on('open', this.onOpen);
    this.frame.on('close', this.onClose);
  }
  /**
   * Sets the Gallery frame and initializes listeners.
   *
   * @return {void}
   */


  buildAndSetGalleryFrame() {
    const {
      addToGallery = false,
      allowedTypes,
      multiple = false,
      value = DEFAULT_EMPTY_GALLERY
    } = this.props; // If the value did not changed there is no need to rebuild the frame,
    // we can continue to use the existing one.

    if (value === this.lastGalleryValue) {
      return;
    }

    this.lastGalleryValue = value; // If a frame already existed remove it.

    if (this.frame) {
      this.frame.remove();
    }

    let currentState;

    if (addToGallery) {
      currentState = 'gallery-library';
    } else {
      currentState = value && value.length ? 'gallery-edit' : 'gallery';
    }

    if (!this.GalleryDetailsMediaFrame) {
      this.GalleryDetailsMediaFrame = getGalleryDetailsMediaFrame();
    }

    const attachments = getAttachmentsCollection(value);
    const selection = new wp.media.model.Selection(attachments.models, {
      props: attachments.props.toJSON(),
      multiple
    });
    this.frame = new this.GalleryDetailsMediaFrame({
      mimeType: allowedTypes,
      state: currentState,
      multiple,
      selection,
      editing: value && value.length ? true : false
    });
    wp.media.frame = this.frame;
    this.initializeListeners();
  }
  /**
   * Initializes the Media Library requirements for the featured image flow.
   *
   * @return {void}
   */


  buildAndSetFeatureImageFrame() {
    const featuredImageFrame = getFeaturedImageMediaFrame();
    const attachments = getAttachmentsCollection(this.props.value);
    const selection = new wp.media.model.Selection(attachments.models, {
      props: attachments.props.toJSON()
    });
    this.frame = new featuredImageFrame({
      mimeType: this.props.allowedTypes,
      state: 'featured-image',
      multiple: this.props.multiple,
      selection,
      editing: this.props.value ? true : false
    });
    wp.media.frame = this.frame;
  }

  componentWillUnmount() {
    this.frame.remove();
  }

  onUpdate(selections) {
    const {
      onSelect,
      multiple = false
    } = this.props;
    const state = this.frame.state();
    const selectedImages = selections || state.get('selection');

    if (!selectedImages || !selectedImages.models.length) {
      return;
    }

    if (multiple) {
      onSelect(selectedImages.models.map(model => slimImageObject(model.toJSON())));
    } else {
      onSelect(slimImageObject(selectedImages.models[0].toJSON()));
    }
  }

  onSelect() {
    const {
      onSelect,
      multiple = false
    } = this.props; // Get media attachment details from the frame state.

    const attachment = this.frame.state().get('selection').toJSON();
    onSelect(multiple ? attachment : attachment[0]);
  }

  onOpen() {
    var _this$props$value;

    this.updateCollection(); // Handle both this.props.value being either (number[]) multiple ids
    // (for galleries) or a (number) singular id (e.g. image block).

    const hasMedia = Array.isArray(this.props.value) ? !!((_this$props$value = this.props.value) !== null && _this$props$value !== void 0 && _this$props$value.length) : !!this.props.value;

    if (!hasMedia) {
      return;
    }

    const isGallery = this.props.gallery;
    const selection = this.frame.state().get('selection');

    if (!isGallery) {
      (0,lodash.castArray)(this.props.value).forEach(id => {
        selection.add(wp.media.attachment(id));
      });
    } // Load the images so they are available in the media modal.


    const attachments = getAttachmentsCollection((0,lodash.castArray)(this.props.value)); // Once attachments are loaded, set the current selection.

    attachments.more().done(function () {
      var _attachments$models;

      if (isGallery && attachments !== null && attachments !== void 0 && (_attachments$models = attachments.models) !== null && _attachments$models !== void 0 && _attachments$models.length) {
        selection.add(attachments.models);
      }
    });
  }

  onClose() {
    const {
      onClose
    } = this.props;

    if (onClose) {
      onClose();
    }
  }

  updateCollection() {
    const frameContent = this.frame.content.get();

    if (frameContent && frameContent.collection) {
      const collection = frameContent.collection; // Clean all attachments we have in memory.

      collection.toArray().forEach(model => model.trigger('destroy', model)); // Reset has more flag, if library had small amount of items all items may have been loaded before.

      collection.mirroring._hasMore = true; // Request items.

      collection.more();
    }
  }

  openModal() {
    if (this.props.gallery) {
      this.buildAndSetGalleryFrame();
    }

    this.frame.open();
  }

  render() {
    return this.props.render({
      open: this.openModal
    });
  }

}

/* harmony default export */ const media_upload = (MediaUpload);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+media-utils@3.4.1/node_modules/@wordpress/media-utils/build-module/components/index.js

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+api-fetch@6.3.1/node_modules/@wordpress/api-fetch/build-module/index.js + 12 modules
var api_fetch_build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+api-fetch@6.3.1/node_modules/@wordpress/api-fetch/build-module/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+blob@3.6.1/node_modules/@wordpress/blob/build-module/index.js
/**
 * Browser dependencies
 */
const {
  createObjectURL,
  revokeObjectURL
} = window.URL;
/**
 * @type {Record<string, File|undefined>}
 */

const cache = {};
/**
 * Create a blob URL from a file.
 *
 * @param {File} file The file to create a blob URL for.
 *
 * @return {string} The blob URL.
 */

function createBlobURL(file) {
  const url = createObjectURL(file);
  cache[url] = file;
  return url;
}
/**
 * Retrieve a file based on a blob URL. The file must have been created by
 * `createBlobURL` and not removed by `revokeBlobURL`, otherwise it will return
 * `undefined`.
 *
 * @param {string} url The blob URL.
 *
 * @return {File|undefined} The file for the blob URL.
 */

function getBlobByURL(url) {
  return cache[url];
}
/**
 * Retrieve a blob type based on URL. The file must have been created by
 * `createBlobURL` and not removed by `revokeBlobURL`, otherwise it will return
 * `undefined`.
 *
 * @param {string} url The blob URL.
 *
 * @return {string|undefined} The blob type.
 */

function getBlobTypeByURL(url) {
  var _getBlobByURL;

  return (_getBlobByURL = getBlobByURL(url)) === null || _getBlobByURL === void 0 ? void 0 : _getBlobByURL.type.split('/')[0]; // 0: media type , 1: file extension eg ( type: 'image/jpeg' ).
}
/**
 * Remove the resource and file cache from memory.
 *
 * @param {string} url The blob URL.
 */

function revokeBlobURL(url) {
  if (cache[url]) {
    revokeObjectURL(url);
  }

  delete cache[url];
}
/**
 * Check whether a url is a blob url.
 *
 * @param {string} url The URL.
 *
 * @return {boolean} Is the url a blob url?
 */

function isBlobURL(url) {
  if (!url || !url.indexOf) {
    return false;
  }

  return url.indexOf('blob:') === 0;
}
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+media-utils@3.4.1/node_modules/@wordpress/media-utils/build-module/utils/upload-media.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Browsers may use unexpected mime types, and they differ from browser to browser.
 * This function computes a flexible array of mime types from the mime type structured provided by the server.
 * Converts { jpg|jpeg|jpe: "image/jpeg" } into [ "image/jpeg", "image/jpg", "image/jpeg", "image/jpe" ]
 * The computation of this array instead of directly using the object,
 * solves the problem in chrome where mp3 files have audio/mp3 as mime type instead of audio/mpeg.
 * https://bugs.chromium.org/p/chromium/issues/detail?id=227004
 *
 * @param {?Object} wpMimeTypesObject Mime type object received from the server.
 *                                    Extensions are keys separated by '|' and values are mime types associated with an extension.
 *
 * @return {?Array} An array of mime types or the parameter passed if it was "falsy".
 */

function getMimeTypesArray(wpMimeTypesObject) {
  if (!wpMimeTypesObject) {
    return wpMimeTypesObject;
  }

  return (0,lodash.flatMap)(wpMimeTypesObject, (mime, extensionsString) => {
    const [type] = mime.split('/');
    const extensions = extensionsString.split('|');
    return [mime, ...(0,lodash.map)(extensions, extension => `${type}/${extension}`)];
  });
}
/**
 *	Media Upload is used by audio, image, gallery, video, and file blocks to
 *	handle uploading a media file when a file upload button is activated.
 *
 *	TODO: future enhancement to add an upload indicator.
 *
 * @param {Object}   $0                    Parameters object passed to the function.
 * @param {?Array}   $0.allowedTypes       Array with the types of media that can be uploaded, if unset all types are allowed.
 * @param {?Object}  $0.additionalData     Additional data to include in the request.
 * @param {Array}    $0.filesList          List of files.
 * @param {?number}  $0.maxUploadFileSize  Maximum upload size in bytes allowed for the site.
 * @param {Function} $0.onError            Function called when an error happens.
 * @param {Function} $0.onFileChange       Function called each time a file or a temporary representation of the file is available.
 * @param {?Object}  $0.wpAllowedMimeTypes List of allowed mime types and file extensions.
 */

async function uploadMedia(_ref) {
  let {
    allowedTypes,
    additionalData = {},
    filesList,
    maxUploadFileSize,
    onError = lodash.noop,
    onFileChange,
    wpAllowedMimeTypes = null
  } = _ref;
  // Cast filesList to array.
  const files = [...filesList];
  const filesSet = [];

  const setAndUpdateFiles = (idx, value) => {
    revokeBlobURL((0,lodash.get)(filesSet, [idx, 'url']));
    filesSet[idx] = value;
    onFileChange((0,lodash.compact)(filesSet));
  }; // Allowed type specified by consumer.


  const isAllowedType = fileType => {
    if (!allowedTypes) {
      return true;
    }

    return (0,lodash.some)(allowedTypes, allowedType => {
      // If a complete mimetype is specified verify if it matches exactly the mime type of the file.
      if ((0,lodash.includes)(allowedType, '/')) {
        return allowedType === fileType;
      } // Otherwise a general mime type is used and we should verify if the file mimetype starts with it.


      return (0,lodash.startsWith)(fileType, `${allowedType}/`);
    });
  }; // Allowed types for the current WP_User.


  const allowedMimeTypesForUser = getMimeTypesArray(wpAllowedMimeTypes);

  const isAllowedMimeTypeForUser = fileType => {
    return (0,lodash.includes)(allowedMimeTypesForUser, fileType);
  }; // Build the error message including the filename.


  const triggerError = error => {
    error.message = [(0,react.createElement)("strong", {
      key: "filename"
    }, error.file.name), ': ', error.message];
    onError(error);
  };

  const validFiles = [];

  for (const mediaFile of files) {
    // Verify if user is allowed to upload this mime type.
    // Defer to the server when type not detected.
    if (allowedMimeTypesForUser && mediaFile.type && !isAllowedMimeTypeForUser(mediaFile.type)) {
      triggerError({
        code: 'MIME_TYPE_NOT_ALLOWED_FOR_USER',
        message: (0,build_module.__)('Sorry, you are not allowed to upload this file type.'),
        file: mediaFile
      });
      continue;
    } // Check if the block supports this mime type.
    // Defer to the server when type not detected.


    if (mediaFile.type && !isAllowedType(mediaFile.type)) {
      triggerError({
        code: 'MIME_TYPE_NOT_SUPPORTED',
        message: (0,build_module.__)('Sorry, this file type is not supported here.'),
        file: mediaFile
      });
      continue;
    } // Verify if file is greater than the maximum file upload size allowed for the site.


    if (maxUploadFileSize && mediaFile.size > maxUploadFileSize) {
      triggerError({
        code: 'SIZE_ABOVE_LIMIT',
        message: (0,build_module.__)('This file exceeds the maximum upload size for this site.'),
        file: mediaFile
      });
      continue;
    } // Don't allow empty files to be uploaded.


    if (mediaFile.size <= 0) {
      triggerError({
        code: 'EMPTY_FILE',
        message: (0,build_module.__)('This file is empty.'),
        file: mediaFile
      });
      continue;
    }

    validFiles.push(mediaFile); // Set temporary URL to create placeholder media file, this is replaced
    // with final file from media gallery when upload is `done` below.

    filesSet.push({
      url: createBlobURL(mediaFile)
    });
    onFileChange(filesSet);
  }

  for (let idx = 0; idx < validFiles.length; ++idx) {
    const mediaFile = validFiles[idx];

    try {
      const savedMedia = await createMediaFromFile(mediaFile, additionalData);
      const mediaObject = { ...(0,lodash.omit)(savedMedia, ['alt_text', 'source_url']),
        alt: savedMedia.alt_text,
        caption: (0,lodash.get)(savedMedia, ['caption', 'raw'], ''),
        title: savedMedia.title.raw,
        url: savedMedia.source_url
      };
      setAndUpdateFiles(idx, mediaObject);
    } catch (error) {
      // Reset to empty on failure.
      setAndUpdateFiles(idx, null);
      let message;

      if ((0,lodash.has)(error, ['message'])) {
        message = (0,lodash.get)(error, ['message']);
      } else {
        message = (0,build_module/* sprintf */.nv)( // translators: %s: file name
        (0,build_module.__)('Error while uploading file %s to the media library.'), mediaFile.name);
      }

      onError({
        code: 'GENERAL',
        message,
        file: mediaFile
      });
    }
  }
}
/**
 * @param {File}    file           Media File to Save.
 * @param {?Object} additionalData Additional data to include in the request.
 *
 * @return {Promise} Media Object Promise.
 */

function createMediaFromFile(file, additionalData) {
  // Create upload payload.
  const data = new window.FormData();
  data.append('file', file, file.name || file.type.replace('/', '.'));
  (0,lodash.forEach)(additionalData, (value, key) => data.append(key, value));
  return (0,api_fetch_build_module/* default */.A)({
    path: '/wp/v2/media',
    body: data,
    method: 'POST'
  });
}
//# sourceMappingURL=upload-media.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+media-utils@3.4.1/node_modules/@wordpress/media-utils/build-module/utils/index.js

//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+media-utils@3.4.1/node_modules/@wordpress/media-utils/build-module/index.js


//# sourceMappingURL=index.js.map

/***/ })

}]);