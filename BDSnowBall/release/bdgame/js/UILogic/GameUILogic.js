var GameUILogic=function(e){function t(){t.super(this)}return Laya.class(t,"GameUILogic",e),_proto=t.prototype,_proto.scoreLable=null,_proto.onInit=function(){this.width=Laya.stage.width,this.height=Laya.stage.height,this.guidBox.on(Laya.Event.CLICK,this,this.guidBoxClickEvent),this.curLevel=0,wxGame.getInstance().showClubBtn(!1)},_proto.onDestroy=function(){},_proto.guidBoxClickEvent=function(){MusicManager.getInstance().playSound("res/music/click.wav"),this.guidBox.visible=!1,SceneManager.getInstance().currentScene.startGame()},_proto.setScore=function(e,t){this.scoreLable.text=e,t&&(this.scoreLable.scale(1.2,1.2),Laya.Tween.to(this.scoreLable,{scaleX:1,scaleY:1},500,Laya.Ease.elasticOut))},_proto._shareClickEvent=function(){wxGame.getInstance().shareGame()},_proto.updateBlockData=function(){var e=this.curLevel,t=LevelData[e];this.blockList.array=[],this.blockList.repeatX=t.repeatX,this.blockList.repeatY=t.repeatY;for(var i=[],a=0;a<t.num;a++){var n=[];n.width=t.width,n.height=t.height,n.color=this.getRandomColor(),i.push(n)}this.blockList.array=i,Laya.timer.frameOnce(1,this,function(){}),this.blockList.repeatX=t.repeatX,this.blockList.repeatY=t.repeatY,this.blockList.width=660,this.blockList.height=880,Gamelog("------this.blockList width="+this.blockList.width)},_proto.updateBlockItem=function(e,t){var i=e._dataSource,a=i.width,n=i.height;e.width=a,e.height=n;var o=e.getChildByName("bg");o.width=a,o.height=n,o.graphics.drawRect(0,0,a,n,i.color);var c=e.getChildByName("icon");c.skin="Game/1.png",c.width=a>=220?220:a,c.height=n>=220?220:n,e.offAll(),e.on(Laya.Event.CLICK,this,this.blockClickEvent,[e,t])},_proto.blockClickEvent=function(e,t){Gamelog("------blockClickEvent index="+t),this.curLevel++,this.updateBlockData()},_proto.addLifeClick=function(){if(this.btn_addLife.visible=!1,Browser.onMiniGame){if(null==wxGame.getInstance().videoAd||!window.wxLoadVideoAd)return;SceneManager.getInstance().currentScene.pauseGame(),wxGame.getInstance().showVideoAD(SceneManager.getInstance().currentScene,SceneManager.getInstance().currentScene.addLife)}else SceneManager.getInstance().currentScene.pauseGame(),wxGame.getInstance().showVideoAD(SceneManager.getInstance().currentScene,SceneManager.getInstance().currentScene.addLife)},_proto.updateAddLifeState=function(){if(Browser.onMiniGame){if(null==wxGame.getInstance().videoAd||!window.wxLoadVideoAd)return;this.btn_addLife.visible=!0}else this.btn_addLife.visible=!0},t}(GameUI);