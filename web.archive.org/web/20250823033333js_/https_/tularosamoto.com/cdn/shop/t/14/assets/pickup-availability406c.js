var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
customElements.get("pickup-availability")||customElements.define("pickup-availability",class extends HTMLElement{constructor(){super(),this.hasAttribute("available")&&(this.errorHtml=this.querySelector("template").content.firstElementChild.cloneNode(!0),this.onClickRefreshList=this.onClickRefreshList.bind(this),this.fetchAvailability(this.dataset.variantId))}fetchAvailability(variantId){if(!variantId)return;let rootUrl=this.dataset.rootUrl;rootUrl.endsWith("/")||(rootUrl=rootUrl+"/");const variantSectionUrl=`${rootUrl}variants/${variantId}/?section_id=pickup-availability`;fetch(variantSectionUrl).then(response=>response.text()).then(text=>{const sectionInnerHTML=new DOMParser().parseFromString(text,"text/html").querySelector(".shopify-section");this.renderPreview(sectionInnerHTML)}).catch(e=>{const button=this.querySelector("button");button&&button.removeEventListener("click",this.onClickRefreshList),this.renderError()})}onClickRefreshList(){this.fetchAvailability(this.dataset.variantId)}update(variant){variant?.available?this.fetchAvailability(variant.id):(this.removeAttribute("available"),this.innerHTML="")}renderError(){this.innerHTML="",this.appendChild(this.errorHtml),this.querySelector("button").addEventListener("click",this.onClickRefreshList)}renderPreview(sectionInnerHTML){const drawer=document.querySelector("pickup-availability-drawer");if(drawer&&drawer.remove(),!sectionInnerHTML.querySelector("pickup-availability-preview")){this.innerHTML="",this.removeAttribute("available");return}this.innerHTML=sectionInnerHTML.querySelector("pickup-availability-preview").outerHTML,this.setAttribute("available",""),document.body.appendChild(sectionInnerHTML.querySelector("pickup-availability-drawer")),this.dataset.productPageColorScheme.split(" ").forEach(colorClass=>{document.querySelector("pickup-availability-drawer").classList.add(colorClass)});const button=this.querySelector("button");button&&button.addEventListener("click",evt=>{document.querySelector("pickup-availability-drawer").show(evt.target)})}}),customElements.get("pickup-availability-drawer")||customElements.define("pickup-availability-drawer",class extends HTMLElement{constructor(){super(),this.onBodyClick=this.handleBodyClick.bind(this),this.querySelector("button").addEventListener("click",()=>{this.hide()}),this.addEventListener("keyup",event=>{event.code.toUpperCase()==="ESCAPE"&&this.hide()})}handleBodyClick(evt){const target=evt.target;target!=this&&!target.closest("pickup-availability-drawer")&&target.id!="ShowPickupAvailabilityDrawer"&&this.hide()}hide(){this.removeAttribute("open"),document.body.removeEventListener("click",this.onBodyClick),document.body.classList.remove("overflow-hidden"),removeTrapFocus(this.focusElement)}show(focusElement){this.focusElement=focusElement,this.setAttribute("open",""),document.body.addEventListener("click",this.onBodyClick),document.body.classList.add("overflow-hidden"),trapFocus(this)}});
//# sourceMappingURL=/cdn/shop/t/14/assets/pickup-availability.js.map?v=78418059211521962961733441097

}

/*
     FILE ARCHIVED ON 03:33:33 Aug 23, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:04:12 Apr 02, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.719
  exclusion.robots: 0.071
  exclusion.robots.policy: 0.059
  esindex: 0.011
  cdx.remote: 33.758
  LoadShardBlock: 77.651 (3)
  PetaboxLoader3.datanode: 105.635 (5)
  load_resource: 227.278
  PetaboxLoader3.resolve: 174.803
  loaddict: 37.383
*/