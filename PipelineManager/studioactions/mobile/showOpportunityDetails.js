function showOpportunityDetails(eventobject, sectionNumber, rowNumber) {
    return AS_Segment_0e774ec8151146d2b15456a63157d068(eventobject, sectionNumber, rowNumber);
}

function AS_Segment_0e774ec8151146d2b15456a63157d068(eventobject, sectionNumber, rowNumber) {
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