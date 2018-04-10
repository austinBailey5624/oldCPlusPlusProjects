﻿try { window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['microsoft.exchange.clients.owa2.client.application.viewmodels.js'] = (new Date()).getTime();
Type.registerNamespace("_r");function ApplicationViewModelsComponent(){}ApplicationViewModelsComponent.prototype={$2FT:function(n,t,i){var s=this;n.$r(_a.$16H).$2a(_a.$149).$1I().$t(function(){return new _a.$16H(n.$2(_a.$3G))});if(i.get_$AA()!=="Mouse"){var o=this;n.$r(_r.$wY).$2a(IPrimarySpeechViewModel).$t(function(){return new _r.$wY(n.$2(_y.$W),n.$2(_y.$7V),n.$2(_ff.$M),n.$36(IComposeCalendarItemViewModelFactory),n.$2(IMailComposeContextFactory),n.$2(_a.$149))});var c=this;n.$r(_r.$15s).$2a(_d.$u6).$1I().$t(function(){return new _r.$15s(n.$2(_y.$W),n.$2(_a.$3G),t.get_$8b()?n.$2(_pm.$vw):null,n.$2(_y.$4Y),n.$2(_a.$6C),n.$2(_a.$2Y),n.$2(_a.$1d),n.$2(_y.$GA),n.$2(_a.$t),n.$2(_g.$2Z),n.$2(_a.$JK),n.$2(_h.$JM),n.$36(ISyncFolderSettingProcessor),n.$2(_js.$3V),n.$2(_bc.$40),t.get_$8b()?n.$2(_pm.$dp):null,n.$2(IInferenceTracker))})}var h=this;n.$r(_r.$wD).$1I().$t(function(){return new _r.$wD(n.$2(_y.$W),n.$2(_a.$1d),n.$2(_h.$4S),n.$2(_ff.$M),n.$2(_a.$2Y),n.$2(_pcf.$Jb),n.$2(_g.$O),n.$2(_ph.$fq),n.$2(_a.$3G),n.$2(_a.$5k),n.$3J(ITodosPanelViewModel),n.$3J(IPublicFolderFeatureManager))});var u=this;n.$r(_r.$6H).$t(function(){return new _r.$6H(n.$2(_y.$W),n.$2(_r.$wD),n.$2(_rw.$XO))});var r=this;n.$r(_d.$xp).$1I().$t(function(){return new _d.$xp(n.$2(_y.$W),n.$2(_g.$2Z),n.$2(_ff.$M),n.$2(IInferenceTracker),n.$2(_h.$4S),n.$36(IMailErrorHandler),n.$3J(IExtendedListViewModelFactory))});var e=this;n.$r(_r.$8x).$2a(ITasksModuleViewModel).$t(function(){return new _r.$8x(n.$2(_y.$W),n.$2(ReadingPaneViewModelBase),n.$2(_g.$Ke),n.$2(_d.$xp),n.$2(_g.$2Z),n.$2(_ff.$M))});var f=this;n.$r(_r.BposDiagnosticsViewModelFactory).$t(function(){return new _r.BposDiagnosticsViewModelFactory(n.$2(_g.$AM),n.$2(_a.$2Y))})},$Bl2:function(){return null}};_r.$NU=function(n,t){this.$$d_$98l=Function.createDelegate(this,this.$98l);this.$$d_$98m=Function.createDelegate(this,this.$98m);_r.$NU.initializeBase(this);this.$n=t;if(!$C(n)){this.$It=n.get_$ot();this.$9EZ=n.get_$Lk()}if(this.$It){this.set_$1Yo("Retrieving Office 365 data...");this.$8Ii()}else this.set_$1Yo("This user is not an Office 365 user.")};_r.$NU.prototype={$n:null,$It:!1,$9EZ:null,$45:null,$x5:null,set_$tj:function(n){this.$45=n;$C(this.$45)?this.set_$1Yo("The retrieved Office 365 data is null."):this.set_$1Yo("The Office 365 data was retrieved successfully.");this.$4("BposNavBarData");return n},set_$1Yo:function(n){if(this.$x5!==n){this.$x5=n;this.$4("StatusMessage")}return n},$8Ii:function(){var n=new _h.$124;n.add_$2s(this.$$d_$98m);n.add_$2b(this.$$d_$98l);this.$n.$1U(n)},$98l:function(n){this.set_$1Yo("Failed to get the Office 365 data.")},$98m:function(n){var t=null;$C(n)||(t=n.$2rA);this.set_$tj(t)}};_r.BposDiagnosticsViewModelFactory=function(n,t){this.$AG=n;this.$n=t};_r.BposDiagnosticsViewModelFactory.prototype={$n:null,$AG:null,$wd:function(n,t,i){return new _r.$NU(this.$AG,this.$n)},$1CS:function(n,t,i){return new _r.$NU(this.$AG,this.$n)}};_r.$wY=function(n,t,i,r,u,f){_r.$wY.initializeBase(this);_a.$4.$X(t,"primaryViewModel");_a.$4.$X(i,"eventAggregator");this.$7W=t;this.$N=i;this.$5s7=new _d.$1CX(this,f);this.$60h=new _r.$1ET(u);this.$5lc=new _r.$1At(n,r)};_r.$wY.prototype={$7W:null,$5s7:null,$N:null,$60h:null,$5lc:null,$8ZC:null,get_$7GQ:function(){return this.get_$7GS()?this.get_$7GS().get_$5a6():null},get_$7GS:function(){return this.$5s7.$1vD},$DUK:function(n){this.$CJI(n)},$AoT:function(){this.get_$7GQ()&&this.get_$7GQ().$3s&&this.get_$7GQ().$11()},$CJI:function(n){var t=null;switch(n.ResultType){case"AppointmentCreation":this.$5lc.$3ju(n);return;case"DaySearch":t=this.$7W.$fE(1);break;case"FindPeople":t=this.$7W.$fE(2);break;case"EmailPeople":this.$8ZC=this.$60h.$1yB(n);return;default:break}if(t)if(t.get_$bm())this.$9K8(n);else{var i=this;t.add_$26z(function(){i.$9K8(n)});t.$EA()}},$9K8:function(n){this.$N.$1p(_y.$pn,new _y.$pn(n))}};_r.$1NE=function(n,t,i,r,u,f,e,o,s,h,c,l){_r.$1NE.initializeBase(this,[n,t,i,r,u,f,e,o,s,h,c,l])};_r.$1NE.prototype={$6tp:null,$6to:null,$6tq:null,$2x7:function(n,t,i,r,u){var f=this.$66;f.$2ru=n;f.$271=t;f.$1fg=i;f.$1s7=r;f.$1ff=u},$AMy:function(n){return new _d.$1Mq(n,this.get_$8F0(),this.get_$6Gu(),this.get_$8TE())},$9iH:function(){var n=this.$66;n.$2ru?this.get_$mm().set_$2vL(1):n.$271?this.get_$mm().set_$2vL(2):_ph.$6p.prototype.$9iH.call(this)},$9g1:function(n){var t=this.$66;t.$1fg?n.$1wr=_fp.$15.$3sy():t.$1s7?n.$1wr=_fp.$15.$6Ge():_ph.$6p.prototype.$9g1.call(this,n)},$2xG:function(n){var t=this.$66;t.$1fg?this.set_$kI(this.$6tp):t.$1s7?this.set_$kI(this.$6to):t.$1ff?this.set_$kI(this.$6tq):_ph.$6p.prototype.$2xG.call(this,n)},deferBrowseCall:function(){return!!this.$66.$1az||!this.$66.$271},$3vO:function(){_ph.$6p.prototype.$3vO.call(this);var i=new _ff.$4O(_nbs.NonBootStrings.l_PeopleAllPivot_Text,null);var t=new _ff.$4O(_nbs.NonBootStrings.l_PeoplePeoplePivot_Text,null);var n=new _ff.$4O(_nbs.NonBootStrings.l_PeopleGroupsPivot_Text,null);this.$6tp=[t];this.$6to=[n];this.$6tq=[i,t,n]}};_r.$1At=function(n,t){_a.$4.$X(n,"owaShell");_a.$4.$X(t,"composeCalendarViewModelFactory");this.$3bh=new _c.$hl;this.$I=n;this.$11y=t};_r.$1At.prototype={$3bh:null,$I:null,$11y:null,$3ju:function(n){var i=this.$3bh.$DuL(n.JsonResponse);var t=new _bc.$Nj;t.set_$1T(i.get_$1T());t.set_$LO(i.get_$LO());t.set_$XR(!0);t.set_$4HG("Busy");t.set_$7l(i.get_$7l());var r=this;this.$11y.$9(function(n){var i=n.$3AP(t);r.$I.$VL(Object.getType(r.$11y),null,null,_bc.$2I.get_$rB(),i,!1)})}};_r.$1ET=function(n){_a.$4.$X(n,"mailComposeContextFactory");this.$3bh=new _c.$hl;this.$7F=n;this.$13i=null};_r.$1ET.prototype={$3bh:null,$7F:null,$13i:null,$1yB:function(n){var i=new _js.$X;this.$3bh.$9Ir(n.JsonResponse,i);this.$Ezl(i);var t=this.$7F.$H5(!1,!1);t.set_$5j(0);t.set_$6X(0);t.set_$4IU(i);t.set_$Xa(!0);$C(this.$13i)&&(this.$13i=new _y.$Cc);this.$13i.$WM(t);return t},$Ezl:function(n){for(var t=0;t<n.get_$A();t++)_a.$4.$X(n.get_$E(t).get_$7p(),"email address cannot be empty")}};_r.$8x=function(n,t,i,r,u,f){this.$$d_$5Vm=Function.createDelegate(this,this.$5Vm);this.$$d_$5Vz=Function.createDelegate(this,this.$5Vz);this.$$d_$DXu=Function.createDelegate(this,this.$DXu);this.$$d_$Dhw=Function.createDelegate(this,this.$Dhw);this.$$d_$DVz=Function.createDelegate(this,this.$DVz);this.$$d_$DlP=Function.createDelegate(this,this.$DlP);this.$$d_$DeC=Function.createDelegate(this,this.$DeC);this.$$d_$2zb=Function.createDelegate(this,this.$2zb);this.$$d_$3SY=Function.createDelegate(this,this.$3SY);this.$$d_$DlQ=Function.createDelegate(this,this.$DlQ);this.$$d_$DlR=Function.createDelegate(this,this.$DlR);this.$$d_$Dyu=Function.createDelegate(this,this.$Dyu);this.$$d_$3H0=Function.createDelegate(this,this.$3H0);this.$$d_$C65=Function.createDelegate(this,this.$C65);this.$$d_$948=Function.createDelegate(this,this.$948);this.$$d_$APK=Function.createDelegate(this,this.$APK);_r.$8x.initializeBase(this,[_u.Strings.l_TasksModuleName_Text,f,new _y.$5r(n.get_$U())]);this.$I=n;this.$2I=i;this.$7Iz=r;this.$3r=t;this.$d=u};_r.$8x.prototype={$I:null,$2I:null,$46m:null,$1BB:null,$Ih:null,$3cd:null,$1vY:0,$7Iz:null,$3r:null,$qo:null,$ol:null,$3Hm:!1,$5y6:null,$2uV:null,$63y:null,$6lc:null,$6tn:null,$6Wc:null,$64X:null,$3ca:null,$JW:null,$ca:null,$1Yh:null,$GY:null,$8XH:!1,$d:null,get_$1x:function(){return"tasks"},set_$33y:function(n){if(this.$qo!==n){this.$qo=n;this.$4("CategoryManagementDialog")}return n},set_$Gp:function(n){if(this.$1vY!==n){this.$1vY=n;this.$DjS();this.$4("PivotSelectedOptionIndex")}return n},set_$5ZY:function(n){if(this.$1Yh!==n){this.$1Yh=n;this.$4("SortByButtonLabel")}return n},$8Fi:function(){this.$3e();this.$Ih.set_$3vH(this.$2I.nameToId("todosearch"));this.$Ih.set_$7C(_g.$1s.$Fe("todosearch"));return this},$APK:function(){if(this.$Ih){var n=null;n=this.$Ih.$3l?this.$Ih.$3l.get_$1H():this.$Ih.$jX;var t=this;this.$3r.$1Ir(function(i){i.$5Kk(function(i){if(i){_a.$6.$1g(_r.$8x.$L,"TasksCompose.New");t.$3r.$DOO(n)}})})}},$9Dd:function(){this.$46m.$3s&&this.$46m.$11()},$3e:function(){this.$46m=new _C(this.$$d_$APK,_r.$8x.$L);this.$JW=new _c.$1SU;this.$1BB=new _d.$LM(this.$N,this.$JW);this.$Ih=this.$7Iz.$ARg();var n=this.$d.get_$6r().$fD(this.$2I.nameToId("todosearch"));this.$8Pf(n);this.$2lQ();this.$8Ox();this.$6NG(this.$Ih);this.$8PF();this.$6NK()},$2lQ:function(){this.$3cd=[new _ff.$4O(_nbs.NonBootStrings.l_TasksPivotOptionAll_Text,"All"),new _ff.$4O(_nbs.NonBootStrings.l_TasksPivotOptionActive_Text,"TaskActive"),new _ff.$4O(_nbs.NonBootStrings.l_TasksPivotOptionOverdue_Text,"TaskOverdue"),new _ff.$4O(_nbs.NonBootStrings.l_TasksPivotOptionCompleted_Text,"TaskCompleted")];this.$1vY=1;var i=this,n=this,t=this;this.$6tn=new(_d.$gz.$$(Number))(this.$1vY,function(n){return i.$1vY===n},function(){n.$9hk();return n.$1vY},function(n){t.set_$Gp(n)});return this.$3cd},$6NG:function(n){var f=this,u=this;n.$4BL(this.$$d_$948,this.$$d_$APK,this.$$d_$C65,function(){},this.$$d_$3H0,function(){});n.$5Ls=new _C(this.$$d_$Dyu,_r.$8x.$L);n.set_$Fw(this.$3cd[this.$1vY].$1e);if(this.$I.get_$U()==="Mouse"){n.$kw=1;n.set_$Sv(2);n.$p(n.get_$2vQ(),this.$$d_$DlR);n.$p(n.get_$2GE(),this.$3r.$$d_$6og);n.$p(n.get_$1Qu(),this.$3r.$$d_$DY3);n.$p(n.get_$299(),this.$$d_$DlQ)}var t=this,i=this,r=this;this.$6Wc=new(_d.$gz.$$(_a.$7o))(null,function(n){return t.$Ih.$1Y||t.$Ih.get_$GX()===1?t.$Ih.get_$C0()>=2?!1:t.$Ih.$1Y===n:!0},function(){i.$9iX(i.$Ih);return i.$Ih.$1Y},function(n){r.$Ih.set_$1F(n)})},$8PF:function(){this.$JW.$2LY();this.$1BB.$uR=new _C(this.$$d_$948,_r.$8x.$L);this.$1BB.set_$7E(this.get_$1c().get_$U()==="Mouse");this.$3ca=new _d.$YC(this.$JW);this.$1BB.$3e();this.$1BB.$UH.$p("SelectedTreeNode",this.$$d_$3SY);var i=this,n=this,t=this;this.$64X=new(_d.$gz.$$(_d.$Fc))(null,function(n){return i.$1BB.$UH.$Gt===n},function(){var t=n.$1BB.$UH.get_$3X5();t&&n.$Ih.set_$7C(t);return n.$1BB.$UH.$Gt},function(n){t.$1BB.$UH.set_$155(n);t.$1BB.$UH.$Gt.set_$2f(!0)})},$8Ox:function(){this.$ol=new _C(this.$$d_$3H0,_r.$8x.$L)},$3H0:function(){if(this.$I.get_$U()==="Mouse"){this.$6N5();this.$qo.$Li()}},$6N5:function(){if(!this.$3Hm){this.set_$33y(new _y.$Dg(this.$d.get_$R1(),this.$$d_$2zb));this.$3Hm=!0}},$2zb:function(n,t,i){var r=new _h.$y6(n,t,i,null);var u=this;r.add_$2s(function(){u.$d.get_$R1().set_$2QK(r.$4Ks)});OwaApplication.$2B.$1U(r)},$6NK:function(){var n=this;this.$3r.$1Ir(function(t){t.add_$DOs(n.$$d_$DeC);t.add_$Emq(n.$$d_$DlP);n.$5y6=new _C(n.$$d_$DVz,_r.$8x.$L);n.$2uV=new _C(n.$$d_$Dhw,_r.$8x.$L);n.$63y=new _C(n.$$d_$DXu,_r.$8x.$L);n.$6lc=new _C(n.$$d_$C65,_r.$8x.$L);t.$1HZ(n.$ol);n.$3r.get_$1rc().set_$3xC(!0);n.$3r.get_$1rc().$1HZ(n.$2uV,n.$5y6,n.$63y,n.$6lc,null,null,null,null)})},$948:function(){switch(this.$I.get_$U()){case"Mouse":case"TouchWide":this.$1BB.set_$7E(!this.$1BB.$3v);break;case"TouchNarrow":throw Error.notImplemented();}},$3SY:function(n,t){var i=this;this.$3r.$1Ir(function(n){i.$64X.$2W(n)})},$DlQ:function(n,t){this.$9iY()},$9iY:function(){var n=this;this.$3r.$1Ir(function(t){n.$6Wc.$2W(t)})},$9iX:function(n){if(this.$Ih.$1Y)this.$3r.$1iV(this.$Ih.$1Y);else{this.$Ih.$31.get_$Cx().get_$A()||this.$Ih.set_$GX(1);this.$3r.$2sA(n)}},$DlR:function(n,t){this.$9iY()},$DeC:function(n,t){t&&this.$Ih.$31.$FL();this.$9iX(this.$Ih)},$DlP:function(n,t){this.$Ih&&this.$Ih.$1Tj.$11()},$DjS:function(){if(this.$Ih){var n=this;this.$3r.$1Ir(function(t){n.$6tn.$2W(t)})}},$9hk:function(){if(this.$Ih){var n=this.$3cd[this.$1vY].$1e;if(n!==this.$Ih.$6l){this.$Ih.set_$Fw(n);this.$Ih.$hl(2)}}},$DVz:function(){this.$Ih&&this.$Ih.$1Tj.$11()},$Dhw:function(){this.$Ih&&this.$Ih.$2uV.$11()},$DXu:function(){this.$Ih&&this.$Ih.$521.$11()},$C65:function(){var n=this;this.$3r.$1Ir(function(t){t.$5Kk(function(t){t&&n.$C66()})})},$C66:function(){if(this.$Ih.$3l.get_$IE()!=="todosearch"&&this.$1BB.$UH.$Gt){var n=this;var t=new _C(function(){if(n.$3ca.$UH.get_$3X5()){n.$Ih.set_$bK(n.$3ca.$UH.get_$3X5().get_$1H());n.$DNi()}},_r.$8x.$L);this.$3ca.$Li(t,this.$Ih.get_$C0()===1?_u.Strings.l_MoveOneItemTitle_Text:String.format(_u.Strings.l_MoveItemsTitle_Text,this.$Ih.get_$C0()),_u.Strings.l_Move_LowerCase_Text,this.$Ih.$3l.get_$1H())}},$DNi:function(){this.$Ih.$465.$11()},$Dyu:function(){var n=this;this.$3r.$1Ir(function(n){n.$50p()})},$5Vz:function(n){if(this.$ca.$UY.get_$1y3()===n.$xy){this.$1Aq(_lv.$5z.$2L3(n.$xy),!0);return}this.$1Aq(_lv.$5z.$2L3(this.$ca.$UY.get_$1y3()),!1);this.$ca.$7CM(n);this.$1Aq(_lv.$5z.$2L3(n.$xy),!0);this.$9vX();this.$Ih.set_$PV(this.$ca.$1yY(!1));this.$Ih.$hl(4);this.$3jn();this.$4Ge()},$5Vm:function(n){if(n.$Kb===this.$ca.$128){this.$1Aq(_lv.$5z.$1TA(n.$Kb),!0);return}this.$1Aq(_lv.$5z.$1TA(this.$ca.$128),!1);this.$1Aq(_lv.$5z.$1TA(n.$Kb),!0);this.$ca.set_$4Ye(n.$Kb);this.$Ih.set_$PV(this.$ca.$1yY(!1));this.$3jn();this.$Ih.$hl(4)},$8Pf:function(n){this.$ca=new _d.$1Sb;this.$ca.$UW=n.$3I;this.$ca.$7Ch(n.$1vB);this.$ca.$7Ci(n.$Kk);this.$3aI();this.$Ih.set_$PV(this.$ca.$1yY(!1))},$4Ge:function(){this.set_$5ZY(String.format(_u.Strings.l_SortByLabel_UpperCase_Text,_u.Strings.l_Items_UpperCase_Text,this.$ca.$UY.get_$9ww()))},$1Aq:function(n,t){for(var i=0;i<this.$GY.$1a.get_$A();i++)if(_fm.$50.isInstanceOfType(this.$GY.$1a.get_$E(i))&&this.$GY.$1a.get_$E(i).$6Y===n){this.$GY.$1a.get_$E(i).set_$2f(t);this.$GY.$1a.get_$E(i).set_$8x(t);break}},$9vX:function(){for(var n=0;n<this.$GY.$1a.get_$A();n++)if(_fm.$CR.isInstanceOfType(this.$GY.$1a.get_$E(n))&&this.$GY.$1a.get_$E(n).$3V===_u.Strings.l_Order_UpperCase_Text){this.$GY.$1a.get_$E(n+1).set_$1Z(_lv.$5z.$1TA(this.$ca.$g1.get_$E(0).$Kb));this.$GY.$1a.get_$E(n+1).set_$1K(this.$ca.$g1.get_$E(0).$6u);this.$GY.$1a.get_$E(n+1).set_$8x(!0);this.$GY.$1a.get_$E(n+1).set_$2f(!0);this.$GY.$1a.get_$E(n+2).set_$1Z(_lv.$5z.$1TA(this.$ca.$g1.get_$E(1).$Kb));this.$GY.$1a.get_$E(n+2).set_$1K(this.$ca.$g1.get_$E(1).$6u);this.$GY.$1a.get_$E(n+2).set_$8x(!1);this.$GY.$1a.get_$E(n+2).set_$2f(!1);break}},$3aI:function(){this.$GY=new _fm.$1u(new Array(0));this.$9iz();this.$GY.$1a.$F(new _fm.$6V);this.$9iy();this.$4Ge();this.$4("SortByContextMenu")},$9iz:function(){this.$GY.$1a.$F(new _fm.$CR(_u.Strings.l_SortBy_UpperCase_Text));for(var t=0;t<this.$ca.$Ie.get_$A();t++){var n=this.$ca.$Ie.get_$E(t);if(n.$43){var i=new(_a.$GK.$$(_d.$Q1))(n,this.$$d_$5Vz);this.$GY.$1a.$F(new _fm.$50(n.$1Qd,null,new _C(i.$$d_$AoZ,_r.$8x.$L),n.$3p,!1,null,null,_lv.$5z.$2L3(n.$xy)))}}},$9iy:function(){this.$GY.$1a.$F(new _fm.$CR(_u.Strings.l_Order_UpperCase_Text));for(var t=0;t<this.$ca.$g1.get_$A();t++){var n=this.$ca.$g1.get_$E(t);var i=new(_a.$GK.$$(_d.$1SW))(n,this.$$d_$5Vm);this.$GY.$1a.$F(new _fm.$50(n.$6u,null,new _C(i.$$d_$AoZ,_r.$8x.$L),n.$Kb===this.$ca.$128,!1,null,null,_lv.$5z.$1TA(n.$Kb)))}},$3jn:function(){var n=this.$d.get_$6r().$fD(this.$Ih.$3l.get_$1H());n.set_$7GB(this.$ca.$UY.get_$1y3());n.set_$5Zg(this.$ca.$128==="Ascending"?0:1);this.$d.get_$6r().$2Bk(n);_h.$21.$Kq(this.$d.get_$6r().get_$b6(),OwaApplication.$2B);this.$N.$1p(_h.$Uv,new _h.$Uv(this.$Ih.$3l))}};_r.$15s=function(n,t,i,r,u,f,e,o,s,h,c,l,a,v,y,p,w){_a.$4.$X(n,"Cannot be used with a null shell.");_a.$4.$X(t,"NativeBridge shouldn't be null.");_a.$4.$X(u,"DOMWindow shouldn't be null.");_a.$4.$X(f,"ActionSubmitter shouldn't be null.");_a.$4.$X(e,"FeatureManager shouldn't be null.");_a.$4.$X(s,"UserAgent shouldn't be null");_a.$4.$X(h,"UserConfig shouldn't be null");_a.$4.$X(c,"localStorageAdapter shouldn't be null");_a.$4.$X(l,"offlineUserSettings shouldn't be null");_a.$4.$X(a,"syncFoldersProcessorLazy shouldn't be null");_a.$4.$X(v,"taskRunner shouldn't be null");_a.$4.$X(y,"conductor shouldn't be null");if(s.get_$8b()){_a.$4.$X(i,"contactSyncManager shouldn't be null");_a.$4.$X(p,"mobileDevicePolicyManager shouldn't be null")}this.$4WU=i;this.$l=t;this.$I=n;this.$CZ=r;this.$6U=u;this.$n=f;this.$1D=e;this.$19v=o;this.$1E=s;this.$b5=h;this.$6K=c;this.$La=l;this.$1Yv=a;this.$35=v;this.$48=y;this.$hz=p;this.$2Y=w};_r.$15s.prototype={$2Y:null,$I:null,$l:null,$4WU:null,$CZ:null,$6U:null,$n:null,$1D:null,$1E:null,$b5:null,$6K:null,$La:null,$1Yv:null,$35:null,$48:null,$hz:null,$19v:null,$APW:function(n){var t=new(_ff.$18.$$(_d.$IT));var y=this;var p=function(){return _d.$IS.$9(y.$I,_nbs.NonBootStrings.l_AutoReplies_Text,n)};t.$F(new _d.$IT(_nbs.NonBootStrings.l_AutoReplies_Text,p));var a=this;var v=function(){return _d.$S3.$9(a.$I,_nbs.NonBootStrings.l_Timezone_Text,n)};t.$F(new _d.$IT(_nbs.NonBootStrings.l_Timezone_Text,v));var k=this;var d=function(){return _d.$Wz.$9(k.$I,_nbs.NonBootStrings.l_EmailSignatureFeatureName_Text,n)};t.$F(new _d.$IT(_nbs.NonBootStrings.l_EmailSignatureFeatureName_Text,d));if(this.$b5.get_$9N().get_$3me()&&!_a.UserAgent.getInstance().$YL){var r=this;var w=function(){return _d.$S1.$9(r.$I,_nbs.NonBootStrings.l_OwaChangePhotoOptionLabel_Text,n,r.$n,r.$l,r.$2Y)};t.$F(new _d.$IT(_nbs.NonBootStrings.l_OwaChangePhotoOptionLabel_Text,w))}if(this.$l.$8G(this.$l.get_$EG())&&this.$l.get_$EG().get_$Ds().get_$2gD()!==4){var f=this;var b=function(){return _p.$Mn.$9(f.$I,_nbs.NonBootStrings.l_PinOptionsTitle_Text,f.$l,n,f.$hz)};t.$F(new _d.$IT(_nbs.NonBootStrings.l_PinOptionsTitle_Text,b))}if(this.$l.$8G(this.$l.get_$1Mo())&&_pm.$26.$6TC()){var e=this;var h=function(){return _p.$o2.$9(e.$I,_nbs.NonBootStrings.l_NotificationsOptionsTitle_Text,e.$l,n)};t.$F(new _d.$IT(_nbs.NonBootStrings.l_NotificationsOptionsTitle_Text,h))}if(!this.$b5.get_$4P().get_$2m1()&&this.$l.$8G(this.$l.get_$165())&&this.$l.get_$165().get_$4Pd().get_$4Pa()&&this.$4WU&&this.$4WU.get_$A5l()){var o=this;var c=function(){return _d.$JZ.$9(o.$I,_nbs.NonBootStrings.l_ContactSync_Text,o.$l,n)};t.$F(new _d.$IT(_nbs.NonBootStrings.l_ContactSync_Text,c))}if(this.$La.get_$YO()){var i=this;var s=function(){return new _d.$Ee(i.$I,_nbs.NonBootStrings.l_OfflineFolders_Text,n,i.$1Yv,i.$48,i.$35)};t.$F(new _d.$IT(_nbs.NonBootStrings.l_OfflineFolders_Text,s))}var u=this;var l=function(){return _d.$He.$9(u.$I,_nbs.NonBootStrings.l_PrivacyAndTermsOptionPageTitle_Text,n,u.$CZ,u.$6U,u.$1E)};t.$F(new _d.$IT(_nbs.NonBootStrings.l_PrivacyAndTermsOptionPageTitle_Text,l));return t}};_r.$wD=function(n,t,i,r,u,f,e,o,s,h,c,l){_r.$wD.initializeBase(this,[n,t,i,r,u,f,e,o,s,h,c,l])};_r.$wD.prototype={$2ru:!1,$271:!1,$1fg:!1,$1s7:!1,$1ff:!1,$APp:function(){var n=new _r.$1NE(this.$I,this.$DG,this.$N,this.$n,this.$5IN,this.$d,this.$2UX,this.$1D,this.$l,this.$3U,this.$1vi,this.$Yz);n.$2x7(this.$2ru,this.$271,this.$1fg,this.$1s7,this.$1ff);return n},$2x7:function(n,t,i,r,u){this.$2ru=n;this.$271=t;this.$1fg=i;this.$1s7=r;this.$1ff=u}};_r.$6H=function(n,t,i){this.$$d_$5FI=Function.createDelegate(this,this.$5FI);this.$I=n;this.$1sT=t;this.$9M=i;this.$E5O()};_r.$6H.get_$9Qh=function(){if(!_r.$6H.$Tz){_r.$6H.$Tz={};_r.$6H.$Tz[_d.$a.toString(0)]=_nbs.NonBootStrings.l_OwaOptionPeoplePickerSearchBoxLabelFrom_Text;_r.$6H.$Tz[_d.$a.toString(1)]=_nbs.NonBootStrings.l_OwaOptionPeoplePickerSearchBoxLabelTo_Text;_r.$6H.$Tz[_d.$a.toString(2)]=_nbs.NonBootStrings.l_OwaOptionPeoplePickerSearchBoxLabelTo_Text;_r.$6H.$Tz[_d.$a.toString(3)]=_nbs.NonBootStrings.l_OwaOptionPeoplePickerSearchBoxLabelFrom_Text;_r.$6H.$Tz[_d.$a.toString(4)]=_nbs.NonBootStrings.l_OwaOptionPeoplePickerSearchBoxLabelOwners_Text;_r.$6H.$Tz[_d.$a.toString(6)]=_nbs.NonBootStrings.l_OwaOptionPeoplePickerSearchBoxLabelGroupModerators_Text;_r.$6H.$Tz[_d.$a.toString(5)]=_nbs.NonBootStrings.l_OwaOptionPeoplePickerSearchBoxLabelMembers_Text;_r.$6H.$Tz[_d.$a.toString(7)]=_nbs.NonBootStrings.l_OwaOptionPeoplePickerSearchBoxLabelSenders_Text;_r.$6H.$Tz[_d.$a.toString(8)]=_nbs.NonBootStrings.l_OwaOptionPeoplePickerSearchBoxLabelAllowedSenders_Text;_r.$6H.$Tz[_d.$a.toString(9)]=_nbs.NonBootStrings.l_OwaOptionPeoplePickerSearchBoxLabelDefault_Text;_r.$6H.$Tz[_d.$a.toString(10)]=_nbs.NonBootStrings.l_OwaOptionPeoplePickerSearchBoxLabelDefault_Text;_r.$6H.$Tz[_d.$a.toString(11)]=_nbs.NonBootStrings.l_OwaOptionPeoplePickerSearchBoxLabelDefault_Text}return _r.$6H.$Tz};_r.$6H.prototype={$I:null,$1sT:null,$9M:null,$499:null,$2dM:!0,$5Ir:0,$71x:null,$3IZ:!1,$wd:function(n,t,i){return this.$7ib()},$1CS:function(n,t,i){return this.$7ib()},$AQl:function(n,t,i){this.$2x7(this.$1sT,i);var r=new _d.$166(this.$I,this.$1sT,this.$9M,n,t,this.$2dM,this.$3IZ);r.add_$2WR(this.$$d_$5FI);return r},$7ib:function(){var n=this.$499?_d.$Nz.$AVn(this.$499):new _js.$X;return this.$AQl(n,this.$71x,this.$5Ir)},$5FI:function(n){var i=new _js.$X;!this.$2dM&&n.get_$A()>1?i.$F(n.get_$E(0)):i=n;var r={};r.Properties=_d.$Nz.$EAA(i);var t=window.dialogArguments;if($C(t)){t=window.top.dialogArguments;$C(t)&&!$C(_ph.$6s.get_$2HN())&&(t=_ph.$6s.get_$2HN().dialogArguments);if(!$C(t)){t.value=JsonParser.serialize(r);$C(t.callback)||t.callback()}}else{t.value=JsonParser.serialize(r);window.close()}},$2x7:function(n,t){switch(t){case 3:case 9:n.$2x7(!1,!1,!0,!1);break;case 4:n.$2x7(!1,!0,!1,!1,!0);break;case 6:case 10:n.$2x7(!1,!0,!0,!1);break;case 5:case 7:case 8:n.$2x7(!1,!0,!1,!1);break;case 11:case 0:case 1:case 2:default:n.$2x7(!1,!1,!1,!1);break}},$E5O:function(){window.resizeTo(_r.$6H.$6rr,_r.$6H.$6rq);window.moveTo(window.screen.width/2-_r.$6H.$6rr/2,window.screen.height/2-_r.$6H.$6rq/2);var n=window.dialogArguments;if($C(n)){n=window.top.dialogArguments;$C(n)&&!$C(_ph.$6s.get_$2HN())&&(n=_ph.$6s.get_$2HN().dialogArguments);this.$3IZ=!$C(n)}if(!$C(n)){this.$499=JsonParser.deserialize(n.value);var t=JsonParser.deserialize(this.$499.Metadata);this.$5Ir=t.PickerCallerType;this.$71x=_r.$6H.get_$9Qh()[_d.$a.toString(this.$5Ir)];this.$2dM=t.AllowMultipleSelection}}};ApplicationViewModelsComponent.registerClass("ApplicationViewModelsComponent",null,_a.$1X7);_r.$NU.registerClass("_r.$NU",_a.$En);_r.BposDiagnosticsViewModelFactory.registerClass("_r.BposDiagnosticsViewModelFactory",null,_bc.$1Jj);_r.$wY.registerClass("_r.$wY",_a.$En,_c.$1Vb,IPrimarySpeechViewModel);_r.$1NE.registerClass("_r.$1NE",_ph.$16O);_r.$1At.registerClass("_r.$1At");_r.$1ET.registerClass("_r.$1ET");_r.$8x.registerClass("_r.$8x",_y.$1Lw,ITasksModuleViewModel);_r.$15s.registerClass("_r.$15s",null,_d.$u6);_r.$wD.registerClass("_r.$wD",_ph.$wC);_r.$6H.registerClass("_r.$6H",null,_bc.$1Jj);_r.$8x.$L=_a.$0.$1vX;_r.$6H.$6rr=1200;_r.$6H.$6rq=700;_r.$6H.$Tz=null;
window.scriptsLoaded['microsoft.exchange.clients.owa2.client.application.viewmodels.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['microsoft.exchange.clients.owa2.client.application.viewmodels.js'] = (new Date()).getTime(); } catch(e) { window.owaLastErrorReported = e; throw e; }