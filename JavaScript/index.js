function createCircle(radius) {
    return {
        radius,
        draw: function(){
            console.log("draw with radius:" + radius )
        }
    }
}



createCircle(2);