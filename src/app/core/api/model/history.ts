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
import { ColumnsName } from './columnsName';
import { Metadata } from './metadata';
import { HistoryDataInnerInner } from './historyDataInnerInner';


export interface History { 
    metadata: Metadata;
    columns?: Array<ColumnsName>;
    data?: Array<Array<HistoryDataInnerInner>>;
}
