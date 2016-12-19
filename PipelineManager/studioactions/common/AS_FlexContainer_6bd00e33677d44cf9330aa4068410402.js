function AS_FlexContainer_6bd00e33677d44cf9330aa4068410402(eventobject) {
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
    frmDashboard.show();
}