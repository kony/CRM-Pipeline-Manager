function AS_Segment_5984496c28a74adfb52efe5311ae01a2(eventobject, sectionNumber, rowNumber) {
    selectedItemsVal = frmOpportunityList.segOppurtunitiesListKA.selectedItems[0];
    frmOpportunityDetail.lblAccountNameKA.text = selectedItemsVal["lblHeadingKA"].text;
    frmOpportunityDetail.lblOppurtunityDescKA.text = selectedItemsVal["lblMainCompetitorsKA"].text;
    frmOpportunityDetail.lblProbabilityValueKA.text = selectedItemsVal["lblProbabilityValueKA"].text;
    frmOpportunityDetail.lblAmountValueKA.text = selectedItemsVal["lblSizeValueKA"].text;
    frmOpportunityDetail.lblStageNameKA.text = selectedItemsVal["lblStageNameKA"].text;
    frmOpportunityDetail.lblFirstDiscussiondateKA.text = selectedItemsVal["lblFirstDiscussiondateKA"].text;
    frmOpportunityDetail.lblSourceValueKA.text = selectedItemsVal["lblSourceValueKA"].text;
    frmOpportunityDetail.lblTypeValueKA.text = selectedItemsVal["lblTypeValueKA"].text;
    frmOpportunityDetail.lblOwnerIDValueKA.text = selectedItemsVal["lblOwnerIDValueKA"].text;
    frmOpportunityDetail.show();
}