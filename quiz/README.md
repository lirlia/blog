# Quiz jQuery

Create a Quiz easily by jQuery

# How to use

## HTML

```html

  <div class="quiz">
    <h4>１問目：xxxx</h4>
    <div class="quiz-choice">
      <div class="quiz-choice-list quiz-border quiz-uncheck">xx</div>
      <div class="quiz-choice-list quiz-border quiz-uncheck">xx</div>
      <div class="quiz-choice-list quiz-border quiz-uncheck quiz-true">正解はquiz-trueを付与</div>
      <div class="quiz-choice-list quiz-border quiz-uncheck">xx</div>
    </div>
      <div class="quiz-ans quiz-border">
      <div class="quiz-result"></div>
      <p>答えを記載</p>
    </div>
    <h4>２問目：xxxx</h4>
    <div class="quiz-choice">
      <div class="quiz-choice-list quiz-border quiz-uncheck quiz-true">xx</div>
      <div class="quiz-choice-list quiz-border quiz-uncheck">xx</div>
      ・・・
      <div class="quiz-choice-list quiz-border quiz-uncheck">xx</div>
      <div class="quiz-choice-list quiz-border quiz-uncheck">xx</div>
    </div>
    <div class="quiz-ans quiz-border">
      <div class="quiz-result"> </div>
      <p>xx</p>
    </div>
    ・・・
    <div class="quiz-all-result quiz-border">
    <div class="quiz-all-result-messages"> </div>

  </div>
```

## javascript

```javascript
var quiz_name="Your Quiz Name"
```

# License
GPL
