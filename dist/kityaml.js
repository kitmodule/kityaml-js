(function(global) {
	const kitmodule = global.kitmodule || (global.kitmodule = {});
	const $ = Symbol("$");

	function KitFrontMatter(header = {}, body = "") {
		this[$] = {
			header,
			body,
			inline: !0,
		}
	}
	KitFrontMatter.prototype.isBlock = function(val = !0) {
		this[$].inline = !val;
		return this
	};
	KitFrontMatter.prototype.isInline = function(val = !0) {
		this[$].inline = val;
		return this
	};

	function safeYAML(value, indent = 0, inline = !1) {
		const space = "  ".repeat(indent);
		if (value === null || value === undefined) return '""';
		if (typeof value === "boolean" || typeof value === "number") return value;
		if (typeof value === "string") return JSON.stringify(value);
		if (Array.isArray(value)) {
			if (inline) {
				return `[${value.map(v => safeYAML(v, indent, inline)).join(", ")}]`
			} else {
				return value.map(v => {
					if (typeof v === "object" && v !== null) {
						return `\n${space}- ${safeYAML(v, indent + 1).replace(/^\s+/, "")}`
					} else {
						return `${space}- ${safeYAML(v, indent + 1)}`
					}
				}).join("\n")
			}
		}
		if (typeof value === "object") {
			return Object.entries(value).map(([k, v]) => {
				if (Array.isArray(v)) {
					if (inline) {
						return `${space}${k}: [${v.map(item => safeYAML(item, indent, inline)).join(", ")}]`
					} else {
						return `${space}${k}:\n${safeYAML(v, indent + 1, inline)}`
					}
				} else if (typeof v === "object" && v !== null) {
					return `${space}${k}:\n${safeYAML(v, indent + 1, inline)}`
				} else {
					return `${space}${k}: ${safeYAML(v, indent + 1, inline)}`
				}
			}).join("\n")
		}
		return JSON.stringify(value)
	}
	KitFrontMatter.prototype.toYAML = function() {
		const {
			header,
			inline
		} = this[$];
		return safeYAML(header, 0, inline)
	};
	KitFrontMatter.prototype.toMarkdown = function() {
		return `---\n${this.toYAML()}\n---\n\n${this[$].body}`
	};

	function headerToYAML(header = {}, options = {}) {
		const fm = new KitFrontMatter(header);
		if (options.blockArrays) fm.isBlock(!0);
		if (typeof options.indent === "number") {
			fm[$].customIndent = options.indent
		}
		return fm.toYAML()
	}

	function objectToYAML(obj = {}, options = {}) {
		const inline = !(options.blockArrays === !0);
		const indent = options.indent || 0;
		return safeYAML(obj, indent, inline)
	}

	function frontMatterMarkdown(header = {}, body = "", options = {}) {
		const fm = new KitFrontMatter(header, body);
		if (options.blockArrays) fm.isBlock(!0);
		return fm.toMarkdown()
	}
	global.KitFrontMatter = KitFrontMatter;
	global.headerToYAML = headerToYAML;
	global.objectToYAML = objectToYAML;
	global.frontMatterMarkdown = frontMatterMarkdown;
	kitmodule.FrontMatter = KitFrontMatter;
	kitmodule.frontMatter = function(header, body) {
		return KitFrontMatter(header, body)
	};
	kitmodule.headerToYAML = headerToYAML;
	kitmodule.objectToYAML = objectToYAML;
	kitmodule.frontMatterMarkdown = frontMatterMarkdown;
	if (typeof module !== "undefined" && module.exports) {
		module.exports = {
			KitFrontMatter,
			headerToYAML,
			objectToYAML,
			frontMatterMarkdown
		}
	}
})(typeof window !== "undefined" ? window : globalThis)