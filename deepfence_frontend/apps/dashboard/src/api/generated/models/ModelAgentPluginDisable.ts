/* tslint:disable */
/* eslint-disable */
/**
 * Deepfence ThreatMapper
 * Deepfence Runtime API provides programmatic control over Deepfence microservice securing your container, kubernetes and cloud deployments. The API abstracts away underlying infrastructure details like cloud provider,  container distros, container orchestrator and type of deployment. This is one uniform API to manage and control security alerts, policies and response to alerts for microservices running anywhere i.e. managed pure greenfield container deployments or a mix of containers, VMs and serverless paradigms like AWS Fargate.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: community@deepfence.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ModelAgentPluginDisable
 */
export interface ModelAgentPluginDisable {
    /**
     * 
     * @type {string}
     * @memberof ModelAgentPluginDisable
     */
    node_id: string;
    /**
     * 
     * @type {string}
     * @memberof ModelAgentPluginDisable
     */
    plugin_name: string;
}

/**
 * Check if a given object implements the ModelAgentPluginDisable interface.
 */
export function instanceOfModelAgentPluginDisable(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "node_id" in value;
    isInstance = isInstance && "plugin_name" in value;

    return isInstance;
}

export function ModelAgentPluginDisableFromJSON(json: any): ModelAgentPluginDisable {
    return ModelAgentPluginDisableFromJSONTyped(json, false);
}

export function ModelAgentPluginDisableFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelAgentPluginDisable {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'node_id': json['node_id'],
        'plugin_name': json['plugin_name'],
    };
}

export function ModelAgentPluginDisableToJSON(value?: ModelAgentPluginDisable | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'node_id': value.node_id,
        'plugin_name': value.plugin_name,
    };
}

