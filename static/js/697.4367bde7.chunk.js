"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[697],{4862:function(e,n,r){r.d(n,{Z:function(){return u}});var t=r(1413),i=r(4925),a=r(1087),s={button:"ButtonLink_button__xPWFi",smaller:"ButtonLink_smaller__pIpDe",small:"ButtonLink_small__YcdMT",normal:"ButtonLink_normal__n309K",large:"ButtonLink_large__eHBPJ",primary:"ButtonLink_primary__yKPrc",secondary:"ButtonLink_secondary__BelLu"},c=r(3329),o=["tag","size","color","children"],u=function(e){var n=e.tag,r=void 0===n?"button":n,u=e.size,l=void 0===u?"normal":u,d=e.color,m=void 0===d?"primary":d,_=e.children,h=(0,i.Z)(e,o);return"button"===r?(0,c.jsx)("button",(0,t.Z)((0,t.Z)({className:"".concat(s.button," ").concat(s[l]," ").concat(s[m])},h),{},{children:_})):"Link"===r?(0,c.jsx)(a.rU,(0,t.Z)((0,t.Z)({className:"".concat(s.button," ").concat(s[l]," ").concat(s[m])},h),{},{children:_})):null}},5170:function(e,n,r){r.d(n,{Z:function(){return g}});var t=r(4862),i={card:"CampersCard_card__TwPn-",details:"CampersCard_details__BlK9q",header:"CampersCard_header__uwoP5",title:"CampersCard_title__TSsfs",heart:"CampersCard_heart__iw+Ji",checked:"CampersCard_checked__1MeG-",filled:"CampersCard_filled__SjB6F",description:"CampersCard_description__j-Fi+"},a=r(9439),s=r(2791),c=r(7609),o="CampersImage_wrapper__LsmR9",u="CampersImage_chevron__ugEaE",l="CampersImage_right__VgLCT",d="CampersImage_dot_buttons__14KBb",m="CampersImage_dot_button__JILlg",_=r(3329),h=function(e){var n=e.images,r=(0,s.useState)(0),t=(0,a.Z)(r,2),i=t[0],h=t[1];return(0,_.jsxs)("div",{className:o,children:[(0,_.jsx)("button",{type:"button",onClick:function(){h((function(e){return(e+1)%n.length}))},className:"".concat(u," ").concat(l),children:(0,_.jsx)("svg",{width:48,height:48,children:(0,_.jsx)("use",{href:c.Z+"#icon-chevron-right"})})}),(0,_.jsx)("button",{type:"button",onClick:function(){h((function(e){return(e-1+n.length)%n.length}))},className:u,children:(0,_.jsx)("svg",{width:48,height:48,children:(0,_.jsx)("use",{href:c.Z+"#icon-chevron-left"})})}),(0,_.jsx)("div",{className:d,children:Array.from({length:n.length},(function(e,n){return(0,_.jsx)("button",{type:"button",onClick:function(){return h(n)},disabled:n===i,className:m,children:(0,_.jsx)("span",{})},n)}))}),(0,_.jsx)("img",{src:n[i],alt:"Camper"})]})},p=function(e){var n=e.camper,r=n.description,a=n.gallery,s=n.isFavorite,c=void 0!==s&&s;return(0,_.jsxs)("li",{className:i.card,children:[(0,_.jsx)(h,{images:a}),(0,_.jsxs)("div",{className:i.details,children:[(0,_.jsx)("div",{className:i.header,children:(0,_.jsx)("div",{className:i.title,children:(0,_.jsxs)("button",{type:"button",className:"".concat(i.heart," ").concat(c?i.checked:""),children:[(0,_.jsx)("svg",{width:24,height:24,children:(0,_.jsx)("use",{href:i+"#icon-heart"})}),(0,_.jsx)("svg",{width:24,height:24,className:i.filled,children:(0,_.jsx)("use",{href:i+"#icon-heart-filled"})})]})})}),(0,_.jsx)("p",{className:i.description,children:r}),(0,_.jsx)(t.Z,{type:"button",size:"small",children:"Show more"})]})]})},f="CampersList_wrapper__Osp64",v="CampersList_list__Qx+9S",g=function(e){var n=e.campers,r=e.isLoadMore,i=void 0!==r&&r,a=e.onLoadMore,s=void 0===a?function(){}:a;return(0,_.jsxs)("div",{className:f,children:[(0,_.jsx)("ul",{className:v,children:n.map((function(e){return(0,_.jsx)(p,{camper:e},e._id)}))}),i&&(0,_.jsx)(t.Z,{type:"button",onClick:s,size:"smaller",color:"secondary",children:"Load more"})]})}},5697:function(e,n,r){r.r(n);var t=r(4420),i=r(2829),a=r(5170),s=r(3329);n.default=function(){var e=(0,t.v9)(i.Tc);return(0,s.jsx)("div",{className:"container page-container",children:(0,s.jsx)(a.Z,{campers:e})})}},2829:function(e,n,r){r.d(n,{Fu:function(){return u},Gj:function(){return o},N$:function(){return l},SB:function(){return d},Tc:function(){return m},Vi:function(){return s},Zp:function(){return a},du:function(){return _},xU:function(){return c}});var t=r(1413),i=r(3553),a=function(e){return e.campers.page},s=function(e){return e.campers.isLoadMore},c=function(e){return e.campers.isLoading},o=function(e){return e.campers.isLoaded},u=function(e){return e.filter.isActive},l=function(e){return e.filter.values},d=(0,i.P1)(l,(function(e){var n=e.transmission,r=e.equipment;return n||r.length>0})),m=function(e){return e.favorites.items},_=(0,i.P1)((function(e){return e.campers.items}),m,(function(e,n){return e.map((function(e){return(0,t.Z)((0,t.Z)({},e),{},{isFavorite:n.some((function(n){return n._id===e._id}))})}))}))}}]);
//# sourceMappingURL=697.4367bde7.chunk.js.map