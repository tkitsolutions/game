export interface UserResource {
    userId: string;
    resourcesId: {
        upgradeRequirement: [
            { name: string; value: number },
            { name: string; value: number },
            { name: string; value: number },
        ];
        name: string;
        description: string;
        statusDefault: true;
        id: string;
    };
    level: number;
    duration: number;
    currentEnergy: number;
    nextDuration: number;
    status: true;
    id: string;
}

export interface UserResourceDetail {
    energyDifference: string;
    energyNeeded: string;
    crystal: number;
    metal: number;
    fuel: number;
    production: number;
    level: number;
    productionTime: string;
    productionInSec: string;
    description: string;
    name: string;
    id: string;
}
