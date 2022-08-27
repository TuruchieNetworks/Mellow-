export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "userPoolGroups": {
            "RegisteredUSersGroupRole": "string"
        },
        "MelodyDreamsUsers": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string",
            "CreatedSNSRole": "string"
        }
    },
    "storage": {
        "MelodyDreamsUserStore": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "api": {
        "melodydreamsuserpool": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    }
}