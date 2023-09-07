sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'Riskmanagement2002/Risks2002/test/integration/FirstJourney',
		'Riskmanagement2002/Risks2002/test/integration/pages/RisksList',
		'Riskmanagement2002/Risks2002/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('Riskmanagement2002/Risks2002') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);