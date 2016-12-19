function AS_FlexContainer_55ea4d07ceef4cf58c82c0c9ed2e594b(eventobject) {
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
    frmLoginVA.show();
}