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
import type { ClusterFaultTolerance } from './ClusterFaultTolerance';
// eslint-disable-next-line no-duplicate-imports
import type { ClusterNodeInfo } from './ClusterNodeInfo';


/**
 * Cluster level information
 * @export
 * @interface ClusterInfo
 */
export interface ClusterInfo  {
  /**
   * How many nodes are in the cluster
   * @type {number}
   * @memberof ClusterInfo
   */
  num_nodes: number;
  /**
   * 
   * @type {ClusterFaultTolerance}
   * @memberof ClusterInfo
   */
  fault_tolerance: ClusterFaultTolerance;
  /**
   * 
   * @type {ClusterNodeInfo}
   * @memberof ClusterInfo
   */
  node_info: ClusterNodeInfo;
  /**
   * Describes if the cluster is a production cluster
   * @type {boolean}
   * @memberof ClusterInfo
   */
  is_production: boolean;
  /**
   * cluster data version
   * @type {number}
   * @memberof ClusterInfo
   */
  version?: number;
}


