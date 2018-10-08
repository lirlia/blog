# Nazo jQuery

Create a Nazo easily by jQuery

# How to use

## HTML

```html
<div class="nazo">
  <div class="q">
    <p><input class="ans" type="text" placeholder="回答を入力してください" />　 <input class="submit" type="submit" value="回答する" /></p>
    <p>aaaa</p>
  </div>
  <div class="q hide">
    <p><input class="ans" type="text" placeholder="回答を入力してください" />　 <input class="submit" type="submit" value="回答する" /></p>
    <p>aaaa</p>
  </div>
</div>
```

## javascript

```javascript
ans = {
  "0": "answer(URI encodeed)",
  "1": "answer(URI encodeed)",
  ・・・
}
```

### include

when use sha256 js.
include these library.

<script src="/path/sha256.js"></script>
<script src="/path/blog-nazo-sha256.js"></script>

# License
GPL
