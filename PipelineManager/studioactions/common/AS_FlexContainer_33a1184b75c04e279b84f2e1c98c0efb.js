function AS_FlexContainer_33a1184b75c04e279b84f2e1c98c0efb(eventobject) {
    var frmId = kony.application.getCurrentForm();
    frmId["flxParent"].animate(kony.ui.createAnimation({
        100: {
            "left": "0%",
            "stepConfig": {
                "timingFunction": kony.anim.EASIN_IN_OUT
            }
        }
    }), {
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.20,
        "delay": 0.20
    }, {
        "animationEnd": function() {}
    });
    frmOpportunityList.show();
}