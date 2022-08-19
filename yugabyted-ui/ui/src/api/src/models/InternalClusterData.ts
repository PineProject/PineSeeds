// tslint:disable
/**
 * Yugabyte Cloud
 * YugabyteDB as a Service
 *
 * The version of the OpenAPI document: v1
 * Contact: support@yugabyte.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// eslint-disable-next-line no-duplicate-imports
import type { ClusterDataInfo } from './ClusterDataInfo';
// eslint-disable-next-line no-duplicate-imports
import type { ClusterSpec } from './ClusterSpec';
// eslint-disable-next-line no-duplicate-imports
import type { InternalClusterDataInternalInfo } from './InternalClusterDataInternalInfo';


/**
 * Cluster data with internal cluster details
 * @export
 * @interface InternalClusterData
 */
export interface InternalClusterData  {
  /**
   * 
   * @type {ClusterSpec}
   * @memberof InternalClusterData
   */
  spec: ClusterSpec;
  /**
   * 
   * @type {ClusterDataInfo}
   * @memberof InternalClusterData
   */
  info: ClusterDataInfo;
  /**
   * 
   * @type {InternalClusterDataInternalInfo}
   * @memberof InternalClusterData
   */
  internal_info?: InternalClusterDataInternalInfo;
}


