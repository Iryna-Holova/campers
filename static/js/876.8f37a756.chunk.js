"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[876],{4862:function(e,n,r){r.d(n,{Z:function(){return l}});var t=r(1413),i=r(4925),s=r(1087),a={button:"ButtonLink_button__xPWFi",smaller:"ButtonLink_smaller__pIpDe",small:"ButtonLink_small__YcdMT",normal:"ButtonLink_normal__n309K",large:"ButtonLink_large__eHBPJ",primary:"ButtonLink_primary__yKPrc",secondary:"ButtonLink_secondary__BelLu"},c=r(3329),o=["tag","size","color","children"],l=function(e){var n=e.tag,r=void 0===n?"button":n,l=e.size,u=void 0===l?"normal":l,d=e.color,m=void 0===d?"primary":d,p=e.children,h=(0,i.Z)(e,o);return"button"===r?(0,c.jsx)("button",(0,t.Z)((0,t.Z)({className:"".concat(a.button," ").concat(a[u]," ").concat(a[m])},h),{},{children:p})):"Link"===r?(0,c.jsx)(s.rU,(0,t.Z)((0,t.Z)({className:"".concat(a.button," ").concat(a[u]," ").concat(a[m])},h),{},{children:p})):null}},3035:function(e,n,r){r.d(n,{Z:function(){return l}});var t=r(4862),i={card:"CampersCard_card__TwPn-",details:"CampersCard_details__BlK9q",header:"CampersCard_header__uwoP5",title:"CampersCard_title__TSsfs",heart:"CampersCard_heart__iw+Ji",checked:"CampersCard_checked__1MeG-",filled:"CampersCard_filled__SjB6F",description:"CampersCard_description__j-Fi+"},s=r(3329),a=function(e){var n=e.camper,r=n.description,a=n.isFavorite,c=void 0!==a&&a;return(0,s.jsx)("li",{className:i.card,children:(0,s.jsxs)("div",{className:i.details,children:[(0,s.jsx)("div",{className:i.header,children:(0,s.jsx)("div",{className:i.title,children:(0,s.jsxs)("button",{type:"button",className:"".concat(i.heart," ").concat(c?i.checked:""),children:[(0,s.jsx)("svg",{width:24,height:24,children:(0,s.jsx)("use",{href:i+"#icon-heart"})}),(0,s.jsx)("svg",{width:24,height:24,className:i.filled,children:(0,s.jsx)("use",{href:i+"#icon-heart-filled"})})]})})}),(0,s.jsx)("p",{className:i.description,children:r}),(0,s.jsx)(t.Z,{type:"button",size:"small",children:"Show more"})]})})},c="CampersList_wrapper__Osp64",o="CampersList_list__Qx+9S",l=function(e){var n=e.campers,r=e.isLoadMore,i=void 0!==r&&r,l=e.onLoadMore,u=void 0===l?function(){}:l;return(0,s.jsxs)("div",{className:c,children:[(0,s.jsx)("ul",{className:o,children:n.map((function(e){return(0,s.jsx)(a,{camper:e},e._id)}))}),i&&(0,s.jsx)(t.Z,{type:"button",onClick:u,size:"smaller",color:"secondary",children:"Load more"})]})}},9876:function(e,n,r){r.r(n),r.d(n,{default:function(){return A}});var t=r(5861),i=r(1413),s=r(7757),a=r.n(s),c=r(2791),o=r(4420),l=r(4029),u=r(5294).Z.create({baseURL:"https://66184bd69a41b1b3dfbcb9ce.mockapi.io/api",params:{}});u.interceptors.request.use((function(e){return e.params=(0,i.Z)({},e.params),e}));var d=function(){var e=(0,t.Z)(a().mark((function e(n){var r,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/adverts",{params:n});case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),m=(0,l.hg)("campers/getCampers",function(){var e=(0,t.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),p=(0,l.hg)("campers/getFiltered",function(){var e=(0,t.Z)(a().mark((function e(n){var r,t,i,s,c,o,l;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.page,t=n.limit,i=n.location,s=n.transmission,c=n.form,o=n.equipment,l={page:r,limit:t,location:i,form:c,transmission:s},o.forEach((function(e){return l[e]=!0})),e.next=5,d(l);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),h=r(7299),_=r(2829),f=r(6854),v=r(3035),x=r(9439),j=r(5705),g=r(7609),b=r(4862),N="Filter_wrapper__9Ksqy",w="Filter_title__pSkfx",Z="Filter_location__3ujAf",k="Filter_field__IlYZE",F="Filter_select__QmVYV",y="Filter_selected__bpT2w",C="Filter_unapplied__PBLSL",L="Filter_location_icon__0jWiP",q="Filter_location_clear__VhcbW",B="Filter_filters_wrapper__i2T28",S="Filter_subtitle__fcbnU",V="Filter_filters__n5Vfb",P="Filter_filter__vxThR",K="Filter_checkbox_group__DxgIe",T="Filter_checkbox_hidden__dK4as",M="Filter_label__vEd1E",U="Filter_inactive__wSV8X",R="Filter_active__IaDX0",z="Filter_buttons__8hS8y",E=r(3329),I={location:"",transmission:[],equipment:[],form:null},D=function(e){var n=e.onSearch,r=e.onReset,i=(0,o.v9)(_.Fu),s=(0,o.v9)(_.N$),c=(0,o.v9)(_.SB),l=(0,o.v9)(_.xU),u=s.location,d=s.transmission,m=s.equipment,p=s.form;return(0,E.jsxs)("div",{className:N,children:[(0,E.jsx)("h2",{className:"visually-hidden",children:"Filter Vehicles"}),(0,E.jsx)(j.J9,{initialValues:{location:u||"",transmission:d?[d]:[],equipment:m,form:p},onSubmit:function(e){if(e.location||e.transmission.length||e.equipment.length||e.form){if(e.location===(null!==u&&void 0!==u?u:"")&&e.transmission[0]===d&&e.equipment.length===m.length&&e.equipment.every((function(e){return m.includes(e)}))&&e.form===p)return;n({location:e.location||null,transmission:e.transmission[0]||null,equipment:e.equipment,form:e.form})}else{if(!i)return;r()}},onReset:(0,t.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i){e.next=3;break}return e.next=3,r();case 3:case"end":return e.stop()}}),e)}))),children:function(e){var n=e.values,r=e.setFieldValue,t=e.resetForm;return(0,E.jsxs)(j.l0,{children:[(0,E.jsxs)("div",{className:Z,children:[(0,E.jsx)("h3",{className:w,children:"Location"}),(0,E.jsxs)("div",{className:k,children:[(0,E.jsxs)(j.gN,{name:"location",as:"select",className:"".concat(F," ").concat(n.location?y:""," ").concat(n.location!==(null!==u&&void 0!==u?u:"")?C:""),children:[(0,E.jsx)("option",{value:"",disabled:!0,hidden:!0,children:"City"}),f.Lm.map((function(e,n){return(0,E.jsx)("option",{value:e,children:e.split(", ").reverse().join(", ")},n)}))]}),(0,E.jsx)("svg",{width:20,height:20,className:L,children:(0,E.jsx)("use",{href:g.Z+"#icon-location"})}),(0,E.jsx)("button",{type:"button",onClick:function(){return r("location","")},className:q,children:(0,E.jsx)("svg",{width:20,height:20,children:(0,E.jsx)("use",{href:g.Z+"#icon-close"})})})]})]}),(0,E.jsxs)("div",{className:B,children:[(0,E.jsx)("h3",{className:w,children:"Filters"}),(0,E.jsxs)("div",{className:V,children:[(0,E.jsxs)("div",{className:P,children:[(0,E.jsx)("div",{id:"equipment-group",className:S,children:"Vehicle equipment"}),(0,E.jsxs)("div",{role:"group","aria-labelledby":"equipment-group",className:K,children:[(0,E.jsxs)("label",{className:"".concat(M," ").concat(c?"automatic"===d?R:U:C),children:[(0,E.jsx)(j.gN,{type:"checkbox",name:"transmission",value:"automatic",className:T}),(0,E.jsx)("svg",{width:32,height:32,children:(0,E.jsx)("use",{href:"".concat(g.Z,"#icon-transmission")})}),"Automatic"]}),Object.entries(f.sw).map((function(e,n){var r=(0,x.Z)(e,2),t=r[0],i=r[1];return(0,E.jsxs)("label",{className:"".concat(M," ").concat(c?m.includes(t)?R:U:C),children:[(0,E.jsx)(j.gN,{type:"checkbox",name:"equipment",value:t,className:T}),(0,E.jsx)("svg",{width:32,height:32,children:(0,E.jsx)("use",{href:g.Z+f.UZ[i]})}),i]},n)}))]})]}),(0,E.jsxs)("div",{className:P,children:[(0,E.jsx)("div",{id:"radio-group",className:S,children:"Vehicle type"}),(0,E.jsx)("div",{role:"group","aria-labelledby":"radio-group",className:K,children:Object.entries(f.n5).map((function(e,n){var r=(0,x.Z)(e,2),t=r[0],i=r[1];return(0,E.jsxs)("label",{className:"".concat(M," ").concat(p?p===t?R:U:C),children:[(0,E.jsx)(j.gN,{type:"radio",name:"form",value:t,className:T}),(0,E.jsx)("svg",{width:40,height:28,children:(0,E.jsx)("use",{href:"".concat(g.Z,"#icon-").concat(t)})}),i]},n)}))})]})]})]}),(0,E.jsxs)("div",{className:z,children:[(0,E.jsx)(b.Z,{type:"submit",disabled:l,children:"Search"}),(0,E.jsx)(b.Z,{type:"reset",onClick:function(){return t({values:I})},disabled:l,size:"small",color:"secondary",children:"Reset"})]})]})}})]})},A=function(){var e=(0,o.I0)(),n=(0,o.v9)(_.du),r=(0,o.v9)(_.Zp),s=(0,o.v9)(_.Vi),l=(0,o.v9)(_.xU),u=(0,o.v9)(_.Gj),d=(0,o.v9)(_.Fu),x=(0,o.v9)(_.N$);(0,c.useEffect)((function(){u||e(d?p((0,i.Z)({page:1,limit:f.s0},x)):m({page:1,limit:f.Km}))}),[e,x,d,u]);var j=function(){var n=(0,t.Z)(a().mark((function n(r){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e(p((0,i.Z)({page:1,limit:f.s0},r))).unwrap();case 2:e((0,h.Tv)(r));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),g=function(){var n=(0,t.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e(m({page:1,limit:f.Km})).unwrap();case 2:e((0,h.Dg)());case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,E.jsxs)("div",{className:"container page-container",children:[(0,E.jsx)(D,{onSearch:j,onReset:g}),(0,E.jsx)(v.Z,{campers:n,isLoading:l,isLoadMore:s,onLoadMore:function(){return e(m({page:r+1,limit:f.Km}))}})]})}},2829:function(e,n,r){r.d(n,{Fu:function(){return l},Gj:function(){return o},N$:function(){return u},SB:function(){return d},Tc:function(){return m},Vi:function(){return a},Zp:function(){return s},du:function(){return p},xU:function(){return c}});var t=r(1413),i=r(3553),s=function(e){return e.campers.page},a=function(e){return e.campers.isLoadMore},c=function(e){return e.campers.isLoading},o=function(e){return e.campers.isLoaded},l=function(e){return e.filter.isActive},u=function(e){return e.filter.values},d=(0,i.P1)(u,(function(e){var n=e.transmission,r=e.equipment;return n||r.length>0})),m=function(e){return e.favorites.items},p=(0,i.P1)((function(e){return e.campers.items}),m,(function(e,n){return e.map((function(e){return(0,t.Z)((0,t.Z)({},e),{},{isFavorite:n.some((function(n){return n._id===e._id}))})}))}))}}]);
//# sourceMappingURL=876.8f37a756.chunk.js.map