---
layout: page
permalink: /talks/devdata/test1
---

<script>

// Feature detects Navigation Timing API support.
if (window.performance && window.fetch) {
  var t0 = performance.now();
  
  fetch('https://us-central1-sd-talk-devdata.cloudfunctions.net/testApi1')
  .then(function(response) { return response.json(); })
  .then(function(data) {    
    var t1 = performance.now();
    var timeItTook = t1 - t0;
    console.log(timeItTook, JSON.stringify(data);
    // Sends the timing hit to Google Analytics.
    ga('send', 'timing', 'api1calls', 'load', timeItTook);
    return;
  }); 
}

</script>
