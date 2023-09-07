sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'Riskmanagement2002.Miti2002',
            componentId: 'MitigationsList',
            entitySet: 'Mitigations'
        },
        CustomPageDefinitions
    );
});