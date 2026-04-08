var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
function manageChatStateBasedOnCurrentSettings(
  currentData,
  previousSettings,
  currentSettings,
) {
  Object.keys(currentSettings).forEach(key => {
    if (previousSettings[key] !== currentSettings[key]) {
      settingChanged(key, currentSettings[key], currentData);
    }
  });
}

function settingChanged(key, value, currentData) {
  switch (key) {
    case 'icon':
    case 'text':
      localStorage.setItem(
        'shopifyChatData',
        JSON.stringify({...currentData, isOpen: false}),
      );
      break;
    case 'greetingMessage':
      localStorage.setItem(
        'shopifyChatData',
        JSON.stringify({
          ...currentData,
          conversationId: null,
          sessionId: null,
          hasSentCustomerInfo: false,
          isOpen: true,
        }),
      );
      break;
  }
}

(function load() {
  const chatButton = document.getElementById('chat-button-container');
  const chatSettings = chatButton.dataset;
  const buttonHorizontalPosition = chatButton.getAttribute(
    'data-horizontal-position',
  );
  const buttonVerticalPosition = chatButton.getAttribute(
    'data-vertical-position',
  );
  const buttonIcon = chatButton.getAttribute('data-icon');
  const buttonText = chatButton.getAttribute('data-text');
  const buttonColor = chatButton.getAttribute('data-color');
  const buttonSecondaryColor = chatButton.getAttribute('data-secondary-color');
  const buttonTernaryColor = chatButton.getAttribute('data-ternary-color');
  const shopDomain = chatButton.getAttribute('data-domain');
  const externalIdentifier = chatButton.getAttribute(
    'data-external-identifier',
  );

  if (Shopify.designMode) {
    const chatPreviewJSON =
      sessionStorage.getItem('chatPreview') || JSON.stringify({});
    const previousSettings = JSON.parse(chatPreviewJSON);
    sessionStorage.setItem('chatPreview', JSON.stringify(chatSettings));

    const currentData =
      JSON.parse(localStorage.getItem('shopifyChatData')) || {};
    manageChatStateBasedOnCurrentSettings(
      currentData,
      previousSettings,
      chatSettings,
    );
  }

  const src = document.currentScript.src;
  const script = document.createElement('script');

  const chatSrc = 'shopifyChatV1Widget.js';
  const indexSrc = src.replace('inbox-chat-loader.js', chatSrc);

  script.src = indexSrc;
  script.type = 'module';
  script.defer = true;
  script.async = true;
  Object.assign(script.dataset, {
    buttonColor: buttonColor,
    secondaryColor: buttonSecondaryColor,
    ternaryColor: buttonTernaryColor,
    icon: buttonIcon,
    text: buttonText,
    position: buttonHorizontalPosition,
    verticalPosition: buttonVerticalPosition,
    shopId: externalIdentifier,
    shop: shopDomain,
  });

  chatButton.parentNode.appendChild(script);
})();

}

/*
     FILE ARCHIVED ON 17:20:05 Jan 23, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:33:58 Apr 02, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.517
  exclusion.robots: 0.019
  exclusion.robots.policy: 0.008
  esindex: 0.01
  cdx.remote: 61.898
  LoadShardBlock: 173.968 (3)
  PetaboxLoader3.resolve: 114.365 (4)
  PetaboxLoader3.datanode: 191.083 (5)
  load_resource: 350.96 (2)
*/