$('#image').on('load', function() {
  var img = $(this);
  var imgWidth = img.width();
  var imgHeight = img.height();
  console.log(imgWidth, imgHeight);


  var cropWidth = 100;
  var cropHeight = 100;


  var cropper = img.cropper({
    aspectRatio: 1,
    dragMode: 'move',
    guides: false,
    center: false,
    autoCrop: true,
    autoCropArea: 100 / Math.min(imgWidth, imgHeight),
    rotatable: false,
    cropBoxResizable: false,
    cropBoxMovable: false,
    toggleDragModeOnDblclick: false,
    checkOrientation: false,
    responsive: false,
    ready: function() {
      var self = $(this);
      self.cropper('zoomTo', 1);
    },
    crop: function(e) {

    }
  });

});