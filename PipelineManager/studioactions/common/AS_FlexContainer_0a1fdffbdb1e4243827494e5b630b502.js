function AS_FlexContainer_0a1fdffbdb1e4243827494e5b630b502(eventobject) {
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
    frmAccountList.show();
}