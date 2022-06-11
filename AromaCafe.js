(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"AromaCafe_atlas_1", frames: [[791,811,309,75],[0,811,789,61],[514,731,619,78],[514,514,775,215],[1539,825,400,57],[0,0,1024,281],[1914,711,45,70],[514,283,220,215],[1914,783,112,27],[1540,0,356,257],[0,874,400,57],[736,283,186,185],[1788,259,216,377],[1914,638,101,71],[1727,638,185,185],[1540,259,246,368],[402,874,302,64],[1026,0,512,512],[1102,884,400,57],[1291,514,246,368],[1539,629,186,185],[1135,731,128,129],[0,283,512,512]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_3 = function() {
	this.initialize(ss["AromaCafe_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["AromaCafe_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["AromaCafe_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.backgroundBestSeller = function() {
	this.initialize(ss["AromaCafe_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bestsellerbutton = function() {
	this.initialize(ss["AromaCafe_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bgVideo = function() {
	this.initialize(ss["AromaCafe_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bijikopi = function() {
	this.initialize(ss["AromaCafe_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.bijikopiKepotong = function() {
	this.initialize(ss["AromaCafe_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.BUYNOW = function() {
	this.initialize(ss["AromaCafe_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.cangkir = function() {
	this.initialize(ss["AromaCafe_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.eventbutton = function() {
	this.initialize(ss["AromaCafe_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.facebook = function() {
	this.initialize(ss["AromaCafe_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.gelaskopi = function() {
	this.initialize(ss["AromaCafe_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.iconbestseller = function() {
	this.initialize(ss["AromaCafe_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.insta = function() {
	this.initialize(ss["AromaCafe_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.leftKopiBG = function() {
	this.initialize(ss["AromaCafe_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.namaminuman = function() {
	this.initialize(ss["AromaCafe_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.playbutton = function() {
	this.initialize(ss["AromaCafe_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.promosbutton = function() {
	this.initialize(ss["AromaCafe_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.PromosBanner = function() {
	this.initialize(img.PromosBanner);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4407,1071);


(lib.rightKopiBG = function() {
	this.initialize(ss["AromaCafe_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.twitter = function() {
	this.initialize(ss["AromaCafe_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.uap = function() {
	this.initialize(ss["AromaCafe_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.UpcomingEvents = function() {
	this.initialize(img.UpcomingEvents);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4569,1065);


(lib.videopausebutton = function() {
	this.initialize(ss["AromaCafe_atlas_1"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.an_Video = function(options) {
	this.initialize();
	this._element = new $.an.Video(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.twitter_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.twitter();
	this.instance.setTransform(0,0,0.3764,0.3767);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70,69.7);


(lib.tweenintrouap = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.uap();
	this.instance.setTransform(-35.95,-36.3,0.5618,0.5629);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.9,-36.3,71.9,72.6);


(lib.tweenintrocangkir = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.cangkir();
	this.instance.setTransform(-100,-72.35,0.5618,0.5629);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-72.3,200,144.6);


(lib.tweenintrobgLogo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AvePdQmUmUgFo5IAAgQQAApDGZmbQDOjMD4hnQD2hmEiAAQJEAAGZGZQGbGbAAJDQAAJEmbGZQmZGbpEAAQpDAAmbmbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-140,280,280);


(lib.TweenIconBestSeller = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.iconbestseller();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TweenIconBestSeller, new cjs.Rectangle(0,0,101,71), null);


(lib.Tweenbijikopigerak = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bijikopi();
	this.instance.setTransform(-35.5,21.7,0.9999,0.9999,-88.6814);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.5,-23.3,71,46.6);


(lib.textsocial = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,154.5,37.5);


(lib.SpeakerText = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// TextMasking (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AiICJIAAkRIERAAIAAERg");
	var mask_graphics_1 = new cjs.Graphics().p("AidCJIAAkRIE7AAIAAERg");
	var mask_graphics_2 = new cjs.Graphics().p("AiyCJIAAkRIFlAAIAAERg");
	var mask_graphics_3 = new cjs.Graphics().p("AjHCJIAAkRIGPAAIAAERg");
	var mask_graphics_4 = new cjs.Graphics().p("AjcCJIAAkRIG5AAIAAERg");
	var mask_graphics_5 = new cjs.Graphics().p("AjxCJIAAkRIHjAAIAAERg");
	var mask_graphics_6 = new cjs.Graphics().p("AkGCJIAAkRIINAAIAAERg");
	var mask_graphics_7 = new cjs.Graphics().p("AkbCJIAAkRII3AAIAAERg");
	var mask_graphics_8 = new cjs.Graphics().p("AkwCJIAAkRIJhAAIAAERg");
	var mask_graphics_9 = new cjs.Graphics().p("AlFCJIAAkRIKLAAIAAERg");
	var mask_graphics_10 = new cjs.Graphics().p("AlaCJIAAkRIK1AAIAAERg");
	var mask_graphics_11 = new cjs.Graphics().p("AlvCJIAAkRILfAAIAAERg");
	var mask_graphics_12 = new cjs.Graphics().p("AmECJIAAkRIMJAAIAAERg");
	var mask_graphics_13 = new cjs.Graphics().p("AmZCJIAAkRIMzAAIAAERg");
	var mask_graphics_14 = new cjs.Graphics().p("AmuCJIAAkRINdAAIAAERg");
	var mask_graphics_15 = new cjs.Graphics().p("AnDCJIAAkRIOHAAIAAERg");
	var mask_graphics_16 = new cjs.Graphics().p("AnYCJIAAkRIOxAAIAAERg");
	var mask_graphics_17 = new cjs.Graphics().p("AntCJIAAkRIPbAAIAAERg");
	var mask_graphics_18 = new cjs.Graphics().p("AoCCJIAAkRIQFAAIAAERg");
	var mask_graphics_19 = new cjs.Graphics().p("AoXCJIAAkRIQvAAIAAERg");
	var mask_graphics_20 = new cjs.Graphics().p("AosCJIAAkRIRZAAIAAERg");
	var mask_graphics_21 = new cjs.Graphics().p("ApBCJIAAkRISDAAIAAERg");
	var mask_graphics_22 = new cjs.Graphics().p("ApWCJIAAkRIStAAIAAERg");
	var mask_graphics_23 = new cjs.Graphics().p("AprCJIAAkRITXAAIAAERg");
	var mask_graphics_24 = new cjs.Graphics().p("AqACJIAAkRIUBAAIAAERg");
	var mask_graphics_25 = new cjs.Graphics().p("AqVCJIAAkRIUrAAIAAERg");
	var mask_graphics_26 = new cjs.Graphics().p("AqqCJIAAkRIVVAAIAAERg");
	var mask_graphics_27 = new cjs.Graphics().p("Aq/CJIAAkRIV/AAIAAERg");
	var mask_graphics_28 = new cjs.Graphics().p("ArUCJIAAkRIWpAAIAAERg");
	var mask_graphics_29 = new cjs.Graphics().p("ArpCJIAAkRIXTAAIAAERg");
	var mask_graphics_30 = new cjs.Graphics().p("Ar+CJIAAkRIX9AAIAAERg");
	var mask_graphics_31 = new cjs.Graphics().p("AsTCJIAAkRIYnAAIAAERg");
	var mask_graphics_32 = new cjs.Graphics().p("AsoCJIAAkRIZRAAIAAERg");
	var mask_graphics_33 = new cjs.Graphics().p("As9CJIAAkRIZ7AAIAAERg");
	var mask_graphics_34 = new cjs.Graphics().p("AtSCJIAAkRIalAAIAAERg");
	var mask_graphics_35 = new cjs.Graphics().p("AtnCJIAAkRIbPAAIAAERg");
	var mask_graphics_36 = new cjs.Graphics().p("At8CJIAAkRIb5AAIAAERg");
	var mask_graphics_37 = new cjs.Graphics().p("AuRCJIAAkRIcjAAIAAERg");
	var mask_graphics_38 = new cjs.Graphics().p("AumCJIAAkRIdNAAIAAERg");
	var mask_graphics_39 = new cjs.Graphics().p("Au7CJIAAkRId3AAIAAERg");
	var mask_graphics_40 = new cjs.Graphics().p("AvQCJIAAkRIehAAIAAERg");
	var mask_graphics_41 = new cjs.Graphics().p("AvlCJIAAkRIfLAAIAAERg");
	var mask_graphics_42 = new cjs.Graphics().p("Av6CJIAAkRIf1AAIAAERg");
	var mask_graphics_43 = new cjs.Graphics().p("AwOCJIAAkRMAgeAAAIAAERg");
	var mask_graphics_44 = new cjs.Graphics().p("AwkCJIAAkRMAhJAAAIAAERg");
	var mask_graphics_45 = new cjs.Graphics().p("Aw4CJIAAkRMAhxAAAIAAERg");
	var mask_graphics_46 = new cjs.Graphics().p("AxOCJIAAkRMAidAAAIAAERg");
	var mask_graphics_47 = new cjs.Graphics().p("AxiCJIAAkRMAjFAAAIAAERg");
	var mask_graphics_48 = new cjs.Graphics().p("Ax3CJIAAkRMAjvAAAIAAERg");
	var mask_graphics_49 = new cjs.Graphics().p("AyMCJIAAkRMAkaAAAIAAERg");
	var mask_graphics_50 = new cjs.Graphics().p("AyhCJIAAkRMAlDAAAIAAERg");
	var mask_graphics_51 = new cjs.Graphics().p("Ay2CJIAAkRMAltAAAIAAERg");
	var mask_graphics_52 = new cjs.Graphics().p("AzLCJIAAkRMAmYAAAIAAERg");
	var mask_graphics_53 = new cjs.Graphics().p("AzgCJIAAkRMAnBAAAIAAERg");
	var mask_graphics_54 = new cjs.Graphics().p("Az1CJIAAkRMAnrAAAIAAERg");
	var mask_graphics_55 = new cjs.Graphics().p("A0KCJIAAkRMAoWAAAIAAERg");
	var mask_graphics_56 = new cjs.Graphics().p("A0fCJIAAkRMAo/AAAIAAERg");
	var mask_graphics_57 = new cjs.Graphics().p("A00CJIAAkRMAppAAAIAAERg");
	var mask_graphics_58 = new cjs.Graphics().p("A1JCJIAAkRMAqUAAAIAAERg");
	var mask_graphics_59 = new cjs.Graphics().p("A1eCJIAAkRMAq9AAAIAAERg");
	var mask_graphics_60 = new cjs.Graphics().p("A1zCJIAAkRMArnAAAIAAERg");
	var mask_graphics_61 = new cjs.Graphics().p("A2ICJIAAkRMAsSAAAIAAERg");
	var mask_graphics_62 = new cjs.Graphics().p("A2dCJIAAkRMAs7AAAIAAERg");
	var mask_graphics_63 = new cjs.Graphics().p("A2yCJIAAkRMAtlAAAIAAERg");
	var mask_graphics_64 = new cjs.Graphics().p("A3HCJIAAkRMAuQAAAIAAERg");
	var mask_graphics_65 = new cjs.Graphics().p("A3cCJIAAkRMAu5AAAIAAERg");
	var mask_graphics_66 = new cjs.Graphics().p("A3xCJIAAkRMAvjAAAIAAERg");
	var mask_graphics_67 = new cjs.Graphics().p("A4GCJIAAkRMAwOAAAIAAERg");
	var mask_graphics_68 = new cjs.Graphics().p("A4bCJIAAkRMAw3AAAIAAERg");
	var mask_graphics_69 = new cjs.Graphics().p("A4wCJIAAkRMAxhAAAIAAERg");
	var mask_graphics_70 = new cjs.Graphics().p("A5FCJIAAkRMAyMAAAIAAERg");
	var mask_graphics_71 = new cjs.Graphics().p("A5aCJIAAkRMAy1AAAIAAERg");
	var mask_graphics_72 = new cjs.Graphics().p("A5vCJIAAkRMAzfAAAIAAERg");
	var mask_graphics_73 = new cjs.Graphics().p("A6ECJIAAkRMA0KAAAIAAERg");
	var mask_graphics_74 = new cjs.Graphics().p("A6ZCJIAAkRMA0zAAAIAAERg");
	var mask_graphics_75 = new cjs.Graphics().p("A6uCJIAAkRMA1dAAAIAAERg");
	var mask_graphics_76 = new cjs.Graphics().p("A7DCJIAAkRMA2HAAAIAAERg");
	var mask_graphics_77 = new cjs.Graphics().p("A7YCJIAAkRMA2xAAAIAAERg");
	var mask_graphics_78 = new cjs.Graphics().p("A7tCJIAAkRMA3bAAAIAAERg");
	var mask_graphics_79 = new cjs.Graphics().p("A8CCJIAAkRMA4FAAAIAAERg");
	var mask_graphics_80 = new cjs.Graphics().p("A8XCJIAAkRMA4vAAAIAAERg");
	var mask_graphics_81 = new cjs.Graphics().p("A8sCJIAAkRMA5ZAAAIAAERg");
	var mask_graphics_82 = new cjs.Graphics().p("A9BCJIAAkRMA6DAAAIAAERg");
	var mask_graphics_83 = new cjs.Graphics().p("A9WCJIAAkRMA6tAAAIAAERg");
	var mask_graphics_84 = new cjs.Graphics().p("A9rCJIAAkRMA7XAAAIAAERg");
	var mask_graphics_85 = new cjs.Graphics().p("A+ACJIAAkRMA8BAAAIAAERg");
	var mask_graphics_86 = new cjs.Graphics().p("A+VCJIAAkRMA8rAAAIAAERg");
	var mask_graphics_87 = new cjs.Graphics().p("A+qCJIAAkRMA9VAAAIAAERg");
	var mask_graphics_88 = new cjs.Graphics().p("A+/CJIAAkRMA9/AAAIAAERg");
	var mask_graphics_89 = new cjs.Graphics().p("A/UCJIAAkRMA+pAAAIAAERg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-155.25,y:-501.3}).wait(1).to({graphics:mask_graphics_1,x:-153.15,y:-501.3}).wait(1).to({graphics:mask_graphics_2,x:-151.05,y:-501.3}).wait(1).to({graphics:mask_graphics_3,x:-148.95,y:-501.3}).wait(1).to({graphics:mask_graphics_4,x:-146.85,y:-501.3}).wait(1).to({graphics:mask_graphics_5,x:-144.75,y:-501.3}).wait(1).to({graphics:mask_graphics_6,x:-142.65,y:-501.3}).wait(1).to({graphics:mask_graphics_7,x:-140.55,y:-501.3}).wait(1).to({graphics:mask_graphics_8,x:-138.45,y:-501.3}).wait(1).to({graphics:mask_graphics_9,x:-136.35,y:-501.3}).wait(1).to({graphics:mask_graphics_10,x:-134.25,y:-501.3}).wait(1).to({graphics:mask_graphics_11,x:-132.15,y:-501.3}).wait(1).to({graphics:mask_graphics_12,x:-130.05,y:-501.3}).wait(1).to({graphics:mask_graphics_13,x:-127.95,y:-501.3}).wait(1).to({graphics:mask_graphics_14,x:-125.85,y:-501.3}).wait(1).to({graphics:mask_graphics_15,x:-123.775,y:-501.3}).wait(1).to({graphics:mask_graphics_16,x:-121.675,y:-501.3}).wait(1).to({graphics:mask_graphics_17,x:-119.575,y:-501.3}).wait(1).to({graphics:mask_graphics_18,x:-117.475,y:-501.3}).wait(1).to({graphics:mask_graphics_19,x:-115.375,y:-501.3}).wait(1).to({graphics:mask_graphics_20,x:-113.275,y:-501.3}).wait(1).to({graphics:mask_graphics_21,x:-111.175,y:-501.3}).wait(1).to({graphics:mask_graphics_22,x:-109.075,y:-501.3}).wait(1).to({graphics:mask_graphics_23,x:-106.975,y:-501.3}).wait(1).to({graphics:mask_graphics_24,x:-104.875,y:-501.3}).wait(1).to({graphics:mask_graphics_25,x:-102.775,y:-501.3}).wait(1).to({graphics:mask_graphics_26,x:-100.675,y:-501.3}).wait(1).to({graphics:mask_graphics_27,x:-98.575,y:-501.3}).wait(1).to({graphics:mask_graphics_28,x:-96.475,y:-501.3}).wait(1).to({graphics:mask_graphics_29,x:-94.375,y:-501.3}).wait(1).to({graphics:mask_graphics_30,x:-92.275,y:-501.3}).wait(1).to({graphics:mask_graphics_31,x:-90.175,y:-501.3}).wait(1).to({graphics:mask_graphics_32,x:-88.075,y:-501.3}).wait(1).to({graphics:mask_graphics_33,x:-85.975,y:-501.3}).wait(1).to({graphics:mask_graphics_34,x:-83.875,y:-501.3}).wait(1).to({graphics:mask_graphics_35,x:-81.775,y:-501.3}).wait(1).to({graphics:mask_graphics_36,x:-79.675,y:-501.3}).wait(1).to({graphics:mask_graphics_37,x:-77.575,y:-501.3}).wait(1).to({graphics:mask_graphics_38,x:-75.475,y:-501.3}).wait(1).to({graphics:mask_graphics_39,x:-73.375,y:-501.3}).wait(1).to({graphics:mask_graphics_40,x:-71.275,y:-501.3}).wait(1).to({graphics:mask_graphics_41,x:-69.175,y:-501.3}).wait(1).to({graphics:mask_graphics_42,x:-67.075,y:-501.3}).wait(1).to({graphics:mask_graphics_43,x:-65,y:-501.3}).wait(1).to({graphics:mask_graphics_44,x:-62.875,y:-501.3}).wait(1).to({graphics:mask_graphics_45,x:-60.8,y:-501.3}).wait(1).to({graphics:mask_graphics_46,x:-58.675,y:-501.3}).wait(1).to({graphics:mask_graphics_47,x:-56.6,y:-501.3}).wait(1).to({graphics:mask_graphics_48,x:-54.5,y:-501.3}).wait(1).to({graphics:mask_graphics_49,x:-52.4,y:-501.3}).wait(1).to({graphics:mask_graphics_50,x:-50.3,y:-501.3}).wait(1).to({graphics:mask_graphics_51,x:-48.2,y:-501.3}).wait(1).to({graphics:mask_graphics_52,x:-46.1,y:-501.3}).wait(1).to({graphics:mask_graphics_53,x:-44,y:-501.3}).wait(1).to({graphics:mask_graphics_54,x:-41.9,y:-501.3}).wait(1).to({graphics:mask_graphics_55,x:-39.8,y:-501.3}).wait(1).to({graphics:mask_graphics_56,x:-37.7,y:-501.3}).wait(1).to({graphics:mask_graphics_57,x:-35.6,y:-501.3}).wait(1).to({graphics:mask_graphics_58,x:-33.5,y:-501.3}).wait(1).to({graphics:mask_graphics_59,x:-31.4,y:-501.3}).wait(1).to({graphics:mask_graphics_60,x:-29.3,y:-501.3}).wait(1).to({graphics:mask_graphics_61,x:-27.2,y:-501.3}).wait(1).to({graphics:mask_graphics_62,x:-25.1,y:-501.3}).wait(1).to({graphics:mask_graphics_63,x:-23,y:-501.3}).wait(1).to({graphics:mask_graphics_64,x:-20.9,y:-501.3}).wait(1).to({graphics:mask_graphics_65,x:-18.8,y:-501.3}).wait(1).to({graphics:mask_graphics_66,x:-16.7,y:-501.3}).wait(1).to({graphics:mask_graphics_67,x:-14.6,y:-501.3}).wait(1).to({graphics:mask_graphics_68,x:-12.5,y:-501.3}).wait(1).to({graphics:mask_graphics_69,x:-10.4,y:-501.3}).wait(1).to({graphics:mask_graphics_70,x:-8.3,y:-501.3}).wait(1).to({graphics:mask_graphics_71,x:-6.2,y:-501.3}).wait(1).to({graphics:mask_graphics_72,x:-4.1,y:-501.3}).wait(1).to({graphics:mask_graphics_73,x:-2,y:-501.3}).wait(1).to({graphics:mask_graphics_74,x:0.1,y:-501.3}).wait(1).to({graphics:mask_graphics_75,x:2.175,y:-501.3}).wait(1).to({graphics:mask_graphics_76,x:4.275,y:-501.3}).wait(1).to({graphics:mask_graphics_77,x:6.375,y:-501.3}).wait(1).to({graphics:mask_graphics_78,x:8.475,y:-501.3}).wait(1).to({graphics:mask_graphics_79,x:10.575,y:-501.3}).wait(1).to({graphics:mask_graphics_80,x:12.675,y:-501.3}).wait(1).to({graphics:mask_graphics_81,x:14.775,y:-501.3}).wait(1).to({graphics:mask_graphics_82,x:16.875,y:-501.3}).wait(1).to({graphics:mask_graphics_83,x:18.975,y:-501.3}).wait(1).to({graphics:mask_graphics_84,x:21.075,y:-501.3}).wait(1).to({graphics:mask_graphics_85,x:23.175,y:-501.3}).wait(1).to({graphics:mask_graphics_86,x:25.275,y:-501.3}).wait(1).to({graphics:mask_graphics_87,x:27.375,y:-501.3}).wait(1).to({graphics:mask_graphics_88,x:29.475,y:-501.3}).wait(1).to({graphics:mask_graphics_89,x:31.575,y:-501.3}).wait(1));

	// text
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-168.95,-517.85,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168.9,-515,394.5,27.399999999999977);


(lib.RBGKopiMotion = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.rightKopiBG();
	this.instance.setTransform(0,0,1.5591,1.4098);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RBGKopiMotion, new cjs.Rectangle(0,0,383.6,518.8), null);


(lib.PromosButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.promosbutton();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,57);


(lib.playButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.playbutton();
	this.instance.setTransform(0,0,0.0837,0.0835);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.9,42.8);


(lib.pauseButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.videopausebutton();
	this.instance.setTransform(0,0,0.0836,0.0835);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.9,42.8);


(lib.NamaKopiBestSeller = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// TextMasking (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AnaPcIAA+3IO0AAIAAe3g");
	var mask_graphics_1 = new cjs.Graphics().p("AoXPcIAA+3IQuAAIAAe3g");
	var mask_graphics_2 = new cjs.Graphics().p("ApTPcIAA+3ISnAAIAAe3g");
	var mask_graphics_3 = new cjs.Graphics().p("AqQPcIAA+3IUhAAIAAe3g");
	var mask_graphics_4 = new cjs.Graphics().p("ArNPcIAA+3IWbAAIAAe3g");
	var mask_graphics_5 = new cjs.Graphics().p("AsKPcIAA+3IYVAAIAAe3g");
	var mask_graphics_6 = new cjs.Graphics().p("AtHPcIAA+3IaPAAIAAe3g");
	var mask_graphics_7 = new cjs.Graphics().p("AuEPcIAA+3IcJAAIAAe3g");
	var mask_graphics_8 = new cjs.Graphics().p("AvBPcIAA+3IeDAAIAAe3g");
	var mask_graphics_9 = new cjs.Graphics().p("Av+PcIAA+3If9AAIAAe3g");
	var mask_graphics_10 = new cjs.Graphics().p("Aw7PcIAA+3MAh3AAAIAAe3g");
	var mask_graphics_11 = new cjs.Graphics().p("Ax4PcIAA+3MAjxAAAIAAe3g");
	var mask_graphics_12 = new cjs.Graphics().p("Ay1PcIAA+3MAlrAAAIAAe3g");
	var mask_graphics_13 = new cjs.Graphics().p("AzyPcIAA+3MAnlAAAIAAe3g");
	var mask_graphics_14 = new cjs.Graphics().p("A0vPcIAA+3MApfAAAIAAe3g");
	var mask_graphics_15 = new cjs.Graphics().p("A1sPcIAA+3MArZAAAIAAe3g");
	var mask_graphics_16 = new cjs.Graphics().p("A2pPcIAA+3MAtTAAAIAAe3g");
	var mask_graphics_17 = new cjs.Graphics().p("A3lPcIAA+3MAvLAAAIAAe3g");
	var mask_graphics_18 = new cjs.Graphics().p("A4iPcIAA+3MAxFAAAIAAe3g");
	var mask_graphics_19 = new cjs.Graphics().p("A5fPcIAA+3MAy/AAAIAAe3g");
	var mask_graphics_20 = new cjs.Graphics().p("A6cPcIAA+3MA05AAAIAAe3g");
	var mask_graphics_21 = new cjs.Graphics().p("A7ZPcIAA+3MA2zAAAIAAe3g");
	var mask_graphics_22 = new cjs.Graphics().p("A8WPcIAA+3MA4tAAAIAAe3g");
	var mask_graphics_23 = new cjs.Graphics().p("A9TPcIAA+3MA6nAAAIAAe3g");
	var mask_graphics_24 = new cjs.Graphics().p("A+QPcIAA+3MA8hAAAIAAe3g");
	var mask_graphics_25 = new cjs.Graphics().p("A/NPcIAA+3MA+bAAAIAAe3g");
	var mask_graphics_26 = new cjs.Graphics().p("EggKAPcIAA+3MBAVAAAIAAe3g");
	var mask_graphics_27 = new cjs.Graphics().p("EghHAPcIAA+3MBCPAAAIAAe3g");
	var mask_graphics_28 = new cjs.Graphics().p("EgiEAPcIAA+3MBEJAAAIAAe3g");
	var mask_graphics_29 = new cjs.Graphics().p("EgjBAPcIAA+3MBGDAAAIAAe3g");
	var mask_graphics_30 = new cjs.Graphics().p("Egj+APcIAA+3MBH9AAAIAAe3g");
	var mask_graphics_31 = new cjs.Graphics().p("Egk7APcIAA+3MBJ3AAAIAAe3g");
	var mask_graphics_32 = new cjs.Graphics().p("Egl4APcIAA+3MBLxAAAIAAe3g");
	var mask_graphics_33 = new cjs.Graphics().p("Egm1APcIAA+3MBNrAAAIAAe3g");
	var mask_graphics_34 = new cjs.Graphics().p("EgnyAPcIAA+3MBPkAAAIAAe3g");
	var mask_graphics_35 = new cjs.Graphics().p("EgouAPcIAA+3MBReAAAIAAe3g");
	var mask_graphics_36 = new cjs.Graphics().p("EgpsAPcIAA+3MBTYAAAIAAe3g");
	var mask_graphics_37 = new cjs.Graphics().p("EgqoAPcIAA+3MBVRAAAIAAe3g");
	var mask_graphics_38 = new cjs.Graphics().p("EgrlAPcIAA+3MBXMAAAIAAe3g");
	var mask_graphics_39 = new cjs.Graphics().p("EgsiAPcIAA+3MBZFAAAIAAe3g");
	var mask_graphics_40 = new cjs.Graphics().p("EgtfAPcIAA+3MBa/AAAIAAe3g");
	var mask_graphics_41 = new cjs.Graphics().p("EgucAPcIAA+3MBc5AAAIAAe3g");
	var mask_graphics_42 = new cjs.Graphics().p("EgvZAPcIAA+3MBezAAAIAAe3g");
	var mask_graphics_43 = new cjs.Graphics().p("EgwWAPcIAA+3MBgtAAAIAAe3g");
	var mask_graphics_44 = new cjs.Graphics().p("EgxTAPcIAA+3MBinAAAIAAe3g");
	var mask_graphics_45 = new cjs.Graphics().p("EgyQAPcIAA+3MBkhAAAIAAe3g");
	var mask_graphics_46 = new cjs.Graphics().p("EgzNAPcIAA+3MBmbAAAIAAe3g");
	var mask_graphics_47 = new cjs.Graphics().p("Eg0KAPcIAA+3MBoVAAAIAAe3g");
	var mask_graphics_48 = new cjs.Graphics().p("Eg1HAPcIAA+3MBqPAAAIAAe3g");
	var mask_graphics_49 = new cjs.Graphics().p("Eg2EAPcIAA+3MBsJAAAIAAe3g");
	var mask_graphics_50 = new cjs.Graphics().p("Eg3BAPcIAA+3MBuDAAAIAAe3g");
	var mask_graphics_51 = new cjs.Graphics().p("Eg3+APcIAA+3MBv9AAAIAAe3g");
	var mask_graphics_52 = new cjs.Graphics().p("Eg47APcIAA+3MBx3AAAIAAe3g");
	var mask_graphics_53 = new cjs.Graphics().p("Eg54APcIAA+3MBzwAAAIAAe3g");
	var mask_graphics_54 = new cjs.Graphics().p("Eg61APcIAA+3MB1rAAAIAAe3g");
	var mask_graphics_55 = new cjs.Graphics().p("Eg7yAPcIAA+3MB3lAAAIAAe3g");
	var mask_graphics_56 = new cjs.Graphics().p("Eg8vAPcIAA+3MB5eAAAIAAe3g");
	var mask_graphics_57 = new cjs.Graphics().p("Eg9sAPcIAA+3MB7ZAAAIAAe3g");
	var mask_graphics_58 = new cjs.Graphics().p("Eg+oAPcIAA+3MB9RAAAIAAe3g");
	var mask_graphics_59 = new cjs.Graphics().p("Eg/lAPcIAA+3MB/LAAAIAAe3g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:47.45,y:98.825}).wait(1).to({graphics:mask_graphics_1,x:53.3,y:98.875}).wait(1).to({graphics:mask_graphics_2,x:59.175,y:98.875}).wait(1).to({graphics:mask_graphics_3,x:65.025,y:98.925}).wait(1).to({graphics:mask_graphics_4,x:70.925,y:98.925}).wait(1).to({graphics:mask_graphics_5,x:76.775,y:98.975}).wait(1).to({graphics:mask_graphics_6,x:82.625,y:98.975}).wait(1).to({graphics:mask_graphics_7,x:88.5,y:99.025}).wait(1).to({graphics:mask_graphics_8,x:94.35,y:99.025}).wait(1).to({graphics:mask_graphics_9,x:100.25,y:99.075}).wait(1).to({graphics:mask_graphics_10,x:106.1,y:99.075}).wait(1).to({graphics:mask_graphics_11,x:111.95,y:99.125}).wait(1).to({graphics:mask_graphics_12,x:117.825,y:99.175}).wait(1).to({graphics:mask_graphics_13,x:123.675,y:99.175}).wait(1).to({graphics:mask_graphics_14,x:129.575,y:99.225}).wait(1).to({graphics:mask_graphics_15,x:135.425,y:99.225}).wait(1).to({graphics:mask_graphics_16,x:141.3,y:99.275}).wait(1).to({graphics:mask_graphics_17,x:147.15,y:99.275}).wait(1).to({graphics:mask_graphics_18,x:153,y:99.325}).wait(1).to({graphics:mask_graphics_19,x:158.9,y:99.325}).wait(1).to({graphics:mask_graphics_20,x:164.75,y:99.375}).wait(1).to({graphics:mask_graphics_21,x:170.625,y:99.375}).wait(1).to({graphics:mask_graphics_22,x:176.475,y:99.425}).wait(1).to({graphics:mask_graphics_23,x:182.325,y:99.425}).wait(1).to({graphics:mask_graphics_24,x:188.225,y:99.475}).wait(1).to({graphics:mask_graphics_25,x:194.075,y:99.525}).wait(1).to({graphics:mask_graphics_26,x:199.95,y:99.525}).wait(1).to({graphics:mask_graphics_27,x:205.8,y:99.575}).wait(1).to({graphics:mask_graphics_28,x:211.65,y:99.575}).wait(1).to({graphics:mask_graphics_29,x:217.525,y:99.625}).wait(1).to({graphics:mask_graphics_30,x:223.4,y:99.625}).wait(1).to({graphics:mask_graphics_31,x:229.275,y:99.675}).wait(1).to({graphics:mask_graphics_32,x:235.125,y:99.675}).wait(1).to({graphics:mask_graphics_33,x:240.975,y:99.725}).wait(1).to({graphics:mask_graphics_34,x:246.85,y:99.725}).wait(1).to({graphics:mask_graphics_35,x:252.7,y:99.775}).wait(1).to({graphics:mask_graphics_36,x:258.6,y:99.825}).wait(1).to({graphics:mask_graphics_37,x:264.45,y:99.825}).wait(1).to({graphics:mask_graphics_38,x:270.3,y:99.875}).wait(1).to({graphics:mask_graphics_39,x:276.175,y:99.875}).wait(1).to({graphics:mask_graphics_40,x:282.025,y:99.925}).wait(1).to({graphics:mask_graphics_41,x:287.925,y:99.925}).wait(1).to({graphics:mask_graphics_42,x:293.775,y:99.975}).wait(1).to({graphics:mask_graphics_43,x:299.625,y:99.975}).wait(1).to({graphics:mask_graphics_44,x:305.5,y:100.025}).wait(1).to({graphics:mask_graphics_45,x:311.35,y:100.025}).wait(1).to({graphics:mask_graphics_46,x:317.25,y:100.075}).wait(1).to({graphics:mask_graphics_47,x:323.1,y:100.075}).wait(1).to({graphics:mask_graphics_48,x:328.975,y:100.125}).wait(1).to({graphics:mask_graphics_49,x:334.825,y:100.175}).wait(1).to({graphics:mask_graphics_50,x:340.675,y:100.175}).wait(1).to({graphics:mask_graphics_51,x:346.575,y:100.225}).wait(1).to({graphics:mask_graphics_52,x:352.425,y:100.225}).wait(1).to({graphics:mask_graphics_53,x:358.3,y:100.275}).wait(1).to({graphics:mask_graphics_54,x:364.15,y:100.275}).wait(1).to({graphics:mask_graphics_55,x:370,y:100.325}).wait(1).to({graphics:mask_graphics_56,x:375.9,y:100.325}).wait(1).to({graphics:mask_graphics_57,x:381.75,y:100.375}).wait(1).to({graphics:mask_graphics_58,x:387.625,y:100.375}).wait(1).to({graphics:mask_graphics_59,x:393.475,y:100.425}).wait(1));

	// Text
	this.instance = new lib.namaminuman();
	this.instance.setTransform(0,0,1.5975,1.5975);

	this.instance_1 = new lib.BUYNOW();
	this.instance_1.setTransform(0,132,2.1528,2.1528);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance}]},59).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,482.5,190.2);


(lib.LBGKopiMotion = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.leftKopiBG();
	this.instance.setTransform(0,0,1.5233,1.4347);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LBGKopiMotion, new cjs.Rectangle(0,0,374.8,528), null);


(lib.insta_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.insta();
	this.instance.setTransform(0,0,0.3784,0.3777);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70,69.9);


(lib.facebook_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.facebook();
	this.instance.setTransform(0,0,0.4301,0.4301);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,79.6);


(lib.EventsButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.eventbutton();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,57);


(lib.BgVIdeo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bgVideo();
	this.instance.setTransform(0,0,1.3671,1.3628);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1400,383);


(lib.BestSellerMinuman = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.gelaskopi();
	this.instance.setTransform(0,0,0.6572,0.6572);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,142,247.8);


(lib.BestSellerButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bestsellerbutton();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,57);


(lib.BestSellerBG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bijikopiKepotong();
	this.instance.setTransform(883,2,1.4136,1.3163);

	this.instance_1 = new lib.backgroundBestSeller();
	this.instance_1.setTransform(0,0,1.5445,1.3344);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1197,286.9);


(lib.BackButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ax2joMAjtAAAIAAHRMgjtAAAg");
	this.shape.setTransform(114.275,23.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ax2DpIAAnRMAjtAAAIAAHRg");
	this.shape_1.setTransform(114.275,23.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ax2DpIAAnRMAjtAAAIAAHRg");
	this.shape_2.setTransform(114.275,23.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#33FF00").s().p("Ax2DpIAAnRMAjtAAAIAAHRg");
	this.shape_3.setTransform(114.275,23.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,230.6,48.5);


(lib.___Camera___ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-701,-501,1402,1002);


(lib.videofadein = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.an_Video({'id': '', 'src':'videos/videoaromacafe.mp4', 'autoplay':true, 'controls':false, 'muted':true, 'loop':true, 'poster':'', 'preload':true, 'class':'video'});

	this.instance.setTransform(334.2,133.7,1.6711,0.8913,0,0,0,200,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,-0.4,670.0999999999999,268.29999999999995);


(lib.TweenGelasKopiGambar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.BestSellerMinuman = new lib.BestSellerMinuman("synched",0);
	this.BestSellerMinuman.name = "BestSellerMinuman";
	this.BestSellerMinuman.setTransform(27.05,-3.6,1,1,0,0,0,71,123.9);

	this.timeline.addTween(cjs.Tween.get(this.BestSellerMinuman).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.9,-127.5,141.9,247.8);


(lib.Scene_1_video = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// video
	this.instance = new lib.videofadein("synched",0);
	this.instance.setTransform(361.2,301.65,1,1,0,0,0,334.2,133.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(99).to({_off:false},0).to({x:361.25,alpha:1},5).wait(72));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_uap = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// uap
	this.instance = new lib.tweenintrouap("synched",0);
	this.instance.setTransform(65.5,-223.85,1,1,0,0,0,3.4,73.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[65.6,-223.7,66,-224.5,67,-225.3,69.2,-226.8,72.2,-227,107.1,-229.2,142.9,-221.5,177.4,-214,210,-197.9,241.2,-182.6,269.9,-159.8,297.2,-138.2,321.4,-110.7,359.9,-66.9,382.1,-17.3,406.1,36.3,407.9,90,409.1,125.6,400.3,166.7,393.3,199.5,378.4,241.3,399,219.2,434.1,209,461.5,201.1,500.3,200,536.9,199,573.3,202.3,595.3,204.2,609.8,208,629.4,213,642.9,222.8,659.6,234.9,672,257.5,679.8,271.9,690.2,300.4,696.8,318.7,699.7,328.4,704.4,344.1,705.8,357.1,706.8,366.4,706.6,378,706.5,385,705.6,399,703.2,437.8,700.9,476.7]}},58).to({guide:{path:[700.9,476.6,700.2,487.1,699.6,497.6]}},1).wait(25).to({startPosition:0},0).to({regX:3.3,regY:73.2,scaleX:0.3933,scaleY:0.3936,x:96.55,y:88.8},14).to({regX:3.6,regY:73.1,scaleX:0.35,scaleY:0.3503,x:53.5,y:59.6},1).wait(77));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_twit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// twit
	this.twitter = new lib.twitter_1();
	this.twitter.name = "twitter";
	this.twitter.setTransform(1171,368.8,0.7142,0.7067,0,0,0,36.4,36.5);
	this.twitter.alpha = 0;
	this.twitter._off = true;
	new cjs.ButtonHelper(this.twitter, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.twitter).wait(155).to({_off:false},0).to({alpha:1},9).wait(12));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_textSlogan = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// textSlogan
	this.instance = new lib.Tweenbijikopigerak("synched",0);
	this.instance.setTransform(1512.75,262.35);
	this.instance._off = true;

	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["AromaCafe_atlas_1"],6);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(-1,-0.023,0.023,-1,21.7,35.5)).s().p("AjoFYIAQq6IHBALIgQK6g")
	}.bind(this);
	this.shape.setTransform(1048,223.5);

	this.shape_1 = new cjs.Shape();
	var sprImg_shape_1 = cjs.SpriteSheetUtils.extractFrame(ss["AromaCafe_atlas_1"],6);
	sprImg_shape_1.onload = function(){
		this.shape_1.graphics.bf(sprImg_shape_1, null, new cjs.Matrix2D(-1,-0.023,0.023,-1,21.8,35.5)).s().p("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")
	}.bind(this);
	this.shape_1.setTransform(1047.9,223.5);

	this.shape_2 = new cjs.Shape();
	var sprImg_shape_2 = cjs.SpriteSheetUtils.extractFrame(ss["AromaCafe_atlas_1"],6);
	sprImg_shape_2.onload = function(){
		this.shape_2.graphics.bf(sprImg_shape_2, null, new cjs.Matrix2D(-1,-0.023,0.023,-1,21.9,35.5)).s().p("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gAhQk7IAAgDIAAAAIAAgBIAAgBIAAgBIgGAAIgHAAIgCABIAJAAIAAABIAAABIgKgBIAAABIAKAAIAAACIAGABIAAAAgACvk8IAMABIgDgBIgJAAgAgbk9IAJAAIAAAAIAAABIAGAAIAAgBIAAAAIAFAAIAFAAIACAAIgMgBIAAgBIAAAAIAAAAIAAgCIgGAAgACBk+IAFAAIAAABIAZABIAAgBIgTgBIgPAAIAEAAgAClk9IAKAAIgFAAIgCAAIgDAAgAAklBIAZABIAAABIATABIAjABIAAgBIAAgBIgYAAIgKAAIgKgBIgKAAIAAgBIgfAAIAGAAgAAsk9IAAgBIgMAAgAglk+IAFAAIgHgBIAAABIABAAIABAAgAgMlBIAYABIADgBIABAAIADAAIgbAAIgEAAgAjllBIAAgBIgCAAIgBAAIAAgCIAAgBIAAgCIgHACIgBAAIgDAAIABAAIgBAAIgTAEIABAAIABAAIADAAIAYAAIABAAIADAAgAgnlDIAFABIAMAAIAAAAIAEABIABAAIAAgBIACAAIACAAIgCAAIABAAIACgBIgGAAIAAABIgVgBgAhglDIAKAAIAAABIAGgBIABgBIgRAAgAgzlDIgIAAIgKAAgAgMlFIAAgBIgFAAIAAAAIgQAAIAQAAIAAABIgJAAIAJAAIAAAAIAFAAgAhWlFIAGAAIAAgCIgFAAIgBAAIAAACg")
	}.bind(this);
	this.shape_2.setTransform(1047.825,223.5);

	this.shape_3 = new cjs.Shape();
	var sprImg_shape_3 = cjs.SpriteSheetUtils.extractFrame(ss["AromaCafe_atlas_1"],6);
	sprImg_shape_3.onload = function(){
		this.shape_3.graphics.bf(sprImg_shape_3, null, new cjs.Matrix2D(-1,-0.023,0.023,-1,22.2,35.5)).s().p("ACSFHIAAAAIhEgBIgkgBIAAAAIgnAAIgaAAIAAADIh7gEIgGAAIgIAAIhNgDIjxgDIAfqDIASgCIDEAIIAAgIICCADIAAgDICbAEIAAgEIDvAFIAmABIAVABIBoACIAAABIASABIgBATIAGABIgEA3IAABhIABBEQACA3AAAzIADBtIgHCEIgEA4IgWAAIgMAAIAAAAIgLAAIAAAAIg6gBIAAABIgzgBIAAABIhEgBIg3gBIgBADIgsgBgABnFEIAAgBIhFgBIgGABIAKAAIAEAAIAAgBIA9ACgAAmFEIAAgBIgQAAIAQABgAgVFCIAVABIgVgBgADzFCIAAAAIAFAAIAAAAIAAgBIgFgBIAAACgAgVFAIAdABIAegBIAAgBIg7AAIAAABgAC/FBIAJgBIgIAAIAAAAIgBAAgABnFAIAFAAIAAAAIgFAAgAAmE/IAAAAIgMgBIAMABgABLE9IAVABIAHAAIAFABIAAgBIABgCgAC/E0IAAADIAAABIACAAIAAACIAVACIAdACIABgFIBEACIAAgBIADAAIAAgDIgDAAIAAgLIgUgBIAGhVQADg3ABg3IAAhNQAAgogBgpIAGhhIADhbIAAg3IgugBIABA+QABAzgBA0IgBAoIgEBzIgEB1IAABGIgHBjIgFAAIgeAAIgVAAIgCAAIAAAAgAAgE8IAHABIAAAAIgHABIAAAAIALAAIAAAAIgEgBIAEAAIAAAAIgEAAIAAgBgAi9E9IAXABIgNgBIgKAAgAgXE8IAAABIAAABIACAAIAAgCIAAgBIgCAAIAAABgAiPE9IAKAAIgIAAIgOgBIAMABgAFTE4IAAACIAAADIAbgBIAAgEIgDAAIAAgLIgXgBIgBAMgAigE0IAAADIAAABIAdACIBFACIAUAAIAAAAIAAgBIgWgBIABgDIgTgCIgkgBIAAgBIgIAAIAAABIgiAAIAAAAgABKE8IAjgBIAAgDIgEAAIgCAAIABgCIAFAAIAAAAIgFgBIAAAAIAFAAIAAgHIgWgBIAAAEIgWAAIAAgEIgHAAIAAAAIAAADIAAACIAuADIgRgBIAAAAIAAABIAAABIAQACIAAACIgRgBIgMADgAlpDHQgDA2gCA4IAAADIBZAEIAAgBIgXgCIAAgDIg8gBIAFjGIABgRQgEA1gDA0gAAgE4IAMAAIABgFIgGAAIAAgBIgHgBgAknE2IAAABIASABIAAgBIAAAAIgSgCIAAABgAB/E1IAAABIARABIAAAAIADAAIAAgBIAAgCIAdAAIAAgBIgGAAIgaAAIAAgEIgQgBgAgWEzIAAADIAAABIABAAIAAgBIAAgDIAAgBIABgEIgBAAIAAAAIgQgBIAAABIgzgBIAAgDIgHAAIAAACIAHABIAAAFIAZAAIAAACIABAAIAAACIASAAIgKgBIgIgBIAAgCgAmhAHQgHCVgECXIAGABIAAABIATABIAAgCIgTAAIAGjgIAHjSIAChNIgKDSgAjPE1IAPABIAEgBIAAgCIgTAAIAAACgAnREzIAUAAIARpXIAagEIABgSIABAAIAAgDIgugBgAAgEwIAHABIAAgBIgHAAgAhpkuIgBAHIAGAAIgSJQIACAAIASpQIAlAFIAAgKIgJAAIAAgCIAdAAIAIABIAAACIACAAIAJABIAAAJIAIABIAAgKIAEAAIABgDIAAAAIgNAAIgNgBIgCAAIgEAAIAAAAIgGAAIAAAAIgBAAIAAgBIgNgBIAAABIgJAAIAAgCIgZgBIgDAAIAAgCIAyAEIAAAAIABAAIAAgEIgNAAIAAgBIgJAAIAAgBIAJAAIAAgBIgJAAIAAAAIAAgBIgPgBIgEAAIgKAAIgGAAIAAAEIAFABIAAAEIgBABIgFAAgAjLAHQgGCOgECRIAGABIAGjTIAGjSIACg8IgKDBgAAlElIACAAIAGimIAGjNIAGjZIgFgBIAAgCIgCAAIAAACIACAAgAgTEBIABgSIAGigQAChMAAhLgADGktIAAABIABAAIAAACQAJC+gHC7IgGCgQAIh3AGh4QAGiLADieIAAgCIgTgBIAAgBIAAAAIgBAAgACdhBIgBAnIgCA2IAAACIABAkIAMltIgFAAIgFDqgAkBkwIATAAIgID/IgBAkIAGhZIACgVIAFi2IAFAAIAAgEIgEgBIgEAAIAAgBIgFAAIgDABIgjgBIAAAGIAFAAIASABgAi7kvIgCAzIABgaIACgZIgBAAIAAAAgAA+krIAAABIAVABIAEAAIAAgBIgEAAIAAAAIAEAAIAAgEIAAAAIgDgBIgVgBgAHFkpIABAAIAAgHIgBAAgAAZkpIAMgCIgMgBgAEIkrIAnABIAAgBIgngBIAAABgAi7kzIAAADIABAAIAfABIAPAAIAAAEIAEABIABgEIARAAIANgCIgMgBIgOgBIgJAAIAAAAIgugBIgBgBIAAABgAEIk1IAAACIAAABIBgAGIAAABIAVAAIAAgEIhHgCIAAgDIAAgBIgGAAIAAgCIAAgBIgFAAIhUgCIgQAAIAAACIBQADIgSAAIADAAgAFKksIANAAIgNgBgAE2ktIAAgBIgGAAIAAABIgGAAgAgWk1IAAAAIAAACIAAADIAAACIADAAIAKABIAAgCIAAgEIAAgCIAAAAIgJAAIAAgBIgPgBIAAACIAGAAIAFAAgABskwIAQAAIAZABIANABIAAAAIAFAAIAAgBIgSAAIgMgBIgNAAIgbgBIAJABIgNgBIAAAAIAAgCIgJgBIAAACIgJgBIgEABIAKABIADAAIAAAAIAWABIABgBIABABgAGSkwIAAgCIgHAAIgjgBgAAhkzIARAAIAAABIACAAIAAgBIgCAAIgRAAgABUk1IAAgCIAAgBIgDAAIgDABIAGAAIgGAAIgEACIAFAAIAFAAgAi6k3IAAgBIgBAAIAAABIABAAIAAAAgAiWk4IgPgBIALAAIgVgBIgKAAIgCAAIAAAAIACAAIgBABIgBAAIAAgBIgBABIgDABIAEAAIAAgBIABAAIAAAAIABAAIAUAAIALABIAEAAIAAAAgAADk5IAKABIAlgBIgjAAIghgBIAAAAIAAABIAFAAIAEAAIAMAAgAjtk5IACgBIgCAAIAAABgABMk7IAJABIAHgDIgEAAgAhYEtgAgZktIADAAIAAAAIgDAAgAgWktgABqkwgAhYk1IAJAAIgBAAg")
	}.bind(this);
	this.shape_3.setTransform(1047.475,223.5);

	this.shape_4 = new cjs.Shape();
	var sprImg_shape_4 = cjs.SpriteSheetUtils.extractFrame(ss["AromaCafe_atlas_1"],6);
	sprImg_shape_4.onload = function(){
		this.shape_4.graphics.bf(sprImg_shape_4, null, new cjs.Matrix2D(-1,-0.023,0.023,-1,22.1,35.5)).s().p("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")
	}.bind(this);
	this.shape_4.setTransform(1047.625,223.5);

	this.shape_5 = new cjs.Shape();
	var sprImg_shape_5 = cjs.SpriteSheetUtils.extractFrame(ss["AromaCafe_atlas_1"],6);
	sprImg_shape_5.onload = function(){
		this.shape_5.graphics.bf(sprImg_shape_5, null, new cjs.Matrix2D(-1,-0.023,0.023,-1,22.2,35.5)).s().p("ABfEzIgBACIhAgBIgGAAIgJAAIg5gCIgKgBIgWABIgCAAIgBACIgMgBIghABIg3gCIgLAAIAAAEIhzgEIhKgFIgBAAIkLAAIAopgIARgBIB/ADIB6APIAAgEIBEAEIANgHIAIgBIABgLIDYAFIABgEICcADIBcADIAMAAIAAgGIC7AEIBOABQA0ABA1ACIAJABIAUACIgBAUIAUABIgEDaIAAAkIgDA3IAAABIAHBkQgEA/gGA8IgFA0Ig5gBIAAABIgSAAIAAAAIhggCIAAACIhAgBIgVAAIgBABIhAgBIgugBIAAABIgXgCIgjAAIgfAAIgGAAIAAAEIhKgDgAEBEvIAAgBIgEAAIgwgBIAAgDIghgBIAAgBIgCAAIAAABIgBADIADAAIBVADgAAYEvIAAAAIgIAAIAIAAgAhjEvIgGgBIgCAAIgHAAIgNAAIAUAAIAIABIAAAAgAhzErIAfABIAAACIAIgBIAAgBIgIAAIAAgDgAFFEtIAAAAIgEAAIACAAIACAAgAikEsIAAgDIgFAAIgFAAIgLgBIAAABIgCAAIAAADIACAAIAVAAgADhErIAWAAIAKAAIAAgKIgfgCgAA5EpIAnABIAAgCIhIgBIAAgFIgbACIABgGIg4gBIgBAJIANABIArgDIAAACIAbABIAAAAIgFAAIgXAAIgIABIABAAIAKABIAZABIAIAAIAAgCIAZABgAh1EjIAAAAIAhAEIAJABIABgMIgJAAIABgUIAFiNIAHi7IAGjHIgWgBIgDA+IADAcQACAXAAAXQABAQAAAQIgBAoQgEA1gIA0IgFAhIgBAYIgFCdIAAAVIgKgBIAAAIgACrEaIAAACIgBALIACAAIABgLIAgABIgigEIAAABgAnFC4QgEAygCAzIAAAGIADABIA7ADIAvgHIgDAAIhggCIAFi0IABgYQgGAzgEAzgAEDEeIAIABIA6AGIAMABIABgGIAhAAIAAgCIAGABIAAgEIgGgBIABgTIgrgBIAHiAIADhCIgEBFQgDA/gEA+Ig7gBIgBARIgJAAIABgRIAChJIABgsIABgVIAGidIABgeIABgqIgCA9IgBAXQgHBCgFBFIgHCBIAAASIgBANIAAAFIAAAGIAJAAIAAACIAAAAIgUgBIAUACIAAgBgAlVEfIgBAAIgHABIAIABIAAABIAIAAIAXABIABgJQgQACgQADgAjNEZIAKAAIAAAFIAJAAIAAACIACAAIAUABIAAgEIgSgDIgCgBIgCAAIAAABIgJgBIAAgBIgKgCIAAADgAgCEdIAIABIASACIAJABIABgRIgJAAIAAgFIAGiQIAHi7IAGjHIgHAAIAAgDIABgFIAAgHIAAgBIAAgBIgPgBIAAgFIgtACIgFABIgHAAIAMAAIAAACIgLAAIgDAAIgVIhIAPABIAAAGIAjAAIABgFIgkgBIALmQIAHiEIALABIAAgCIAAgFIAkABIAAAFIAAADIgKDbIAAAYIgGChIABAOIgDAuIgCBCIAAAGIgEAAIgBANgAj+EgIABAAIAAgKIAAAAgAGhEcIAAAEIAnAAIABgDIAGAAIACgUIgugBIgCAUgAomADQgJCKgECOIAKAAIAAADIAgACIABgEIghgBIAGjNIAIjCIAGhqQgKBvgHBygABOEZIANABIAAAEIAGABIABgFIAAgCIAAgGIgHAAIAAgCIgDAAIAAABIAAABIgKgBIAAAIgAjNEdIAAgEIAAAAIAAAEgAC4kCIgVIWIAKAAIAAADIAgADIATokIgTgBIgIAAIgOgBIABAKgApbklIgWI+IAiABIATooIAqgIIABgKIABAAIABgFgAjPkOIALABIABAQIAJABIANABIgCAWQgKBygIB2QgIB/gDCDIAUABIADgZIAHieQAIiigHinIAAgBIAAAAIABgHIABgLIATABIAAgDIgTAAIAAgCIAAAAIgBAAIgYgDIAAADIgNgBIAAAEIABAAIABAAgAEmkPIA0ACIAAABIAAACQABBTgCBCIgBAwIADhQIABhsIAAgJIAAgCIAAgJIAAgBIgNAAIgagBIgOgBIAAAAIAAAAIgOAAIgCAAIghgBIgBAAIgBAIIAjACIAAACIADAAIAAgCIAMAAgABukOIgDCpIAIhFIAEhrIgLgBIgTgCIAAAKIATAAIABAAIABAAgADzkJIAiACIgCBWIAEhaIgjgBgAjxkUIAAAEIAAACIgBAIIANACIAAgPIgKgBIgBAAIgBAAgAj7kIIABgPIgGgBIAAADIgigCIgBAHIgKgCIgSAAIAAACIACAAIAaABIAAgBgAhVkNIAaAAIAAgFIgaAAIAAAFgACFkTIAVACIAHgCIgjgBIAHABgAjBkhIgFACIAbABIgBAIIABAAIABgIIAAgBIAAgBIAAgBIgLAAIgMAAgAjvkXIAAgEIgBAAIgBAEIABAAIABAAgAFJkaIAHABIAFAAIAHABIAAgBIAAgCIAAgDIAAgEIhQgDIgEACIAhAEIgRgBIAAACIABAAIAAADIgCAAIAAABIACAAIAAgBIAOABIAAgEgAj/kdIgRAAIARABIAAAAIAEAAIgEAAIAAgBIAFAAIAAgDIgFAAIAAADIAAAAgABtkeIgBACIALAAIAAgCIABgCIgLAAIAAACg")
	}.bind(this);
	this.shape_5.setTransform(1047.525,223.475);

	this.shape_6 = new cjs.Shape();
	var sprImg_shape_6 = cjs.SpriteSheetUtils.extractFrame(ss["AromaCafe_atlas_1"],6);
	sprImg_shape_6.onload = function(){
		this.shape_6.graphics.bf(sprImg_shape_6, null, new cjs.Matrix2D(-1,-0.023,0.023,-1,22.2,35.5)).s().p("ACYEsIhTgDIAAADIg+gBQgsgBgsgCIgoABIgQABIgcABIg9gDIgbABIgRAAIAAAEQg3gCg4gDIhLgFIgBAAIg9AEIhTgCIgOABIhygCIAtpNIAQgCIB8ADICOAUIAhADIAFAAIAAgJIBFAEIAGgBIAOgHIASgCIABgMIDkAFIAfAAIAAgEICZADIBZADQAkABAjADIABgKIC3AEIBLAAIBvAFIATACIgCAYIAZABIgDDRIgBAiIgDA0IABAEIAHBfQgEA9gGA6IgGAyIg+gBIgGAAIAAABIgVgBIAAABIh0gDIAAADIg+gBIgpgBIAAACIg/gBIg/gCIgGAAIAAABIgNgBIgbAAIgvgBIgcABIAAAEIgGgBgADwEjIANABIALAAIAAgEIAHABIgHgBIgXgCgACiEkIAAgDIASABIAEAAIAAgGIgWABIgCAAIgBABIAAACIADAAIAAABIgDAAIAAADIABAAIACAAgAkKEkIAAgDIAmABIA1ABIAUgBIgQgCIgJgBIgNgBIgjgEIAAADIgmgBIgCAAIgBAFIAAADIABAAIACAAgABHEeIgBADIAOAAIAegBIgpgCIgBAAIgBAAgAi9ESIAnADIgBAMIAKgBIgEAAIAAgIIAAAAIALABIABgLIgLAAIABgYIAGh9QAEhZADhZIAGi+IgHgBIAAgGIgggBIgCAAIgtgBIgUAAIgFAAIgMgBIgGAAIAAAAIgFgBIAAgCIgHgBIAAADIgRgBIAAACIAAACIABAOIAdAHIgBgUIA1ADIAjACIABAAIAhABIgTIGIgngBIAAAFgAgZEdIAKAAIAAABIAJAAIACAAIAAgDIAAgBIABgFIgHABIAAgFIAHAAIADgYIgFAAIAKl+IAIh1IANAAIgNgBIABgGIAeABIAPAAIAAAHIALAAIAAgHIAPABIAAAiIgECnIgBAiIgCA4IACAfIAPlCIAVAAIAAgHIgOAAIgHAAIAAAHIgHAAIAAgHIAAgBIABgFIgSgCIgLgBIAAAGIgugDIgDAAIgIAAIgEgBIgWIGIAKAAIgBAYIAAAFIAAAEIgKAAgAnyCxQgFAvgBAxIgBAHIASADIAaABIAzgIIhTgDQAChVADhUIABgXQgHAvgEAxgAheEYIADABIAYABIATACIABgDIgCAAIACAAIABgJIADgYIgngBIgBAYIgLAAIAAAJgAlfAvIgFAfIgBAaQgEBRgCBTIAAAJIAAACIAMABIAEgWIAFhTIAEjaQgEAsgJAugAAlEBIgBAQIACAAIALACIAXADIABgLIACgJIgJAAIAAgHIgdgBIAAAHgAkLEVIACAAIAAgKIAPABIgKgCIgFgBIAAACIgBAAIgBAKgApoACQgKCEgECIIANABIAAADIAmADIAAgGIgmAAIAFjEQAEhdAFhdIAHhtIADgcIACgVIAAAAIABgFIAAgHIhbABIgXIlIAoABIAUoRIAzgJIgDAwQgMBsgIBygACLENIAWABIAAAGIACAAIAAgGIAWAAIAAgCIgigBIABgHIgNAAIAAAJgAGtERIBKACIABgFIhLgBIAAAEgAFPj9IAhABIAAACQABBOgCA/QAAA4gDA1IAAABQgGA0gFA2QgGBEgCBFIAAAUIAAAHIADAAIAAACIAAAAIA1ACIAAgDIAIAAIAAgEIgHAAIABgXIgmgBIgCAXIgGAAIABgXIAJkIIAAgHIAAAFIAAgVIAKjPIAAgCIABgMIAAAAIgegEIgLgBgAEJERIAAgBIgPgBgADxELIAkAEIABgJIgMAAIAGiNQAEhZADhZIAGi+IgWgCgACiEFIACAAIAAgBIgCAAIAAABgACVj+IAXABIgKDSIAAATIAJhIIAHgwQAAg2gDg3IAPABIABgGIgSgCIAAAAIASAAIABgLIAAgBIAJABIAcABIAAgDIgUgBIgGAAIgdgBIAAACIgQAAIAAABIAAAKIAPACIgPgBIgBACIgNgBIAAAGIADAAIACAAgAiri4IgBAGIABAUIAEhBgAlckBIAZAGIAAgNIgMgCIAAADIgNgBgAhAj7IAEAAIAAgBIgEAAIAAABgAijkQIgBALIABABIACgMIAAgCIgCAAIAAACgAGikHIACABIAAgBIgBAAIgBAAgAFkkYIAPABIAAAFIAAAFIAAAAIAHABIAAAEIAFAAIAAgDIgFgBIAAgBIAAgEIAFAAIAAgCIAAgGIgYAAgAG9kKIAEABIgEgBIgHgBIAHABgAhUkNIAHAAIANgCIgngCIATAEgAkIkPIAGgBIABgFIgBACIgGAAIAAAEgAoikaIAkACIAAgCIgCAAgAAKj6IAAgBIADAAIAAABg")
	}.bind(this);
	this.shape_6.setTransform(1047.5,223.475);

	this.shape_7 = new cjs.Shape();
	var sprImg_shape_7 = cjs.SpriteSheetUtils.extractFrame(ss["AromaCafe_atlas_1"],6);
	sprImg_shape_7.onload = function(){
		this.shape_7.graphics.bf(sprImg_shape_7, null, new cjs.Matrix2D(-1,-0.023,0.023,-1,22.2,35.6)).s().p("AAsEfIgBAEIg7AAIgGAAIgygCIgpgDIgBAAIgqACIgGAAQgXACgXAAQgjgBgigCIgfABIgsABIAAADQg2gCg1gDIhJgGIhAAFIhhgBIgKABIhtgCIAyo8IAPgCIB4ADIBgARIAaADIAXAEIAjADIABAAIAwgCIAIgBIAAgGIA9AEIAEAAIAZgFIAIgEIAbgEIABgNIDlAFQAcAAAbAAIARABIABgFICVADIBWADQAkABAiADIAdADIAggFIAAgIIC8AFQAggBAhAAQA2ACA2ADIARACIgBAcIAdACIgDDHIgBAgIgDA3IAAABIAKBbQgFA7gHA3IgHAwIg8AAIgSAAIAAAAIgaAAIAAAAIiHgDIAAADIg9AAIg7gCIAAACIg8AAIhHgDIgXABIAAAAIgKAAIgMgBIhCgBIgYABIgVABIgBADQg0gBgzgEgACZD0IgCALIBmADIgBAaIAeAAIACgKIgNgCIABgOIAAgCIg5gCIAAgHIAAgBIg9gCIAAgBIgBAAIAAABgAhNEaIAWAAIAAgDgAlXEWIByAEIAWAAIAAgFIAJABIABAAIgKgBIAAAAIgWgBIgIAAIhqgFIgFgBIgCAAIgBAIIADAAIAAAAIAFAAgACXEaIAAgEIBDACIgsgFIgWAAIAAgBIgDABIAAAAIhngCIABgFIAEgZIAAgBIgLAAIABgJIgPAAIgBAlIgQACIAlACIgBAEIAnACIAggDIAhABIAAAEIABgBIABABgAgqERIAAgEIgMAAIAAgCIAAgIIACgcIAGhvIAFhkIgGAaIgGAeIgBAZIgFCCIAAAcIgNAAIAAAKIAAABIAMACIAGABIAAAAIAMAAgAogCpQgGAtgBAvIANAAIAAAHIAgACIAigHIhCgCQAChQAEhQIABgaQgJAvgEAvgAjAEHIA2AGIAAgLIg1gCgAqrAAQgLB+gDCEIAAAEIA6AHIABgKIgtgBQAChcAEheIAJiyIAIhtQgNBpgKBugAFAECIA6AJIAUn1Ig4gBgAHwEEIA2ABIAAgFIg2gBIAAAFgAGXEFIAXAAIAAgCIgXgBgAr4kMIgYIMIAwABIAUn5IA7gLIABgCIACAAIABgJgABfD+IATABIABgMIgUAAIAAALgAD9D4IATADIABgEIAGh/IAIiqIAGi1IgVgBgAGrj6IAAAAIAYAEIAAAKIgDC6IgBAgIgEA1IABACIAGA1QAGg8AJg5IAAgOIAKjCIABgHIAAgFIAVADIABgJIAAgEIgWABIAAADIAAAGIgwgHgAAvjwIgKCAIABAKIADAdIADAcQAFAsADAkIAAACIADAaIAQkvIAtABIgKDGIgBATIAMhHQAKg8AHg2IADggIABgGIAFAAIAAAGIAWABIACAAQACA2ABA3IABgNIAAhnIgNgBIgpgBIAAgFIgtgEIgBAGIgUgCIgSgBIgDAAIgagBIgVgCIgJAAIAAADIgUgBIACATIAAAAIABADIAHABIgDAvIAEAaIAAADIADhMIgEAAIAAgEIAMAAIAAAAIgBgHIA2ABIADAAIAPABgAiyj2IABAHIADAmQAEAqgBAtIAMhmIACgWIABAAIAAgEIACgQIAAgDIgCAAIAAADIgXgBIABANgAoKjjIADAfIABAOIAEg8IBTACIAAgKIgGgBIg7gDIgdgCgADLjsIASABIAIAAIACAaIACAYIADgyIAVACIAAgGIABgFIABgNIAAgCIAKACIAeABIAAgEIghgBIgdgBIAAAEIgKAAIgYgBIAAALIAPADIgPAAgAk5juIAFAAIgBAYIAhABIACgXIARABIADAAIABgFIgIAAIgFAAIgIAAIgigBIgQAAIAAgDIgugGIAAAFIABAGIABAJIAoALIADgUIAMABgAFXj0IAXADIAXACIAAACIAJAAIABgPIgHAAIgPgBIgigBgAmejwIAMAAIgOgEIAAAEIABAAIABAAgAIlj6IAFABIgEgBIgGgBIAFABgAFrkAIAkABIAAgLIgHgBIAAAKIgtgBgAm8kCIANABIAAgCIgBAAIgMABgAB1kCIAbgCIALAAIgJgBIgCAAIgagBIgBAEg")
	}.bind(this);
	this.shape_7.setTransform(1047.525,223.45);

	this.shape_8 = new cjs.Shape();
	var sprImg_shape_8 = cjs.SpriteSheetUtils.extractFrame(ss["AromaCafe_atlas_1"],6);
	sprImg_shape_8.onload = function(){
		this.shape_8.graphics.bf(sprImg_shape_8, null, new cjs.Matrix2D(-1,-0.023,0.023,-1,22.2,35.6)).s().p("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")
	}.bind(this);
	this.shape_8.setTransform(1047.5,223.45);

	this.shape_9 = new cjs.Shape();
	var sprImg_shape_9 = cjs.SpriteSheetUtils.extractFrame(ss["AromaCafe_atlas_1"],6);
	sprImg_shape_9.onload = function(){
		this.shape_9.graphics.bf(sprImg_shape_9, null, new cjs.Matrix2D(-1,-0.023,0.023,-1,22.2,35.6)).s().p("AAcEMIgHAAIgFAAIgWAAIgBAFQgcABgcgBIg6gDIAAABIgHgBIgigDIgRAAIgsADIglABQgRABgQAAQgrAAgogFIgrADQgeACgfgBIgkgCIgBAFQgxgCgxgEIg+gGIgOAFIgrgBIgSACIh0gCIgIABIhogBIA8oXIAOgCIBxACIBvAbIAUABIADgHQAeAAAXAFIAVAFIAogBIABAHQAigFAlgCIAggDIAAgDIAdACIAcAAQARgFAPgDQAQgCANAAQAWgFAVgDIABgMIDmAFQAZgBAbABQAyABAzAEIAEABIACgJICMACIBRADQAiABAgADQAeAEAcAFIABATIAugIIABgOIBNgMIAAgDICxAEQAfgCAhABQAzABAyAEIAQADIgDAjIAmADIgCCzIgBAeIgEAzIABADIAOBSQgGA3gJAzIgIAsQgcABgdgBIgsgCIAAACIghgBIAAABIiugEIAAAEQgcABgdgBQgsgBgqgEIgKAAIgBAFQgcABgdgBQglgBgjgDQgbACgcgBIgOAAIAAABIgGgBIhMgBIgUABQgfACgegBIgJAAIAAADQgygCgwgEgAEdEFIAAgBIAAgFIARABIAIgmIgIgCIhygCQAEh8AGh4IABgIIALipIASACIgBgMIgDgSIAAgEQgxABgxAEIgBALIgIgBIgBAGIgOgBIAAALIACAAIAMAAIAGAAIgNB+IgMFNIAgABIAAACIAAACIgGgBIgCAAIgtgDIAAAHIAMAAIAoABIADAAIABgEQBDADBWACgAl4EDIAuACIABgIIgvgDgAn/EEIAAgGIARABIBAADQgqgJglgMIgCARIgCAAIgBAGIABAAIACAAgAmVjPIAkADIAJABIA2AEIgGCjIgDA9IgFBbIgIB6IASAEIgDAMIAPABIBEADIABAAIgMgCIhFgOIADgOIgIAAQAEiEAHiAIAAgGIALilIACAUQAEAhAAAkIAAAEIAGh9IAAAAIAAgEIgRABIAEAeIgUAAIgtgBIgugBIAAADgAgdD8IAJABIARABIgQgDgAgcD5IAJACIASgDIAAgBIgKAAIABgwIAKiZIgEAUIgBAeIgFBnIgDAjIgPAAIAAAPgAsvgCQgNBygDB5IAAAGIBFALIAGAAIABgPIg6gBQAChUAEhUQAEhSAGhPIAKhqQgRBfgLBogAizDnIgBAJIAnAHIABAAIAHABIAAAAIgHgBIAagFIACgKIgUAAIADgkIAFhQQAFhMADhMIAGijIghgCIAAgCIAAACQgRBegMBpIgHBNIAOA5IgCATIgBAsIgEAAIgHAkgApxBdQgHAegEAfQgGAogBArIAJABIAAgGIAIggIAFhoIABgdIgFAagAJ2DqIAOAAIADgpIADAAIgBAjIAKAAIAFgiIgOgBIADhTIgGBTIgPAAIgCApgAHcDqIAOAAIAAgDIgOAAgAGHDoIArABIABgDQAEgZAEgaQAFgtABguQABghgEgfQgDghgGgfQAJgmAFgoQAFglABgmIAAgJIgugCIgUGuIgxgKIAAABIgSAAIgBAAIAAAEIASADIAAAEIAyABgAuUj0IgbHbIA9ABIAWnLIBQgOIABgGIApABIgigDgAKRAdIgEBRIAKh7IAAgeIAAgDIABgGIgBAGIABgwIAKiNIAZAAIAdABIAAgDIgKgCQg2ACg2AFIgBAGIA4AEIgBCAIgDA4IgBAFIgCAKIACgJIgDA9gAgBARIACAXIAEg1IABgeIABhPIgICLgAABjfIAHABIAAAtIAAABIACANIAEgvIAJAAIABgQIgTgBIgFgBgAodjRIAbABIAxAUIAAgUIgbAAIAAgGIgwgFIgCAAIABAKgADsjNIAJABIAkADIgBgPIgqgBIgCAMgAFsjVIAAAIIAaABIABgIIACgRIgbgBIAAgFIAZAAIANABIg1gLIgdAAIAAANIgFAAIADARIADAAIApACgAGjjjIASAAIAAAFIANAEIAHABIAAgJIgBgDIgZgBgAIAjdIAAgBIgKgBgAhUjjIAbABIAcABIAAgFIgfgCgAqajnIAAACIAcACIAQABIAIAAIAAAAIgegHIgWACgAqkjmIABAAIgCAAgAiKjmIABgFIgDAAIAAAFIABAAIABAAgAG1jpIAAACIAOgCIgOgDIAAADgACED8IADgfIACgIIAzABIgBAOIALAAIgBAPIA3AMgAGHDlIAAgDIARAEgAGHDlgAC8DWg")
	}.bind(this);
	this.shape_9.setTransform(1047.525,223.45);

	this.shape_10 = new cjs.Shape();
	var sprImg_shape_10 = cjs.SpriteSheetUtils.extractFrame(ss["AromaCafe_atlas_1"],6);
	sprImg_shape_10.onload = function(){
		this.shape_10.graphics.bf(sprImg_shape_10, null, new cjs.Matrix2D(-1,-0.023,0.023,-1,22.2,35.6)).s().p("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")
	}.bind(this);
	this.shape_10.setTransform(1047.525,223.45);

	this.shape_11 = new cjs.Shape();
	var sprImg_shape_11 = cjs.SpriteSheetUtils.extractFrame(ss["AromaCafe_atlas_1"],6);
	sprImg_shape_11.onload = function(){
		this.shape_11.graphics.bf(sprImg_shape_11, null, new cjs.Matrix2D(-1,-0.023,0.023,-1,22.2,35.6)).s().p("AARD6IhJgBIgCAGQgaABgbgBQgsgBgpgFIgBAEIgUgFIgOAAIABgEQgdAFgfACQgdADgcgBIgCAAIgeACQgegBgbgDIgBACIgSgEIgUgEQgbAEgcACQgcADgcgBQgqgBgmgGIgNgDIgDANQgtgCgtgEIgggEIgHADIg/gBIAAgEIgiAGIh5gCIAAgDIgVAFIhhgCIBFnyIAOgDIBpACIBZAcQA0AEAxAGIAEAAIAHgMQAcABAWAGQAUAFAPAIIAIAEQAngKAsgFQArgEAvAAIAAgBIAKABIAIABIAaAAQAOgGAMgDQANgFAJABQANAAAOAHIAEABIAIgGQAbgKAcgDIALgCIAAgKIDnAFQAYgBAaAAQAuABAwAFIAMADIgCAjIAJADQAigHAlgFIADAAIABgOIAHgXICEACIBLADQAgABAeAEQAbAEAaAGIABAMIACAAIAzAOIACAAIBZgNIAMADIACgWIBWgNIAIADIAAgEICoAEQAdgCAgAAQAvABAwAFIANADIgDArIAuADIgBCgIAAAbIgGAzIABACIASBJQgHA0gKAuIgKAoQgbABgagBQgkgBgigDIAAADIgpgBIAAABIjTgEIgBAFQgaABgbgBQgqgBgogEIg0gBIgBAGQgaABgbgBQgogBgmgEQgeADgggBIgxgBIAAACIgJgCIhBgBIgUABQgcADgcgBQgeAAgdgEIgBAHQgtgCgrgEgAnBipIgDAZIAFAQQAGAPACASQADANgBANIgCAhQgFAlgQAmIgJAWQgNAmgGApQgJApAAAuQAVAHAXAGIATAEIAUhBQgCgbABgbQABgpADgyQAFgzACgnIABghQAAgogGglIgCgMIglAAIgBAJgADKjaIAAACIgdADIgdG+IAJABQA/AEBSACIABgHIiCgCIAAgGIAWgDIADgnIgPAAIALkuIAHg5IAcAAIAsADIAhAEIgLCEQgOAzgJA7QgIA3gCA4IgCAdIACAAQAUAHAWAGIgBAHIAVABIAPgwIgggBIAGhIQAGhDADhEIAGh1IAIgfIAEgQIACgJIgDgNIgCgJQgbgCgcAAIgTgBQgdAAgcACgABvDwIAAgEIATgEIgSgBIADgTQAUhTANhfQAOhgAChzIgTAAIgKAAIAAgIIgugHIgBAHIgDAHIAyABQAFCCgLB9QgGBFgIBBIgFARIAAACIgBAFIgBAEIACgBIABABgAqiDwIABgLIACgRIgEAQIAAABIgDALIACgBIACABgAjVDjIAZgFIAFgRIgcAAIgCAWgAicDOIgBAIIAAABIBGAKIABgSIgogBIACgsIgfAAIgBAsgAu0gFQgPBlgCBwIAWABIgBAGIBIAKIABgOIhIgCQAChLAEhKQAFhKAGhHIANhqQgVBXgOBjgAIQDPIAWAAIAAgDIgVgBgAwxjbIgeGoIBMACIAWmdIBhgOIACAAIAAgCIgngFgAG6itIAiABQADA5gBAwIgBAqIAAACQgEA3gGA2QgEAzgIAzIABAAIgCAOIAAADIAeABIAAgEIACgGIgSgEQAEh0AHhvIAAgBIALiIIADgdIAMABIAAgHIgYgHIAAAMIgogCgANMDKIB4ACIADgqIh6gCIgBAqgAjfhfIALAqIgNDVIASAAIAEgvQAGhDADhEIAGiRIgegDgALrAQIAHAaIAEgzIABgbQAChRgBhPIgGAAgAIeg0QAEAVAFASQAJAfAFAXIAFgyIAAgbQAChOAAhMIAAgGIgTgBIgDAAgAhIgzQADAVAGARIANA2IAGgyIAAgbQAChRgBhPIgVgBgAk/iIIABAhIAGhJIANAAIACggIgLAAIgEAgIgFAAIgCAogAq7iyQABAKAEAMIADAMIAEgiIAkAAIAAgHIgzgHgAh+i/IgFATIACAAIACgSIABgDIAAACgAh8jJIAYABIALABIAAgIIghgBIgCAAIgBAHIAAAAIABAAgAsujLIAFAAIgFgCg")
	}.bind(this);
	this.shape_11.setTransform(1047.55,223.45);

	this.shape_12 = new cjs.Shape();
	var sprImg_shape_12 = cjs.SpriteSheetUtils.extractFrame(ss["AromaCafe_atlas_1"],6);
	sprImg_shape_12.onload = function(){
		this.shape_12.graphics.bf(sprImg_shape_12, null, new cjs.Matrix2D(-1,-0.023,0.023,-1,22.2,35.6)).s().p("AANDxIhZgBIABgNIgDgBIgFATQgZABgaAAQgtgBgpgFIgLAAIAAgCIgCAAIgCAGQgQgEgPgGQgcAGgeACQgbADgbgBIgMAAQgQACgQAAQgmgBgjgGIgCAFQgPgEgPgGQgcAGgeACQgcADgbgBQgoAAglgIQgUgEgSgGIgDgBIgBAEIgFASQgrgCgrgEIgSgDIgDACIg/AAIABgKIg2ALIhzgBIAAgIIgiAJIhfgBIBKngIANgEIBmACIBRAeQA7ADA4AIIAggEIAFgHQAdAAAVAFQATAHAOAJIAJAEQAmgLArgFQAygGA3ABIANAAIAAgBIAKACIAaABQAOgIALgEQALgEAHABQALAAAMAHIAUAJIASgOQAagKAagEIAXgEIABgJIDoAFQAXgBAYAAQAtABAtAFIANADIgEAiIAeAJIAugIIAggFIAYgDIABgRIAIgVIB/ACIBJADQAfABAdAEQAaAFAZAGIABANIAhABIAwAPIALAAIAAAAIBcgPIAaAIIACgfIBUgLIATAIIAAgJICjAEQAcgCAhAAQAtABAuAFIALADIgDAvIAzAEQABBKgCBMIgBAZIgFAyIABADIAUBEQgHAygLAsIgLAlQgZABgaAAQgrgBgpgFIAAAFIgsgBIAAABIjngEIgBAEQgZABgaAAQgogBglgEIhFgBIAAgLIgCgBIgGARQgZABgaAAQgpgBglgEQghADgjgBIhCgBIgBACIgIgCIhAgBIgQABQgcADgbgBQgoAAglgIIgGgCIgDANQgpgCgogEgAkbDkIAEABIAaABIABgLIAXgGIABgWIgVAAIgDAcgABlDlIAAgBIgCABIAAAAIABAAIABAAgABlDkIAhgHIgggDIACgIQAWhPAOhcQAPhbADhuIgfAAIglAAIgEAcIAFANQAGAOADARQACAMAAANQAAAQgCAQQgHAjgRAjIgJAUIgCAfQgEA/gBA/IApAEIABAAIgBAKgAn1BUIgCAbIgKBsIAWAIIAFgMIgOgBQACg/AFg/IACgfIgKAbgAE3CpIgDAjIAaAJIAlAKIArABIA3ABIAHghIABgLIACgLQAEgaADgbQAGgtAEgvIADgwQgDAzgHAyQgEAugIAuIAAADIgbgBIgxgBIhLgBQAFhpAHhjIABgFIAMiDIAAgCIATAAIAPABIAFgTQAYAHAXAJIAJADIgDgnIA4ABIABATIAEAAIAAgCIgBgRIgEAAIAAgBIAEAAIgBgGIg6gCIiDgEIhHgCIgCAQIAxAAQAbABAaABQAEARAEARIh0gCIgCANIgDAAIACAHIgOBbIgMEbIBlACIACgSIgHgDIgBAAIACgggAv3gIQgPBhgCBrIAYABIAAAGIAAABQAlAGAoAFIABgRIhOgBQABhGAFhHQAEhFAIhDQAGg2AIgyIACgFIABgGIgBAAIgCALQgXBRgQBfgAiWDBIAAAKIAAABQAlAGAnAFIAIiNIgEgOIgIBXIhGgCIgCAwgAroAlIgIAUIgCAfQgEAwgCAxIgBAdIAGAAIABABIABgIIAEgbQAGgxAGg1IAFhCIgMAZgAITC9IAbAAIAnANIAAgMIgngBIgbgIIAAAIgAuPADIgTDDIAKAAIAKhFIAAiBgAyAjPIgeGQIBTACIAWmFIBegPIANAEIAAgDIg+gIgAH4iHIgEAQQABAfgBAdIgBAfQAFgsABgtIAAgoIgDAAgArZh6IgBgoIAeAAIAAgIIgwgNIAFASQABAIAEAKIAEANIAFAMIAAAAgAISi8IAAATIAAANIAYABIAEgfIAAgHIgdgJIABAOgAHhidIARAAIgBgIIgugEIAeAMgAlBihIADAAIAKABIADgjIgMgBIgEAjgAh1i6IgBACIABgCIABgDIABgGIgBAAIgBAJgAuNjAIgCAAIACAAIAEAAIgDgBIgBABgAuNjBIAAgGIgZgDgADjh1IAFggIAFAZIgLBoIgDAKg")
	}.bind(this);
	this.shape_12.setTransform(1047.55,223.45);

	this.shape_13 = new cjs.Shape();
	var sprImg_shape_13 = cjs.SpriteSheetUtils.extractFrame(ss["AromaCafe_atlas_1"],6);
	sprImg_shape_13.onload = function(){
		this.shape_13.graphics.bf(sprImg_shape_13, null, new cjs.Matrix2D(-1,-0.023,0.023,-1,22.2,35.6)).s().p("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")
	}.bind(this);
	this.shape_13.setTransform(1047.55,223.425);

	this.shape_14 = new cjs.Shape();
	var sprImg_shape_14 = cjs.SpriteSheetUtils.extractFrame(ss["AromaCafe_atlas_1"],6);
	sprImg_shape_14.onload = function(){
		this.shape_14.graphics.bf(sprImg_shape_14, null, new cjs.Matrix2D(-1,-0.023,0.023,-1,22.2,35.6)).s().p("AAEDfIg3gBIABgIQgUgEgTgGIAAAAIgCgBIgoAQIgDAIQgYACgYgBQg+gBg2gOIgHgCIgHAPQgNgFgNgGIgaAFIgHADIgLAAIgJABQgaADgZAAIgagBQgTACgUAAQg5gBgugPIgHAOIgagLQgZAGgbADQgaADgZAAQgmAAghgKQgigJgYgNQAAgZADgWIgGACQgLAFgKAHIgGACIgNAnIgCAFIgHAVQgngCgkgFIgyAAIADgZIAAgBIgCABIAAAAIhbAbIhqgCIABgUIg/AVIhYgBIBUm7IALgEIBgACIBfAuIAMACIAAABIAFgPQAxACAtAHIAVgCIACAGIAJACIArAKQAJgPAJgKQAcAAATAHQATAHAMALIAHAGIAGgBQAhgNApgHQAtgHAzABQAaAAAXACIAJAaIAEgEQAOgQADgIIAUAHQAMgMAJgFQAHgFAEAAQAFAAAIAIQALAHAPAPQASgFAUgEIAIgBIATgQQAWgNAXgEQAUgFAWgEIAHAAIABgGIDjAFIAAABQAXgDAbABQApAAAqAGIAKAEIgDAeIAMgBIA1AVQAygOAzgEIABADQAdgFAggBIACgWIAJgSIB1ACIBFACQAdACAaAEQAZAFAVAIIACAQIAhABIAIADIAAgEIA5ABIAmARIAtABIAAgGIBWgMIAzAUIAEgyIBPgJIAoAWIABgXICbADQAbgDAeABQApAAArAGIAKAEIgFAzIgBACIAPABIAuAFQACBAgCBDIAAAVIgHAxIACAEIAXA6QgIAvgMAnIgNAhQgXACgZgBQg5gBgzgMIgBAMIgygBIgBABIkNgEIgBAEQgYACgYgBQgkAAghgFIgngBIAAgHIgJgCIgVgGIgBAGQgYgHgSgJIgLAeQgYACgXgBQgqAAgngHIAWgEQALgXAHgcIgogBIAEgYIAFgdQAHgnAEgpQADgfABgeQgEAugHAsQgFApgJAnIgSAAIAFhJIAPghIADg5IAUhAIABAsIgBANQAEgkABgmIgFARIgEgyIg8gEIABgBIAJgWQAVAIAUALIATAKIgBgfIgBgJIgBgUIg0gDIhzgDIg+gBIgOBMIgfgEIgcFOIBKADIABgIIAgABIAQghIgBgcIAAgUQAAgkAEguQAGgwACghIABgdQAAgkgIggIgBgDIA6ABIAPABIAkABQgLAYgTAkQgJARgJAUQgSArgLA1QgKArgDAsIgCAlIABAAQAcAPAhALIAiAKIAkAIQglAFgogBIhmgBIgBACIgGgCIg9gBIgMABQgaADgZAAQglAAgigKIgegJIghAJIgEAMQgigCgigEgABQDQIABAAIABgFIgCAFgAlMDLIAFACIgFgCIgOgFIAOAFgABlBVQgHA7gLA0IABAAQAPgnAMgtIADgcIADgiQgJARgHASgAxNisIgBAEQgcBGgRBXQgRBVgCBhIAcABIgBAHIAAABIAaAGIAQgeIAHgeIAcg2IgJjlIgXgLIADAAIgJgEIAAAAIgBAAgA0di2IggFeIBhACIAYlXIBIgKIg4gKgAiIBwIABAAIABgJIAIg4IABADIADAIIAajiIgEAAQgKAugIA1IAAAEQgIAzgEA2IgBAKIgDA1gAlJhXIgPDDIAYAAIAAgBQAGg2AEg2IAGh2IgIgBIgRAhgAKYgXIgBAUIgHAyIABADIAGANIAHhdIACgOIgIAVgANxASIAOAcIAHgxIAAgVQAChDgBhAIgHgBgAlVh8IAPACIAEgvIgNAAIgGAtgAxQitIgCgBIgIgDgAIIDdIAAAAg")
	}.bind(this);
	this.shape_14.setTransform(1047.55,223.425);

	this.shape_15 = new cjs.Shape();
	var sprImg_shape_15 = cjs.SpriteSheetUtils.extractFrame(ss["AromaCafe_atlas_1"],6);
	sprImg_shape_15.onload = function(){
		this.shape_15.graphics.bf(sprImg_shape_15, null, new cjs.Matrix2D(-1,-0.023,0.023,-1,22.1,35.6)).s().p("AgFDWIghgBIAAgFQgbgGgZgIIgGgCIgzAWIgLAAIgCAEQgXACgXgBQg8AAgzgQIgWgHIgLAVIgXgLIgTAIIgYAAIgJABQgYAEgZgBQgRAAgQgCQgVADgWAAQg7gBgugRIgLgEIgLAUIgYgMQgYAHgaADQgYAEgZgBQgkAAgfgKQgggJgXgPQABgfAGgaIgKABQgKADgKAFQgLAFgKAHQgKAEgLAMIgPAlIgIATQgjgCghgFIggAAIAAgFQgbgFgZgJIg7AVIhkgCIACgdIhOAeIhVgBIBZmpIALgEIBcACIBKApIAGAAIAqATIACgFIAIgSQAqACAmAGQglAEglAKIgNAAIgBACIADACIAIgDIADgBQAlgKAlgEIAKgBIABADIAcAFQAeAHAbAJIADgFQAKgQALgKQAcAAATAHQARAIALALIAHAGIAJAAQAfgOAngIQAqgHAyAAQAZABAWACQAJASAFAVIACAHIAegfIASgRIANAHQAMgNAHgFQAFgGACAAQADABAFAIQAJAIANARIADADQAYgIAbgGIAZgEIAQgOQAVgOAVgEQASgGAWgEIAWgCIABgEIDTAEIAAAEIALgCQAZgDAdAAQAoABAoAGIAJAFIgEAkIAjgFIAwAWQAvgPAwgEIADAFIALgCQAngHAtAAIghFyIAvACIABgJIAkABIAPgaQgCgUAAgTIAAgHQABghAFgtQAFgwACgeIABgcQABghgJgeIBLACIAhABIgLBQQgUApgMAzQgJAngEApIgCAnIABAAQAZAQAeALIArABQAGgUAFgWQAFgUADgWIAHgnIABgNIACgDIACgTQAEghABggQAEgkABglIAAgeIgBgUIgBgMIgCgSIgvgEIhsgCIg6gCIgDASIgggBIgIAAIADgZIAKgRIBxACIBBACQAcACAZAFQAYAFAUAIQADAUAAAVIAIABIgEgYIA4AAIAPAJIgBgJIA4AAIAiATIABAAIA8ACIABgJIBSgLIAvAWIARgFIAFgyIBMgJIAyAhIACgiICZADQAYgDAdAAQAoABApAGIAJAFIgGAwIgGAHIAcADIArAFQACA7gCA9IAAAVIgIAwIACAEIAaA2QgIAsgOAlIgNAfQgXACgXgBQg8AAgzgQIgKgDIgCARIg2gBIgBABIkagEIABgNIAAAAIgIASQgXACgXgBQgjAAgggGIgWAAIABgEIgXgGQgVgGgRgHQgEAIgBAFQgZgIgRgMIgBAEIgOAfQgWACgYgBQgrAAgmgIQgnAGgrgBIh3gCIgCADIgFgDIg5gBIgMACQgYAEgZgBQgkAAgfgKQgVgGgRgIIg4AUIgCAGQgjgCgggEgAwEDEIAbABIAGgagAlghoIgHA7QgUAogNAzQgNA5gBA+IABAAQAQAKATAJIAEgiIAGgtQAHgxAEgzIAFhOIADgFIADgGIAHhIIAEABIADAAIgGgNIgBAMIgNAAIgIA0gAhvhAQgJA1gFA6IgEA0IAEAHIgFAXIgBAnIAAAAQAcAIAeAGIAngRIAXk6QgngFgqgBQgLAqgIAxgAyshOQgJAfgIAjQgSBPgCBcIgBAJIAYAJIATgcIAGgXIAegxIgKjdIgGgDQgOAggLAlgA1riqIgiFFIBoACIAZk/IA7gIIg6gMgATRCWIACAAIABgNIgCgEIgBARgAysihIAAgCIgFgBg")
	}.bind(this);
	this.shape_15.setTransform(1047.575,223.425);

	this.shape_16 = new cjs.Shape();
	var sprImg_shape_16 = cjs.SpriteSheetUtils.extractFrame(ss["AromaCafe_atlas_1"],6);
	sprImg_shape_16.onload = function(){
		this.shape_16.graphics.bf(sprImg_shape_16, null, new cjs.Matrix2D(-1,-0.023,0.023,-1,22.1,35.6)).s().p("AgKDMIgQAAIABgCQglgHgegMIgJgDIgyAaIghgBIgCAEQgVACgXgBQg5AAgxgQQgQgFgOgHIgIAEIgPAWIgMgHIgLAFIgpgBIgFABQgYAEgXgBQgUAAgTgEQgYAGgZgBQg5gBgtgSIgXgLIgTAcQgLgGgKgHQgXAHgaAEQgXAEgXgBQgjAAgegKQgegKgUgQQAAggAIgcQgGgCgHAAQgJAAgKADQgLADgJAEQgLAGgJAIQgJAEgLANIgUASIgMAXIgIASQgggCgfgFIgOAAIAAgCQglgHgegMIgEgBIg7AYIhfgCIADggIgRgBIhMAjIhRgCIBdmWIAKgFIBZACIBHAuIAQgCIAqAXIACAAIAJgDIAEgIIAIgQQAiABAfAFIAAAAIABAAIAAABQAYADAWAGQAmAJAfAOIAKgPQALgPALgJQAcAAASAIQARAHAKANQADACADAFIAMgBQAdgQAlgIQAogIAwABQAYAAAWACQAJARAGAUQAEAMACANIAOgQQAbgaAQgLQAQgJAEgBIAHAHIAPgTIADgGIADAJIASAbIAHAJIAAABQAcgOAjgIQAVgEAWgCIANgNQAUgOATgFQARgHAUgEQASgCAUgBIAAgDIDEAEIgCAKQAOgFAPgDQAYgDAcAAQAmAAAnAGIAHAGIgFApIA8gHIAqAXQAsgQAugFIAFALIAYgHQAogIAxABIAQAAIgHBHIgLgCIgcgFIg4AAIgHAAIgNBPIgJAQQgJARgIAXQgJAcgFAfIgIBBIgWAJIAAABQAlAGApAEQAiAEAtACIgBAOIgYAFQgXAEgYgBQgjAAgdgKQgYgIgSgMIhBAbIgPgBIgDAGQgfgCgegFgAxDC6IAIABIADgKgAmCgKIgCAVQgEAwgHAtIgJA4QARALAUAKIAOgVIgCgXIgaAAQAFhWAJhOIADgVQgKASgIAUgAr2AgQgMAzAAA3IAPAQIAIgyQAHgtAEgwIAEg0QgQAigKAngA26ieIgjEsIDHAEIAMgwIgCj5IhWgUgAzvAsIgEBCIAUgcIgGhvQgGAjgEAmgAXODSQg6AAgxgQIgbgKIgCAYIg6gBIgBABIkOgEIACgWIgiANIgHAOQgVACgXgBQghAAgegGIgGAAIAAgBQgTgDgSgGQgcgJgXgNIgEAHQgGAIgCAGQgagKgQgPIgEAMIgOAdQgWACgWgBQgtAAgngKQgoAIgugBIiIgCIAdgtQgCgXAAgVIABgHQAAgdAFgnQAGguACgdIABgbQAAgcgHgZIBcACIAyACIgKA+QgVAmgOAyQgJAigDAlQgCAVAAAVIAAAAQAWARAcAMIAYAAQAJgWAFgWQAEgQADgQQAHggAFgkQAFggAAgfIAAgGQAFghABgiIgBgkIAAgHIgCgPIgCgRIgrgDIhkgDIg2gBIgJAmIgIgSIgdgCIADgeIAKgPIBtACIA/ACQAbACAYAFQAWAFATAJQAEAVAAAWIAoAEIgGgcIA1ABIAZARIgDgSIA0ABIAeATIAMABQAhABAhACIABgNIBPgJIAqAXQASgGASgFIAFgxIBJgIIA3ArIAGAAIACgsICVADQAXgDAcAAQAmAAAoAGIAHAGIgFAuIgLALIApAFIAnAFQACA2gCA5IAAASIgJAxIADAEIAbAxQgIArgOAiIgPAdQgRABgRAAIgJAAgAFfDNIAIAAIgCADIgGgDgAE3DMIAAgDIAYgGIAQAKg")
	}.bind(this);
	this.shape_16.setTransform(1047.575,223.425);

	this.shape_17 = new cjs.Shape();
	var sprImg_shape_17 = cjs.SpriteSheetUtils.extractFrame(ss["AromaCafe_atlas_1"],6);
	sprImg_shape_17.onload = function(){
		this.shape_17.graphics.bf(sprImg_shape_17, null, new cjs.Matrix2D(-1,-0.023,0.023,-1,22.1,35.6)).s().p("AgNDEIgLgCQgngHgfgOIgIgDIgFgDIgwAeIg3gBIgBADQgVADgWgBQg3AAgugRQgRgGgQgJIgfAUIgIAJIgEgCIgCABIg3gBIgEABQgWAEgXgBQgXAAgVgFQgbAHgcgBQg4AAgqgUQgTgIgPgLIgdAkQgKgGgJgHQgWAIgYAEQgXAEgWgBQghAAgcgLQgdgKgSgQQAAgaAGgWQgDgGgEgCQgCgFgGgDQgIgDgIAAQgKAAgKADQgKADgKAFQgKAGgIAIQgJAFgKAOIg2A4IAAAAIgDAGQgjgCgfgGQgngHgegOIgLgEIg5AcIhagBIADgkIgkAAIhHAlIhOgBIBimFIAJgFIBWACIBBAyIAdgEIAkAZIADgBIAOgFIAOgFIACgDIAJgOQA5ADAvANQAuAOAkAUQAGgPAKgNQAMgOANgJQAaAAASAJQAQAIAJANQAIAGAEAQIAXAsIAGgYIAFAAIgBgCIgOgOIgHgFIgKgNIAHgCQAagQAkgJQAmgIAuAAQAXAAAVADQAJAPAHATQAIAVACAYQASgcAVgSQAdgXARgIQARgGAEADIABAIIAJgRIAAgBQgBgJACgBQADAAgCAHIgCAEIAMAbIAHAKQgFAbgBAbQAAAkAJAcQAHANAHALQAIg0AOgzIAFAAIgBgCIgPgOIgGgFIgKgNIAHgCQAagQAkgJQAbgGAhgBIALgNQARgPASgFQAQgHAUgFQAVgEAbABIAEAAIABgDICzADIgDAUIANgFQAPgHAUgFQAWgEAbABQAkAAAlAGIAHAGIgGAqIAMADIBIgJIAlAZQApgRAqgFIAKAQQARgHATgFQAlgIAvAAQAVAAATACIADgjIAMgOIBoACIA9ACQAaACAWAFQAVAGASAJQAEAVAAAXIAAABQAiACAhAFIABAAIAEgIIgIgXIAzABIAgAaIADAAIACgEIgIgXIAyABIAgAZIABgFIAPABQAkABAkADIABgQIBLgJIAlAZQAbgLAcgGIAFgwIBHgHIA/A9IABgPIAHABIACgwICTADQAVgEAbABQAkAAAmAGIAHAGIgGAsQgKAHgHAJQAcACAbAEIAjAFQACAxgBA1IAAAQIgLAyIAFACIAdAtQgJApgPAgIgPAaQgVADgVgBQg3AAgugRQgSgGgPgJIgNAIIgCAWIg9gBIgBABIkEgDIAEgkIhFAiIgDAFQgVADgWgBQg3AAgtgRIgFgBIAAAAIgDgBQgegMgXgRQgKALgFAJIgIAKQgagMgPgTIgJAVIgOAaQgUADgWgBQgvAAgngMIgBABQgpAJgwgBIiagCIgCACIgEgCIgRAAIABgLIAAAAQgVAIgYAEQgXAEgWgBQghAAgdgLQgbgKgTgQIAAgBIhHAjIghgBIgDAGQgcgCgZgEgADog7QADAIAAAJIgDAaQgIAXgYAXIgDACQgGAQgFASIgBAKQgGApgBArQAhAGAlAFQAnAFA1ABQAHgkAHgnQAHgpAEgrIAGhFIABgUIgggHIgXgFIg0ABIgdAAgAn2hTIgDAUIASAZIgVDUQAaACAeABQAIgkAGgnQAHgpAEgrIAHhZIgfgHIgYgFIgbAAgAgLCsQAdAEAgAAQAPgsAKg4QAOhSgDhdQghgMgngIgAGbg3IgBAaIgFArIgEBQIB6ACQgCAWgBAXIABAAQATARAaANIAGAAQAKgXAGgYIAFgVQAIgdAFggQAFgeAAgdIAAgLIAAgEQAFgeABggIAAgHIgBgcIgCgRIgCgQIgogEIhcgCIgxgBIgTBCIgCAgIgMAoIgNDHIAEAAIAKgMQgDgWAAgUQABgdAEgqIAEgdIAFhVIABAQgA4IiSIgkEUIC3ADIANgrIgEjlIhMgVg")
	}.bind(this);
	this.shape_17.setTransform(1047.6,223.425);

	this.shape_18 = new cjs.Shape();
	var sprImg_shape_18 = cjs.SpriteSheetUtils.extractFrame(ss["AromaCafe_atlas_1"],6);
	sprImg_shape_18.onload = function(){
		this.shape_18.graphics.bf(sprImg_shape_18, null, new cjs.Matrix2D(-1,-0.023,0.023,-1,22.1,35.6)).s().p("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")
	}.bind(this);
	this.shape_18.setTransform(1047.575,223.425);

	this.shape_19 = new cjs.Shape();
	var sprImg_shape_19 = cjs.SpriteSheetUtils.extractFrame(ss["AromaCafe_atlas_1"],6);
	sprImg_shape_19.onload = function(){
		this.shape_19.graphics.bf(sprImg_shape_19, null, new cjs.Matrix2D(-1,-0.023,0.023,-1,22.1,35.6)).s().p("AZtClQgVgKgRgNIgrAlIgCAAIAAACIhFgBIgCABIjsgCIAXi7IgCABQgJALgLASQgKAWgGAbQgEAXgEAfIgSAMIg8ArIgcgBIgCACQgSADgUAAQgyAAgpgTIgTgKIgIAEQgGAEgDAAQgVgPgIgWIgEgFQgIAJgJAIIgdAVQgHAEgCAAQgVgPgJgWIgGgIQgIAXgLASQgIAMgJAKQgSADgUAAQgyAAgogTIgHgDQAMgSAIgWQAEgLACgMIgqgBQAEhBAKg4IAIgfIgMAOQAEgWAAgXQABgWgEgVIgDgNQgQgCgRgBIhMgDIgoAAIgUAyIgFA1IgMAbIgNCkIB8ACIAgABIAKgRQARARAYAMIgIAKQglAIgtAAIijgBIAEgbIghAdIgQgQQgTAJgVAFQgUAFgVgBQgfAAgYgMQgZgLgNgTQgBgiANgaQALgcAZgUQAJgqAQgpIATAAQAEAIAAAJQAAALgDANQgJARgbATIgJAGIgGAmQgHAhAAAiQAYAHAeAFQAdAGAsAAQAIgbAHgeQAIggAEgjQAEggACgnIgWgHIgSgFIgqAAIgVABIgBgBQgEgLgKgHIgPgJQgFgCgDACIgHgHIgPBEIgLAKQgJALgLASQgKAWgGAbQgFAXgEAfIgSAMIg7ArIhEgBIgEAFQgdgCgcgHQghgHgagPIgVgNIgtAnIhHAAIAIg/QgIAYgMATQgIAMgJAKQgSADgUAAQgyAAgogTIgCgBIgBAAQgOgHgMgIIgJgHIgsAlIgcAAIgDACIgCgCIgmAAIABgFIgRAFQgTAFgVgBQgeAAgYgLQghAMgjgBQg1AAgngVQgngWgUgoQABg0AOgtQAOgqAXggQAYgfAcgRQAcgPATgCQgCAKADAVIAEAKQgFAagBAZQAAAjALAXQALAWAQAKQALAGAKABQAIgLALgJQAJgpAQgqIATAAIAAgBQgFgLgJgHIgQgJQgGgCgCACIgLgKIgDgCQAWgSAggKQAhgLArABIAQABIAIgOQAPgQAOgHQAOgHARgFQATgFAaABQASAAAUACIABgFICTADIglCoIgBAGIAAAOIgQAzQAGACAEgCIAdAgIAPh8IgUgSIAGg1IAVgSIAMgTQAPgQAOgHQANgHASgFQATgFAZABQAiAAAiAGIAFAHIgHAnIgCACQAgAEAcAKIADACIABgJIBEgHIAaAcQAigUAkgGQAIAGAHAIIANARQAVgQAdgJQAigLAsABQAUABATACQALAMAHAQQAMAYAAAeIgBAWQgCAWgHAtQgGAoAAAYIABAXIAmkuIAMgKIBgABIA3ABQAYADAUAGQAUAGAPALQAEATAAAUIAAAJIgHAAIgMAAQgGAXgGAaQAIgJAKgHIAJgHQADgNABgNQAuACAoAHIAaAGIAWglIgJgBIAtAAIAXAdIAAAAIAHAJIAWglIgJgBIAtAAIAYAdIAAAAIARAWIAHgcIAMAAQAsABApAHIACgYIBEgHIAaAcQAjgUAkgGQAIAGAGAIIAFAFIAIhFIBCgEIA+BhIgPB0IASAQIATixIAJAAIADg1ICMACQATgEAXABQAhAAAjAGIAEAHIgGAnQgNAGgJAIQgFAFgEAHQAtABAoAHIAbAHQAEAngBAqIAAAOIgRAzQAGACAEgCIAgAjQgJAmgRAbQgIAMgIAKQgTADgUAAQgzAAgogTgAoGghIgXC9IAKAAIAOg5QAJggAEgjIAGhHIgWgHIgSgFgAANCbIARAAQAQghALguQAPhEgChOQgOgHgQgHgAqJA1IgDASQgGAhgBAiIAiAIQAPgeAKgoIgngeQgEAFgGACgAmIg3QAIgIAKgHIAAgBIACgBIAEgfIAAAAIgMAAIgMAwgA11CvQghgHgagPIgVgNIg4AoIhQgBIAFgpIhMgBIg8AqIhIAAIBslhIAIgFIBOABIA2A6IA3gGIAZAcQAkgUAkgGIAAAAIAGgGQAyADApAPQAoAPAbAYIANgIQAPgGAJAAQAIACADAFQAHgRAOgOQAMgNAOgGQAaAAAQAJQAQAKAGAOQAGAHACASIAJAfQgIAIgHANQgHATgGAjIgOBeIgmATIAOgkIgEgNQgCgPgFgFQgCgFgGgEQgGgDgJAAQgJAAgKADQgKADgIAGQgKAHgHAKQgHAEgIARIgtA/IgtAAIgEAFQgegCgcgHgA0kgbIgbC2IAQAAQAQghAKguQANg4ABg9gA6lh5IgnDhICZADIANggIgFi9Ig7gYgAv1C3QgfAAgYgMQgagLgOgTQABgiANgaQALgcAZgUQAJgqAQgpIATAAQADAIAAAJQAAALgCANQgJARgbATIgJAGIgHAmQgGAhgBAiQAZAHAdAFQAeAGArAAIAPg5QAIggAEgjQAEggADgnIgXgHIgRgFIgqAAIgVABIgBgBQgFgLgJgHIgQgJQgFgCgDACIgKgKIgDgCQAVgSAggKQAigLArABQAVABATACQAKAMAIAQQAMAYgBAeIAAAWQgDAWgHAtQgFAogBAYQAAATAEATIgmAhIgPgQQgUAJgVAFQgSAEgTAAIgDAAgAwrgEIABgDIgKgiQAFgFAGgDQAHgCAHAFIgEAJIgLAeIAGATIgUAAgArAiEQgFgEgJAAIgEAAIAAgBQAEgKAHAAQAHAAABAHIgBAIQAGACACAGIgLAIIADgQg")
	}.bind(this);
	this.shape_19.setTransform(1047.6,223.4);

	this.shape_20 = new cjs.Shape();
	var sprImg_shape_20 = cjs.SpriteSheetUtils.extractFrame(ss["AromaCafe_atlas_1"],6);
	sprImg_shape_20.onload = function(){
		this.shape_20.graphics.bf(sprImg_shape_20, null, new cjs.Matrix2D(-1,-0.023,0.023,-1,22.1,35.6)).s().p("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")
	}.bind(this);
	this.shape_20.setTransform(1047.6,223.4);

	this.shape_21 = new cjs.Shape();
	var sprImg_shape_21 = cjs.SpriteSheetUtils.extractFrame(ss["AromaCafe_atlas_1"],6);
	sprImg_shape_21.onload = function(){
		this.shape_21.graphics.bf(sprImg_shape_21, null, new cjs.Matrix2D(-1,-0.023,0.023,-1,22.1,35.6)).s().p("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")
	}.bind(this);
	this.shape_21.setTransform(1047.625,223.4);

	this.shape_22 = new cjs.Shape();
	var sprImg_shape_22 = cjs.SpriteSheetUtils.extractFrame(ss["AromaCafe_atlas_1"],6);
	sprImg_shape_22.onload = function(){
		this.shape_22.graphics.bf(sprImg_shape_22, null, new cjs.Matrix2D(-1,-0.023,0.023,-1,22.1,35.6)).s().p("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")
	}.bind(this);
	this.shape_22.setTransform(1047.625,223.4);

	this.shape_23 = new cjs.Shape();
	var sprImg_shape_23 = cjs.SpriteSheetUtils.extractFrame(ss["AromaCafe_atlas_1"],6);
	sprImg_shape_23.onload = function(){
		this.shape_23.graphics.bf(sprImg_shape_23, null, new cjs.Matrix2D(-1,-0.023,0.023,-1,22.1,35.6)).s().p("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")
	}.bind(this);
	this.shape_23.setTransform(1047.625,223.4);

	this.shape_24 = new cjs.Shape();
	var sprImg_shape_24 = cjs.SpriteSheetUtils.extractFrame(ss["AromaCafe_atlas_1"],6);
	sprImg_shape_24.onload = function(){
		this.shape_24.graphics.bf(sprImg_shape_24, null, new cjs.Matrix2D(-1,-0.023,0.023,-1,22.1,35.6)).s().p("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")
	}.bind(this);
	this.shape_24.setTransform(1047.65,223.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("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");
	this.shape_25.setTransform(1048.1,223.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},104).to({state:[{t:this.instance}]},29).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(104).to({_off:false},0).to({rotation:-86.9999,guide:{path:[1512.8,262.3,1493.1,233.3,1475.4,202.8,1460.5,177.1,1451.9,166.4,1436.8,147.5,1419.2,140.7,1409.6,137.1,1397.5,136.2,1388.1,135.6,1375,136.6,1362.3,137.6,1353.2,139.4,1341.6,141.7,1332.5,145.9,1322,150.7,1314.4,158.2,1306.1,166.3,1302.6,176.2,1301.4,179.8,1300.3,181.4,1298.6,184.1,1296.2,184.4,1293.7,184.7,1290,181.6,1281.9,174.8,1277.7,171.5,1270.6,165.8,1264.8,162.4,1251.6,154.6,1235.7,152.7,1220,150.7,1205,154.9,1190.2,159,1177.4,168.6,1164.9,178,1156.5,191.2,1153.8,195.7,1152.3,197.4,1149.5,200.5,1146.4,201.2,1142.1,202.2,1137,198.8,1131.3,194.1,1128.5,192.1,1121.6,187.1,1110.6,185.6,1089.9,182.8,1071.4,193.9,1061.5,199.8,1055.5,207.9]}},29).to({rotation:-90,guide:{path:[1055.4,207.9,1049.8,215.4,1047.7,224.8,1047.8,224.2,1048,223.5]}},1).to({_off:true},3).wait(39));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_TextMasking = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// TextMasking
	this.instance = new lib.SpeakerText();
	this.instance.setTransform(1310.25,550.35,1,1,0,0,0,152.6,9.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(99).to({_off:false},0).to({alpha:1},5).wait(72));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_sosialmedia = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sosialmedia
	this.instance = new lib.textsocial("synched",0);
	this.instance.setTransform(1048.05,308.2,0.9721,0.972,0,0,0,77.2,18.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(137).to({_off:false},0).to({x:1048.1,alpha:1},9).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_playButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// playButton
	this.playButton = new lib.playButton();
	this.playButton.name = "playButton";
	this.playButton.setTransform(1358.35,79.45,1,1,0,0,0,21.4,21.4);
	this.playButton.alpha = 0;
	this.playButton._off = true;
	new cjs.ButtonHelper(this.playButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.playButton).wait(99).to({_off:false},0).to({alpha:1},5).wait(72));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_pauseButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// pauseButton
	this.pauseButton = new lib.pauseButton();
	this.pauseButton.name = "pauseButton";
	this.pauseButton.setTransform(1358.4,79.4,1,1,0,0,0,21.4,21.4);
	this.pauseButton._off = true;
	new cjs.ButtonHelper(this.pauseButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.pauseButton).wait(104).to({_off:false},0).wait(72));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_insta = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// insta
	this.instagram = new lib.insta_1();
	this.instagram.name = "instagram";
	this.instagram.setTransform(925.05,368.8,0.7143,0.7137,0,0,0,35.1,34.9);
	this.instagram.alpha = 0;
	this.instagram._off = true;
	new cjs.ButtonHelper(this.instagram, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instagram).wait(143).to({_off:false},0).to({alpha:1},9).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_facebook = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// facebook
	this.facebook = new lib.facebook_1();
	this.facebook.name = "facebook";
	this.facebook.setTransform(1048.1,368.85,0.7498,0.747,0,0,0,41,40.5);
	this.facebook.alpha = 0;
	this.facebook._off = true;
	new cjs.ButtonHelper(this.facebook, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.facebook).wait(149).to({_off:false},0).to({alpha:1},9).wait(18));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cangkir = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cangkir
	this.instance = new lib.tweenintrocangkir("synched",0);
	this.instance.setTransform(65.4,-223.8,1,1,0,0,0,6.3,-30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[65.4,-223.7,65.9,-224.5,66.9,-225.3,69.1,-226.8,72.1,-227,107,-229.2,142.8,-221.5,177.3,-214,209.9,-197.9,241.1,-182.6,269.8,-159.8,297.1,-138.2,321.3,-110.7,359.8,-66.9,382,-17.3,406,36.3,407.8,90,409,125.6,400.2,166.7,393.2,199.5,378.3,241.3,398.9,219.2,434,209,461.4,201.1,500.2,200,536.8,199,573.2,202.3,595.2,204.2,609.7,208,629.3,213,642.8,222.8,659.5,234.9,671.9,257.5,679.7,271.9,690.1,300.4,696.7,318.7,699.6,328.4,704.3,344.1,705.7,357.1,706.7,366.4,706.5,378,706.4,385,705.5,399,703.1,437.8,700.7,476.7]}},58).to({guide:{path:[700.7,476.6,700.1,487.1,699.5,497.6]}},1).wait(25).to({startPosition:0},0).to({regX:6.4,scaleX:0.3933,scaleY:0.3936,x:96.55,y:88.8},14).to({regX:6.5,regY:-31,scaleX:0.35,scaleY:0.3503,x:53.45,y:59.6},1).wait(77));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_bgVideo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bgVideo
	this.instance = new lib.BgVIdeo("synched",0);
	this.instance.setTransform(700,301.5,1,1,0,0,0,700,191.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(99).to({_off:false},0).to({alpha:1},5).wait(60).to({startPosition:0},0).wait(12));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_bgLogo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bgLogo
	this.instance = new lib.tweenintrobgLogo("synched",0);
	this.instance.setTransform(65.45,-223.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AvePdQmUmUgFo6IAAgPQAApDGZmbQDOjMD4hnQD3hmEhAAQJDAAGbGZQGaGbAAJDQAAJEmaGZQmbGbpDAAQpDAAmbmbg");
	this.shape.setTransform(699.4,497.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#060402").s().p("AghUkIgmABQl3AAkri2QiHhSh4h3QhJhJg7hPIhTh8Qgmg/gehEQg+iLgaicQgRhlgBhrIAAgPIAAAAQAAiIAZh/QAojIBjiuQArhMA3hHIBxiCIAOgOQC8i6DhhgIgkARIAngRIAUgJIAogQIA6gVIAwgMIAKgCQAsgNAugJIAmgJIBogNQArgFAsgBQA8gFA9gBIAkABIACAAIAwABQA4ABA3AFQG+AuFKFJQGBF/ABIdIgBAxQgGCXgkCLIgNAxQg8DViGC0Qg8BShKBKQhvBwh8BOQiaBgipAwIisAmIgxAHIgqAFQggADghABQgkACgjABIgPAAQgjAAghgCgADBUOIgRABIgPABQg3AIg6AEIAOAAIgiABIAYAAIACAAIAbAAIADAAIAWgBIAWgBIgRABIgQAAIA1gFIArgGIAkgGIgiADgAgUUdIAVAAIAEAAIAVAAIgMgBIAVgBIgKAAIgXABQhxgEhrgWQA9AOA/AHIAsAFIANABIAPAAIABAAIABAAgAERUFQhEAPhHAHIAUgBQDhgPDEhWQiPA7ifAVgAifUZIAJABIgOgCIAFABgAhR0WQg4AHg2ALQh4AYhvAtQhjAphcA6Qh8BPhuBuQgkAkghAkIiHDCQgaAsgWAtIh0GIQgMBZAABcIAAAPQAAAjACAjIAGBEIBpGCQAeA8AiA5QBTCKB6B6QGBF+IdgBIAvAAIAogGQCHgWB8gxICIhBQCkhaCPiPQF+mAAAoeQAAm4j9lRIhtiAIgbgbQhZhWhhhDQgkgYgkgVIghgTQgwgcgxgXIhHgdQgngOgngMIh9geIg2gIIgSgDQBDAIA/ANQgqgKgrgIIgOgCIgBAAIgNgCIg2gFIADAAIAUABIgCgBIgbgCIgHAAIgMAAIgCAAIgQAAIgJAAIgNABIgvgBIgHAAIgCAAIg8ABIgoAGIgSACIAmgDIAKAAIAPgCIAfgBIgcACgAj10LIgTADIAegFIAbgCIAQgDIgrAFIgLACgAB30UIgZgCIgPgCIAOABIAkAEIgKgBg");
	this.shape_1.setTransform(666.6,468.4035);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0D0803").s().p("Ag3TPQgrADgsAAQleAAkXipQh+hMhwhvQhkhjhIhvQg2hPgnhWQg9iBgaiSQgShfgBhlIAAgOQAAh/Aah5QAmi8BgikQAvhQA8hKIA+hHIApgqQC1iyDYhZIA2gUQAwgUAygPIB3gdIARgEQBkgRBtgFIAvAAQBIgJBMAAIAiACIAdgBIASABIABAAQBGAABDAGQGgArEzExQFmFkACH2IgBAuQgFCdgqCOQg1DYiFC1Qg3BLhEBGQhmBnhzBIQjXCHj3AlQg1AJg3AFIgDAAIgDAAQggAEghABQghADgiAAIgmABQg7AAg5gFgAEfSnQg+AQhAAJIgHABIglAEQBFgBBCgHQghACgiABQDkgMDFhZQiYA8irAQgAAWTDIAWABIAYgDIAjAAIAFAAIAFAAIAOgCIgBAAIgWAAIgNgBQA5gGA3gLIgjAAIgbAFQgkAGgkAFIgTgCIAjgEQAngEAlgGIgjAAQCKgaB9g6QDEhaClimQFjlmgBn5QAAndk9laQgYgagagYQhVhRhcg9QghgWgigTIgfgQQg9gkhBgcQg2gVg4gQIhlgWIgzgIQA/AGA9AMQgigJgkgHIgYgFIgiAAIAagBIgVgCIgXgCIgZACIAcADIgLAAIgBAAIgbgCIgNACIg1ABIAogEIgqgBIgCAAIgZABIggAAQgsAEgrAHIA3gBIAJAAIgGABIAKgBIAUABIARgEIArgDIgwAHIAjACIgmAHIAugHIAVACQiPAViCA2QjWBaizCyQliFlgBH3IABAAIAAANQAABAAGA9IAGAoIA2DdQBVD+DODMQE4E2GmAoIggADQhCgFhAgMQA0AMA3AHIAXgCIAOABIAUACIgWABIgHAAIgLAAIAGABIAMgBIAsAAIgnACgAi7S/IASABIARACIAvACIAmAAIgdgCQhEgFhBgMQAkAJAkAHIgMgBIgegDIAMACgAhSS+IAqACIAPAAQiFgNh6gnQBfAhBnARgAP/NHQgsArgtAnQiUCGirBMIAogRQDHhaCminQDEjFBYj4QhZDrjADAgAC1y6IAXABQDDANCsBHQhUgohagZQgfgHghgGIgggFQhGgHhJAAIgPAAIAmAFgAkUyuIgLACIATgDQAggDAhgBIAmgIQg0AEgzAIIgIABg");
	this.shape_2.setTransform(633.775,439.2239);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#130C05").s().p("AgdR8IgmgGIgGAAIgpAEQgxAEgzAAQlFABkDicQh1hGhnhnQhfhdhEhpQgwhFgkhLQg8h3gaiJQgShZgChfIAAgNIAAAAQAAh4AahyQAmivBciZQAvhOA8hHIA7hBIAdgeQCoikDJhSIAFgCIAygTQBmgrBvgXIANgDQBdgRBmgHQA6gCA5ACQBZgOBgAAIAqACIAxAAIAPAAIAJAAQBBAAA/AGQGAAoEdEZQFLFIADHQQABAWgBAUQgGCYgqCJQgwDLh6CoQgyBGg/A/QhdBfhoBCQjSCGjzAfQgvAJgxAEIgDAAQgnAFgpACIg/AEIg1ABQg/AAg9gGgAhmRsIAUAAIAvgBIgegBIglACgAgDRmIgRABIARADIAFABIAMgCIANgDIgQgCIgOACgAl4xJQhKAThGAdQjJBVioCmQlNFPAAHWIAAAGIAAAGQAEGsEbE5QAXAaAZAYQDkDjEkBIQBLANBPADIASACIAsADIAQAAIgRgEIgKAAIgpgBIgKAAQl/gqkckcQlBlDgHnFIAAgWQAAnTFIlLQBPhPBWg7QBghCBpgrQBjgoBsgUQgjACgiAFgAi8RdQAhAFAiADIAbADIA0gEIgYgBQhzgIhqgeQAxASAyAOgAECRjQDPgPCyhUQiYA6irALIgtAJQgsAMgtAIIgUgBIgTgBIgCAAIgJgBIgWgCIgcgDIA1gLIgzAIQAfgIAdgLQBHgYBDgiQC7hUCdigQFHlMgBnVQgBm5kklCQgZgZgcgaQhQhJhXg4QgfgUgggQIgdgPQg4gig8gaQgzgTg1gOIgjgIIgZgFIAMgCIApAHIgdgIIAOgCIAZACIgRgDIAKgBIALgBIAhAAIAhAAIgWgDIgsADIgQABIgMAAIgRABIgLgBIgdgBIgaAAIgDAAIgTgCIANACIAUADIAOACQgiADggAFIgtAIIgggEQgzAQgxAUIgNAGQBGgYBLgOIAIABIAbAEQhXAUhRAiQjGBTilCkQlHFLgBHRIABAAIAAAMQABBFAIBBQAgDZBuC3QBIB1BpBoQEiEdGHAjQgmAKgoAHIgUAEIgXADIAPACIAZADIgTACIAJACIgJACIAVAAIAvgCIAWABIAMAAIAhABIACAAQAwAAAugDgAgDRcIAJgBIgzgIIAqAJgAkpw1QBEgTBHgKIAkACIAngLQgmADglAGIgwgCQguAOgtARgAkzxQIAJgBIAQgEIgZAFIAAAAg");
	this.shape_3.setTransform(600.9583,410.051);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#191007").s().p("AAgQtQgmgFgngHIgEAAIgLAAIgUgBIgaAAIgdAAQgdAFgeACQgtAEgvAAQksABjuiPQhshBhgheQhThRg8hbQgxhBglhJQg6htgah/QgThTgBhZIAAgMIAAAAQAAhwAahrQAlikBYiOQA5hcBOhSIAfggIAOgOQCbiXC6hLIAOgGIAqgPQBfgrBogYIATgEQBWgRBfgJQBHgEBFACIAjAGQAcgGAcgEQBUgNBbABIAuAEQAkgCAkAAIAOABIAPAAQA8gBA6AGQFiAkEGECQExEtAEGpQAAAUgBATQgFCSgrCEQgqC+hwCbQgtBAg5A6QhUBXhfA7QjGCAjnAdQgtAIgvAFIgXABQgmAGgoACIg6AEQgnACglAAQguAAgsgDgAhVQYIAigHQAkgCAigDIAKgCIARgCIgegEIgTACIAQAEIgggBIAFgBIgKABQggAEggACIAlACIg7ABIAZAGgAmWvtQg4AQg1AWQi6BPiaCZQk0E2AAGyIAAAGIAAAGQAEGKEGEhIAtAuQDMDKEBBFQBIALBMACIAsAEIgRgEIAAAAIgbAAQlZgqj/kBQknkpgHmhIAAgUQAAmtEukxQBIhIBPg4QBZg8BggnQBPggBUgSQgfACgfADgACaQIIAXABIAnABQA2ABA0gFIAEAAIAugBQAogGAmgIIAHgBIB7gfIAJgDQAkgRAigWQidBKi0APQgxABgvgEIgOgBIgIgBIgOgCIgYgDQAtgMAsgQIgbgCIgkgDQgoAOgqAJQgbAGgbAEIgEABIgBAAIAaAGIAYAFIASgBIAJgBIAaACgAgnP9IgzAHIAYACIAQgCIAjgBIAJADIANgEIgCAAIgUABIgXgGIgBAAgAAGQCIACAAIAZgIIAOACIAEABIAFgBIAvgLIgcgGQAegLAcgNQAagMAYgNQCzhOCUiYQEskzgCmwQgBmekXksIgsgpQhMhDhSgzQgdgRgegOIgbgNQgwgegzgYQgdgLgegIIACgBIgdgHIgBAAIgEgBIABAAIgVgEIgRgEQgqAOgqARIgFACIgaALIAogLIAXAFIglANQhQAhhLAtQhjBAhZBYQhlBmhGBzQh7DfgCESIAAALQACBPAMBLQAqFUD+D8QDNDLEDBCIgvAMIgHACIggAGIgLgCIhFgSQAiAMAjAKIAKgCIABAAIAhAHgAGXu8Qg3gYg5gRQg8gQg/gIIAmgFQgdAAgeACIgaACIgQgCIgBAAIgEAAQgigCgiAAIARAFIAVAEIgDAAIgEABIAYAJIARgEIAggGIAQgCQCEAPB3AwIAAAAgAhjvkIgFACIAGgCIAFgCIgGACgAi3vvQAmADAlAGQAngPAngMQhPAEhKAOgAlYvyIAXgBIAlgKQgeAFgeAGIAAAAgAhtwJQAhAAAhACIAQABIAJACIgDAAIANACIAQADIACAAIALgCIgJgBIgcgDIgLgBIg3gHIgKABIgcADIAGAAIAFAAg");
	this.shape_4.setTransform(568.1583,380.9101);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F1409").s().p("ABePdQg8gGg4gOIgnACIgLAAIgYgDIglACIgsAAIgNgBQgpAHgqAEQgpADgrAAQkUABjaiCQhig6hZhWQhLhKg4hTQgtg5gihAQg5hjgZh1QgUhNgBhTIAAgLIAAgBQAAhoAahkQAkiXBUiEQA5haBQhPIAcgcQCOiICrhFIAagLIAlgMQBagrBjgYIAQgEQBOgQBYgLQBCgGBAABQArAFApALIANABQA8gQA9gJQBPgMBVABIAzAGQAugDAwAAIASABIARAAQA3AAA0AFQFDAgDwDrQEWERAFGDIAAAjQgGCGgnB4IgFATQglCthkCNQgnA6g0A1QhLBOhWA1Qi7B8jdAYQgqAJgrAFIgrACQglAGgnACIg2AFQgvAEguAAQgeAAgegCgAhYOxIgJACIgEACIgOAEIAZgBIAdgCQAngCAkgGIAMABIAkgBIgSgEIgeAEQgdAAgdgDIgsAGgAm1uPQglAMgjAPQirBIiNCNQkbEdAAGNIAAAFIAAAGQADFqDyEIQAUAWAWAUQC0CyDiBBQBCAJBFABIAvAFIASgBIgTgFIgoABIgGAAQkvgsjjjkQkNkPgGl9IAAgTQAAmHETkXQBChBBIgzQBRg2BXgkQA6gXA9gPIg4ADgADiOiIgjAJQAnADAoABQA6AAA4gFIAXAAIATgBQAfgFAegGIBlgXIAPgEQAdgQAdgSQiCA6iTAPQgigBghgDQglgDgkgGIgBABIgNACIALgDIAOgGIgVAEIgxgJQAogOAlgRIgXgDIgrgIQgfAQghAMIAfAIIAWAGQgbAJgcAIIACABIATAEIAOAEIAPgCIAygKIgEACgABjOeIgoAJIAjAGIAkgKIAAAAIgXgHIgIACgAiMOnIANAFIAJgBQAYABAYgBIARAAIgMgBQAagJAZgKIgIgDIgEgCIgEgBIgGgCIAGACQgnALgnAHIgEABQgmgGgmgJIAwASgAAOOKIApALIAPgFIgmgOIAmgTIAwAQQAfgMAfgPQgdgGgbgIQCQhHB6h+QEQkZgCmLQgBl+kDkVIgqglQhIg9hNgtQgagPgcgMIgagKQgWgPgXgOIAIgDIgagKIgDACIgZAJQghANggAQIAaAJQiPBFh5B6QkREVAAGFIAAAAIAAAKQABAyAGAvQAkE+DsDqQCVCSCzBEIgrAQIgXAIQhcgchVgwQBGAyBLAkIAggKIALADgAg8uBIghAQQgkAUgkAXQgsAdgpAjQBTg5BbglIALgFIAOAFQAYgOAZgMIAwgNIgMgEIgZgIIgBAAQgiAKgiAMgAF3tnQg4gZg8gSIgqgJIgkgGIgKgCIgRAFIgBAAIgUAFIgfAJIAgAJIAfgIIAkgJQBbAQBTAhgAJVtvQg8gjhCgXIgEgBIgBgBQgjgBgjAAQg5AAg3AHIgiAAIAMADIAWgDQAkAAAiACQCBAKByAqIAAAAgAjRuIIAFAAIAJgEIgOAEgAlXuSQAoAAAnADQA6gRA/gLIASgDIgLAAQhMAAhIAJQgxAHgwAMIAWAAIAIAAIAIAAgAAPuiIAVAEIAAAAIAXgFIAJgCIAGgBIABgBIgdgFIgUAHIgfAAIgNgBQgegEgfgCIgMgBQAbAEAbAGIAYgBIAIgBIAUADg");
	this.shape_5.setTransform(535.35,351.776);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#26180A").s().p("ACcOOQhSgJhMgUQgjADgkAAIgKABIgdgEIgwACIgoAAIgvgDQg0ALg1AFQgmADgnAAQj6ACjGh1Qhag1hQhNQhChAgyhIQgrg0ghg6Qg3hZgahsQgUhHgChMIAAgLIAAgBQAAhfAbheQAjiLBQh5QA9hbBVhOIAEgEQCCh8Cbg+IAjgNIAigLQBQgoBWgYIAagHQBIgQBRgOQA8gGA6gCQAvAHAqANQAhABAfADIAWABIARABQBKgZBQgLQBKgLBPABIA5AJQA4gGA7ABIASACIAXgBQAyAAAvAEQEkAdDYDTQD9D2AGFcIAAAgQgGB5gkBuIgLAsQghCYhWB8QgiA0gtAvQhDBGhMAvQiyB3jSAVQgnAIgnAFQgdACgdABQgmAHgpACIgxAGQg8AGg4AAIgZAAgAi9NhIALgDIANAAQAsABArgEIgvgFIgoADIgNAFIgZgBIAOAEgADnNEIgUAEIAIADQAqAMAsAIIAfgBQBNgEBFgNIgkgBIgngCQg6gFg3gMQgfAHggAEgAhcNTIAUAIQAlgEAjgGIgrgDQgYAEgZABgAmvsyIgjABIgmAPQiaBCiBCAQkBEDAAFpIAAAFIAAAFQADFJDcDwQASAUAUATQCdCaDDA8QA0AGA2ABIAUAAQkJgrjHjJQjzj2gFlYIAAgRQAAliD4j8QA8g8BBguQBIgwBQggQAlgPAlgLIA1ACQApACAnAGIAyAJIAgAIQAegSAfgOQAjgHAlgFIgcgHIgYgGIgLgCIgBAAIgdgBQg+gBg7AHQhFAJhBASIgGAAIgHAAgAiLNAIgnAIIgMACIAtAIIAagKIAIgDQAngQAmgVIAIgEIgJADQgyAUg1ANIgDgBIACABgACOMHQAWAKAWAIQgZALgZAJIgZAJIAbAGQAaAGAcAFIAJgCIgtgQQAZgKAYgLIgTgHQAhgOAfgSQgegIgegKIgwAggADeNBQAbgFAagIIgQgEIglARgAgMMUIgOAIIAQgHIALgFIAmgTIAngWQAaAPAaAMQAagOAYgQQgegLgcgNQBOg1BGhJQD1kAgCllQgClgjwj+IgJgJIgSgSQhDg9hLgrIAbgNIAXgKIAIgEIgegMIgeAOIgXALIAZAOIgKAFQgqAWgnAcIgYgOQg/Atg5A4QhTBTg6BeQhgC0gCDbIAAAJQABBCALA+QAaCeBTCGQA2BXBQBNQBmBiB2A6IgmAdIgcAUIgHAEIggAWQgggOgfgRQAaATAbASgAiGrAQAhgWAjgTIAkARQAigbAlgXIANgIIAQgKIgLgDIgTAGIgUAIIgFACQgpARgoAVIgLgEQgdAVgcAYgAhjr2IgJAGIAJgGIAGgEIgGAEgAD2sxQAxAMAtASQgogTgqgOIgMADgAJfsdQgwgeg0gWIggAAQg7ABg3AHIgTAAQgkAAgjACIAfAIQAdgGAegEIArADQBrAIBgAhIAAAAgABgsqIABAAIACgBIgDABgAhWtPQAgADAgAFQAjAGAkAJIAcgNIgNgEQg3gNg4gHIgnAOgAhGtDIAWAHIgMgGIgEgBIgGAAgABqtHIgJACIAKgCIAKgCIgLACg");
	this.shape_6.setTransform(502.525,322.6839);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2C1C0C").s().p("AASMVQgzAHg1ACIgJAAIgfgGQgeADgfABIgkAAQgpgBgogGQg/ARhBAGQgiADgiAAQjiABixhoQhRgvhIhEQg4g2grg8QAqAvA1AnQAUAQAVAOQCiB+DRAQQA9AOBCAGQA1AFAyABQg7gIg3gPQjhgriuinIgdgcQjKjSgJkcIgBgHIAAgCQAIk+DgjkQBPhPBZg1QgeALgcAOQgoARgkAVQgjAUgiAYQgaASgaAUIgRAOIgQAPQgtAqgkAtQiWDKAAEEIAAAJQABDJBdChQATAhAXAfQgrgughg1Qg1hQgahiQgVhBgBhGIgBgKIAAgBQAAhYAbhWQAjiABMhuQA+haBZhKQBuhjCCg0QAYgJAZgIIAbgJQBKgmBPgZIAagIQBBgPBKgQQA2gHA2gEQAxAHArASIAPAAQArAAApAEIArABIAgADIAfgDQBUggBdgMQBEgKBJACQAgAFAeAHQBCgJBHACIASACIAdgBQAsgBAqAEQEFAaDCC7QDiDbAIE1IAAAcQgGBvgiBkQgHAhgKAfQgbCFhIBrQgeAugnAqQg6A+hCAoQinBzjHAQQgkAJglAFQgfADgfAAIgQAAQglAIgoADIgtAGQhBAJg/AAQhogJhggfgAjzMCIgBAAIACAAIgBAAIAAAAgAjkL8IABgBIAjgPIAjgSQAgAJAhAGQgYgMgXgNIAGgEIgIADQglgUgkgZQghgXgggaQiXh2hIibQhDiLgCinIAAgJQAAjQBaiyQBBiABuhrQAxgvA1gmQgbgLgcgIIAZgKQA5gWA8gNIAHAFIALgGIgEgCIgpgNIgOgFIgcgHIAEAAIgSgDIAOADIgFAAQgvAAgtAEQhZAIhQAcIgsgBIgCABQiMA8hzB0QjoDqAAFFIAAAEIAAAEQACEoDIDYIAiAjQCGCCCjA4QAkADAlAAIAqgBQjhgqiqitQjZjcgFk0IAAgOQAAk9DejiQA1g2A6gpQBBgrBHgcIAhgMQAhACAgAEQAoAFAnAJQAZAGAYAHQh3A1hnBhQjfDZgHE0IAAABIAAAIQAEE1DXDeQCQCTC3A2QgYAIgaAGIggAHIgMACQgmAFgoABIAlAHIAtgEIAbAEgAEzLxQAjAEAkABQBFABBAgJIgNgBQhRgHhKgWIgagJQggANgiAJIgcAHIgNgDIgSAJIAfgGIASADIAagEIAoAOgAgRLzQAaACAbABIAIAAQAfgKAegMIgagJQgvARgxALgADSKZQgXANgXAMIgpAUIAXAIIAjgSQAXgNAWgOQAbgQAZgTIgSgHQgYASgaAQgAiFLMQAwgSAtgYQAUgMAUgNQAWAOAYAMIgmggIgQgPIgKAJIglAcIgbATQgZARgaAPIAAAAgAhzmUQhUCggCDCIAAAIQACA9AKA7QAZCJBIB1QAxBNBHBEQAeAdAfAYIgbAeIgQARIgRAQIAXATQAZAVAbATQATgNATgQQATgPAUgQQgfgSgegVIAegfQDZjmgClAQgDlBjejnIgQgRIgMgLQAVgQAWgPIgcgQIgnAcIAYATIgEADQgrAhgpApIgXgTQhCBFgyBNgAhDpXIAHAEQAVgUAUgSQgYAQgYASgAD8rSQghAOghARIgeAQIAeARIAegRQAZgNAagLIAZgKIgogNIAHgCIgcgKIgLgEIgLAGIgIAEIAOgDIAlAJgABHq+IgRALIARAIIAkARIAbgUIgbgMIgZgLIgLAHgAhcriIAgAMQAvAKArAQQARgIASgHIAggMIAFgCIAggLIAIgEIgdgDQgcgBgcAAIgPgBQgpAAgnAEIgdgFIgZAMgAEkrFIAKADIgIgEIgCABgAJqrLQgjgYgmgTQg5ABg2AJIgjAAQgngBgmADIgTAGIAmAOQAugOAvgIIAUABQBWAHBOAZIAAAAg");
	this.shape_7.setTransform(469.725,293.6326);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#321F0E").s().p("AAnK3QhFANhFACIgIABIgkgJIgOACQgcADgcABIggABQg9gCg5gMQhIAZhNAHQgdACgfABQjIACiehbQhIgphAg9QgugsglgxQAoAnAwAgQASANAUAMQCTBqC/AFQA5AMA9AFQAyAEAuABQg0gIgxgQQjGgmiZiRIgagZQizi4gLj6IgBgFIAAgCQAJkZDGjJQBChCBKguQgdAJgcAMQgkAPgiASQggASggAVQgZAQgXARIgGAFQBbhLBpgqQAcgKAcgJIAYgGIAGgEQBCgkBGgZIAagJIB9ghQAxgJAwgGQAsAHAlATIANAGQAbgBAcAAQApAAAnAEQAhgBAhACIAjAFQAogFAogBIATgIQBTggBagMQA+gIBDACQAkAIAgAJQBMgOBTACIATADIAigBQAmgBAlADQDmAXCsCkQDIC/AIEOIAAAZQgGBlggBbQgHAlgLAjQgWB4g/BfQgZAoghAkQgxA2g4AiQicBvi/AMQggAIghAFQgbADgcABIgsAAQgiAKgnACIgoAHQg8AKg4ADQiAgKhxgsgAFwKNIAbAKQAbAKAdAHQBOgIBDgQIgIgBIgNgBQhigKhYglIgegNQgdAPgeAMQgXAJgXAHIAaAHQAWgEAVgHQAWALAXAJgAk0KhIgDABIAUADIgRgEIAogUIgKgFIgnAJQgbAEgbACQi4griNiPQi+jCgFkRIAAgMQAAkXDEjIQAugvAzglQA1giA5gXIgkgDQhqA1hZBYQjPDSAAEgIAAAEIAAAEQACEHCzDAIAfAeQBtBqCDAyIAiAMQAyAAA2gFIANgBIAPAEgAmYnaQjFC9gHENIAAAAIAAAIQACEPC+DEQBiBmB3AzIgjAXIgGACIACABQAlAOAoAJQAbgHAbgKQgqgLgngQQAXgKAWgMIgQgMIgPgLQiNhohEiMQhAh9gCiaIAAgJQAAi9BUikQA8h2BlhgIADgDQgmgWgogSQhCAog7A4gAgnKUIAGgBIgMgCIAGADgADMKQIgMgDIAdgHIgUgNIgYAPIAAAAIAPAFIAMADIAAAAIAAAAgAAqlrQgLAVgJAVQgyB5gDCNIAAAHQADA4AKA2QAWB1A/BlIADAGIgMAcQgMAZgOAZQgRAdgSAcQgOAUgQATQgRAWgUAVIASARIABABIACACIAGAFIAHAGIgHgGQAVgRAVgUIAbgcIAEgFQATgUARgVQAQgUAPgWIATgdQBningCjRQgCjMhmikIgUgfQgcAjgXAjgACeG9IAWAWQAaAZAbAVIAVgVIAOgOQgrgcgngkIgcAfgAACoZQgXAVgXAWQgYAYgVAZIAIAHIAPAPIAcAcIAUgjQAZglAfgjIgLgMIADgCIgPgMIgKgKIgBgBIgCACgAC6oQIAaAWIAfgaIgbgWIgeAagACrobIAcgbQAigeAlgaIgVgJIgpgRIgJAGQAXAFAWAHQgXAHgWAIQgXAJgXALIgLgGIgcAXIgOAMIASgKQAbARAaAUgAndpzIgLAFQAgADAeAGQAWgHAWgGQA1gaAugRQhnAHhbAjgAGYqRIgYAJIgmAPIAjASQA9gaBCgOQA/AGA6ARQgXgSgYgPIghgTIgPgCQhBAJg9AUgAg4qKIAJADIAIgFIgRACgAjxqgIACABIACAAQAbAIAaAKIAKgDIAggKQglgEgngBIgKAAIgRgDIAEACgAzGFmQg0hFgbhYQgUg8gChAIAAgJIAAgBQAAhQAbhPQAhh0BJhjQA+hVBahFIggAcQgoAlghAoQiFCzAADmIAAAIQACCzBTCPQATAhAXAeQgpgogggwg");
	this.shape_8.setTransform(436.9125,264.605);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#382310").s().p("AA8JXQhYAVhTADIgHABIgogMIghAFQgYADgZABIgcABQhRgDhJgVQhSAlhXAIQgaACgbAAQivACiJhOQg/gjg4g0QglgigegmQAkAfAsAZIAjAUQCEBWCugHQAzALA4AEQAvADArABIAHAAQgkgGgjgLIgLgFQizgfiJiBIgWgVQieifgMjWIAAgFIAAgBQAJj0CsivQA1g2A8gnQgdAJgbALQgiAMgfAQQgeAPgdASIgcARQgeAWgdAaQgjAfgdAjQh1CdAADIIAAAHQACCdBJB8QAUAhAYAeQgogigfgqQgzg8gbhOQgVg2gCg6IAAgIIAAgBQAAhJAbhIQAhhnBFhZQA8hOBYg9IAQgLQBCgwBLgdQAhgMAjgJQAlgYAngSQAhgQAjgLIAdgLQAzgPA9gUIBVgRQAiAGAcAQQAQAIAOALQAxgGAyAAQApABAmAEQArgCAqADQAVADATAEIAHgBQA7gIA9ABQAZgMAagKQBMgdBSgKQA4gHA9ADQAnALAiANIASgFQBNgRBWAEIAUAEIAngDQAhgBAgADQDHATCVCNQCtCkAJDnIABAVQgGBdgfBSQgIAsgOApQgQBngyBQQgVAigbAfQgoAtgvAcQiLBniuAKIgLABQgdAJgfAFQgYADgZABQglABgkgCIgDABQgeALgjADIgkAHQg1AMgyAEQiYgJiCg8gAnnovQgiAPgfATQhIAqg+A+Qi1C4AAD8IAAADIAAAEQACDmCeCoIAbAbQBVBSBlArIAcALQAkgBAngDIAEACIALgGIAggUQAWgHAWgJIgLgGIgLAHIgWAPQgVAGgWAFIgOACQiRgohxh0QikiogEjsIAAgLQAAjyCoitQAogpAsggQAagQAbgOQAZgNAbgKQBGgaBPgIIAcgCIAFACIAGgCIgLAAQgWgHgXgFIgXgFIgIgBQg+AOg4AZgAF5IGQAxAhA4AVIAEAAQBQADBJgRQhwgRheg5QgbATgdAPgAEYIUIAUARIATgGIgigNIgPgHIAKAJgAhIooQgcAGgbAJIgUAHIgXAJIgGADQhEAfg9AyIgfAaQipCigJDmIAAABIAAAGQACDqCjCqQAwAzA3AkQgXAVgXATIASAJQAcgOAcgRQAegUAegYQgRgPgPgQQgxg2ghg/Qg9hxgBiLIAAgIQAAisBMiVQAXgsAdgpQApg6A2gzIADgDIgGgGIgCgBIAJAGQAWgUAXgSIAggYIAIgGIAZgRIgIgDQgiADghAHgABhFGQgPAUgSATIAZAbQAcAdAdAYIgYAXIgXARIAQANIAWgRIAagWIAYgXIgOgTQgmgxgcg2IgKAMgAFEGAIgHAIIAJAJQAjAiAmAbQAXgSAVgVIAFgEQg1gagvgnIgYAegADZFrIAQAWQATgXAQgZIgSgYQgPAagSAYgAg1kEIgBADQgOAdgLAdQANAYALAZQgRA+gDBFIAAABIAAAGQABBWAXBNQARA9AfA3QAeg5ASg+QgIgggEghQgQgtgIguIgBgGIgBAAQAJhnAehXQgNgygWgvIgSgkQgaAmgUAngABnmbIgIAIIAZAYIADgGIAYggIgSgRIgaAXgAHzo4IgIADQgsARgpAWIgSAMQgUAPgTAPIAgAXQAUgQAUgNQAkgXAngSQAqgSAsgLQAdAEAcAHIgWgTQgQgNgQgLQgsAJgqAPgAEAoTIATAIIgIADQAaARAYATIAMgMQASgQASgQIgegQIgagMIgMgFQgVAOgUAQgAstn+IAEgBIgDABIgBAAIAAAAg");
	this.shape_9.setTransform(404.125,235.555);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3F2711").s().p("ABOHyIgGABIgHABIgOAIQhdAYhSAEIgFABIgrgRIg1AJQgVAEgVABQgMABgMAAQhXgDhNgcQgVAAgUgBQhVAvhaAIQgVACgYABQiWACh0hBQg3gdgwgsQgbgZgXgbQAhAYAnARQAPAIARAHQB2BCCcgRQAuAIAzAEQArACAnAAIAKAAIgSgEIgjgPQiigXh7hyIgTgSQiJiFgMiyIAAgEIAAgCQAKjOCSiVQAlgnAqgeIAGgFQAkgYAngSQATgJATgHIAlgRQArgOA2gXIBLgUQAYAFATAOQARALAPARIAjAEIAFABIgIACQAeAHAbALIgKACIAkAPIAFgDIAQgIIgWgIQgkgLgmgHIAZgGQAsgGAxAAQAnABAmAEQA1gDAzAFQAYAEAVAGIAlgGQA1gHA1ACIAhACQAogWApgPQBFgaBKgIQAygGA3ADQArAPAjASQAegKAfgHQBDgOBLAEIAUAGQAWgDAXgBQAbgBAbABQCoARB/B1QCSCIALDBIAAASQgFBTgeBIQgHAygRAvQgLBYgnBCQgQAdgUAZQggAlglAVQh2BciUALIgnABQgZAKgbAGIgrADQgzADgwgEIgHgBIgNAHQgVAJgZACIggAJQgtAMgtAHQizgIiThSgABIHvIAXgPQgVAAgWgBIgHAAIAbAQgAlVHuQAwgEApgTQgmgZgkgaIgggXQgoApgrAeQhlgmhQhTQiKiOgEjIIAAgJQAAjMCPiTQAfghAigaIgYgGQglAbgiAjQidCeAADYIAAADIAAADQACDFCJCQIAXAXQA+A6BGAkIAYALIAQgBIAagRIALgDQAuAQAyAIgAKQHXQAYgEAXgHIgjgJIgMAUgAD5G/IABAAIgBAAIgIgFIAIAFgAjtmnQgeAYgdAcQggAggZAhQghAqgVAsQg0BpABCAIAAABIAAAFQAAByAoBlQAVA2AcArQAQAUAUAUIAcAZIAGAFQAcgTAagZQATgSASgUQAXgbATgdQBbiGgDitQgCh6gxhoQgehAgwg5IAKgIQgSgNgUgNIgCACgAG2EqIgZAfIgSATQAPARARARIALgJQATgSARgTQAUgWARgWQgYgRgWgUQgMAWgPAVgABHgWIAAABIAAAFQABBFASA/QAThGAChLQACgYgCgXQgBgwgIgtQgbBEgEBPgAEZmIIAMAOIAUgYIgJgFIgXAPgAivnRIgVAMQAZAHAWAKIAMAFIAhgOIAQgFQgSgIgSgGIgggKIgTAJgAKMnOIAEgCIgHgBIADADgAy1E1QgxgygahFQgWgwgCgzIgBgHIAAgBQABhBAbhBQAghcBChNQA3hFBRgzIAqgYIAMgHQg1AdgvArQgfAagZAdQhlCHABCqIAAAGQABCHBABpQAUAgAZAeQgmgcgggkgAjYA4IAAgHQAAhIAQhFQAKA/gEBCQgEAzgLAvQgHgmAAgpgAuZmPIgaAMQgVAJgVALQAhgSAjgOg");
	this.shape_10.setTransform(371.3,206.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#452B13").s().p("ACsG2QgYgMgWgNIgTgLIgcAGIgUADIgbACIgQALQhTAVhFAEIgFABIgngVIgFgDIgKADQgeAHghAGQgSADgSACIgTABQgkgBgigGIgCABQg2AThBgsQgoAAglgHQhUA4hVAIIglACQh9ADhhg0QgtgYgogjQgTgQgQgRQAeARAiALQAOAFAQAEQBnAvCKgdQAqAHAtACIBJACIAMAAIARAAIAlgBIAFgDIAPgLIAPgBIAHgBQAagHAZgLQA+gdA1g0IgTgPQgWgFgVgHIgFgBIgBgBQg7gYgbgmQg9g1gPg/IgBgCIAAgCQAEipBDiWIAFgMQARALAQANQBVBHAoBZIAAABQAIA2gFA7QgCAXgEAWQAIA7AVA3QAGATAIARQAagiATgkQAxhhgDh2QgChVgchJQgJgYgMgWQgag0gpguIgIgJIgUgOQgPgKgPgIQgUgLgVgIIghAPQhHAhg8A5IAZAKIgDADQhzB5AACnIAAAHQACCjBwB1QAmAoArAbQgRARgSAOIgIAGQgYACgZgBQgXAAgWgDQgqgVgjgeQgagTgSgVQgkgpgagyQgmhLAAhnIAAgEIAAgBQAAhgAehZQAbhOA1hFIATgYQgcgCgdAAQgmAAgkAFQgwAHgsAQQhNAdhCA3QgaAWgVAXQhTBwAACNIAAAFQABBwA2BWQAUAgAaAdQglgVgegeQgvgngcg8QgVgqgCgtIgBgGIAAgCQAAg5Acg6QAfhPA9hDQA1g7BKgpQASgLATgJQAZgMAZgJQAZgKAcgIQAcgIAdgGQAigaAlgSIAGgDQAWgNAYgLQAkgOAvgZIBBgYQAOAEAJANQAMALAIASQARACARADIAKAAIALgBIApAIIAPAEQAUgHAWgFQAmgFAnABQArAAApAGIAFgCQA7gDA0AGQAbAGAWAIQAggIAlgEQAsgFAtACQAkABAgAFQA2gjA6gUQA9gXBBgGQAtgFAwADQAnATAgATIAQAKQARgIASgHQAfgMAigHQA6gLBAAEIAWAIQAYgEAYgCQAXgBAVABQCKANBnBeQB5BtAMCaIAAAOQgGBJgdA/IAAACQgGA3gTAxQgGBLgcA1QgLAXgPATQgWAdgcAPQhgBQh7ANQggADgggBQgWALgYAGIglADQgsADgpgDQghgBgcgEQgJAIgHAGQgMAHgPACIgbAJQgoAOgmAJQihgDiFhDgAgVEvQgNAPgOAMQgQAMgQAKQgkAWgmANQAUAHAVAFQAggPAdgUIAdgWIAZgYIgRgVIgGAGgAKYErIAAAHQAwAiA3ASQAxgXArgnQAMgKAKgLQh5ADhhg6QgCApADAmgAFaEQIgBACQATATAVAQQAVgTASgTQgSgfgPggQgSAigbAegAHtAFIACAAIAAAEQADAzAPAuQABgZAAgZIAAgFQgNgbgHgdIgBAKgAFakbIgOANIAMANQARATAPAVQAKggAOgfQgLgPgMgNQgQALgPAOgAh8mFIggAVQAaALAZAPQAtAcAmAqIASATQAOgWARgVIgRgZIgGgHQgYgUgdgQQgegSghgNIgMAGgAJol9IAKAAIAcABIAGABIgSgZIgaAXg");
	this.shape_11.setTransform(338.5,177.465);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4B2F15").s().p("AENF7QgVgJgVgKQg1gYgnggIgxAOIgQADQglAFgigBIgRAPQhLARg3AFIgFABIgdgWIgNgOQgXAJgYAHIgyAMQgPADgOACIgPABQg2gBgwgPIgxAdQgoAJgyg1IgIAAQgbgJgXgLIgcAAIALgJIAGgGQAaAAAZgDQASgGARgIQAYgMAWgQQgSgPgRgRIgRgUQAig6AOhFIAFgbQADgcgBgaQAOhfAihZQAIgYAMgWIALgHQgOgWgRgUIAPgGIAOgEIgigRIgDABIgNAHQg3AdgtAuQgbAbgUAfQg7BXAABqIAAACIAAACQABCBBcBdQgOARgRAQIgSASIgFAAIgNgBQgQgKgPgMQgWgOgOgQQgegggXgpQgeg7gBhWIAAgDIAAgBQAAhOAXhIQARg0AcgvIAQgXQAOgUAOgSQAqgVAtgNQAhgJAigEQg9gRhKALQg/AHg3AeQgwAYgpAoQg3ADgwARQg/AWg1AqQgUAQgSASQhDBaAABvIAAAEQABBaAsBDQAWAgAdAbQAZAKAdAEQAMADAOACQBYAbB5goQAkAEAoACIBBABIALAAIAPAAIgUAPQhMA6hGAHIgeACQhkADhMgnQglgSgggbIgPgOQglgNgggYQgtgegbgyQgXgkgCgnIgBgFIAAgCQAAgxAcgzQAfhEA5g4QAwgwBFghQARgIARgGQAWgJAWgHQAWgIAagFQAbgGAcgFIAHgFQAtgiAugcQAegOApgbIA1gbQAFAEgCAKQAEALgBATIALgEQANgEALgBQAqAHApAOIAAAAIANgBIAgAJIAaAKQAbgMAfgIQAegDAgAAQA3ABAwALIAVgKQAzgBArAIQAdAGASALQAngJAogHIABABIAagDQAlgDAkACQAkACAdAFQASAEARAGQARgOASgMQA1gjA4gTQA3gTA5gFQAngEArAEQAeAUAZAUQATAQAQAWIAZgTQAegVAjgMQAagKAcgFQAvgIA2AFIAXALQAagHAbgCIAhgBQBrAJBRBGQBfBSAMBzIAAALQgFA1gVAvIAAAIQgEAVgHAVIgCAGQgFApgRAlQABA8gSAoQgGARgIAOQgOAVgTAIQhKBFhhANQgtAHgtgFQgUAMgUAIIgfADQgkADgjgBQgzAAgggJQgVgTgTgXIgHABIABAUIgBAYIgFAQQgCAGgFABIgXAKQghAPggAMIgIAAQiJAAhygxgAijisIAMATQAHApgBAsIAAAgQgEA5gRA4IgbAaQAVAvAkApQARATATAQIgNAOIgVAWQgOAKgPAIIAYASQASgMAQgNQAQgNAOgPQgNgJgMgKQBIhbABh4IgBgUQgGh2hQhVIgHgIQgYAVgSAXgALtjQQhJBQgJBsIgBAZIABAAIAAADQAJByBZBRQAeAbAhASIATgPIASgSQATgWAOgYQAnhCAFhQQACg8gQg0QgSg4gnguQgggmgngYQgbATgYAagAFugcIAAABIAAADQABBfAwBLQALgWAGgXQABgUAAgVIgCgoQgGhPgehHQgYAvgFA3g");
	this.shape_12.setTransform(305.7,148.4205);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#513317").s().p("AFtFAIgkgNQhYgfgvg4QgVgDgZgMIg3AWIgMAEQg+AMg9gCIgLAPQhCAOgqAFIgEABQgJgMgKgLIgVgjQgkAYgvAPIgnALIgUAFIgMABQhBgCg3gbIgUALQg2AcglAVQgfgBgrhWIhHAAIgJAAIgTAAQgUAVgUAPQg6AugwAGIgWABQhLADg3gaQgZgKgWgQQAUACAVAAIAYgBQBJAHBngzQAfADAkAAIAlAAIABgBIASgTQATADAUABIATAAIgNgLQgMgMgKgNQgLgOgKgQQgYgrAAhFIAAgCIAAgBQAAg7APg5IABgBQAOgyAagtIAUgfQAggOAjgHIAVgEQg7gchQATQgsAIgoAYQgnAWghAkIgQASIgWAAQg0ABguAPQgvAPgoAcQgQALgNAMQgzBDAABSIAAADQABBEAjAwQAVAdAeAXIAFAEQgmgFgggSQgugUgagoQgXgegDghIAAgEIAAgCQAAgqAcgtQAeg2A1gtQAsgnA+gXQAQgGAPgEIAngKQAUgFAWgDQAYgEAZgBIAFgFQAlghAmgcQAWgNAigdIAYgRIgRAUIAKgGQAKgGAJgEQAlACAkAIQA1ALAtAUIAFACIAHAAIAWAKQASAJARAMIAVgMQAagNAdgJQAXgCAYABQA/ABAzAQIAJADQAUgNAQgHQArABAjAIQAXAHAOALQAegMAigKQARACAPAFQAYgFAfgBQAdgBAbABQAcADAVAEQAbAGAZANQANAHANAKQAQgSASgQQAagWAdgSQAugdAvgQQAwgQAwgDQAhgCAlAEQAXAWASAUQARAVALAhIAigDIAfgBIAAAAQAZgcAbgSQAZgRAbgKQAWgHAWgDQAmgGArAFIAYASQAcgMAegEQALgBAMAAQBMAGA5AuQBFA3ANBMIABAHQgFAjgOAgQgCAlgGAjIgNAcIgEAGQgGAbgMAYQAGAvgHAbQgBAMgDAIQgFAMgIACQg1A6hIAOQg6ANg5gQQgRAQgSALIgYADQgcADgcAAQgrADgXgGQgXgbgUgiIgFACIgNAEQg5ALg6gBQAJASANAOQAGAKAHAHQAFAIAJAEQAHAEAEABIgRALQgbAQgaANIglABQhlAAhXgcgAoACZQAaAcAfASQAFgoACgzQAGhVgHhZIgCgXQgEgmgIgfQgGgXgKgQIgDgEQgFgJgHgHQgdATgZAZIgDACQhQBUAABqIAAABIAAACQABBGAlA3QANgOALgRQAJgNAHgNQAPAiAaAdgANKglQgEAVAAAVIACAAIAAACQAGA4AjArQAQgiAFgnIABgJQADgpgKglQgIgfgSgbQgVAjgHAogAJMicQg/AzgMBKIAAABIAAACQABBDAgA2QAAgSACgTQAEgyAOgtQAHgYAJgXQAchGAmggQgfAKgdAWgArfkvQAKgIAGgCIgTANIADgDg");
	this.shape_13.setTransform(272.9,119.3878);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#583718").s().p("AHPEEIgggHQhVgTgqgvQgigjgKgvQgYAZg0AbIgEgEQgRgFgagiIgkAVIgIAEQgtARgzANQgPgGgNgIQgRgJgLgKIgIgXQgJAhgMAYIhVARIgDABIgJgYQgQg4gVgkIgGAMQgKASgNAOQgHAKgIAGQgaAWgrAQIgZAJQgHADgHACIgIACQhHgCg3gsIgJgHIgDgDIgFAEQgcAUgbAPIAAAOIgiAPQgxAVgdAQQgPgNgZhfIg8gBIgHAAIgwABIgaAAQAOgUALgWQAoATAxAEQAMABANgBQAOgLALgPQgIgYAAgjIAAgCQAAgoAIgqQAHglAOgiIACgFQgJgWgNgUIgCgEQgjgJg1AWQgZAJgYARQgXAQgUAYQgYAagPAgQgmgJgoABQgiABgeAIQgfAIgcAPIgVAMQghAtAAA1IAAACQABAtAZAeQAPARAUANQAQAKASAGQgrAJgmgLQgrgKgbgfQgYgYgCgaIgBgEIAAgCQAAghAdgnQAcgqAygjQApgcA4gOIAbgFQARgDARgCQAQgCAUAAQAVgBAVAAIAEgEQAcgfAdgcQAPgNAbggIAgghQgPACgUAGQgTAGgWAKIAHgIIAPgOQAhgEAfABQAvABApAKQAVAFAUAJQARAJALANQAHAJAGAMQASgCASAAIAMAMQAPARAOAUQAQgKAOgHQAJgGAJgBIAIgBIAQgKQARgKAUgIIAgAAQAsACAiAIQASADAPAGIAVgIIANAYQAegZASgMQAlAEAZAIQATAIAIALIAwgcQAiAEAZAMIAJAFIASgOQAGgCARAAQARgBAXAAQAVABASACIAjAFQASAFAQAKQAUAMANAUQAJAMAGAQQAGANAEAPQAHAXAEAZQALgsAYgqQAeg1AvgnQAWgTAYgOQAngXAogMQAngNApgBQAbgCAfAFIAbAsQAKAfAAAzQAPgNARgMQAGgCARAAQAQgBAXAAQAVABASACIAXADIAAgBQAMgTAOgQQASgVAVgOQASgNAVgHQAQgFARgCQAcgDAgAGQAMASALAKIACAIQAKgHAKgHQAUgNAXgHIAMgCQAtADAkAXQApAbAPAlIABAEQgHAagOAXIAFAOIAEAPQAFAQAEAVIgaA1IgPAQIgIAGQgFAKgGAJIgCADIARAyIAHAIQABABAAAAQABABAAAAQABAAAAAAQABAAAAAAQgfAsgtAPQgnAOgqgIQgmgHgZgRQgMAbgOARIgSADIgpAGQgjAEgPgBQgNgcgLggQgOgJgSgYIgkAVIgIAEQgtARg0ANQgPgGgNgIQgQgJgMgKQgGgPgHgYQgKgpAAgnIAAgCIAAAAQAAgyAUglQAOgbAegdIAHgGIgHgYIgCAAQgcgFgeALQg0AQggA3QgLASgHATQgPAlgCApQgCAjALAbQAKAdAiAaQANAMAQAKQAUAQAaAKQAPAHAOAFQAOAEASADQASADAOAAIgOALIgoAiQgoAEglAAQg7AAg1gKgALvhtQgVAEgUALQglAXgNAkIAAABIAAABQABAxAcAnQAcAoAnAMQAnANAcgQIAGgEIAGgHQgNg0gFg3IgagMIgBgBIgBAAQAPgpAQgeQgIgFgIgDIgHAAQgQgEgPAAIgPABgABEhtQgMACgLAEIADAKIABAIQAGAWADAgQABAWACAKIAFAcQgMAagYAbQATASAYAHQAnANAcgQIAGgEQAdghAHgrQAEgYgEgTQgDgXgLgSQgSgjgdgLIgHAAQgQgEgPAAIgPABg");
	this.shape_14.setTransform(240.075,90.4869);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5E3B1A").s().p("AGZCeQgtgkAAg6QAAhAAlg+QAlg/BAgjQBAgjBAAAQAWAAAZAGIAMAuQgEAngUBFQgQglgRgfQgpgQgpAAQhBAAglAnQglAnAAAzQAAAcAQAUQAPAVAsASQArARBCAIQAWAEAWABIAzADIAzABIglAxQhSAPhJABQhgAAgsgmgAzYCeQgbgVAAgWQAAgaAcggQAcgfAugYQAugWBAAAIAdABIAfADIAjAEIAqg9QAMgSAmhBQgZABgeAEQgeAEghAFIAFgKIALgTQBHgWA+gBQAUAAASAFQARADAKAKQALALAGASQAGAUADAcIATCGQAIA8AKAgQhDAUgcAOQAAgYgHhqIg1gCIgoACIguADQhQBXgxAdQgxAdgrAAQgqAAgbgVgAyKAqQgRAYAAAXQAAAXAQAMQARALAWAAQARAAAdgFIAZgbQAVgWAsgyQhoADhGAIgAubgGIAuAGIBAAMQgIhCgShLQgXAqg9BRgAPEgmIgcADQATghANgSIgDglQASggAXgPQAWgQAaAAQATAAAVAGIAFAdIgLAoQgfgXgWgHQAAAfgBAGIgCAPIAeAAIAjgBIgMAqIgHAAIgMACQgMABgUABIABAsQABBDACAlIgnAKQgaAGgGADgAhhA3IAAgFIABgeQAAgdgGgNQgGgOgNgNIgMAaIABAsQAAAigBAaQgxAIgQAGIABgYQAAhegWgXIgOAXIADBqQg6AGgUADQAGhCAAhNIAAgaQAcgEAogNIAAAiIAhgiQA3ALAIAYQANgQASgTQAbACATAHQASAJAHANQAHAMAAAXQAAARgCAaIgCAZIABAWQgZAXgtAZQADgRACgmgANPATQgEAFgRAUQgRASggAhQgZgHgNgGIgDgZQgEgZAAgWQAAgdANgWQAMgUApghIAmAIQAfAFAKADQAKAEAJAIQAJAIAEAOQAEANAAAZIgBA8QAAALADAPQgUADg0APQAEgdAAgygAMhAmQAMgMALgQQAMgPAIgOQgMgRgjgHgABzATQgEAFgRAUQgRASggAhQgZgHgNgGIgDgZQgEgZAAgWQAAgdANgWQAMgUApghIAmAIQAfAFAKADQAKAEAJAIQAJAIAEAOQAEANAAAZIgBA8QAAALADAPQgUADg0APQAEgdAAgygABFAmQAMgMALgQQAMgPAIgOQgMgRgjgHgAnpBHQgigWAAgjQAAg2BNgzQAjADAYAAIAhAAIgMASQAQAFAKAQQAKAQAAAXQAAAVgJATQgIATgKAIQgKAKgZAMIgMAHQgGAGgFABQgpAAghgWgAnIgQQAAA1A4AMQAFgVAAgUQAAgfgPgOQgPgPgTgDQgMATAAAUgARzBSQgNgIgHgQQgHgOAAgrIACg3IAvgoIA5AEQAbACAMALQALAMAAAOIgBAQQgDALgCAXQgdAOgPADQgPACgOAAIgNgBQAVAaATAAQAXgBATgRIABAAQgVBCg4AAQgeAAgNgJgASUAAIAngCIABgNQAAgSgKgJQgJgKgPAAgAqGBSQgKgFgLgNQgMgMAAgjIABgxIACg8IA/AGIAEAxIAJgdQADgKAEgGQADgHAJgEQAIgEAMAAQANAAAPAGIgHAbQgFAVgIAbQgZgRgJgDQgRAXgDAKIADAdQATAHAOgBQgIAZgNAdQgsAAgKgEgASEh8IAig4IA6gDIhKBEg");
	this.shape_15.setTransform(208.275,61.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},58).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape}]},25).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).wait(77));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[65.6,-223.7,66,-224.5,67.1,-225.3,69.3,-226.8,72.3,-227,107.1,-229.2,143,-221.5,177.4,-214,210.1,-197.9,241.2,-182.6,270,-159.8,297.2,-138.2,321.5,-110.7,359.9,-66.9,382.1,-17.3,406.2,36.3,407.9,90,409.1,125.6,400.3,166.7,393.3,199.5,378.5,241.3,399.1,219.2,434.1,209,461.5,201.1,500.3,200,536.9,199,573.3,202.3,595.3,204.2,609.8,208,629.4,213,643,222.8,659.7,234.9,672,257.5,679.9,271.9,690.2,300.4,696.9,318.7,699.8,328.4,704.4,344.1,705.9,357.1,706.9,366.4,706.7,378,706.5,385,705.7,399,703.3,437.8,700.9,476.7]}},58).to({guide:{path:[700.9,476.6,700.2,487.1,699.6,497.6]}},1).to({_off:true},25).wait(92));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.RBGKopi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.RBGKopiMotion();
	this.instance.setTransform(191.8,259.4,1,1,0,0,0,191.8,259.4);

	this.instance_1 = new lib.rightKopiBG();
	this.instance_1.setTransform(0,0,1.5591,1.4098);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:188.05},0).wait(1).to({x:184.3},0).wait(1).to({x:180.55},0).wait(1).to({x:176.8},0).wait(1).to({x:173.05},0).wait(1).to({x:169.3},0).wait(1).to({x:165.55},0).wait(1).to({x:161.8},0).wait(1).to({x:158.05},0).wait(1).to({x:154.3},0).wait(1).to({x:150.55},0).wait(1).to({x:146.8},0).wait(1).to({x:143.05},0).wait(1).to({x:139.3},0).wait(1).to({x:135.55},0).wait(1).to({x:131.8},0).wait(1).to({x:128.05},0).wait(1).to({x:124.3},0).wait(1).to({x:120.5},0).wait(1).to({x:124.3},0).wait(1).to({x:128.05},0).wait(1).to({x:131.8},0).wait(1).to({x:135.55},0).wait(1).to({x:139.3},0).wait(1).to({x:143.05},0).wait(1).to({x:146.8},0).wait(1).to({x:150.55},0).wait(1).to({x:154.3},0).wait(1).to({x:158.05},0).wait(1).to({x:161.8},0).wait(1).to({x:165.55},0).wait(1).to({x:169.3},0).wait(1).to({x:173.05},0).wait(1).to({x:176.8},0).wait(1).to({x:180.55},0).wait(1).to({x:184.3},0).wait(1).to({x:188.05},0).wait(1).to({x:191.8},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.3,0,454.90000000000003,518.8);


(lib.MinumanBestSeller = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.TweenGelasKopiGambar("synched",0);
	this.instance.setTransform(97.95,127.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:796.65},58).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,894.7,247.8);


(lib.MenuButtons = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.EventsButton = new lib.EventsButton();
	this.EventsButton.name = "EventsButton";
	this.EventsButton.setTransform(1000,28.5,1,1,0,0,0,200,28.5);
	new cjs.ButtonHelper(this.EventsButton, 0, 1, 1);

	this.PromosButton = new lib.PromosButton();
	this.PromosButton.name = "PromosButton";
	this.PromosButton.setTransform(600,28.5,1,1,0,0,0,200,28.5);
	new cjs.ButtonHelper(this.PromosButton, 0, 1, 1);

	this.BestSellerButton = new lib.BestSellerButton();
	this.BestSellerButton.name = "BestSellerButton";
	this.BestSellerButton.setTransform(200,28.5,1,1,0,0,0,200,28.5);
	new cjs.ButtonHelper(this.BestSellerButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.BestSellerButton},{t:this.PromosButton},{t:this.EventsButton}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1200,57);


(lib.LBGKopi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.LBGKopiMotion();
	this.instance.setTransform(187.3,263.9,1,1,0,0,0,187.3,263.9);

	this.instance_1 = new lib.leftKopiBG();
	this.instance_1.setTransform(0,0,1.5233,1.4347);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:187.4,regY:264,x:190.4,y:264},0).wait(1).to({x:193.45},0).wait(1).to({x:196.5},0).wait(1).to({x:199.55},0).wait(1).to({x:202.6},0).wait(1).to({x:205.65},0).wait(1).to({x:208.7},0).wait(1).to({x:211.75},0).wait(1).to({x:214.8},0).wait(1).to({x:217.8},0).wait(1).to({x:220.85},0).wait(1).to({x:223.9},0).wait(1).to({x:226.95},0).wait(1).to({x:230},0).wait(1).to({x:233.05},0).wait(1).to({x:236.1},0).wait(1).to({x:239.15},0).wait(1).to({x:242.2},0).wait(1).to({x:245.25},0).wait(1).to({x:242.2},0).wait(1).to({x:239.15},0).wait(1).to({x:236.1},0).wait(1).to({x:233.05},0).wait(1).to({x:230},0).wait(1).to({x:226.95},0).wait(1).to({x:223.9},0).wait(1).to({x:220.85},0).wait(1).to({x:217.8},0).wait(1).to({x:214.8},0).wait(1).to({x:211.75},0).wait(1).to({x:208.7},0).wait(1).to({x:205.65},0).wait(1).to({x:202.6},0).wait(1).to({x:199.55},0).wait(1).to({x:196.5},0).wait(1).to({x:193.45},0).wait(1).to({x:190.4},0).wait(1).to({x:187.4},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,432.6,528);


(lib.BGBijiKopi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.LBGKopi();
	this.instance.setTransform(209.6,263.9,1.119,1,0,0,0,187.3,263.9);

	this.instance_1 = new lib.RBGKopi();
	this.instance_1.setTransform(1424.9,264.4,1.128,1,0,0,0,191.8,259.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1641.2,528);


(lib.BestSellerIconClip = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.TweenIconBestSeller();
	this.instance.setTransform(50.5,35.5,1,1,0,0,0,50.5,35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:0.5504,x:50.45,y:35.55},0).wait(1).to({rotation:1.1009,y:35.5},0).wait(1).to({rotation:1.6513,x:50.5,y:35.55},0).wait(1).to({rotation:2.2018,y:35.5},0).wait(1).to({rotation:2.7522},0).wait(1).to({rotation:3.3026,x:50.45},0).wait(1).to({rotation:3.8531},0).wait(1).to({rotation:4.4035,y:35.55},0).wait(1).to({rotation:4.954,x:50.5,y:35.5},0).wait(1).to({rotation:5.5044,x:50.45,y:35.55},0).wait(1).to({rotation:6.0548},0).wait(1).to({rotation:6.6053,y:35.5},0).wait(1).to({rotation:7.1557,x:50.5},0).wait(1).to({rotation:7.7062},0).wait(1).to({rotation:6.7062,x:50.45},0).wait(1).to({rotation:5.7062},0).wait(1).to({rotation:4.7062,x:50.5,y:35.55},0).wait(1).to({rotation:3.7062},0).wait(1).to({rotation:2.7062,x:50.45},0).wait(1).to({rotation:1.7062,x:50.5},0).wait(1).to({rotation:0.7062,x:50.45,y:35.5},0).wait(1).to({rotation:-0.2937,x:50.55},0).wait(1).to({rotation:-1.2937,y:35.45},0).wait(1).to({rotation:-2.2937,x:50.5},0).wait(1).to({rotation:-3.2937,y:35.5},0).wait(1).to({rotation:-4.2937,y:35.45},0).wait(1).to({rotation:-5.2937,x:50.55,y:35.5},0).wait(1).to({rotation:-6.2937},0).wait(1).to({rotation:-7.2937,y:35.45},0).wait(1).to({rotation:-6.795,y:35.5},0).wait(1).to({rotation:-6.2962},0).wait(1).to({rotation:-5.7975,y:35.45},0).wait(1).to({rotation:-5.2988,y:35.5},0).wait(1).to({rotation:-4.8001,x:50.5},0).wait(1).to({rotation:-4.3014,y:35.45},0).wait(1).to({rotation:-3.8026,x:50.55},0).wait(1).to({rotation:-3.3039,x:50.5,y:35.5},0).wait(1).to({rotation:-2.8052,x:50.55},0).wait(1).to({rotation:-2.3065,y:35.45},0).wait(1).to({rotation:-1.8078,x:50.5,y:35.5},0).wait(1).to({rotation:-1.3091,x:50.55},0).wait(1).to({rotation:-0.8103},0).wait(1).to({rotation:-0.3116},0).wait(1).to({rotation:0.1871,x:50.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.2,-6.4,109.60000000000001,83.9);


(lib.BannersMenus = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.BestSellerBG = new lib.BestSellerBG("synched",0);
	this.BestSellerBG.name = "BestSellerBG";
	this.BestSellerBG.setTransform(598.5,143.5,1,1,0,0,0,598.5,143.5);

	this.timeline.addTween(cjs.Tween.get(this.BestSellerBG).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1197,286.9);


(lib.Scene_1_MenuButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// MenuButton
	this.instance = new lib.MenuButtons("synched",0);
	this.instance.setTransform(699.75,562,1,1,0,0,0,600,28.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.EventsButton = new lib.EventsButton();
	this.EventsButton.name = "EventsButton";
	this.EventsButton.setTransform(1099.75,562,1,1,0,0,0,200,28.5);
	new cjs.ButtonHelper(this.EventsButton, 0, 1, 1);

	this.PromosButton = new lib.PromosButton();
	this.PromosButton.name = "PromosButton";
	this.PromosButton.setTransform(699.75,562,1,1,0,0,0,200,28.5);
	new cjs.ButtonHelper(this.PromosButton, 0, 1, 1);

	this.BestSellerButton = new lib.BestSellerButton();
	this.BestSellerButton.name = "BestSellerButton";
	this.BestSellerButton.setTransform(299.75,562,1,1,0,0,0,200,28.5);
	new cjs.ButtonHelper(this.BestSellerButton, 0, 1, 1);

	this.backButton = new lib.BackButton();
	this.backButton.name = "backButton";
	this.backButton.setTransform(1047.2,954.75,1,1,0,0,0,114.2,23.2);
	new cjs.ButtonHelper(this.backButton, 0, 1, 2, false, new lib.BackButton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},99).to({state:[{t:this.instance}]},5).to({state:[{t:this.BestSellerButton},{t:this.PromosButton},{t:this.EventsButton}]},1).to({state:[{t:this.BestSellerButton},{t:this.PromosButton},{t:this.EventsButton},{t:this.backButton}]},59).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(99).to({_off:false},0).to({alpha:1},5).to({_off:true},1).wait(71));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Menu = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Menu
	this.instance = new lib.BannersMenus("synched",0);
	this.instance.setTransform(698.5,770.5,1,1,0,0,0,598.5,143.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.MinumanBestSeller("synched",0);
	this.instance_1.setTransform(223.75,770.15,1,1,0,0,0,98,127.5);

	this.instance_2 = new lib.NamaKopiBestSeller("synched",0);
	this.instance_2.setTransform(394.2,763,1,1,0,0,0,241.2,95);

	this.BestSellerBG = new lib.BestSellerBG("synched",0);
	this.BestSellerBG.name = "BestSellerBG";
	this.BestSellerBG.setTransform(698.5,770.5,1,1,0,0,0,598.5,143.5);

	this.instance_3 = new lib.PromosBanner();
	this.instance_3.setTransform(103,617,0.2716,0.2679);

	this.instance_4 = new lib.UpcomingEvents();
	this.instance_4.setTransform(100,617,0.262,0.2694);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},99).to({state:[{t:this.instance}]},5).to({state:[{t:this.BestSellerBG},{t:this.instance_2,p:{startPosition:0}},{t:this.instance_1,p:{x:223.75,y:770.15}}]},1).to({state:[{t:this.BestSellerBG},{t:this.instance_2,p:{startPosition:59}},{t:this.instance_1,p:{x:932.8,y:769.8}}]},59).to({state:[]},1).to({state:[{t:this.instance_3}]},4).to({state:[]},1).to({state:[{t:this.instance_4}]},4).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(99).to({_off:false},0).to({alpha:1},5).to({_off:true},1).wait(71));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_BestSellerIcon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// BestSellerIcon
	this.instance = new lib.BestSellerIconClip();
	this.instance.setTransform(890.15,863.05,1,1,0,0,0,50.5,35.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(164).to({_off:false},0).to({_off:true},2).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Footer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(656.4,455.45,0.5,0.5);

	this.BGBijiKopi = new lib.BGBijiKopi("synched",0);
	this.BGBijiKopi.name = "BGBijiKopi";
	this.BGBijiKopi.setTransform(820.6,263.9,1,1,0,0,0,820.6,263.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.BGBijiKopi},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1641.2,528);


(lib.Scene_1_Bijikopi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Bijikopi
	this.instance = new lib.Footer("synched",0);
	this.instance.setTransform(709.05,746.9,1,1,0,0,0,820.6,263.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(99).to({_off:false},0).to({alpha:1,mode:"independent"},5).wait(72));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.AromaCafe = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [99,104,105,143,149,152,155,158,164,165,175];
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_99 = function() {
		if(this.playButton.parent == undefined || this.playButton.parent == this)
		this.playButton = this.playButton.playButton;
	}
	this.frame_104 = function() {
		if(this.playButton.parent == undefined || this.playButton.parent == this)
		this.playButton = this.playButton.playButton;
		if(this.pauseButton.parent == undefined || this.pauseButton.parent == this)
		this.pauseButton = this.pauseButton.pauseButton;
		this.pauseButton.visible = false;
		this.playButton.visible = true;
		
		this.playButton.addEventListener("click" , playBSound.bind(this));
		
		var playingS = false;
		var pausedS = false;
		
		createjs.Sound.registerSound("aset/lagu_kopi_2.mp3", "Music");
		
		function playBSound(){
		    if(playingS == false){
		        window.sounds = createjs.Sound.play("Music");
		        playingS = true;
		        this.pauseButton.visible = true;
		        this.playButton.visible = false;
		
		    }
		    if(pausedS == true){
		        window.sounds.paused = false;
		        playingS = true;
		        pausedS = false;
		        this.pauseButton.visible = true;
		        this.playButton.visible = false;
		    }
		}
		this.pauseButton.addEventListener("click" , pauseBSound.bind(this));
		
		function pauseBSound(){
		    if(playingS == true){
		        window.sounds.paused = true;
		        pausedS = true;
		        this.pauseButton.visible = false;
		        this.playButton.visible = true;
		    }
		}
	}
	this.frame_105 = function() {
		this.BestSellerButton = this.MenuButton.BestSellerButton;
		this.PromosButton = this.MenuButton.PromosButton;
		this.EventsButton = this.MenuButton.EventsButton;
		this.BestSellerBG = this.Menu.BestSellerBG;
	}
	this.frame_143 = function() {
		this.instagram = this.insta.instagram;
	}
	this.frame_149 = function() {
		if(this.facebook.parent == undefined || this.facebook.parent == this)
		this.facebook = this.facebook.facebook;
	}
	this.frame_152 = function() {
		this.instagram = undefined;this.instagram = this.insta.instagram;
	}
	this.frame_155 = function() {
		this.twitter = this.twit.twitter;
	}
	this.frame_158 = function() {
		if(this.facebook.parent == undefined || this.facebook.parent == this)
		this.facebook = this.facebook.facebook;
	}
	this.frame_164 = function() {
		this.BestSellerBG = undefined;this.BestSellerButton = undefined;this.PromosButton = undefined;this.EventsButton = undefined;this.twitter = undefined;this.twitter = this.twit.twitter;
		this.BestSellerButton = this.MenuButton.BestSellerButton;
		this.PromosButton = this.MenuButton.PromosButton;
		this.EventsButton = this.MenuButton.EventsButton;
		this.backButton = this.MenuButton.backButton;
		this.BestSellerBG = this.Menu.BestSellerBG;
		this.instagram.addEventListener('click', goInsta.bind(this));
		
		function goInsta(){
			window.open('https://www.instagram.com/?hl=id');
		}
		
		this.facebook.addEventListener('click', goFacebook.bind(this));
		
		function goFacebook(){
			window.open('https://web.facebook.com/watch');
		}
		
		this.twitter.addEventListener('click', goTwit.bind(this));
		
		function goTwit(){
			window.open('https://twitter.com/explore')
		}
		this.stop();
		
		this.BestSellerButton.addEventListener("click", BestSellerFunct.bind(this));
		
		function BestSellerFunct()
		{
			this.gotoAndStop(164);
		}
		
		this.PromosButton.addEventListener("click", PromosFunct.bind(this));
		
		function PromosFunct()
		{
			this.gotoAndStop(169);
		}
		
		
		this.EventsButton.addEventListener("click", EventsFunct.bind(this));
		
		function EventsFunct()
		{
			this.gotoAndStop(174);
		}
		
		this.backButton.addEventListener("click", backFunct.bind(this));
		
		function backFunct()
		{
			this.gotoAndPlay(104);
		}
		
		this.stop();
	}
	this.frame_165 = function() {
		this.BestSellerBG = undefined;
	}
	this.frame_175 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(5).call(this.frame_104).wait(1).call(this.frame_105).wait(38).call(this.frame_143).wait(6).call(this.frame_149).wait(3).call(this.frame_152).wait(3).call(this.frame_155).wait(3).call(this.frame_158).wait(6).call(this.frame_164).wait(1).call(this.frame_165).wait(10).call(this.frame_175).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(700,500);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(64).to({regY:0.1,scaleX:0.6781,scaleY:0.6781},10).to({regX:0.2,regY:0.2,scaleX:0.7606,scaleY:0.7606,x:700.2,y:500.15},5).wait(5).to({scaleX:1,scaleY:1,x:700.15},15).to({_off:true},1).wait(76));

	// cangkir_obj_
	this.cangkir = new lib.Scene_1_cangkir();
	this.cangkir.name = "cangkir";
	this.cangkir.setTransform(65.4,-221.5,1,1,0,0,0,65.4,-221.5);
	this.cangkir.depth = 0;
	this.cangkir.isAttachedToCamera = 0
	this.cangkir.isAttachedToMask = 0
	this.cangkir.layerDepth = 0
	this.cangkir.layerIndex = 0
	this.cangkir.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cangkir).wait(58).to({regX:59.1,regY:-193,x:59.1,y:-193},1).wait(25).to({regX:212.6,regY:-27.1,scaleX:1.3148,scaleY:1.3148,x:59.15,y:-192.95},0).to({regX:69.2,regY:-182,scaleX:1.0163,scaleY:1.0163,x:59.05,y:-193},14).to({regX:59.1,regY:-193,scaleX:1.0001,scaleY:1.0001,x:59.1},1).wait(77));

	// uap_obj_
	this.uap = new lib.Scene_1_uap();
	this.uap.name = "uap";
	this.uap.setTransform(70.9,-227,1,1,0,0,0,70.9,-227);
	this.uap.depth = 0;
	this.uap.isAttachedToCamera = 0
	this.uap.isAttachedToMask = 0
	this.uap.layerDepth = 0
	this.uap.layerIndex = 1
	this.uap.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.uap).wait(58).to({regX:62.1,regY:-278.6,x:62.1,y:-278.6},1).wait(25).to({regX:214.8,regY:-92.2,scaleX:1.3148,scaleY:1.3148,x:62.05,y:-278.5},0).to({regX:72.2,regY:-266.1,scaleX:1.0163,scaleY:1.0163,x:62.1},14).to({regX:62.1,regY:-278.6,scaleX:1.0001,scaleY:1.0001,y:-278.6},1).wait(77));

	// bgLogo_obj_
	this.bgLogo = new lib.Scene_1_bgLogo();
	this.bgLogo.name = "bgLogo";
	this.bgLogo.setTransform(65.5,-223.8,1,1,0,0,0,65.5,-223.8);
	this.bgLogo.depth = 0;
	this.bgLogo.isAttachedToCamera = 0
	this.bgLogo.isAttachedToMask = 0
	this.bgLogo.layerDepth = 0
	this.bgLogo.layerIndex = 2
	this.bgLogo.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.bgLogo).wait(84).to({regX:217.3,regY:-50.6,scaleX:1.3148,scaleY:1.3148,x:65.35,y:-223.85},0).wait(1).to({regX:207.2,regY:-62.1,scaleX:1.2878,scaleY:1.2878,y:-223.75},0).wait(1).to({regX:197.1,regY:-73.6,scaleX:1.2619,scaleY:1.2619,x:65.45},0).wait(1).to({regX:187,regY:-85.2,scaleX:1.237,scaleY:1.237,x:65.5,y:-223.8},0).wait(1).to({regX:176.8,regY:-96.8,scaleX:1.213,scaleY:1.213,x:65.4},0).wait(1).to({regX:166.7,regY:-108.3,scaleX:1.19,scaleY:1.19,x:65.45},0).wait(1).to({regX:156.6,regY:-119.9,scaleX:1.1678,scaleY:1.1678,x:65.5},0).wait(1).to({regX:146.5,regY:-131.4,scaleX:1.1464,scaleY:1.1464,y:-223.75},0).wait(1).to({regX:136.3,regY:-143,scaleX:1.1259,scaleY:1.1259,x:65.45,y:-223.8},0).wait(1).to({regX:126.2,regY:-154.6,scaleX:1.106,scaleY:1.106,y:-223.85},0).wait(1).to({regX:116.1,regY:-166.1,scaleX:1.0868,scaleY:1.0868},0).wait(1).to({regX:106,regY:-177.7,scaleX:1.0683,scaleY:1.0683,x:65.5,y:-223.9},0).wait(1).to({regX:95.8,regY:-189.2,scaleX:1.0504,scaleY:1.0504,x:65.45,y:-223.8},0).wait(1).to({regX:85.7,regY:-200.8,scaleX:1.033,scaleY:1.033,x:65.5,y:-223.85},0).wait(1).to({regX:75.5,regY:-212.3,scaleX:1.0163,scaleY:1.0163,x:65.45,y:-223.8},0).wait(1).to({regX:65.5,regY:-223.8,scaleX:1.0001,scaleY:1.0001,x:65.5},0).wait(77));

	// playButton_obj_
	this.playButton = new lib.Scene_1_playButton();
	this.playButton.name = "playButton";
	this.playButton.depth = 0;
	this.playButton.isAttachedToCamera = 0
	this.playButton.isAttachedToMask = 0
	this.playButton.layerDepth = 0
	this.playButton.layerIndex = 3
	this.playButton.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.playButton).wait(99).to({scaleX:1.0001,scaleY:1.0001},0).to({scaleX:1,scaleY:1},5).wait(72));

	// pauseButton_obj_
	this.pauseButton = new lib.Scene_1_pauseButton();
	this.pauseButton.name = "pauseButton";
	this.pauseButton.depth = 0;
	this.pauseButton.isAttachedToCamera = 0
	this.pauseButton.isAttachedToMask = 0
	this.pauseButton.layerDepth = 0
	this.pauseButton.layerIndex = 4
	this.pauseButton.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.pauseButton).wait(176));

	// TextMasking_obj_
	this.TextMasking = new lib.Scene_1_TextMasking();
	this.TextMasking.name = "TextMasking";
	this.TextMasking.depth = 0;
	this.TextMasking.isAttachedToCamera = 0
	this.TextMasking.isAttachedToMask = 0
	this.TextMasking.layerDepth = 0
	this.TextMasking.layerIndex = 5
	this.TextMasking.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.TextMasking).wait(99).to({scaleX:1.0001,scaleY:1.0001},0).to({scaleX:1,scaleY:1},5).wait(72));

	// sosialmedia_obj_
	this.sosialmedia = new lib.Scene_1_sosialmedia();
	this.sosialmedia.name = "sosialmedia";
	this.sosialmedia.depth = 0;
	this.sosialmedia.isAttachedToCamera = 0
	this.sosialmedia.isAttachedToMask = 0
	this.sosialmedia.layerDepth = 0
	this.sosialmedia.layerIndex = 6
	this.sosialmedia.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.sosialmedia).wait(176));

	// insta_obj_
	this.insta = new lib.Scene_1_insta();
	this.insta.name = "insta";
	this.insta.depth = 0;
	this.insta.isAttachedToCamera = 0
	this.insta.isAttachedToMask = 0
	this.insta.layerDepth = 0
	this.insta.layerIndex = 7
	this.insta.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.insta).wait(176));

	// facebook_obj_
	this.facebook = new lib.Scene_1_facebook();
	this.facebook.name = "facebook";
	this.facebook.depth = 0;
	this.facebook.isAttachedToCamera = 0
	this.facebook.isAttachedToMask = 0
	this.facebook.layerDepth = 0
	this.facebook.layerIndex = 8
	this.facebook.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.facebook).wait(176));

	// twit_obj_
	this.twit = new lib.Scene_1_twit();
	this.twit.name = "twit";
	this.twit.depth = 0;
	this.twit.isAttachedToCamera = 0
	this.twit.isAttachedToMask = 0
	this.twit.layerDepth = 0
	this.twit.layerIndex = 9
	this.twit.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.twit).wait(176));

	// textSlogan_obj_
	this.textSlogan = new lib.Scene_1_textSlogan();
	this.textSlogan.name = "textSlogan";
	this.textSlogan.depth = 0;
	this.textSlogan.isAttachedToCamera = 0
	this.textSlogan.isAttachedToMask = 0
	this.textSlogan.layerDepth = 0
	this.textSlogan.layerIndex = 10
	this.textSlogan.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.textSlogan).wait(104).to({x:1048.05,y:223.4},0).wait(29).to({x:0,y:0},1).wait(42));

	// video_obj_
	this.video = new lib.Scene_1_video();
	this.video.name = "video";
	this.video.depth = 0;
	this.video.isAttachedToCamera = 0
	this.video.isAttachedToMask = 0
	this.video.layerDepth = 0
	this.video.layerIndex = 11
	this.video.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.video).wait(99).to({scaleX:1.0001,scaleY:1.0001},0).to({scaleX:1,scaleY:1},5).wait(72));

	// bgVideo_obj_
	this.bgVideo = new lib.Scene_1_bgVideo();
	this.bgVideo.name = "bgVideo";
	this.bgVideo.depth = 0;
	this.bgVideo.isAttachedToCamera = 0
	this.bgVideo.isAttachedToMask = 0
	this.bgVideo.layerDepth = 0
	this.bgVideo.layerIndex = 12
	this.bgVideo.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.bgVideo).wait(99).to({scaleX:1.0001,scaleY:1.0001},0).to({scaleX:1,scaleY:1},5).wait(72));

	// MenuButton_obj_
	this.MenuButton = new lib.Scene_1_MenuButton();
	this.MenuButton.name = "MenuButton";
	this.MenuButton.depth = 0;
	this.MenuButton.isAttachedToCamera = 0
	this.MenuButton.isAttachedToMask = 0
	this.MenuButton.layerDepth = 0
	this.MenuButton.layerIndex = 13
	this.MenuButton.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.MenuButton).wait(99).to({scaleX:1.0001,scaleY:1.0001},0).to({scaleX:1,scaleY:1},5).wait(72));

	// BestSellerIcon_obj_
	this.BestSellerIcon = new lib.Scene_1_BestSellerIcon();
	this.BestSellerIcon.name = "BestSellerIcon";
	this.BestSellerIcon.depth = 0;
	this.BestSellerIcon.isAttachedToCamera = 0
	this.BestSellerIcon.isAttachedToMask = 0
	this.BestSellerIcon.layerDepth = 0
	this.BestSellerIcon.layerIndex = 14
	this.BestSellerIcon.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.BestSellerIcon).wait(176));

	// Menu_obj_
	this.Menu = new lib.Scene_1_Menu();
	this.Menu.name = "Menu";
	this.Menu.depth = 0;
	this.Menu.isAttachedToCamera = 0
	this.Menu.isAttachedToMask = 0
	this.Menu.layerDepth = 0
	this.Menu.layerIndex = 15
	this.Menu.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Menu).wait(99).to({scaleX:1.0001,scaleY:1.0001},0).to({scaleX:1,scaleY:1},5).wait(72));

	// Bijikopi_obj_
	this.Bijikopi = new lib.Scene_1_Bijikopi();
	this.Bijikopi.name = "Bijikopi";
	this.Bijikopi.depth = 0;
	this.Bijikopi.isAttachedToCamera = 0
	this.Bijikopi.isAttachedToMask = 0
	this.Bijikopi.layerDepth = 0
	this.Bijikopi.layerIndex = 16
	this.Bijikopi.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Bijikopi).wait(99).to({scaleX:1.0001,scaleY:1.0001},0).to({scaleX:1,scaleY:1},5).wait(72));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(588.5,132.4,959.8,878.6);
// library properties:
lib.properties = {
	id: 'D17464BF3534234BBF13683ABCFEF5D9',
	width: 1400,
	height: 1000,
	fps: 30,
	color: "#DDD5CD",
	opacity: 1.00,
	manifest: [
		{src:"images/PromosBanner.png?1654596366401", id:"PromosBanner"},
		{src:"images/UpcomingEvents.png?1654596366401", id:"UpcomingEvents"},
		{src:"images/AromaCafe_atlas_1.png?1654596366311", id:"AromaCafe_atlas_1"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1654596366401", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1654596366401", id:"sdk/anwidget.js"},
		{src:"components/video/src/video.js?1654596366401", id:"an.Video"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D17464BF3534234BBF13683ABCFEF5D9'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;