(()=>{"use strict";const e={John:"English Language",Mabel:"Mathematics",Mary:"History",Joe:"Geography"};["John","Mabel","Mary","Joe"].forEach((a=>{console.log(`Teacher Name: ${a}, Teacher Subject: ${(a=>e[a])(a)}`)}))})();