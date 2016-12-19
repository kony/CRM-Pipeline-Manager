function AS_FlexContainer_4b72d0aa8e954dcc8b1f542bd213cc38(eventobject) {
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
    frmLoginVA.show();
}