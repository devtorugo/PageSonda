

window.watsonAssistantChatOptions = {
  integrationID: "0b5c6e11-fb88-418c-b46f-deb41ffe2dc4", // The ID of this integration.
  region: "us-east", // The region your integration is hosted in.
  serviceInstanceID: "9adcd8c8-d42e-4961-b509-0a2d4055bc4a", // The ID of your service instance.
  onLoad: async (instance) => { await instance.render(); }
};
setTimeout(function(){
  const t=document.createElement('script');
  t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
  document.head.appendChild(t);
});

 