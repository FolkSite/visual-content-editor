function Editor(el) {
	'use strict';
	return this.init(el);
}

if(typeof module === 'module') {
	module.exports = Editor;
}else if(typeof define === 'function' && define.amd) {
	define(function() {
		'use strict';
		return Editor;
	});
}

(function(window, document) {
	'use strict';

	Editor.prototype =  {

		DOM_MAP: {
			"p": "<p></p>",
			"section": "<section></section>",
			"image": "<img>"
		},

		KEY_MAP: {
			"CTL S p": "p",
			"CTL S s": "section",
			"CTL S i": "image"
		},

		/**
		Initialize the default settings, mappings, and content.
		Bind the events here.
		**/
		init: function(el) {
			// Is el an object and NodeType of Element?
			if(typeof el === 'object' && el.nodeType === 1) {
				// Initialization and setup.
				this.editor = el;
				this.setupEditor();
				this.setup();
			}else{
				console.log("This will not work.");
				return;
			}
		},

		setup: function() {
			this.editor.addEventListener('keypress', function(e) {
				console.log("TEST");
			});

			this.bindSelection();
			this.setContent();
		},

		setupEditor: function() {
			if(!this.editor.isContentEditable) {
				this.editor.contentEditable = "true";
			}

			this.editor.setAttribute('data-editor-element', 'true');
		},

		setContent: function() {
			if(this.editor.getAttribute('data-default-content')) {
				this.editor.innerHTML = this.editor.getAttribute('data-default-content');
			}
		},

		// Selection Stuff
		getCurrentSelection: function() {
			var sel, range;
			if(window.getSelection) {
				sel = window.getSelection();
				return sel;
			}
		},

		getSelectionStart: function() {
			var node = document.getSelection().anchorNode;
			return (node.nodeType === 3 ? node.parentNode : node);
		},

		getCurrentSelectionType: function() {},

		// Event Bindings
		bindMapping: function() {},

		bindSafeCheck: function() {},

		bindSelection: function() {
			this.editor.addEventListener('mouseup', function(e) {
				if(window.getSelection) {
					// console.log(this.getSelectionStart());
					// console.log(this.getCurrentSelection());
				}
			});
		},

		// Event Methods
		InsertParagraph: function() {},

		RemoveParagraph: function() {},

		InsertImage: function() {},

		RemoveImage: function() {},

		InsertSection: function() {},

		RemoveSection: function() {},

		InsertCustomElement: function(el) {},

		RemoveCustomElement: function(el) {},

	};

}(window, document));