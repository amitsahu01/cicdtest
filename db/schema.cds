namespace Riskmanagement2002;

using { BUPA } from '../srv/external/BUPA.cds';

using
{
    Country,
    Currency,
    Language,
    User,
    cuid,
    extensible,
    managed,
    temporal
}
from '@sap/cds/common';

entity Risks : managed
{
    key ID : UUID
        @Core.Computed;
    title : String(100);
    prio : String(5);
    description : String(100);
    impact : Integer;
    criticality : Integer;
    supplier : Association to one BUPA.A_BusinessPartner;
    mitigations : Association to one Mitigations;
}

entity Mitigations : managed
{
    key ID : UUID
        @Core.Computed;
    description : String(100);
    owner : String(100);
    timeline : String(100);
    risks : Association to many Risks on risks.mitigations = $self;
}
