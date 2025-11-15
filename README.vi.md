# 📝 KitYAML by Kitmodule

**Chuyển đổi JavaScript object thành YAML hoặc Markdown Front Matter — nhẹ, không phụ thuộc thư viện khác, và dễ sử dụng.**

[English](https://github.com/kitmodule/kityaml-js/blob/master/README.md) | [Tiếng Việt](#)

[![npm version](https://img.shields.io/npm/v/kityaml-js.svg)](https://www.npmjs.com/package/kityaml-js)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/kitmodule/kityaml-js/blob/master/LICENSE)

## ✨ Tính năng

* 🏷️ Chuyển đổi JavaScript object thành **YAML**, hỗ trợ nested object và array.
* 📄 Tạo full **Markdown front matter** với delimiters `---`.
* 🔀 Chọn kiểu array: **inline** hoặc **block**.
* ⚡ Hoàn toàn **vanilla JavaScript**, không cần phụ thuộc.
* 💨 Hỗ trợ helper nhanh để tạo front matter chỉ với một dòng: `yamlFrontMatter(obj, body)`.

## 🚀 Cài đặt

### Sử dụng npm

```bash
npm install @kitmodule/kityaml-js
```

### Sử dụng CDN

```html
<script src="https://unpkg.com/@kitmodule/kityaml/dist/kityaml.min.js"></script>
```

hoặc

```html
<script src="https://cdn.jsdelivr.net/npm/kityaml/dist/kityaml.min.js"></script>
```

## 💡 Cách dùng

### Trình duyệt (CDN)

```html
<script src="https://unpkg.com/@kitmodule/kityaml-js/dist/kityaml.min.js"></script>
<script>
  const obj = { title: "Bài viết của tôi", tags: ["js", "yaml"] };
  const body = "Xin chào thế giới!";

  const yaml = new KitYAML(obj);
  console.log(yaml.frontMatter(body));
</script>
```

### Node.js / CommonJS

```js
const { KitYAML, yamlFrontMatter } = require('kityaml-js');

// Chuyển object thành YAML
const obj = { title: "Bài viết của tôi", tags: ["js", "yaml"] };
const yaml = new KitYAML(obj).block(); // kiểu array block
console.log(yaml.convert());

// Tạo front matter nhanh
console.log(yamlFrontMatter(obj, "Xin chào thế giới!"));
```

## 🧩 Tham chiếu API

### `new KitYAML(obj)`

| Tham số | Kiểu   | Mô tả                                 |
| ------- | ------ | ------------------------------------- |
| obj     | object | JavaScript object thuần để chuyển đổi |

### Instance Methods

| Method                   | Mô tả                                            |
| ------------------------ | ------------------------------------------------ |
| `.inline(enable = true)` | Sử dụng array kiểu inline (`["a", "b"]`)         |
| `.block(enable = true)`  | Sử dụng array kiểu block (`- a\n- b`)            |
| `.convert()`             | Chuyển object thành chuỗi YAML                   |
| `.frontMatter(body="")`  | Chuyển object + body thành Markdown front matter |

### Helper toàn cục

| Function                     | Mô tả                           |
| ---------------------------- | ------------------------------- |
| `yamlFrontMatter(obj, body)` | Tạo nhanh Markdown front matter |

## 🧪 Ví dụ Output

```js
const obj = { title: "Bài viết của tôi", tags: ["js", "yaml"] };
const body = "Đây là nội dung bài viết.";

console.log(yamlFrontMatter(obj, body));
```

Output:

```yaml
title: "Bài viết của tôi"
tags:
  - "js"
  - "yaml"
Đây là nội dung bài viết.
```

## ☕ Ủng hộ tác giả

Nếu bạn thấy thư viện hữu ích, có thể ủng hộ tôi:

[![Ko-fi](https://img.shields.io/badge/Ko--fi-FF5E5B?style=for-the-badge\&logo=ko-fi\&logoColor=white)](https://ko-fi.com/huynhnhanquoc)
[![Buy Me a Coffee](https://img.shields.io/badge/Buy_Me_a_Coffee-FFDD00?style=for-the-badge\&logo=buy-me-a-coffee\&logoColor=black)](https://buymeacoffee.com/huynhnhanquoc)
[![GitHub Sponsors](https://img.shields.io/badge/GitHub_Sponsors-f7f7f7?style=for-the-badge\&logo=githubsponsors\&logoColor=ff69b4\&color=f7f7f7)](https://github.com/sponsors/huynhnhanquoc)
[![Patreon](https://img.shields.io/badge/Patreon-F96854?style=for-the-badge\&logo=patreon\&logoColor=white)](https://patreon.com/huynhnhanquoc)
[![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge\&logo=paypal\&logoColor=white)](https://paypal.me/huynhnhanquoc)

## 🧾 License

Phát hành theo [MIT License](https://github.com/kitmodule/kityaml-js/blob/master/LICENSE)
© 2025 [Huỳnh Nhân Quốc](https://github.com/huynhnhanquoc) · Open Source [@Kit Module](https://github.com/kitmodule)
