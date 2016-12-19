function AS_FlexContainer_eee6f3696d0347438568f5e207574990(eventobject) {
    sliderMenu.call(this);
    if ((frmLogin.flxMainLogin.flxMain.rememberME.selectedKeys !== null)) {
        frmLoginVA.show();
    } else {
        frmLoginVA.tbxCRMUserIDKA.text = "";
        frmLoginVA.tbxCRMPasswordKA.text = "";
        frmLoginVA.show();
    }
}