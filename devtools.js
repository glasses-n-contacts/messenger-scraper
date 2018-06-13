var all = [];

chrome.devtools.network.onRequestFinished.addListener(
  function (request) {
    if (request.request.url.indexOf("graphqlbatch") > -1) {
      request.getContent(function(content, encoding) {
        var response = content.substring(0, content.lastIndexOf('{'));
        var data = JSON.parse(response);

        var message_thread = data.o0.data.message_thread;
        if (!message_thread) return;

        var messages = message_thread.messages;
        if (!messages) return;

        messages.nodes.forEach(message => {
          if (all.filter(orig => {
            return orig.timestamp_precise === message.timestamp_precise;
          }).length === 0) {
            all.push(message);
          }
        })

        console.log(all);
      });
    }
  });