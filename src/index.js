(function (global) {
    const kitmodule = global.kitmodule || (global.kitmodule = {});
    const $ = Symbol("$");

    // --------------------------------
    // Class: KitYAML
    // Convert JS Object → YAML or Front Matter

    function KitYAML(obj = {}) {
        if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
            throw new Error("KitYAML: input must be a plain object.");
        }

        this[$] = { obj, inline: true }; // default: inline array mode
    }

    // --------------------------------
    // Enable inline array mode
    // Example: tags: ["a", "b"]
    KitYAML.prototype.inline = function (enable = true) {
        this[$].inline = enable;
        return this;
    };

    // Enable block array mode
    // Example:
    // tags:
    //   - a
    //   - b
    KitYAML.prototype.block = function (enable = true) {
        this[$].inline = !enable;
        return this;
    };

    // --------------------------------
    // Convert JS object to YAML string
    KitYAML.prototype.convert = function () {
        const { obj, inline } = this[$];
        return encodeYAML(obj, 0, inline);
    };

    // --------------------------------
    // Convert to Markdown Front Matter
    KitYAML.prototype.frontMatter = function (body = "") {
        return `---\n${this.convert()}\n---\n\n${body}`;
    };

    // --------------------------------
    // Internal recursive YAML encoder

    function encodeYAML(value, indent = 0, inline = false) {
        const space = "  ".repeat(indent);

        if (value === null || value === undefined) return '""';
        if (typeof value === "boolean" || typeof value === "number") return value;
        if (typeof value === "string") return JSON.stringify(value);

        // ---------- Array ----------
        if (Array.isArray(value)) {
            if (inline) {
                return `[${value.map(v => encodeYAML(v, indent, inline)).join(", ")}]`;
            } else {
                return value
                    .map(v => {
                        if (typeof v === "object" && v !== null) {
                            return `\n${space}- ${encodeYAML(v, indent + 1, inline).replace(/^\s+/, "")}`;
                        } else {
                            return `${space}- ${encodeYAML(v, indent + 1, inline)}`;
                        }
                    })
                    .join("\n");
            }
        }

        // ---------- Object ----------
        if (typeof value === "object") {
            return Object.entries(value)
                .map(([key, val]) => {
                    if (Array.isArray(val)) {
                        if (inline) {
                            return `${space}${key}: [${val.map(i => encodeYAML(i, indent, inline)).join(", ")}]`;
                        } else {
                            return `${space}${key}:\n${encodeYAML(val, indent + 1, inline)}`;
                        }
                    }

                    if (typeof val === "object" && val !== null) {
                        return `${space}${key}:\n${encodeYAML(val, indent + 1, inline)}`;
                    }

                    return `${space}${key}: ${encodeYAML(val, indent + 1, inline)}`;
                })
                .join("\n");
        }

        return JSON.stringify(value);
    }

    // --------------------------------
    // Export module

    global.KitYAML = KitYAML;
    global.yamlFrontMatter = (obj, body) => new KitYAML(obj).frontMatter(body);
    
    kitmodule.YAML = KitYAML;
    kitmodule.yaml = (obj) => new KitYAML(obj);

    if (typeof module !== "undefined" && module.exports) {
        module.exports = { KitYAML };
    }

})(typeof window !== "undefined" ? window : globalThis);
