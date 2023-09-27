"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[4338],{98811:(e,n,t)=>{t.r(n),t.d(n,{default:()=>_n});var i=t(39130),r=t(59496),a=t(8404),s=t(24398),c=t(17249),o=t(29515),u=t(96063),l=t(10281),d=t(76788),f=t(90775),m=t(27257),v=t(71062),h=t(87164),x=t(20188),g=(t(90511),t(162),t(42582)),b=(t(37193),t(40265),t(30246),t(69109),t(84875)),p=t.n(b),j=t(10506),y=t(59272),N=t(39447),k=t(76561),C=t(60221),w=t(55411),E=t(32563),I=t(98235),S=t(89418),L=t(88843),O=t(66275),D=t(96692),A=t(54691),T=t(83349),M=t(78142),F=t(1003),U=t(83474),_=t(6619),B=(t(61391),t(72649),function(e){if(!Number.isInteger(e))return"";var n=Date.now()-Number(e),t=Math.round(n/1e3/60),i=Math.round(n/1e3/60/60),r=Math.round(n/1e3/60/60/24),a=Math.round(n/1e3/60/60/24/7);return r>=7?c.ag.get("time.weeks.short",a):i>=24?c.ag.get("time.days.short",r):t>=60?c.ag.get("time.hours.short",i):t>0?c.ag.get("time.minutes.short",t):c.ag.get("time.now")}),P=t(4637),Z=function(e){var n=e.timestamp;return e.isNowPlaying?(0,P.jsx)(v.w,{label:c.ag.get("time.now"),children:(0,P.jsx)(_.h,{"aria-label":c.ag.get("time.now"),iconSize:16})}):(0,P.jsx)("span",{children:B(n)})};const z="main-buddyFeed-friendActivity",J="VLKqDIGaQn2bILzJKSZ0",R="main-buddyFeed-friendsFeedContainer",Y="main-buddyFeed-avatarContainer",K="main-buddyFeed-overlay",H="main-buddyFeed-playIcon",q="main-buddyFeed-activityMetadata",W="main-buddyFeed-usernameAndTimestamp",Q="main-buddyFeed-username",V="main-buddyFeed-timestamp",G="main-buddyFeed-artistAndTrackName",X="main-buddyFeed-playbackContextIcon",$="main-buddyFeed-playbackContext",ee="main-buddyFeed-playbackContextLink",ne="main-buddyFeed-addFriendPlaceholder",te="main-buddyFeed-addFriendPlaceholderBtn",ie="main-buddyFeed-emptyBuddyFeed",re="main-buddyFeed-addFriendPlaceholderText",ae="PjDcsgAPmXlcTBJRGpIu",se="IRpPQFA57qgQ5jicWWaD",ce="Hm3nIbegLclY1uCAmnx_",oe="bhRoVUHjWdo9mgUkU6fe",ue="BliqfY7vu_qE2C9zs5Ou",le="qdYWuHZd4HdSWfd4pSQB",de="DhvYWKjDc7uyF3HfkDJJ",fe="ralK8s_OmE8a8zWcfNKM";var me=function(e){return Date.now()-e<9e5},ve=function(e,n){var t;switch(null===(t=(0,y.EC)(e))||void 0===t?void 0:t.type){case y.JM.PLAYLIST:case y.JM.PLAYLIST_V2:return(0,P.jsx)(w.X,{uri:e});case y.JM.EPISODE:case y.JM.SHOW:return(0,P.jsx)(E.M,{uri:e});case y.JM.ALBUM:return(0,P.jsx)(k.Y,{uri:e,artistUri:n});case y.JM.ARTIST:return(0,P.jsx)(C.m,{uri:e});default:return null}},he=function(e){switch(e){case y.JM.ALBUM:return U.p.ALBUM;case y.JM.ARTIST:return U.p.ARTIST;case y.JM.SHOW:return U.p.SHOW;case y.JM.EPISODE:return U.p.EPISODE;case y.JM.PLAYLIST:case y.JM.PLAYLIST_V2:return U.p.PLAYLIST;default:return}},xe=function(e){var n,t,i,a,s,o,u,l,d,m,v,h,g,b,k,w,E,U,_=e.show,B=void 0===_||_,J=e.spec,R=e.friend,ne=(0,r.useMemo)((function(){return R.user.imageUrl?[{url:R.user.imageUrl,width:0,height:0}]:[]}),[R.user.imageUrl]),te=(0,f.o)(),ie=(0,x.$P)(),re=R.track,ae=re.uri,se=null==re||null===(n=re.context)||void 0===n?void 0:n.uri,ce=(0,(0,F.n)({uri:se},{featureIdentifier:"buddy_feed",referrerIdentifier:"buddy_feed"}).usePlayContextItem)({uri:ae}),oe=ce.togglePlay,ue=ce.isPlaying,le=ce.isActive,de=(0,y.EC)(null===(t=re.context)||void 0===t?void 0:t.uri),fe=null==de?void 0:de.type,xe=(0,r.useCallback)((function(){oe(),te({intent:ue?"pause":"play",type:"click",itemIdSuffix:"buddyfeed_play",targetUri:ae});var e=J.friendRowFactory().playButtonFactory();le?ue?ie.logInteraction(e.hitPause({itemToBePaused:ae})):ie.logInteraction(e.hitResume({itemToBeResumed:ae})):ie.logInteraction(e.hitPlay({itemToBePlayed:ae}))}),[oe,te,ue,ae,J,le,ie]),ge=(0,r.useCallback)((function(e,n){ie.logInteraction(J.friendRowFactory().friendRowLinkFactory({identifier:e}).hitUiNavigate({destination:n}))}),[ie,J]),be=(0,D.O)([ae],re.name),pe=(0,D.O)([null===(i=re.artist)||void 0===i?void 0:i.uri],null===(a=re.artist)||void 0===a?void 0:a.name),je=(0,D.O)([null===(s=re.context)||void 0===s?void 0:s.uri],null===(o=re.context)||void 0===o?void 0:o.name);return B?(0,P.jsxs)("div",{className:p()(z),children:[(0,P.jsx)(A._,{menu:ve(null===(u=re.context)||void 0===u?void 0:u.uri,null===(l=re.artist)||void 0===l?void 0:l.uri),children:(0,P.jsxs)("div",{className:Y,children:[(0,P.jsx)(N.q,{label:R.user.name,width:40,userIconSize:16,images:ne,withBadge:me(R.timestamp)}),(0,P.jsx)(O.I,{className:K,iconClassName:H,isPlaying:ue,isLocked:!1,onClick:xe,playAriaLabel:ue?c.ag.get("pause"):"".concat(c.ag.get("play")," ").concat(re.artist.name," ").concat(re.name)})]})}),(0,P.jsxs)("div",{className:p()(q),children:[(0,P.jsxs)("div",{className:W,children:[(0,P.jsx)(j.D,{as:"p",variant:"mestoBold",className:p()(Q,"ellipsis-one-line"),children:(0,P.jsx)(M.ZP,{value:"/buddyfeed_user_profile",children:(0,P.jsx)(A._,{menu:(0,P.jsx)(S.I,{uri:R.user.uri}),children:(0,P.jsx)(L.Link,{title:R.user.name,to:R.user.uri,dir:"auto",onClick:function(){return ge("profile_link",R.user.uri)},children:R.user.name})})})}),(0,P.jsx)(j.D,{as:"p",variant:"finale",className:p()(V),children:(0,P.jsx)(Z,{timestamp:R.timestamp,isNowPlaying:me(R.timestamp)})})]}),(0,P.jsxs)(j.D,{as:"p",variant:"finale",className:G,children:[(0,P.jsx)(M.ZP,{value:"/buddyfeed_track",children:(0,P.jsx)(A._,{menu:(0,P.jsx)(I.$,{uri:re.uri,contextUri:null===(d=re.context)||void 0===d?void 0:d.uri,albumUri:null===(m=re.album)||void 0===m?void 0:m.uri,artists:[re.artist]}),children:(0,P.jsx)(L.Link,{title:re.name,to:ae,className:"ellipsis-one-line",dir:"auto",draggable:!0,onDragStart:be,onClick:function(){return ge("track_link",ae)},children:re.name})})}),(0,P.jsx)("span",{"aria-hidden":!0,children:" • "}),(0,P.jsx)(M.ZP,{value:"/buddyfeed_artist",children:(0,P.jsx)(A._,{menu:re.artist?(0,P.jsx)(C.m,{uri:re.artist.uri}):null,children:(0,P.jsx)(L.Link,{title:null===(v=re.artist)||void 0===v?void 0:v.name,to:null===(h=re.artist)||void 0===h?void 0:h.uri,className:"ellipsis-one-line",dir:"auto",draggable:!0,onDragStart:pe,onClick:function(){var e;return ge("artist_link",null===(e=re.artist)||void 0===e?void 0:e.uri)},children:null===(g=re.artist)||void 0===g?void 0:g.name})})})]}),(0,P.jsx)(j.D,{as:"p",variant:"finale",className:p()("ellipsis-one-line",$),children:(0,P.jsx)(M.ZP,{value:"/buddyfeed_context",children:(0,P.jsx)(A._,{menu:ve(null===(b=re.context)||void 0===b?void 0:b.uri,null===(k=re.artist)||void 0===k?void 0:k.uri),children:(0,P.jsxs)(L.Link,{title:null===(w=re.context)||void 0===w?void 0:w.name,to:null===(E=re.context)||void 0===E?void 0:E.uri,className:ee,draggable:!0,onDragStart:je,onClick:function(){var e;return ge("context_link",null===(e=re.context)||void 0===e?void 0:e.uri)},children:[(0,P.jsx)(T.t,{type:he(fe),iconSize:16,className:X}),(0,P.jsx)("span",{dir:"auto",className:"ellipsis-one-line",children:null===(U=re.context)||void 0===U?void 0:U.name})]})})})})]})]},R.user.uri):null};function ge(e){var n=e.friends,t=e.spec;return(0,P.jsx)(g.U5,{flipKey:n.map((function(e){return e.user.uri})).join(""),children:(0,P.jsx)("ol",{children:n.map((function(e,n){return(0,P.jsx)(g.$3,{flipId:e.user.uri,children:(0,P.jsx)("li",{children:(0,P.jsx)(xe,{friend:e,show:n<100,spec:t},e.user.uri)})},e.user.uri)}))})})}var be=t(42336),pe=t(63892),je=t(8873),ye=t(55019),Ne=t(3269),ke=(t(62780),t(22369),t(85830)),Ce=t(71218),we=(t(4302),t(66469),t(14268)),Ee=t(30067),Ie=t(86858),Se=t(88237);const Le="w5nHQ74JGTytKwWanjvB",Oe="u11kJflcqt7CSXo9qL_T",De="MmENkh6tW0MyjTtTtPHZ",Ae="Gl0dkNQbAyNjVZ1IpghI";var Te=function(e){var n=e.name,t=e.following,s=e.imageUrl,o=e.uri,u=(0,Ie.q)(),l=(0,f.o)(),d=r.createRef(),v=(0,r.useState)(t),h=(0,i.Z)(v,2),x=h[0],g=h[1];(0,Se.d)(Ee.rA.OPERATION_COMPLETE,(function(e){if(e.data.uris.includes(o))switch(e.data.operation){case Ee.BM.FOLLOW_USER:g(!0);break;case Ee.BM.UNFOLLOW_USER:g(!1)}}));var b=(0,r.useCallback)((function(){x?u.unfollowUsers([o]):(u.followUsers([o]),l({intent:"follow",type:"click",itemIdSuffix:"buddyfeed"})),d.current&&d.current.blur()}),[x,d,o,u,l]);return(0,r.useEffect)((function(){g(t)}),[t]),(0,P.jsxs)("div",{className:Le,children:[(0,P.jsx)(N.q,{label:n,width:40,userIconSize:16,images:(0,r.useMemo)((function(){return[{width:40,height:40,url:s}]}),[s])}),(0,P.jsxs)("div",{className:p()(Oe,"ellipsis-one-line"),children:[(0,P.jsx)(j.D,{as:"p",variant:"mestoBold",className:"ellipsis-one-line",children:n}),x&&(0,P.jsx)(j.D,{as:"p",variant:"finale",className:"ellipsis-one-line",children:c.ag.get("following")})]}),(0,P.jsx)("div",{className:De,children:(0,P.jsx)(m.E,{className:Ae,size:"sm",ref:d,onClick:b,ariaLabel:x?c.ag.get("buddy-feed.button.remove-friend"):c.ag.get("buddy-feed.button.add-friend"),icon:x?we.k:a.t})})]})};const Me="main-buddyFeed-friendsList";function Fe(e){var n=e.facebookFriends;return(0,P.jsx)("div",{className:Me,children:n.map((function(e){var n=e.uri,t=e.following,i=e.title,r=e.image;return(0,P.jsx)(Te,{uri:n,name:i,imageUrl:r,following:t},"fb-friend-".concat(n))}))})}t(81844);var Ue=t(62200);const _e="main-buddyFeed-loadingFriends";function Be(){return(0,P.jsx)("div",{className:_e,children:Array(20).fill(0).map((function(e,n){return(0,P.jsx)(Ue.C,{isLoading:!0,charCount:100,as:"p",variant:"canon"},n)}))})}var Pe=t(8850),Ze=t(10995),ze=t.n(Ze),Je=(t(71541),t(92346),t(63691),t(9102)),Re=t(88470);const Ye="pZFwflwH1vXVCmAO5vbz",Ke="yPL55nV5rC97vJhAf7ke",He="qpgo9DQ9rVZbO5pLJog5",qe="A3hvkJOGkBNa6zWj6oZa",We="pIyez6N1SF3jW0U5VUx4",Qe="lIxuZR4lYTrEKkMYedty",Ve="VEmC3OHK3uAasHvO5OuA",Ge="wzGPtuvvLpOpY1PDu4Qv",Xe="YoJTUV4hazVCFNbfKoNq";var $e=function(e){var n,t,a,s,o,u,l=e.onBackButtonClick,d=(0,r.useState)(""),f=(0,i.Z)(d,2),v=f[0],h=f[1],x=(n=v,a=(0,Re.I)(),s=n.trim().toLowerCase(),o=(0,Je.useQuery)("useFacebookFriends",(0,Pe.Z)(ze().mark((function e(){var n;return ze().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.fetchFacebookFriends();case 2:return n=e.sent,e.abrupt("return",n.sort((function(e,n){return e.title>n.title?1:-1})));case 4:case"end":return e.stop()}}),e)})))),u=o.data,{isLoading:o.isLoading,friends:null!==(t=null==u?void 0:u.filter((function(e){return-1!==e.title.trim().toLowerCase().indexOf(s)})))&&void 0!==t?t:[]}),g=x.isLoading,b=x.friends,p=(0,ke.y1)((function(e){h(e.target.value)}),100),y=(0,r.useCallback)((function(e){null!==e&&e.focus()}),[]);return(0,P.jsxs)("div",{className:Ye,children:[(0,P.jsx)(m.E,{ariaLabel:c.ag.get("buddy-feed.button.back"),onClick:l,ref:y,className:Ke,icon:be.e,size:"sm",testId:"back-to-friends"}),(0,P.jsxs)("div",{className:He,children:[(0,P.jsx)("div",{className:qe,children:(0,P.jsx)(je.z,{className:We,iconSize:32})}),(0,P.jsx)("div",{className:Qe,children:g?(0,P.jsx)(Ue.C,{isLoading:!0,charCount:25,as:"p",variant:"mesto"}):(0,P.jsx)(j.D,{as:"p",variant:"mesto",children:c.ag.get("buddy-feed.number-of-friends",b.length)})})]}),g?(0,P.jsx)(Be,{}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)("div",{className:Ve,children:[(0,P.jsx)(Ce.j,{className:Xe,iconSize:16,role:"presentation"}),(0,P.jsx)("input",{onChange:p,className:Ge,placeholder:c.ag.get("buddy-feed.find-in-playlists")})]}),(0,P.jsx)(Fe,{facebookFriends:b})]})]})},en=t(47898);function nn(e){var n=e.isOpen,t=e.onClose,i=e.onConfirm;return(0,P.jsx)(en.Q,{onClose:t,"aria-label":c.ag.get("web-player.buddy-feed.connect-with-facebook-title"),onConfirm:i,titleText:c.ag.get("web-player.buddy-feed.connect-with-facebook-title"),descriptionText:c.ag.get("web-player.buddy-feed.connect-with-facebook-description"),cancelText:c.ag.get("queue.cancel-button"),confirmText:c.ag.get("web-player.buddy-feed.connect-button"),isOpen:n})}var tn=function(e){return e[e.LOADING=0]="LOADING",e[e.CONNECTED=1]="CONNECTED",e[e.DISCONNECTED=2]="DISCONNECTED",e}({});const rn="EmZCbU1_B_J9RAHebolL",an="Ym6Yyx83U7mNKOMw9dxw",sn="NXcZaSipzomJ6d4_nM94",cn="b9rqRkvRvhrSY4FYHQVC",on="xHc_2FQr3NxfCgfDSVhY",un="QAJYN0xWh3h2A5d8_C1g",ln="PKhH1CknobkjJdVITsb4",dn="HgRmCE3NxfiYNtv6pF3H",fn="HnA5mipUMkheAlbxqCn_",mn="mvp0xhvZTo0xv0TIwi9u";var vn=function(e){var n=(0,f.o)(),t=e.onBackButtonClick,a=e.feedIsEmpty,s=e.goToAddFriends,o=void 0!==s&&s,u=function(){var e=(0,Re.I)(),n=(0,r.useState)(tn.LOADING),t=(0,i.Z)(n,2),a=t[0],s=t[1];return(0,r.useEffect)((function(){return e.subscribeToFacebookConnectionState((function(e){s(e.connection?tn.CONNECTED:tn.DISCONNECTED)})).cancel}),[e]),a}(),l=(0,Re.I)(),d=(0,r.useState)(!1),v=(0,i.Z)(d,2),h=v[0],x=v[1],g=(0,r.useState)(!1),b=(0,i.Z)(g,2),p=b[0],y=b[1],N=(0,r.useState)(!1),k=(0,i.Z)(N,2),C=k[0],w=k[1],E=(0,r.useCallback)((function(e){null!==e&&e.focus()}),[]),I=(0,r.useCallback)((function(){location.reload()}),[]);if(p)return(0,P.jsxs)("div",{className:fn,children:[(0,P.jsx)(m.E,{onClick:t,ref:E,className:sn,ariaLabel:c.ag.get("buddy-feed.button.back"),icon:be.e,size:"sm"}),(0,P.jsxs)("div",{className:mn,children:[(0,P.jsx)(j.D,{as:"h1",variant:"balladBold",className:an,children:c.ag.get("error-dialog.generic.header")}),(0,P.jsx)(j.D,{as:"p",variant:"mesto",className:cn,children:c.ag.get("error-dialog.generic.body")}),(0,P.jsx)(pe.D,{colorSet:"invertedLight",onClick:I,children:c.ag.get("error.reload")})]})]});var S=(o||C)&&u===tn.CONNECTED;return(0,P.jsxs)("div",{className:rn,children:[S&&(0,P.jsx)($e,{onBackButtonClick:function(){a&&w(!1),t()}}),!S&&(0,P.jsxs)("div",{className:un,children:[(0,P.jsx)(m.E,{ariaLabel:c.ag.get("buddy-feed.button.back"),onClick:t,className:sn,ref:E,icon:be.e,size:"sm"}),(0,P.jsx)(j.D,{as:"h1",variant:"balladBold",className:an,children:c.ag.get("buddy-feed.friend-activity")}),(0,P.jsx)(j.D,{as:"p",variant:"mesto",className:cn,children:c.ag.get("buddy-feed.facebook.connect-with-friends-default")}),(0,P.jsx)("div",{className:ln,children:(0,P.jsx)(pe.D,{className:dn,buttonSize:"sm",iconLeading:je.z,UNSAFE_colorSet:(0,ye.Ev)("#2374E1",Ne.$_Y.white),onClick:function(){n({intent:"connect-to-facebook",type:"click",itemIdSuffix:"buddyfeed"}),u!==tn.CONNECTED?x(!0):w(!0)},children:c.ag.get("buddy-feed.facebook.button")})}),(0,P.jsx)(j.D,{as:"p",variant:"finale",className:on,children:c.ag.get("buddy-feed.facebook.disclaimer")}),(0,P.jsx)(nn,{isOpen:h,onClose:function(){x(!1)},onConfirm:function(){l.connectToFacebook().then((function(){w(!0),x(!1)})).catch((function(){y(!0)}))}})]})]})},hn=t(47393),xn=t(66388),gn=function(e){var n=e.showOnlineIndicator;return(0,P.jsxs)("div",{className:ae,children:[(0,P.jsxs)("div",{className:se,children:[(0,P.jsx)(xn.f,{iconSize:24}),n?(0,P.jsx)("div",{className:ce}):null]}),(0,P.jsxs)("div",{className:oe,children:[(0,P.jsx)("div",{className:p()(ue,le)}),(0,P.jsx)("div",{className:ue}),(0,P.jsx)("div",{className:ue})]})]})},bn=function(){return(0,P.jsxs)("div",{"data-testid":"buddy-feed-empty-state",className:ie,children:[(0,P.jsx)(j.D,{as:"p",className:re,children:c.ag.get("buddy-feed.let-followers-see-your-listening")}),(0,P.jsx)(gn,{showOnlineIndicator:!0}),(0,P.jsx)(gn,{showOnlineIndicator:!0}),(0,P.jsx)(gn,{}),(0,P.jsx)(j.D,{as:"p",className:re,children:c.ag.get("buddy-feed.enable-share-listening-activity")}),(0,P.jsx)(hn.rU,{to:"/preferences",className:de,children:(0,P.jsx)(pe.D,{colorSet:"invertedLight",className:fe,children:c.ag.get("desktop.settings.settings")})})]})},pn=t(7944),jn=t(49823);const yn="jUF2eKgYMm64aYykubct",Nn="zhL_lhJqzKfJVy7L5VuY",kn="XqquM_o2eODcnD8Y4QhS",Cn="UGtycHBJ4egymBSmD_lX",wn="ND2ydDPzwQZB7HyaGCN8",En="D9YN554UFGJle2CPP1TA",In="v7Zcy9UKVUTDZIMKB6ZF",Sn="RX3U6eAasqazEkuFdnj0";var Ln=function(e){var n=e.children,t=e.page,i=0===t,r=n.filter((function(e,n){return n!==t}));return(0,P.jsx)(pn.Z,{component:null,children:r.map((function(e){return(0,P.jsx)(jn.Z,{in:i,timeout:500,classNames:{enter:i?yn:wn,enterActive:i?Nn:En,exit:i?kn:In,exitActive:i?Cn:Sn},children:e},i?"first-page":"second-page")}))})},On=(t(82088),t(43125),t(16366),t(96669),t(61235),t(69724),t(39965),t(39975),t(59538),t(79611),t(27639),t(83001),t(71756),t(40274),t(83014));t(72304);function Dn(e){return e.sort((function(e,n){return n.timestamp-e.timestamp}))}function An(e,n){return n.some((function(n){return n.user.uri===e.user.uri}))?n:Dn([].concat((0,On.Z)(n),[e]))}function Tn(e,n){return n.filter((function(n){return n.user.uri!==e}))}t(81289),t(29543),t(70969),t(31594);function Mn(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return Fn(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Fn(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return s=e.done,e},e:function(e){c=!0,a=e},f:function(){try{s||null==t.return||t.return()}finally{if(c)throw a}}}}function Fn(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function Un(e){var n=(0,Re.I)(),t=(0,r.useState)(Dn(e)),a=(0,i.Z)(t,2),s=a[0],c=a[1],o=function(e,n){var t=(0,Re.I)(),i=(0,r.useRef)(e),a=(0,r.useRef)({}),s=(0,r.useRef)(n);s.current=n;var c=(0,r.useCallback)((function(e){var n,i=null===(n=(0,y.EC)(e))||void 0===n?void 0:n.username;return t.subscribeToBuddyActivity(i,(function(e){e&&s.current(e)}))}),[t]),o=(0,r.useCallback)((function(e){var n;null===(n=a.current[e])||void 0===n||n.cancel(),delete a.current[e]}),[]);return(0,r.useEffect)((function(){a.current=i.current.reduce((function(e,n){var t=n.user.uri,i=c(t);return e[t]=i,e}),{})}),[c]),(0,r.useEffect)((function(){var e=a.current;return function(){Object.values(e).forEach((function(e){e.cancel()}))}}),[]),{subscribeToFriend:c,unSubscribeFromFriend:o}}(e,(function(e){c((function(n){return function(e,n){return Dn(n.map((function(n){return n.user.uri===e.user.uri?e:n})))}(e,n)}))})),u=o.subscribeToFriend,l=o.unSubscribeFromFriend;return(0,Se.d)(Ee.rA.OPERATION_COMPLETE,function(){var e=(0,Pe.Z)(ze().mark((function e(t){var i,r,a,o,d,f,m;return ze().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.data.uris,t.data.operation!==Ee.BM.FOLLOW_USER){e.next=19;break}r=Mn(i),e.prev=3,o=ze().mark((function e(){var t,i,r;return ze().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.value,s.find((function(e){return e.user.uri===t}))){e.next=8;break}return e.next=4,n.fetchFriendActivity([t]);case 4:i=e.sent,r=i[0],c((function(e){return An(r,e)})),u(t);case 8:case"end":return e.stop()}}),e)})),r.s();case 6:if((a=r.n()).done){e.next=10;break}return e.delegateYield(o(),"t0",8);case 8:e.next=6;break;case 10:e.next=15;break;case 12:e.prev=12,e.t1=e.catch(3),r.e(e.t1);case 15:return e.prev=15,r.f(),e.finish(15);case 18:return e.abrupt("return");case 19:if(t.data.operation!==Ee.BM.UNFOLLOW_USER){e.next=36;break}d=Mn(i),e.prev=21,m=ze().mark((function e(){var n;return ze().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=f.value,s.find((function(e){return e.user.uri===n}))&&(l(n),c((function(e){return Tn(n,e)})));case 2:case"end":return e.stop()}}),e)})),d.s();case 24:if((f=d.n()).done){e.next=28;break}return e.delegateYield(m(),"t2",26);case 26:e.next=24;break;case 28:e.next=33;break;case 30:e.prev=30,e.t3=e.catch(21),d.e(e.t3);case 33:return e.prev=33,d.f(),e.finish(33);case 36:case"end":return e.stop()}}),e,null,[[3,12,15,18],[21,30,33,36]])})));return function(n){return e.apply(this,arguments)}}()),s}const _n=function(e){var n=e.initialFriends,t=(0,f.o)(),g=Un(n),b=(0,x.$P)(),p=(0,x.fU)(s.createDesktopFriendActivityEventFactory,{}).spec;(0,r.useEffect)((function(){t({intent:"view",type:"impression",itemIdSuffix:"buddyfeed"})}),[t]);var j=(0,r.useState)(!1),y=(0,i.Z)(j,2),N=y[0],k=y[1],C=function(){N||b.logInteraction(p.addFriendButtonFactory().hitUiReveal()),k(!N)},w=0===g.length,E=(0,r.useCallback)((function(){b.logInteraction(p.closeButtonFactory().hitUiHide())}),[b,p]);return(0,P.jsx)(h.DJ.Provider,{value:"buddy_feed",children:(0,P.jsx)(o.l,{label:c.ag.get("buddy-feed.friend-activity"),children:(0,P.jsxs)(Ln,{page:N?1:0,children:[(0,P.jsx)("div",{className:J,children:(0,P.jsx)(vn,{onBackButtonClick:C,feedIsEmpty:w,goToAddFriends:N})}),(0,P.jsx)("div",{className:R,children:(0,P.jsxs)(u.K,{children:[(0,P.jsx)(l.V,{title:c.ag.get("buddy-feed.friend-activity"),panel:d.s.BuddyFeed,onClose:E,actions:(0,P.jsx)(v.w,{label:c.ag.get("buddy-feed.add-friends"),children:(0,P.jsx)(m.E,{ariaLabel:c.ag.get("buddy-feed.add-friends"),testId:"add-friends-button",size:"sm",onClick:C,icon:a.t})})}),(0,P.jsx)("div",{className:ne,children:(0,P.jsx)(m.E,{ariaLabel:c.ag.get("buddy-feed.add-friends"),className:te,size:"sm",onClick:C,icon:a.t})}),w?(0,P.jsx)(bn,{}):(0,P.jsx)(ge,{friends:g,spec:p})]})})]})})})}}}]);
//# sourceMappingURL=xpui-routes-buddy-feed.js.map