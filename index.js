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
      jRange.setValue('1.00');

      cropper.on('zoom', function(e) {
        jRange.setValue(String(e.ratio));
      });

    },
    zoom: function(e) {
      if (e.ratio > 1.5 || e.ratio < 0.5) {
        e.preventDefault();
      }
    },
    crop: function(e) {

    }
  });

  var jRange = $('.single-slider').jRange({
    from: 0.5,
    to: 1.5,
    step: 0.1,
    width: 300,
    theme: 'theme-blue',
    showLabels: false,
    snap: true,
    onstatechange: function(res) {
      cropper.cropper('zoomTo', res);
    }
  });



});