'use strict';

function VideoPlayer (options) {
  this._self       = options.initBlock;
  this.putAtBlock  = options.putAtBlock;
  this.siblingsBlock = options.putAtBlock.siblings('.detail-product-slider');
  this.initStatus  = 0;
  this.play        = false;
  this.videoSource;
  this.videoBtn;
  this.video;

  this.extensible(options.callback);
};


// Инициализация плеера

VideoPlayer.prototype.init = function () {
  if(this.getStatus() == 1 && !this.play) {
    this.prepareVideo();
    this.video[0].play();
  } else if (this.getStatus() == 1 && this.play) {
    this.toggleControl();
  } else if (this.getStatus() == 0 && !this.play){
    throw new Error('Video is not defined :(');
  }
};


// Получение статуса плеера о работоспобосности

VideoPlayer.prototype.getStatus = function () {
  this.initStatus = this._self.find('video source').length >= 1 ? 1 : 0;
  return this.initStatus;
};


// Подготовка видео после инициализации

VideoPlayer.prototype.prepareVideo = function () {
  this.videoSource = this._self.find('video source');
  this.videoBtn    = this._self.find('i.videoPlay');
  this.video    = this.putAtBlock.find('video').eq(0);

  var videoData = {};

  $.each(this.videoSource, function(i, el) {
    if(!videoData["source"]+i) {
      videoData["source-"+i] = {
        'src': $(el).attr('src'),
        'type': $(el).attr('type')
      };
    };
  });

  var param;
  for (param in videoData) {
    var source = $('<source/>');
    source.attr('src',videoData[param].src);
    source.attr('type',videoData[param].type);
    this.video.append(source);
  };



  this.putAtBlock.removeClass('disabled');
  this.videoBtn.addClass('pause');
  this.siblingsBlock.addClass('hidden');
  this.play = true;
  this.initStatus = 1;
};


// Переключение плеера вкл/выкл

VideoPlayer.prototype.toggleControl = function () {
  this.putAtBlock.toggleClass('disabled');
  this.videoBtn.toggleClass('pause');
  this.siblingsBlock.toggleClass('hidden');
  !this.videoBtn.hasClass('pause') ? this.video[0].pause() : this.video[0].play();
};


// Callback фун-я

VideoPlayer.prototype.extensible = function (el) {
  if(this.getStatus() == 1 && typeof el == 'function') {
    el();
  }
};
