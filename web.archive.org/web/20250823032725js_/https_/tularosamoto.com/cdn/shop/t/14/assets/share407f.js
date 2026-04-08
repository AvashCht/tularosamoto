var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
customElements.get("share-button")||customElements.define("share-button",class extends DetailsDisclosure{constructor(){super(),this.elements={shareButton:this.querySelector("button"),shareSummary:this.querySelector("summary"),closeButton:this.querySelector(".share-button__close"),successMessage:this.querySelector('[id^="ShareMessage"]'),urlInput:this.querySelector("input")},this.urlToShare=this.elements.urlInput?this.elements.urlInput.value:document.location.href,navigator.share?(this.mainDetailsToggle.setAttribute("hidden",""),this.elements.shareButton.classList.remove("hidden"),this.elements.shareButton.addEventListener("click",()=>{navigator.share({url:this.urlToShare,title:document.title})})):(this.mainDetailsToggle.addEventListener("toggle",this.toggleDetails.bind(this)),this.mainDetailsToggle.querySelector(".share-button__copy").addEventListener("click",this.copyToClipboard.bind(this)),this.mainDetailsToggle.querySelector(".share-button__close").addEventListener("click",this.close.bind(this)))}toggleDetails(){this.mainDetailsToggle.open||(this.elements.successMessage.classList.add("hidden"),this.elements.successMessage.textContent="",this.elements.closeButton.classList.add("hidden"),this.elements.shareSummary.focus())}copyToClipboard(){navigator.clipboard.writeText(this.elements.urlInput.value).then(()=>{this.elements.successMessage.classList.remove("hidden"),this.elements.successMessage.textContent=window.accessibilityStrings.shareSuccess,this.elements.closeButton.classList.remove("hidden"),this.elements.closeButton.focus()})}updateUrl(url){this.urlToShare=url,this.elements.urlInput.value=url}});
//# sourceMappingURL=/cdn/shop/t/14/assets/share.js.map?v=13024540447964430191733441097

}

/*
     FILE ARCHIVED ON 03:27:25 Aug 23, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:04:09 Apr 02, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.834
  exclusion.robots: 0.107
  exclusion.robots.policy: 0.09
  esindex: 0.015
  cdx.remote: 333.493
  LoadShardBlock: 256.949 (3)
  PetaboxLoader3.datanode: 273.638 (5)
  load_resource: 157.831
  PetaboxLoader3.resolve: 64.252
  loaddict: 56.79
*/