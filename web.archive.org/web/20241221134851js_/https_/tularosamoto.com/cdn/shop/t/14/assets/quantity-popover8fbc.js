var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
customElements.get("quantity-popover")||customElements.define("quantity-popover",class extends HTMLElement{constructor(){super(),this.mql=window.matchMedia("(min-width: 990px)"),this.mqlTablet=window.matchMedia("(min-width: 750px)"),this.infoButtonDesktop=this.querySelector(".quantity-popover__info-button--icon-only"),this.infoButtonMobile=this.querySelector(".quantity-popover__info-button--icon-with-label"),this.popoverInfo=this.querySelector(".quantity-popover__info"),this.closeButton=this.querySelector(".button-close"),this.eventMouseEnterHappened=!1,this.closeButton&&this.closeButton.addEventListener("click",this.closePopover.bind(this)),this.popoverInfo&&this.infoButtonDesktop&&this.mqlTablet.matches&&this.popoverInfo.addEventListener("mouseleave",this.closePopover.bind(this)),this.infoButtonDesktop&&(this.infoButtonDesktop.addEventListener("click",this.togglePopover.bind(this)),this.infoButtonDesktop.addEventListener("focusout",this.closePopover.bind(this))),this.infoButtonMobile&&this.infoButtonMobile.addEventListener("click",this.togglePopover.bind(this)),this.infoButtonDesktop&&this.mqlTablet.matches&&(this.infoButtonDesktop.addEventListener("mouseenter",this.togglePopover.bind(this)),this.infoButtonDesktop.addEventListener("mouseleave",this.closePopover.bind(this)))}togglePopover(event){if(event.preventDefault(),event.type==="mouseenter"&&(this.eventMouseEnterHappened=!0),event.type==="click"&&this.eventMouseEnterHappened)return;const button=this.infoButtonDesktop&&this.mql.matches?this.infoButtonDesktop:this.infoButtonMobile,isExpanded=button.getAttribute("aria-expanded")==="true";(this.mql.matches&&!isExpanded||event.type==="click")&&(button.setAttribute("aria-expanded",!isExpanded),this.popoverInfo.toggleAttribute("hidden"),button.classList.toggle("quantity-popover__info-button--open"),this.infoButtonDesktop.classList.add("quantity-popover__info-button--icon-only--animation")),button.getAttribute("aria-expanded")==="true"&&event.type!=="mouseenter"&&(button.focus(),button.addEventListener("keyup",e=>{e.key==="Escape"&&this.closePopover(e)}))}closePopover(event){event.preventDefault();const isButtonChild=this.infoButtonDesktop.contains(event.relatedTarget),isPopoverChild=this.popoverInfo.contains(event.relatedTarget),button=this.infoButtonDesktop&&this.mql.matches?this.infoButtonDesktop:this.infoButtonMobile;!isButtonChild&&!isPopoverChild&&(button.setAttribute("aria-expanded","false"),button.classList.remove("quantity-popover__info-button--open"),this.popoverInfo.setAttribute("hidden",""),this.infoButtonDesktop.classList.remove("quantity-popover__info-button--icon-only--animation")),this.eventMouseEnterHappened=!1}});
//# sourceMappingURL=/cdn/shop/t/14/assets/quantity-popover.js.map?v=987015268078116491733441097

}

/*
     FILE ARCHIVED ON 13:48:51 Dec 21, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:02:29 Apr 02, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.547
  exclusion.robots: 0.058
  exclusion.robots.policy: 0.048
  esindex: 0.01
  cdx.remote: 17.274
  LoadShardBlock: 49.568 (3)
  PetaboxLoader3.datanode: 88.343 (5)
  load_resource: 186.689
  PetaboxLoader3.resolve: 74.1
  loaddict: 90.705
*/