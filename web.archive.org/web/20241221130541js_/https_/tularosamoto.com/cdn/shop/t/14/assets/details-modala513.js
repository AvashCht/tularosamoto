var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
class DetailsModal extends HTMLElement{constructor(){super(),this.detailsContainer=this.querySelector("details"),this.summaryToggle=this.querySelector("summary"),this.detailsContainer.addEventListener("keyup",event=>event.code.toUpperCase()==="ESCAPE"&&this.close()),this.summaryToggle.addEventListener("click",this.onSummaryClick.bind(this)),this.querySelector('button[type="button"]').addEventListener("click",this.close.bind(this)),this.summaryToggle.setAttribute("role","button")}isOpen(){return this.detailsContainer.hasAttribute("open")}onSummaryClick(event){event.preventDefault(),event.target.closest("details").hasAttribute("open")?this.close():this.open(event)}onBodyClick(event){(!this.contains(event.target)||event.target.classList.contains("modal-overlay"))&&this.close(!1)}open(event){this.onBodyClickEvent=this.onBodyClickEvent||this.onBodyClick.bind(this),event.target.closest("details").setAttribute("open",!0),document.body.addEventListener("click",this.onBodyClickEvent),document.body.classList.add("overflow-hidden"),trapFocus(this.detailsContainer.querySelector('[tabindex="-1"]'),this.detailsContainer.querySelector('input:not([type="hidden"])'))}close(focusToggle=!0){removeTrapFocus(focusToggle?this.summaryToggle:null),this.detailsContainer.removeAttribute("open"),document.body.removeEventListener("click",this.onBodyClickEvent),document.body.classList.remove("overflow-hidden")}}customElements.define("details-modal",DetailsModal);
//# sourceMappingURL=/cdn/shop/t/14/assets/details-modal.js.map?v=25581673532751508451733441095

}

/*
     FILE ARCHIVED ON 13:05:41 Dec 21, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:41:38 Apr 02, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.675
  exclusion.robots: 0.067
  exclusion.robots.policy: 0.054
  esindex: 0.012
  cdx.remote: 51.424
  LoadShardBlock: 109.587 (3)
  PetaboxLoader3.datanode: 244.212 (5)
  PetaboxLoader3.resolve: 123.567 (2)
  load_resource: 267.435
  loaddict: 77.361
*/