new Vue({
  el: "#editor",
  data: {
      input: `<pre><code class="js">var Prism = require('prismjs');</code></pre>`
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.input, { sanitize: false });
    }
  },
  methods: {
    update: function(e) {
      this.input = e.target.value;
      setTimeout(() => {
          hljs.initHighlighting.called = false;
          hljs.initHighlighting();
        //   hljs.initHighlightingOnLoad();
        //   Prism.highlightAll();
      }, 100);
    }
  }
});
