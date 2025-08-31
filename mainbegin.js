if (window.DeviceOrientationEvent) {
    window.addEventListener('orientationchange', function() { location.reload(); }, false);
}
