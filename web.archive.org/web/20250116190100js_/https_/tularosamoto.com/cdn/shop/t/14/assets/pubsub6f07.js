var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
let subscribers={};function subscribe(eventName,callback){return subscribers[eventName]===void 0&&(subscribers[eventName]=[]),subscribers[eventName]=[...subscribers[eventName],callback],function(){subscribers[eventName]=subscribers[eventName].filter(cb=>cb!==callback)}}function publish(eventName,data){subscribers[eventName]&&subscribers[eventName].forEach(callback=>{callback(data)})}
//# sourceMappingURL=/cdn/shop/t/14/assets/pubsub.js.map?v=158357773527763999511733441097

}

/*
     FILE ARCHIVED ON 19:01:00 Jan 16, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:33:04 Apr 02, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.778
  exclusion.robots: 0.077
  exclusion.robots.policy: 0.064
  esindex: 0.013
  cdx.remote: 15.757
  LoadShardBlock: 770.253 (3)
  PetaboxLoader3.datanode: 104.507 (4)
  PetaboxLoader3.resolve: 718.039 (2)
  load_resource: 64.998
*/