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
import type { PagingMetadata } from './PagingMetadata';
// eslint-disable-next-line no-duplicate-imports
import type { UserData } from './UserData';


/**
 * 
 * @export
 * @interface UserListResponse
 */
export interface UserListResponse  {
  /**
   * 
   * @type {UserData[]}
   * @memberof UserListResponse
   */
  data: UserData[];
  /**
   * 
   * @type {PagingMetadata}
   * @memberof UserListResponse
   */
  _metadata: PagingMetadata;
}


