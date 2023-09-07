sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'Riskmanagement2002.Risks2002',
            componentId: 'RisksList',
            entitySet: 'Risks'
        },
        CustomPageDefinitions
    );
});