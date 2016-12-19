function AS_FlexContainer_bed7bfb33cf449f8b23aad22d9a77f9f(eventobject) {
    var frmId = kony.application.getCurrentForm();
    frmId["flxHamburger"].animate(kony.ui.createAnimation({
        100: {
            "left": "-100%",
            "stepConfig": {
                "timingFunction": kony.anim.EASIN_IN_OUT
            }
        }
    }), {
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.20,
        "delay": 0.20
    }, {
        "animationEnd": function() {
            //frmId.flxCloseMenu.isVisible = false;
        }
    });
    frmId.flxCloseMenu.isVisible = false;
}