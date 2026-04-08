var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
class CartNotification extends HTMLElement{constructor(){super(),this.notification=document.getElementById("cart-notification"),this.header=document.querySelector("sticky-header"),this.onBodyClick=this.handleBodyClick.bind(this),this.notification.addEventListener("keyup",evt=>evt.code==="Escape"&&this.close()),this.querySelectorAll('button[type="button"]').forEach(closeButton=>closeButton.addEventListener("click",this.close.bind(this)))}open(){this.notification.classList.add("animate","active"),this.notification.addEventListener("transitionend",()=>{this.notification.focus(),trapFocus(this.notification)},{once:!0}),document.body.addEventListener("click",this.onBodyClick)}close(){this.notification.classList.remove("active"),document.body.removeEventListener("click",this.onBodyClick),removeTrapFocus(this.activeElement)}renderContents(parsedState){this.cartItemKey=parsedState.key,this.getSectionsToRender().forEach(section=>{document.getElementById(section.id).innerHTML=this.getSectionInnerHTML(parsedState.sections[section.id],section.selector)}),this.header&&this.header.reveal(),this.open()}getSectionsToRender(){return[{id:"cart-notification-product",selector:`[id="cart-notification-product-${this.cartItemKey}"]`},{id:"cart-notification-button"},{id:"cart-icon-bubble"}]}getSectionInnerHTML(html,selector=".shopify-section"){return new DOMParser().parseFromString(html,"text/html").querySelector(selector).innerHTML}handleBodyClick(evt){const target=evt.target;if(target!==this.notification&&!target.closest("cart-notification")){const disclosure=target.closest("details-disclosure, header-menu");this.activeElement=disclosure?disclosure.querySelector("summary"):null,this.close()}}setActiveElement(element){this.activeElement=element}}customElements.define("cart-notification",CartNotification);
//# sourceMappingURL=/cdn/shop/t/14/assets/cart-notification.js.map?v=133508293167896966491733441095

}

/*
     FILE ARCHIVED ON 12:54:31 Dec 21, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:42:33 Apr 02, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.567
  exclusion.robots: 0.059
  exclusion.robots.policy: 0.049
  esindex: 0.01
  cdx.remote: 6.594
  LoadShardBlock: 117.178 (3)
  PetaboxLoader3.datanode: 76.04 (5)
  load_resource: 66.892
  PetaboxLoader3.resolve: 41.794
  loaddict: 13.148
*/