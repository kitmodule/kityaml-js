# 📝 KitYAML by Kitmodule

**Convert JavaScript objects to YAML or Markdown Front Matter — lightweight, dependency-free, and easy to use.**

[English](#) | [Tiếng Việt](https://github.com/kitmodule/kityaml-js/blob/master/README.vi.md)


[![npm version](https://img.shields.io/npm/v/kityaml-js.svg)](https://www.npmjs.com/package/kityaml-js)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/kitmodule/kityaml-js/blob/master/LICENSE)

## ✨ Features

* 🏷️ Convert JavaScript objects to **YAML**, supports nested objects and arrays.
* 📄 Generate full **Markdown front matter** with `---` delimiters.
* 🔀 Switch array style: **inline** or **block**.
* ⚡ Pure **vanilla JavaScript**, zero dependencies.
* 💨 Quick helper for one-line front matter generation: `yamlFrontMatter(obj, body)`.

## 🚀 Installation

### Using npm

```bash
npm install @kitmodule/kityaml-js
```

### Using CDN

```html
<script src="https://unpkg.com/@kitmodule/kityaml/dist/kityaml.min.js"></script>
```

or

```html
<script src="https://cdn.jsdelivr.net/npm/kityaml/dist/kityaml.min.js"></script>
```

## 💡 Usage

### Browser (CDN)

```html
<script src="https://unpkg.com/@kitmodule/kityaml-js/dist/kityaml.min.js"></script>
<script>
  const obj = { title: "My Post", tags: ["js", "yaml"] };
  const body = "Hello world!";

  const yaml = new KitYAML(obj);
  console.log(yaml.frontMatter(body));
</script>
```

### Node.js / CommonJS

```js
const { KitYAML, yamlFrontMatter } = require('kityaml-js');

// Convert object to YAML
const obj = { title: "My Post", tags: ["js", "yaml"] };
const yaml = new KitYAML(obj).block(); // block array style
console.log(yaml.convert());

// Quick front matter generation
console.log(yamlFrontMatter(obj, "Hello world!"));
```

## 🧩 API Reference

### `new KitYAML(obj)`

| Parameter | Type   | Description                        |
| --------- | ------ | ---------------------------------- |
| obj       | object | Plain JavaScript object to convert |

### Instance Methods

| Method                   | Description                                    |
| ------------------------ | ---------------------------------------------- |
| `.inline(enable = true)` | Use inline arrays (`["a", "b"]`)               |
| `.block(enable = true)`  | Use block arrays (`- a\n- b`)                  |
| `.convert()`             | Convert object to YAML string                  |
| `.frontMatter(body="")`  | Convert object + body to Markdown front matter |

### Global Helper

| Function                     | Description                            |
| ---------------------------- | -------------------------------------- |
| `yamlFrontMatter(obj, body)` | Quickly generate Markdown front matter |

## 🧪 Example Output

```js
const obj = { title: "My Post", tags: ["js", "yaml"] };
const body = "This is the content.";

console.log(yamlFrontMatter(obj, body));
```

Output:

```yamltitle: "My Post"
tags:
  - "js"
  - "yaml"
This is the content.
```

## ☕ Support the Author

If you find this library useful, you can support me:

[![Ko-fi](https://img.shields.io/badge/Ko--fi-FF5E5B?style=for-the-badge\&logo=ko-fi\&logoColor=white)](https://ko-fi.com/huynhnhanquoc)
[![Buy Me a Coffee](https://img.shields.io/badge/Buy_Me_a_Coffee-FFDD00?style=for-the-badge\&logo=buy-me-a-coffee\&logoColor=black)](https://buymeacoffee.com/huynhnhanquoc)
[![GitHub Sponsors](https://img.shields.io/badge/GitHub_Sponsors-f7f7f7?style=for-the-badge\&logo=githubsponsors\&logoColor=ff69b4\&color=f7f7f7)](https://github.com/sponsors/huynhnhanquoc)
[![Patreon](https://img.shields.io/badge/Patreon-F96854?style=for-the-badge\&logo=patreon\&logoColor=white)](https://patreon.com/huynhnhanquoc)
[![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge\&logo=paypal\&logoColor=white)](https://paypal.me/huynhnhanquoc)

## 🧾 License

Released under the [MIT License](https://github.com/kitmodule/kityaml-js/blob/master/LICENSE)
© 2025 [Huỳnh Nhân Quốc](https://github.com/huynhnhanquoc) · Open Source [@Kit Module](https://github.com/kitmodule)
