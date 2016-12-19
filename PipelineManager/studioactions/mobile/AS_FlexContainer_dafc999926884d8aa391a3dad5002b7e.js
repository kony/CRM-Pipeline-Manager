function AS_FlexContainer_dafc999926884d8aa391a3dad5002b7e(eventobject) {
    var frmId = kony.application.getCurrentForm();
    frmId.flxCloseMenu.isVisible = false;
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
}