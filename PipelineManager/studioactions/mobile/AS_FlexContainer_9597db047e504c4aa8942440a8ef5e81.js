function AS_FlexContainer_9597db047e504c4aa8942440a8ef5e81(eventobject) {
    sliderMenu.call(this);
    if ((frmLogin.flxMainLogin.flxMain.rememberME.selectedKeys !== null)) {
        frmLoginVA.show();
    } else {
        frmLoginVA.tbxCRMUserIDKA.text = "";
        frmLoginVA.tbxCRMPasswordKA.text = "";
        frmLoginVA.show();
    }
}