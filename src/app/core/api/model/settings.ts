/**
 * Management of trading bots
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { SettingsLayersInner } from './settingsLayersInner';
import { Params } from './params';


export interface Settings { 
    params: Params;
    layers: Array<SettingsLayersInner>;
}

