using { BUPA } from './external/BUPA.cds';

using { Riskmanagement2002 as my } from '../db/schema';

using Riskmanagement2002 from '../db/schema';

@path : '/service/Riskmanagement2002'
service Riskmanagement2002Service
{
    annotate A_BusinessPartner with @restrict :
    [
        { grant : [ 'READ' ], to : [ 'RiskViewer' ] },
        { grant : [ '*' ], to : [ 'RiskManager' ] }
    ];

    annotate Mitigations with @restrict :
    [
        { grant : [ 'READ' ], to : [ 'RiskViewer' ] },
        { grant : [ '*' ], to : [ 'RiskManager' ] }
    ];

    annotate Risks with @restrict :
    [
        { grant : [ 'READ' ], to : [ 'RiskViewer' ] },
        { grant : [ '*' ], to : [ 'RiskManager' ] }
    ];

    @odata.draft.enabled
    entity Risks as
        projection on my.Risks;

    @odata.draft.enabled
    entity Mitigations as
        projection on my.Mitigations;

    entity A_BusinessPartner as projection on BUPA.A_BusinessPartner
    {
        BusinessPartner,
        BusinessPartnerFullName,
        BusinessPartnerIsBlocked
    };
}

annotate Riskmanagement2002Service with @requires :
[
    'authenticated-user',
    'RiskViewer',
    'RiskManager'
];
