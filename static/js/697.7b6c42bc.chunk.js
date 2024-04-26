"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[697],{4862:function(e,s,a){a.d(s,{Z:function(){return o}});var n=a(1413),t=a(4925),r=a(1087),i={button:"ButtonLink_button__xPWFi",smaller:"ButtonLink_smaller__pIpDe",small:"ButtonLink_small__YcdMT",normal:"ButtonLink_normal__n309K",large:"ButtonLink_large__eHBPJ",primary:"ButtonLink_primary__yKPrc",secondary:"ButtonLink_secondary__BelLu"},c=a(3329),l=["tag","size","color","children"],o=function(e){var s=e.tag,a=void 0===s?"button":s,o=e.size,d=void 0===o?"normal":o,m=e.color,h=void 0===m?"primary":m,u=e.children,_=(0,t.Z)(e,l);return"button"===a?(0,c.jsx)("button",(0,n.Z)((0,n.Z)({className:"".concat(i.button," ").concat(i[d]," ").concat(i[h])},_),{},{children:u})):"Link"===a?(0,c.jsx)(r.rU,(0,n.Z)((0,n.Z)({className:"".concat(i.button," ").concat(i[d]," ").concat(i[h])},_),{},{children:u})):null}},3757:function(e,s,a){a.d(s,{Z:function(){return o}});var n=a(8911),t=a(7609),r="CamperStats_wrapper__xEkEQ",i="CamperStats_item__8c+lO",c="CamperStats_reviews__uJpn1",l=a(3329),o=function(e){var s=e.rating,a=e.reviews,o=e.location,d=e.onOpenReviews;return(0,l.jsxs)("div",{className:r,children:[(0,l.jsxs)("button",{onClick:d,className:"".concat(i," ").concat(c),children:[(0,l.jsx)("svg",{width:16,height:16,children:(0,l.jsx)("use",{href:t.Z+"#icon-star"})}),(0,l.jsx)("span",{children:"".concat(s,"(").concat(a," Reviews)")})]}),(0,l.jsxs)("div",{className:i,children:[(0,l.jsx)("svg",{width:16,height:16,children:(0,l.jsx)("use",{href:t.Z+"#icon-location"})}),(0,l.jsx)("span",{children:(0,n.T)(o)})]})]})}},7421:function(e,s,a){a.d(s,{Z:function(){return d}});var n=a(9439),t=a(6854),r=a(7609),i="CampersFeatures_list__hfsIh",c="CampersFeatures_item__FEYS1",l="CampersFeatures_capitalize__SGUbZ",o=a(3329),d=function(e){var s=e.features;return(0,o.jsx)("ul",{className:i,children:Object.entries(s).map((function(e,s){var a=(0,n.Z)(e,2),i=a[0],d=a[1];if(!d)return null;var m,h=typeof d;switch(h){case"number":m="".concat(d," ").concat(i);break;case"string":m=/^\d/.test(d)?"".concat(i," ").concat(d):d;break;case"boolean":m=i}return(0,o.jsxs)("li",{className:c,children:[(0,o.jsx)("svg",{width:20,height:20,children:(0,o.jsx)("use",{href:r.Z+t.UZ[i]})}),(0,o.jsx)("span",{className:"number"===h?"":l,children:m})]},s)}))})}},3870:function(e,s,a){a.d(s,{Z:function(){return q}});var n=a(1413),t=a(4420),r=a(7928),i=a(8911),c=a(4364),l=a(354),o=a(9439),d=a(2791),m=a(7609),h="CampersImage_wrapper__LsmR9",u="CampersImage_chevron__ugEaE",_="CampersImage_right__VgLCT",p="CampersImage_dot_buttons__14KBb",x="CampersImage_dot_button__JILlg",j=a(3329),v=function(e){var s=e.images,a=(0,d.useState)(0),n=(0,o.Z)(a,2),t=n[0],r=n[1];return(0,j.jsxs)("div",{className:h,children:[(0,j.jsx)("button",{type:"button",onClick:function(){r((function(e){return(e+1)%s.length}))},className:"".concat(u," ").concat(_),children:(0,j.jsx)("svg",{width:48,height:48,children:(0,j.jsx)("use",{href:m.Z+"#icon-chevron-right"})})}),(0,j.jsx)("button",{type:"button",onClick:function(){r((function(e){return(e-1+s.length)%s.length}))},className:u,children:(0,j.jsx)("svg",{width:48,height:48,children:(0,j.jsx)("use",{href:m.Z+"#icon-chevron-left"})})}),(0,j.jsx)("div",{className:p,children:Array.from({length:s.length},(function(e,s){return(0,j.jsx)("button",{type:"button",onClick:function(){return r(s)},disabled:s===t,className:x,children:(0,j.jsx)("span",{})},s)}))}),(0,j.jsx)("img",{src:s[t],alt:"Camper"})]})},f=a(3757),g=a(7421),C=a(4862),N="CampersCard_card__TwPn-",w="CampersCard_details__BlK9q",b="CampersCard_header__uwoP5",k="CampersCard_title__TSsfs",Z="CampersCard_favotite_btn__3KF58",y="CampersCard_checked__1MeG-",S="CampersCard_filled__SjB6F",L="CampersCard_description__j-Fi+",F=function(e){var s=e.camper,a=e.isFavorites,o=void 0!==a&&a,d=(0,t.I0)(),h=s._id,u=s.name,_=s.price,p=s.rating,x=s.location,F=s.adults,M=s.engine,T=s.transmission,B=s.description,R=s.AC,E=s.bathroom,I=s.kitchen,U=s.beds,D=s.TV,V=s.gallery,z=s.reviews,A=s.isFavorite,K=void 0!==A&&A;return(0,j.jsxs)("li",{className:N,children:[(0,j.jsx)(v,{images:V}),(0,j.jsxs)("div",{className:w,children:[(0,j.jsxs)("div",{className:b,children:[(0,j.jsxs)("div",{className:k,children:[(0,j.jsx)("h3",{className:"card-title",children:u}),(0,j.jsx)("p",{className:"card-title",children:(0,i.a)(_)}),(0,j.jsx)("button",{type:"button",onClick:function(){return d(K?(0,r.Ni)(h):(0,r.a3)(s))},className:"".concat(Z," ").concat(K&&!o?y:""),children:o?(0,j.jsx)("svg",{width:24,height:24,children:(0,j.jsx)("use",{href:m.Z+"#icon-close"})}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("svg",{width:24,height:24,children:(0,j.jsx)("use",{href:m.Z+"#icon-heart"})})," ",(0,j.jsx)("svg",{width:24,height:24,className:S,children:(0,j.jsx)("use",{href:m.Z+"#icon-heart-filled"})})]})})]}),(0,j.jsx)(f.Z,{rating:p,reviews:z.length,location:x,onOpenReviews:function(){return d((0,c.h7)({name:l.ee.camper,data:(0,n.Z)((0,n.Z)({},s),{},{modalTab:1})}))}})]}),(0,j.jsx)("p",{className:L,children:B}),(0,j.jsx)(g.Z,{features:{adults:F,transmission:T,engine:M,kitchen:I,beds:U,AC:R,TV:D,"Shower/WC":E}}),(0,j.jsx)(C.Z,{type:"button",onClick:function(){return d((0,c.h7)({name:l.ee.camper,data:(0,n.Z)((0,n.Z)({},s),{},{modalTab:0})}))},size:"small",children:"Show more"})]})]})},M="CampersSkeleton_card__Kb4dY",T="CampersSkeleton_image__N7-P1",B="CampersSkeleton_details__1xot6",R="CampersSkeleton_header__U0xEw",E="CampersSkeleton_title__UtDuO",I="CampersSkeleton_card_title__7qCHd",U="CampersSkeleton_price__yQIMy",D="CampersSkeleton_heart__+43LN",V="CampersSkeleton_stats__BT5oR",z="CampersSkeleton_stat_item__tfK-W",A="CampersSkeleton_description__XsEeP",K="CampersSkeleton_features__pUMFV",O="CampersSkeleton_features_item__UHoFv",P="CampersSkeleton_button__L55ti",J=function(){return(0,j.jsxs)("li",{className:M,children:[(0,j.jsx)("div",{className:T}),(0,j.jsxs)("div",{className:B,children:[(0,j.jsxs)("div",{className:R,children:[(0,j.jsxs)("div",{className:E,children:[(0,j.jsx)("div",{className:I}),(0,j.jsx)("div",{className:U}),(0,j.jsx)("div",{className:D,children:(0,j.jsx)("svg",{width:24,height:24,children:(0,j.jsx)("use",{href:m.Z+"#icon-heart"})})})]}),(0,j.jsxs)("div",{className:V,children:[(0,j.jsxs)("div",{className:z,children:[(0,j.jsx)("svg",{width:16,height:16,children:(0,j.jsx)("use",{href:m.Z+"#icon-star"})}),(0,j.jsx)("span",{})]}),(0,j.jsxs)("div",{className:z,children:[(0,j.jsx)("svg",{width:16,height:16,children:(0,j.jsx)("use",{href:m.Z+"#icon-location"})}),(0,j.jsx)("span",{})]})]})]}),(0,j.jsx)("div",{className:A}),(0,j.jsxs)("div",{className:K,children:[(0,j.jsx)("div",{className:O,style:{width:"126px"}}),(0,j.jsx)("div",{className:O,style:{width:"142px"}}),(0,j.jsx)("div",{className:O,style:{width:"109px"}}),(0,j.jsx)("div",{className:O,style:{width:"123px"}}),(0,j.jsx)("div",{className:O,style:{width:"116px"}}),(0,j.jsx)("div",{className:O,style:{width:"87px"}}),(0,j.jsx)("div",{className:O,style:{width:"87px"}}),(0,j.jsx)("div",{className:O,style:{width:"154px"}})]}),(0,j.jsx)("div",{className:P})]})]})},Q="CampersList_wrapper__Osp64",Y="CampersList_list__Qx+9S",q=function(e){var s=e.campers,a=e.isFavorites,n=e.isLoading,t=void 0!==n&&n,r=e.isLoadMore,i=void 0!==r&&r,c=e.onLoadMore,l=void 0===c?function(){}:c;return(0,j.jsxs)("div",{className:Q,children:[(0,j.jsx)("h2",{className:"visually-hidden",children:"Campers"}),(0,j.jsxs)("ul",{className:Y,children:[s.map((function(e){return(0,j.jsx)(F,{camper:e,isFavorites:a},e._id)})),t&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(J,{}),(0,j.jsx)(J,{}),(0,j.jsx)(J,{}),(0,j.jsx)(J,{})]})]}),i&&(0,j.jsx)(C.Z,{type:"button",onClick:l,disabled:t,size:"smaller",color:"secondary",children:"Load more"})]})}},345:function(e,s,a){a.d(s,{Z:function(){return p}});var n=a(9439),t=a(4420),r=a(2829),i=a(4364),c=a(354),l=a(7609),o={modal:"CampersModal_modal__AmSnq",hidden:"CampersModal_hidden__q8MuA",close:"CampersModal_close__sVlLZ",wrapper:"CampersModal_wrapper__ByJRY",header:"CampersModal_header__EXu2l",title:"CampersModal_title__X-Q5B",scroll:"CampersModal_scroll__gMa14",description:"CampersModal_description__TD0b9",bottom:"CampersModal_bottom__YF-bN",optional:"CampersModal_optional__EJRS+",features:"CampersModal_features__D0te7"},d=a(3757),m=a(2791),h=a(8911),u=a(7421),_=a(3329),p=function(){var e,s,a=(0,t.I0)(),p=(0,t.v9)(r.JQ),x=(0,m.useState)(0),j=(0,n.Z)(x,2),v=j[0],f=j[1],g=(0,m.useState)(!1),C=(0,n.Z)(g,2),N=C[0],w=C[1],b=(0,m.useRef)(null),k=(0,m.useRef)(null),Z=(0,m.useRef)(null),y=(0,m.useRef)(null);(0,m.useEffect)((function(){if(Z.current){var e=Z.current.clientHeight;k.current.style.height="".concat(e,"px"),N&&(y.current.scrollIntoView({alignToTop:!0,behavior:"smooth"}),w(!1))}}),[v,N]);var S=null!==(e=null===(s=p[c.ee.camper])||void 0===s?void 0:s.data)&&void 0!==e?e:{},L=S.modalTab,F=void 0===L?0:L,M=S.name,T=S.price,B=S.rating,R=S.location,E=S.adults,I=S.engine,U=S.transmission,D=S.description,V=S.AC,z=S.kitchen,A=S.beds,K=S.TV,O=S.CD,P=S.radio,J=S.shower,Q=S.toilet,Y=S.freezer,q=S.hob,H=S.microwave,G=S.gas,W=S.water,X=S.reviews;return console.log(M),(0,m.useEffect)((function(){f(F),F&&w(!0)}),[F]),(0,_.jsxs)("div",{className:"".concat(o.modal," ").concat(p[c.ee.camper]?o.open:o.hidden),children:[(0,_.jsx)("button",{onClick:function(){return a((0,i.Mr)(c.ee.camper))},className:o.close,children:(0,_.jsx)("svg",{width:32,height:32,children:(0,_.jsx)("use",{href:l.Z+"#icon-close"})})}),p[c.ee.camper]&&(0,_.jsxs)("div",{className:o.wrapper,children:[(0,_.jsxs)("div",{className:o.header,children:[(0,_.jsxs)("div",{className:o.title,children:[(0,_.jsx)("h2",{className:"card-title",children:M}),(0,_.jsx)(d.Z,{onOpenReviews:function(){w(!0),f(1)},rating:B,reviews:X.length,location:R})]}),(0,_.jsx)("p",{className:"card-title",children:(0,h.a)(T)})]}),(0,_.jsxs)("div",{ref:b,className:o.scroll,children:[(0,_.jsx)("p",{className:o.description,children:D}),(0,_.jsx)("div",{className:o.bottom,children:(0,_.jsx)("div",{ref:k,className:o.optional,children:(0,_.jsx)("div",{ref:0===v?Z:null,className:"".concat(o.features," ").concat(0===v?"":o.hidden),children:(0,_.jsx)(u.Z,{features:{adults:E,transmission:U,engine:I,kitchen:z,beds:A,AC:V,TV:K,CD:O,radio:P,hob:q,freezer:Y,microwave:H,shower:J,toilet:Q,gas:G,water:W}})})})})]})]})]})}},8911:function(e,s,a){a.d(s,{T:function(){return t},a:function(){return n}});var n=function(e){return e.toLocaleString("en-US",{style:"currency",currency:"EUR",minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!1})},t=function(e){return e.split(", ").reverse().join(", ")}},5697:function(e,s,a){a.r(s);var n=a(4420),t=a(2829),r=a(3870),i=a(345),c=a(3329);s.default=function(){var e=(0,n.v9)(t.Tc);return(0,c.jsxs)("div",{className:"container page-container",children:[(0,c.jsx)(r.Z,{campers:e,isFavorites:!0}),(0,c.jsx)(i.Z,{})]})}}}]);
//# sourceMappingURL=697.7b6c42bc.chunk.js.map