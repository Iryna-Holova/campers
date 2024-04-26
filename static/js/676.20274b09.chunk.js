"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[676],{4862:function(e,t,i){i.d(t,{Z:function(){return c}});var r=i(1413),a=i(4925),o=i(1087),n={button:"ButtonLink_button__xPWFi",smaller:"ButtonLink_smaller__pIpDe",small:"ButtonLink_small__YcdMT",normal:"ButtonLink_normal__n309K",large:"ButtonLink_large__eHBPJ",primary:"ButtonLink_primary__yKPrc",secondary:"ButtonLink_secondary__BelLu"},s=i(3329),l=["tag","size","color","children"],c=function(e){var t=e.tag,i=void 0===t?"button":t,c=e.size,m=void 0===c?"normal":c,d=e.color,h=void 0===d?"primary":d,u=e.children,p=(0,a.Z)(e,l);return"button"===i?(0,s.jsx)("button",(0,r.Z)((0,r.Z)({className:"".concat(n.button," ").concat(n[m]," ").concat(n[h])},p),{},{children:u})):"Link"===i?(0,s.jsx)(o.rU,(0,r.Z)((0,r.Z)({className:"".concat(n.button," ").concat(n[m]," ").concat(n[h])},p),{},{children:u})):null}},3035:function(e,t,i){i.d(t,{Z:function(){return c}});var r=i(4862),a={card:"CampersCard_card__TwPn-",details:"CampersCard_details__BlK9q",header:"CampersCard_header__uwoP5",title:"CampersCard_title__TSsfs",heart:"CampersCard_heart__iw+Ji",checked:"CampersCard_checked__1MeG-",filled:"CampersCard_filled__SjB6F",description:"CampersCard_description__j-Fi+"},o=i(3329),n=function(e){var t=e.camper,i=t.description,n=t.isFavorite,s=void 0!==n&&n;return(0,o.jsx)("li",{className:a.card,children:(0,o.jsxs)("div",{className:a.details,children:[(0,o.jsx)("div",{className:a.header,children:(0,o.jsx)("div",{className:a.title,children:(0,o.jsxs)("button",{type:"button",className:"".concat(a.heart," ").concat(s?a.checked:""),children:[(0,o.jsx)("svg",{width:24,height:24,children:(0,o.jsx)("use",{href:a+"#icon-heart"})}),(0,o.jsx)("svg",{width:24,height:24,className:a.filled,children:(0,o.jsx)("use",{href:a+"#icon-heart-filled"})})]})})}),(0,o.jsx)("p",{className:a.description,children:i}),(0,o.jsx)(r.Z,{type:"button",size:"small",children:"Show more"})]})})},s="CampersList_wrapper__Osp64",l="CampersList_list__Qx+9S",c=function(e){var t=e.campers;return(0,o.jsxs)("div",{className:s,children:[(0,o.jsx)("ul",{className:l,children:t.map((function(e){return(0,o.jsx)(n,{camper:e},e._id)}))}),(0,o.jsx)(r.Z,{type:"button",size:"smaller",color:"secondary",children:"Load more"})]})}},3676:function(e,t,i){i.r(t),i.d(t,{default:function(){return I}});var r=i(3035),a=i(9439),o=i(5861),n=i(7757),s=i.n(n),l=i(5705),c=i(4420),m=i(1413),d=i(3553),h=function(e){return e.campers.isLoading},u=function(e){return e.filter.isActive},p=function(e){return e.filter.values},f=(0,d.P1)(p,(function(e){var t=e.transmission,i=e.equipment;return t||i.length>0})),g=((0,d.P1)((function(e){return e.campers.items}),(function(e){return e.favorites.items}),(function(e,t){return e.map((function(e){return(0,m.Z)((0,m.Z)({},e),{},{isFavorite:t.some((function(t){return t._id===e._id}))})}))})),i(6854)),_=i(7609),v=i(4862),y="Filter_wrapper__9Ksqy",w="Filter_title__pSkfx",b="Filter_location__3ujAf",x="Filter_field__IlYZE",j="Filter_select__QmVYV",k="Filter_selected__bpT2w",C="Filter_unapplied__PBLSL",N="Filter_location_icon__0jWiP",T="Filter_location_clear__VhcbW",B="Filter_filters_wrapper__i2T28",F="Filter_subtitle__fcbnU",V="Filter_filters__n5Vfb",Z="Filter_filter__vxThR",q="Filter_checkbox_group__DxgIe",L="Filter_checkbox_hidden__dK4as",R="Filter_label__vEd1E",z="Filter_inactive__wSV8X",A="Filter_active__IaDX0",D="Filter_buttons__8hS8y",S=i(3329),P={location:"",transmission:[],equipment:[],form:null},M=function(e){var t=e.onSearch,i=e.onReset,r=(0,c.v9)(u),n=(0,c.v9)(p),m=(0,c.v9)(f),d=(0,c.v9)(h),M=n.location,E=n.transmission,I=n.equipment,O=n.form;return(0,S.jsxs)("div",{className:y,children:[(0,S.jsx)("h2",{className:"visually-hidden",children:"Filter Vehicles"}),(0,S.jsx)(l.J9,{initialValues:{location:M||"",transmission:E?[E]:[],equipment:I,form:O},onSubmit:function(e){if(console.log(e),console.log(n),e.location||e.transmission.length||e.equipment.length||e.form){if(e.location===(null!==M&&void 0!==M?M:"")&&e.transmission[0]===E&&e.equipment.length===I.length&&e.equipment.every((function(e){return I.includes(e)}))&&e.form===O)return;t({location:e.location||null,transmission:e.transmission[0]||null,equipment:e.equipment,form:e.form})}else{if(!r)return;i()}},onReset:(0,o.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=3;break}return e.next=3,i();case 3:case"end":return e.stop()}}),e)}))),children:function(e){var t=e.values,i=e.setFieldValue,r=e.resetForm;return(0,S.jsxs)(l.l0,{children:[(0,S.jsxs)("div",{className:b,children:[(0,S.jsx)("h3",{className:w,children:"Location"}),(0,S.jsxs)("div",{className:x,children:[(0,S.jsxs)(l.gN,{name:"location",as:"select",className:"".concat(j," ").concat(t.location?k:""," ").concat(t.location!==(null!==M&&void 0!==M?M:"")?C:""),children:[(0,S.jsx)("option",{value:"",disabled:!0,hidden:!0,children:"City"}),g.Lm.map((function(e,t){return(0,S.jsx)("option",{value:e,children:e.split(", ").reverse().join(", ")},t)}))]}),(0,S.jsx)("svg",{width:20,height:20,className:N,children:(0,S.jsx)("use",{href:_.Z+"#icon-location"})}),(0,S.jsx)("button",{type:"button",onClick:function(){return i("location","")},className:T,children:(0,S.jsx)("svg",{width:20,height:20,children:(0,S.jsx)("use",{href:_.Z+"#icon-close"})})})]})]}),(0,S.jsxs)("div",{className:B,children:[(0,S.jsx)("h3",{className:w,children:"Filters"}),(0,S.jsxs)("div",{className:V,children:[(0,S.jsxs)("div",{className:Z,children:[(0,S.jsx)("div",{id:"equipment-group",className:F,children:"Vehicle equipment"}),(0,S.jsxs)("div",{role:"group","aria-labelledby":"equipment-group",className:q,children:[(0,S.jsxs)("label",{className:"".concat(R," ").concat(m?"automatic"===E?A:z:C),children:[(0,S.jsx)(l.gN,{type:"checkbox",name:"transmission",value:"automatic",className:L}),(0,S.jsx)("svg",{width:32,height:32,children:(0,S.jsx)("use",{href:"".concat(_.Z,"#icon-transmission")})}),"Automatic"]}),Object.entries(g.sw).map((function(e,t){var i=(0,a.Z)(e,2),r=i[0],o=i[1];return(0,S.jsxs)("label",{className:"".concat(R," ").concat(m?I.includes(r)?A:z:C),children:[(0,S.jsx)(l.gN,{type:"checkbox",name:"equipment",value:r,className:L}),(0,S.jsx)("svg",{width:32,height:32,children:(0,S.jsx)("use",{href:_.Z+g.UZ[o]})}),o]},t)}))]})]}),(0,S.jsxs)("div",{className:Z,children:[(0,S.jsx)("div",{id:"radio-group",className:F,children:"Vehicle type"}),(0,S.jsx)("div",{role:"group","aria-labelledby":"radio-group",className:q,children:Object.entries(g.n5).map((function(e,t){var i=(0,a.Z)(e,2),r=i[0],o=i[1];return(0,S.jsxs)("label",{className:"".concat(R," ").concat(O?O===r?A:z:C),children:[(0,S.jsx)(l.gN,{type:"radio",name:"form",value:r,className:L}),(0,S.jsx)("svg",{width:40,height:28,children:(0,S.jsx)("use",{href:"".concat(_.Z,"#icon-").concat(r)})}),o]},t)}))})]})]})]}),(0,S.jsxs)("div",{className:D,children:[(0,S.jsx)(v.Z,{type:"submit",disabled:d,children:"Search"}),(0,S.jsx)(v.Z,{type:"reset",onClick:function(){return r({values:P})},disabled:d,size:"small",color:"secondary",children:"Reset"})]})]})}})]})},E=i(5875),I=function(){return(0,S.jsxs)("div",{className:"container page-container",children:[(0,S.jsx)(M,{}),(0,S.jsx)(r.Z,{campers:E.t})]})}},5875:function(e,t,i){i.d(t,{t:function(){return r}});var r=[{_id:"1",name:"Road Bear C 23-25",price:1e4,rating:4.5,location:"Ukraine, Kyiv",adults:3,children:2,engine:"petrol",transmission:"automatic",form:"alcove",length:"7.3m",width:"2.65m",height:"3.65m",tank:"208l",consumption:"30l/100km",description:"Embark on an unforgettable journey with the Road Bear C 23-25, an epitome of comfort and convenience on wheels. This alcove-style motorhome is meticulously designed to cater to the needs of families and small groups, ensuring a seamless and enjoyable road trip experience. The sleek exterior houses a spacious and thoughtfully laid out interior, making it your home away from home. The Road Bear C 23-25 boasts a stylish and modern design, coupled with top-notch amenities to enhance your travel adventures. The interior is not only aesthetically pleasing but also functional, providing ample living and sleeping space. Whether you're cruising along scenic highways or parked in a picturesque campsite, this RV offers the perfect blend of functionality and comfort. Inside, you'll find a fully equipped kitchen, complete with a refrigerator, microwave, and a three-burner hob, allowing you to prepare delicious meals on the go. The bathroom is fitted with a shower and toilet, ensuring you have the convenience of home wherever your travels take you. The sleeping quarters are designed for relaxation, with three comfortable beds to accommodate both adults and children. Additional features include air conditioning, a TV, CD player, radio, and ample storage space for all your travel essentials. The Road Bear C 23-25 is equipped with a 35kg gas supply for cooking, and a water tank with a capacity of 151 liters to meet your daily needs. Fuelled by petrol and featuring an automatic transmission, this motorhome is not only easy to drive but also fuel-efficient, allowing you to focus on enjoying the journey rather than worrying about logistics. Create lasting memories with your loved ones as you navigate the roads in the Road Bear C 23-25. It's not just an RV; it's a mobile sanctuary for your adventures, promising comfort, style, and the freedom to explore at your own pace.",AC:!0,bathroom:!0,kitchen:!0,beds:3,TV:!0,CD:!0,radio:!0,shower:!0,toilet:!0,freezer:!0,hob:3,microwave:!0,gas:"35kg",water:"151l",gallery:["https://ftp.goit.study/img/campers-test-task/1-1.webp","https://ftp.goit.study/img/campers-test-task/1-2.webp","https://ftp.goit.study/img/campers-test-task/1-3.webp"],reviews:[{reviewer_name:"Alice",reviewer_rating:5,comment:"Exceptional RV! The Road Bear C 23-25 provided a comfortable and enjoyable journey for my family. The amenities were fantastic, and the space was well-utilized. Highly recommended!"},{reviewer_name:"Bob",reviewer_rating:4,comment:"Great RV for a road trip. Spacious and well-equipped. Only minor issues with the bathroom setup, but overall a wonderful experience."}]},{_id:"2",name:"Cruise America C-21",price:8e3,rating:4.3,location:"Ukraine, Poltava",adults:2,children:2,engine:"petrol",transmission:"automatic",form:"alcove",length:"6.4m",width:"2.34m",height:"3.72m",tank:"151l",consumption:"21l/100km",description:"Discover the charm of the open road with the Cruise America C-21, a compact and versatile alcove-style motorhome. Ideal for couples or small families, this motorhome combines practicality with comfort, offering an efficient and enjoyable travel experience. The Cruise America C-21 is designed to provide you with the freedom to explore while ensuring a cozy retreat at the end of the day.",AC:!0,bathroom:!0,kitchen:!0,beds:2,TV:!1,CD:!1,radio:!0,shower:!0,toilet:!0,freezer:!0,hob:3,microwave:!0,gas:"22kg",water:"76l",gallery:["https://ftp.goit.study/img/campers-test-task/2-1.webp","https://ftp.goit.study/img/campers-test-task/2-2.webp","https://ftp.goit.study/img/campers-test-task/2-3.webp"],reviews:[{reviewer_name:"Alice",reviewer_rating:5,comment:"The Cruise America C-21 exceeded our expectations! Compact yet spacious, it's perfect for a couple's getaway. The kitchen facilities were impressive, and the bathroom setup was convenient. Highly recommended for a cozy and memorable road trip."},{reviewer_name:"Bob",reviewer_rating:3,comment:"Decent motorhome for the price. The Cruise America C-21 provided a comfortable stay, but the lack of a TV and CD player was a downside for entertainment. Overall, a satisfactory experience for a short trip."}]},{_id:"3",name:"Britz 4 Berth",price:9e3,rating:4.4,location:"Ukraine, Dnipro",adults:2,children:2,engine:"petrol",transmission:"automatic",form:"alcove",length:"6.4m",width:"2.65m",height:"3.65m",tank:"208l",consumption:"30l/100km",description:"Experience luxury on the road with the Britz 4 Berth motorhome. Perfect for couples or small families, this alcove-style RV combines style, comfort, and functionality to provide an unforgettable travel experience. Whether you're exploring scenic landscapes or camping under the stars, the Britz 4 Berth offers a home-like atmosphere wherever your adventures take you.",AC:!0,bathroom:!0,kitchen:!0,beds:2,TV:!0,CD:!0,radio:!0,shower:!0,toilet:!0,freezer:!0,hob:2,microwave:!0,gas:"",water:"150l",gallery:["https://ftp.goit.study/img/campers-test-task/3-1.webp","https://ftp.goit.study/img/campers-test-task/3-2.webp","https://ftp.goit.study/img/campers-test-task/3-3.webp"],reviews:[{reviewer_name:"Alice",reviewer_rating:5,comment:"The Britz 4 Berth is a fantastic choice for a comfortable and stylish road trip. The interior design is impressive, and the amenities provided a luxury touch. Highly recommended for couples seeking a premium RV experience."},{reviewer_name:"Bob",reviewer_rating:3,comment:"Decent motorhome overall. The Britz 4 Berth provided a comfortable stay, but the lack of gas for cooking was a downside. The entertainment options were good, and the bed was comfortable. Worth considering for a short trip."}]},{_id:"4",name:"Mighty Class C Large [MT]",price:12e3,rating:4.4,location:"Ukraine, Odesa",adults:4,children:2,engine:"petrol",transmission:"automatic",form:"alcove",length:"8.2m",width:"3.04m",height:"3.65m",tank:"208l",consumption:"25l/100km",description:"Embark on a grand adventure with the Mighty Class C Large [MT], a spacious and powerful alcove-style motorhome designed for larger groups and families. This RV is not just a mode of transportation but a mobile haven with ample space and premium amenities to ensure a comfortable and enjoyable journey through picturesque landscapes and charming destinations.",AC:!0,bathroom:!0,kitchen:!0,beds:4,TV:!0,CD:!0,radio:!0,shower:!0,toilet:!0,freezer:!0,hob:3,microwave:!0,gas:"27kg",water:"151l",gallery:["https://ftp.goit.study/img/campers-test-task/4-1.webp","https://ftp.goit.study/img/campers-test-task/4-2.webp","https://ftp.goit.study/img/campers-test-task/4-3.webp"],reviews:[{reviewer_name:"Alice",reviewer_rating:5,comment:"The Mighty Class C Large [MT] provided an exceptional experience for our family road trip. Spacious interiors, well-equipped kitchen, and comfortable beds made our journey memorable. Highly recommended for larger groups looking for a premium RV."},{reviewer_name:"Bob",reviewer_rating:3,comment:"Decent motorhome, but had some issues with functionality. The kitchen facilities were good, but the gas supply seemed insufficient. Overall, a satisfactory experience for our group."}]}]}}]);
//# sourceMappingURL=676.20274b09.chunk.js.map