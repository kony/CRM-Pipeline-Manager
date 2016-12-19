function AS_FlexContainer_86ed934558e4412dad9e2e3b99f46d94(eventobject) {
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
    frmOpportunityListKA.show();
}