"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[697],{4862:function(n,e,r){r.d(e,{Z:function(){return u}});var t=r(1413),i=r(4925),s=r(1087),a={button:"ButtonLink_button__xPWFi",smaller:"ButtonLink_smaller__pIpDe",small:"ButtonLink_small__YcdMT",normal:"ButtonLink_normal__n309K",large:"ButtonLink_large__eHBPJ",primary:"ButtonLink_primary__yKPrc",secondary:"ButtonLink_secondary__BelLu"},c=r(3329),o=["tag","size","color","children"],u=function(n){var e=n.tag,r=void 0===e?"button":e,u=n.size,l=void 0===u?"normal":u,d=n.color,m=void 0===d?"primary":d,h=n.children,_=(0,i.Z)(n,o);return"button"===r?(0,c.jsx)("button",(0,t.Z)((0,t.Z)({className:"".concat(a.button," ").concat(a[l]," ").concat(a[m])},_),{},{children:h})):"Link"===r?(0,c.jsx)(s.rU,(0,t.Z)((0,t.Z)({className:"".concat(a.button," ").concat(a[l]," ").concat(a[m])},_),{},{children:h})):null}},3959:function(n,e,r){r.d(e,{Z:function(){return P}});var t=r(4420),i=r(7928),s=function(n){return n.toLocaleString("en-US",{style:"currency",currency:"EUR",minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!1})},a=function(n){return n.split(", ").reverse().join(", ")},c=r(9439),o=r(2791),u=r(7609),l="CampersImage_wrapper__LsmR9",d="CampersImage_chevron__ugEaE",m="CampersImage_right__VgLCT",h="CampersImage_dot_buttons__14KBb",_="CampersImage_dot_button__JILlg",p=r(3329),f=function(n){var e=n.images,r=(0,o.useState)(0),t=(0,c.Z)(r,2),i=t[0],s=t[1];return(0,p.jsxs)("div",{className:l,children:[(0,p.jsx)("button",{type:"button",onClick:function(){s((function(n){return(n+1)%e.length}))},className:"".concat(d," ").concat(m),children:(0,p.jsx)("svg",{width:48,height:48,children:(0,p.jsx)("use",{href:u.Z+"#icon-chevron-right"})})}),(0,p.jsx)("button",{type:"button",onClick:function(){s((function(n){return(n-1+e.length)%e.length}))},className:d,children:(0,p.jsx)("svg",{width:48,height:48,children:(0,p.jsx)("use",{href:u.Z+"#icon-chevron-left"})})}),(0,p.jsx)("div",{className:h,children:Array.from({length:e.length},(function(n,e){return(0,p.jsx)("button",{type:"button",onClick:function(){return s(e)},disabled:e===i,className:_,children:(0,p.jsx)("span",{})},e)}))}),(0,p.jsx)("img",{src:e[i],alt:"Camper"})]})},v="CamperStats_wrapper__xEkEQ",x="CamperStats_item__8c+lO",j="CamperStats_reviews__uJpn1",g=function(n){var e=n.rating,r=n.reviews,t=n.location,i=n.onOpenReviews;return(0,p.jsxs)("div",{className:v,children:[(0,p.jsxs)("button",{onClick:i,className:"".concat(x," ").concat(j),children:[(0,p.jsx)("svg",{width:16,height:16,children:(0,p.jsx)("use",{href:u.Z+"#icon-star"})}),(0,p.jsx)("span",{children:"".concat(e,"(").concat(r," Reviews)")})]}),(0,p.jsxs)("div",{className:x,children:[(0,p.jsx)("svg",{width:16,height:16,children:(0,p.jsx)("use",{href:u.Z+"#icon-location"})}),(0,p.jsx)("span",{children:a(t)})]})]})},C=r(4862),b="CampersCard_card__TwPn-",N="CampersCard_details__BlK9q",w="CampersCard_header__uwoP5",k="CampersCard_title__TSsfs",L="CampersCard_favotite_btn__3KF58",Z="CampersCard_checked__1MeG-",y="CampersCard_filled__SjB6F",F="CampersCard_description__j-Fi+",B=function(n){var e=n.camper,r=n.isFavorites,a=void 0!==r&&r,c=(0,t.I0)(),o=e._id,l=e.name,d=e.price,m=e.rating,h=e.location,_=e.description,v=e.gallery,x=e.reviews,j=e.isFavorite,B=void 0!==j&&j;return(0,p.jsxs)("li",{className:b,children:[(0,p.jsx)(f,{images:v}),(0,p.jsxs)("div",{className:N,children:[(0,p.jsxs)("div",{className:w,children:[(0,p.jsxs)("div",{className:k,children:[(0,p.jsx)("h3",{className:"card-title",children:l}),(0,p.jsx)("p",{className:"card-title",children:s(d)}),(0,p.jsx)("button",{type:"button",onClick:function(){return c(B?(0,i.Ni)(o):(0,i.a3)(e))},className:"".concat(L," ").concat(B&&!a?Z:""),children:a?(0,p.jsx)("svg",{width:24,height:24,children:(0,p.jsx)("use",{href:u.Z+"#icon-close"})}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("svg",{width:24,height:24,children:(0,p.jsx)("use",{href:u.Z+"#icon-heart"})})," ",(0,p.jsx)("svg",{width:24,height:24,className:y,children:(0,p.jsx)("use",{href:u.Z+"#icon-heart-filled"})})]})})]}),(0,p.jsx)(g,{rating:m,reviews:x.length,location:h})]}),(0,p.jsx)("p",{className:F,children:_}),(0,p.jsx)(C.Z,{type:"button",size:"small",children:"Show more"})]})]})},S="CampersList_wrapper__Osp64",I="CampersList_list__Qx+9S",P=function(n){var e=n.campers,r=n.isFavorites,t=n.isLoadMore,i=void 0!==t&&t,s=n.onLoadMore,a=void 0===s?function(){}:s;return(0,p.jsxs)("div",{className:S,children:[(0,p.jsx)("h2",{className:"visually-hidden",children:"Campers"}),(0,p.jsx)("ul",{className:I,children:e.map((function(n){return(0,p.jsx)(B,{camper:n,isFavorites:r},n._id)}))}),i&&(0,p.jsx)(C.Z,{type:"button",onClick:a,size:"smaller",color:"secondary",children:"Load more"})]})}},5697:function(n,e,r){r.r(e);var t=r(4420),i=r(2829),s=r(3959),a=r(3329);e.default=function(){var n=(0,t.v9)(i.Tc);return(0,a.jsx)("div",{className:"container page-container",children:(0,a.jsx)(s.Z,{campers:n,isFavorites:!0})})}},2829:function(n,e,r){r.d(e,{Fu:function(){return u},Gj:function(){return o},N$:function(){return l},SB:function(){return d},Tc:function(){return m},Vi:function(){return a},Zp:function(){return s},du:function(){return h},xU:function(){return c}});var t=r(1413),i=r(3553),s=function(n){return n.campers.page},a=function(n){return n.campers.isLoadMore},c=function(n){return n.campers.isLoading},o=function(n){return n.campers.isLoaded},u=function(n){return n.filter.isActive},l=function(n){return n.filter.values},d=(0,i.P1)(l,(function(n){var e=n.transmission,r=n.equipment;return e||r.length>0})),m=function(n){return n.favorites.items},h=(0,i.P1)((function(n){return n.campers.items}),m,(function(n,e){return n.map((function(n){return(0,t.Z)((0,t.Z)({},n),{},{isFavorite:e.some((function(e){return e._id===n._id}))})}))}))}}]);
//# sourceMappingURL=697.11a53b23.chunk.js.map