function AS_FlexContainer_df90b2ed43214a50b5d39b52014f1458(eventobject) {
    var frmId = kony.application.getCurrentForm();
    frmId["flxHamburger"].animate(kony.ui.createAnimation({
        100: {
            "left": "-70%",
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
            frmId.flxCloseMenu.isVisible = false;
        }
    });
}