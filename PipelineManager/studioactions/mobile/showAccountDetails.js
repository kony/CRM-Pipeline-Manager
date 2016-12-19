function showAccountDetails(eventobject, sectionNumber, rowNumber) {
    return AS_Segment_309cb9d0e7a24a9ebfab66dca4c7d823(eventobject, sectionNumber, rowNumber);
}

function AS_Segment_309cb9d0e7a24a9ebfab66dca4c7d823(eventobject, sectionNumber, rowNumber) {
    frmAccountDetails.lblAccountNameKA["text"] = frmAccountList.segAccountListKA.selectedItems[0]["lblAccountNameKA"].text;
    frmAccountDetails.lblStateKA["text"] = frmAccountList.segAccountListKA.selectedItems[0]["lblStateKA"].text;
    frmAccountDetails.lblAccountStatusKA["text"] = frmAccountList.segAccountListKA.selectedItems[0]["lblAccountStatusKA"].text;
    frmAccountDetails.lblIndustryValKA["text"] = frmAccountList.segAccountListKA.selectedItems[0]["lblIndustryValKA"].text;
    frmAccountDetails.lblPrimeAddrsKA["text"] = frmAccountList.segAccountListKA.selectedItems[0]["lblPrimeAddrsKA"].text;
    frmAccountDetails.lblWebsiteNameKA["text"] = frmAccountList.segAccountListKA.selectedItems[0]["lblWebsiteNameKA"].text;
    frmAccountDetails.lblOwnerNameKA["text"] = frmAccountList.segAccountListKA.selectedItems[0]["lblOwnerNameKA"].text;
    frmAccountDetails.lblPhoneNumKA["text"] = frmAccountList.segAccountListKA.selectedItems[0]["lblPhoneNumKA"].text;
    frmAccountDetails.lblFaxNumKA["text"] = frmAccountList.segAccountListKA.selectedItems[0]["lblFaxNumKA"].text;
    frmAccountDetails.show();
}